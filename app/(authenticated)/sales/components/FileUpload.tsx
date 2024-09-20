'use client';
import { ChangeEvent, FormEvent, useState } from 'react';
import UploadButton from '@auth/components/ui/UploadButton';
import UploadArea from '@auth/components/ui/UploadArea';
interface FileUploadProps {
  onFileUpload: (file: File) => Promise<void>;
  isLoading: boolean;
  className: string;
}

export default function FileUpload({
  onFileUpload,
  isLoading,
  className,
}: FileUploadProps) {
  const onFileSelect = useState<File | null>(null);
  const [selectedFile, setSelectedFile] = onFileSelect;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selectedFile) {
      await onFileUpload(selectedFile);
    }
  };

  return (
    <div className={`${className}`}>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <UploadArea
          onFileSelect={onFileSelect}
          isLoading={isLoading}
          acceptedType=".json"
        />
        <UploadButton
          selectedFile={selectedFile}
          isLoading={isLoading}
        ></UploadButton>
      </form>
    </div>
  );
}
