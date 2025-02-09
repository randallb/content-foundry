import { useState } from "react";

type Props = {
  onFileSelect: (files: File[]) => void;
};

export function Dropzone({ onFileSelect }: Props) {
  const [isDragging, setIsDragging] = useState(false);

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
    if (onFileSelect) {
      onFileSelect(files);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
      ? Array.from(event.target.files).filter((file) =>
        file.type.startsWith("audio/") || file.type.startsWith("video/")
      )
      : [];
    if (onFileSelect) {
      onFileSelect(files);
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
          {isDragging
            ? "Drop the files here..."
            : "Drag & drop audio/video files here, or click to select"}
        </label>
      }
    </div>
  );
}
