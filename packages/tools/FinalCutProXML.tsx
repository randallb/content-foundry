import { useState } from "react";
import { AssemblyAI } from "assemblyai";
import { Dropzone } from "packages/bfDs/components/BfDsDropzone.tsx";

interface Settings {
  fps: number;
  maxCharacters: number;
  duration: number;
  name: string;
}

interface TranscriptWord {
  text: string;
  start: number;
  end: number;
}

const initialSettings: Settings = {
  fps: 24,
  maxCharacters: 22,
  duration: 0,
  name: "---",
};

export default function FinalCutProXML() {
  const [fileUrlForAssemblyAI, setFileUrlForAssemblyAI] = useState<File | null>(
    null,
  );
  const [settings, setSettings] = useState<Settings>(initialSettings);
  const [running, setRunning] = useState<boolean>(false);

  const handleSettingsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSettings({
      ...settings,
      [e.target.name]: e.target.type === "number"
        ? Number(e.target.value)
        : e.target.value,
    });
  };

  const handleFileChange = (files: File[]) => {
    const file = files[0];
    if (!file) return;
    setFileUrlForAssemblyAI(file);

    const url = URL.createObjectURL(file);
    const media = file.type.startsWith("audio")
      ? new Audio(url)
      : document.createElement("video");

    media.src = url;
    media.onloadedmetadata = () => {
      setSettings({ ...settings, duration: media.duration, name: file.name });
      URL.revokeObjectURL(url);
    };
  };

  function getTranscript() {
    if (!fileUrlForAssemblyAI) {
      throw new Error("No file");
    }
    setRunning(true);
    const client = new AssemblyAI({
      apiKey: Deno.env.get("ASSEMBLY_AI_KEY") as string,
    });
    if (!client) {
      throw new Error("ASSEMBLY_AI_KEY is not set");
    }

    const data = {
      audio: fileUrlForAssemblyAI,
    };

    const run = async () => {
      const transcript = await client.transcripts.transcribe(data);
      if (!transcript.words) {
        throw new Error("No transcript words");
      }
      const xml = generateFCPXML(transcript.words, settings);
      downloadFCPXML(xml, settings.name);
      setRunning(false);
    };

    run().catch((error) => {
      console.error(error);
      setRunning(false);
    });
  }

  return (
    <div className="tools-container">
      <h1>Convert Video/Audio to Final Cut Pro XML titles</h1>
      <Dropzone onFileSelect={handleFileChange} />
      <div className="tools-grid">
        <div className="tools-label">Max characters</div>
        <div>
          <input
            type="number"
            name="maxCharacters"
            value={settings.maxCharacters}
            onChange={handleSettingsChange}
          />
        </div>
        <div className="tools-label">Frames/second</div>
        <div>
          <input
            type="number"
            name="fps"
            value={settings.fps}
            onChange={handleSettingsChange}
          />
        </div>
      </div>
      <div className="tools-grid">
        <div className="tools-label">File name</div>
        <div>{settings.name}</div>
        <div className="tools-label">Duration</div>
        <div>
          {settings.duration > 0
            ? `${settings.duration.toFixed(2)} seconds`
            : "---"}
        </div>
      </div>
      <button
        onClick={getTranscript}
        disabled={!fileUrlForAssemblyAI || running}
      >
        {running ? "Processing..." : "Download XML"}
      </button>
    </div>
  );
}

