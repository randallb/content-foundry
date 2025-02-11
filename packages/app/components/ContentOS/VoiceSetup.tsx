import { VoiceSetupStep1 } from "packages/app/components/ContentOS/VoiceSetupStep1.tsx";
import { VoiceSetupStep2 } from "packages/app/components/ContentOS/VoiceSetupStep2.tsx";
import { useState } from "react";
import { CfLogo } from "packages/bfDs/static/CfLogo.tsx";

export function VoiceSetup() {
  const [submat, setSubmat] = useState(false);
  return (
    <div className="page">
      <div className="header">
        <CfLogo boltColor="black" foundryColor="black" />
      </div>
      <div className="voice-container">
        <div className="voice-section flex-column">
          {submat
            ? <VoiceSetupStep2 />
            : <VoiceSetupStep1 handleSubmit={setSubmat} />}
        </div>
      </div>
    </div>
  );
}
