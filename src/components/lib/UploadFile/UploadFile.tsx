
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface UploadFileProps {
  onChange: (files: File[]) => void;
  accept?: string[];
  maxSizeMB?: number;
  multiple?: boolean;
  className?: string;
}

export const UploadFile: React.FC<UploadFileProps> = ({
  onChange,
  accept = ['.jpg', '.png', '.pdf'],
  maxSizeMB = 5,
  multiple = true,
  className
}) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Filter files by size
    const validFiles = acceptedFiles.filter(file => {
      const fileSizeMB = file.size / (1024 * 1024);
      return fileSizeMB <= maxSizeMB;
    });
    
    onChange(validFiles);
  }, [onChange, maxSizeMB]);

  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    onDrop,
    accept: accept.reduce((acc, curr) => {
      if (curr === '.jpg' || curr === '.jpeg') {
        acc['image/jpeg'] = ['.jpg', '.jpeg'];
      } else if (curr === '.png') {
        acc['image/png'] = ['.png'];
      } else if (curr === '.pdf') {
        acc['application/pdf'] = ['.pdf'];
      }
      return acc;
    }, {} as Record<string, string[]>),
    multiple,
    maxSize: maxSizeMB * 1024 * 1024,
    noClick: true // Disable click on the dropzone area itself
  });

  const formatFileTypes = () => {
    return accept.map(type => type.toUpperCase().replace('.', '')).join(', ');
  };

  return (
    <div
      {...getRootProps()}
      className={cn(
        "relative border-2 border-dashed rounded-lg p-8 text-center transition-colors",
        isDragActive 
          ? "border-blue-400 bg-blue-50" 
          : "border-gray-300 bg-gray-50",
        "hover:border-gray-400 hover:bg-gray-100",
        className
      )}
    >
      <input {...getInputProps()} />
      
      <div className="flex flex-col items-center space-y-4">
        <div className="p-3 bg-white rounded-full shadow-sm border">
          <Upload className="w-6 h-6 text-gray-400" />
        </div>
        
        <div className="space-y-2">
          <p className="text-lg font-medium text-gray-700">
            Drop files here or click to upload
          </p>
          <p className="text-sm text-gray-500">
            Supported formats: {formatFileTypes()}. Max {maxSizeMB}MB per file.
          </p>
        </div>
        
        <button
          type="button"
          onClick={open}
          className="px-6 py-2 bg-white text-red-600 border border-red-600 rounded-full hover:bg-red-50 transition-colors font-medium"
        >
          Choose Files
        </button>
      </div>
    </div>
  );
};

export default UploadFile;