function generateFCPXML(
  transcript: TranscriptWord[],
  settings: Settings,
): string {
  const { duration: totalDuration, fps, maxCharacters, name } = settings;

  function secondsToFrames(seconds: number): number {
    return Math.round(seconds * 100 * fps);
  }

  function formatFrameDuration(startMs: number, endMs: number): string {
    return `${Math.round(((endMs - startMs) / 1000) * fps)}00/${fps * 100}s`;
  }

  function formatOffset(startMs: number): string {
    return `${Math.round((startMs / 1000) * fps)}00/${fps * 100}s`;
  }

  const totalFrames = secondsToFrames(totalDuration);
  const projectName = `${name.split(".")[0]} Captions`;

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE fcpxml>
<fcpxml version="1.13">
  <resources>
    <format id="r1" name="FFVideoFormat1080p${fps}" frameDuration="100/${
    fps * 100
  }s" width="1920" height="1080" colorSpace="1-1-1 (Rec. 709)"/>
    <effect id="r2" name="Basic Title" uid=".../Titles.localized/Bumper:Opener.localized/Basic Title.localized/Basic Title.moti"/>
  </resources>
  <library>
    <event name="${projectName}" uid="FCDCFDC1F8A2E8600E3DD41810E38B2F">
      <project name="${projectName}" uid="29AF6423BD69AB816F9A662D01172318" modDate="2025-02-07 01:05:12 +0000">
        <sequence format="r1" duration="${totalFrames}/${
    fps * 100
  }s" tcStart="0/${
    fps * 100
  }s" tcFormat="NDF" audioLayout="stereo" audioRate="48k">
          <spine>
            <gap name="Gap" offset="0s" start="0s" duration="${totalFrames}/${
    fps * 100
  }s">`;

  let currentText = "";
  let startTime = transcript[0].start;

  for (let i = 0; i < transcript.length; i++) {
    const word = transcript[i];
    currentText += word.text + " ";

    const shouldBreak = i === transcript.length - 1 ||
      currentText.length > maxCharacters ||
      currentText.length + transcript[i + 1].text.length > maxCharacters ||
      transcript[i + 1].start - word.end > 500;

    if (shouldBreak) {
      const cleanText = currentText.trim().replace(/\s+/g, " ");
      let end = word.end;
      if (i === transcript.length - 1) {
        console.log("LAST", startTime, settings.duration);
      } else {
        end = transcript[i + 1].start;
      }
      const duration = formatFrameDuration(startTime, end);
      const offset = formatOffset(i === 0 ? 0 : startTime);

      xml += `
              <title ref="r2" lane="1" name="${cleanText} - Basic Title" offset="${offset}" start="${offset}" duration="${duration}">
                <param name="Flatten" key="9999/999166631/999166633/2/351" value="1"/>
                <param name="Alignment" key="9999/999166631/999166633/2/354/999169573/401" value="1 (Center)"/>
                <param name="Color" key="9999/999166631/999166633/5/999166635/21/23" value="0.226843 0.43643 0.785161"/>
                <param name="Wrap Mode" key="9999/999166631/999166633/5/999166635/21/25/5" value="1 (Repeat)"/>
                <param name="Distance" key="9999/999166631/999166633/5/999166635/21/27" value="10"/>
                <param name="Blur" key="9999/999166631/999166633/5/999166635/21/75" value="2.7 2.7"/>
                <param name="Size" key="9999/999166631/999166633/5/999166635/3" value="54"/>
                <param name="Font" key="9999/999166631/999166633/5/999166635/83" value="241 0"/>
                <text>
                  <text-style ref="ts${i + 1}">${cleanText}</text-style>
                </text>
                <text-style-def id="ts${i + 1}">
                  <text-style font="Wix Madefor Display" fontSize="54" fontFace="Regular" fontColor="1 1 1 1" shadowColor="0.17668 0.345782 0.737051 0.75" shadowOffset="10 315" shadowBlurRadius="5.4" alignment="center"/>
                </text-style-def>
                <adjust-transform position="0 -24.6525"/>
              </title>`;

      currentText = "";
      if (i < transcript.length - 1) {
        startTime = transcript[i + 1].start;
      }
    }
  }

  xml += `
            </gap>
          </spine>
        </sequence>
      </project>
    </event>
  </library>
</fcpxml>`;

  return xml;
}

function downloadFCPXML(xml: string, filename: string = "project"): void {
  const formattedFilename = `${filename.split(".")[0]}.fcpxml`;
  const blob = new Blob([xml], { type: "application/xml" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = formattedFilename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
