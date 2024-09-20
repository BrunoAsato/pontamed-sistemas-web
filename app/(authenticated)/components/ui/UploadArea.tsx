import { useState, Dispatch, SetStateAction, ChangeEvent } from 'react';

type UploadAreaProps = {
  onFileSelect: [File | null, Dispatch<SetStateAction<File | null>>];
  isLoading: boolean;
  acceptedType?: string;
};

//type selectedFile = [File | null, Dispatch<SetStateAction<File | null>>];

const UploadArea = ({
  onFileSelect,
  isLoading,
  acceptedType,
}: UploadAreaProps) => {
  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = onFileSelect;

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setSelectedFile(e.dataTransfer.files[0]);
    }
  };

  return (
    <div
      className={`mb-4 p-6 border-2 border-dashed rounded-lg text-center transition-colors ${
        dragActive ? 'border-blue-400 bg-blue-50' : 'border-gray-300'
      }`}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
    >
      <input
        type="file"
        accept={acceptedType ? acceptedType : '.json'}
        onChange={handleFileChange}
        disabled={isLoading}
        className="hidden"
        id="file-upload"
      />
      <label
        htmlFor="file-upload"
        className="cursor-pointer text-blue-600 hover:text-blue-800"
      >
        {selectedFile
          ? selectedFile.name
          : 'Escolha um arquivo JSON ou arraste e solte aqui'}
      </label>
      <p className="mt-2 text-sm text-gray-500">
        {selectedFile
          ? 'Clique para trocar o arquivo'
          : 'Apenas arquivos .json são aceitos'}
      </p>
    </div>
  );
};

export default UploadArea;
