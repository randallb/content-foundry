import { useState } from "react";

type Props = {
  onFileSelect: (files: File[]) => void;
};

export function Dropzone({ onFileSelect }: Props) {
  const [isDragging, setIsDragging] = useState(false);
  const [fileName, setFileName] = useState<string | null>();

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    setIsDragging(false);
    const files = Array.from(event.dataTransfer.files).filter((file) =>
      file.type.startsWith("audio/") || file.type.startsWith("video/")
    );
    if (files && onFileSelect) {
      onFileSelect(files);
      setFileName(files[0]?.name);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
      ? Array.from(event.target.files).filter((file) =>
        file.type.startsWith("audio/") || file.type.startsWith("video/")
      )
      : [];
    if (files && onFileSelect) {
      onFileSelect(files);
      setFileName(files[0]?.name);
    }
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={`dropzone ${isDragging ? "dragged" : ""}`}
    >
      <input
        type="file"
        accept="audio/*,video/*"
        onChange={handleFileChange}
        hidden
        id="fileInput"
      />
      {
        <label htmlFor="fileInput" className="text">
          <div className="filename">{fileName ?? "Select a file"}</div>
          {isDragging
            ? "Drop the files here..."
            : "Drag & drop audio/video files here, or click to select"}
        </label>
      }
    </div>
  );
}

export function Example() {
  const [file, setFile] = useState<File>();
  return (
    <>
      <Dropzone
        onFileSelect={(files: File[]): void => {
          setFile(files[0]);
        }}
      />
      <div>File: {file ? file.name : "No file"}</div>
    </>
  );
}
