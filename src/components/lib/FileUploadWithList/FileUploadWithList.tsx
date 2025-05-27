
import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, Loader2, CheckCircle, XCircle, Trash2, RefreshCcw } from 'lucide-react';
import { cn } from '@/lib/utils';

export type FileStatus = "loading" | "success" | "error";

export type UploadedFile = {
  id: string;
  name: string;
  size: number;
  type: string;
  status: FileStatus;
};

export interface FileUploadWithListProps {
  onChange?: (files: File[]) => void;
  accept?: string[];
  maxSizeMB?: number;
  multiple?: boolean;
  className?: string;
  files: UploadedFile[];
  onRemove: (id: string) => void;
  onRetry?: (id: string) => void;
}

export const FileUploadWithList: React.FC<FileUploadWithListProps> = ({
  onChange,
  accept = ['.jpg', '.png', '.pdf'],
  maxSizeMB = 5,
  multiple = true,
  className,
  files,
  onRemove,
  onRetry
}) => {
  const onDrop = React.useCallback((acceptedFiles: File[]) => {
    const validFiles = acceptedFiles.filter(file => {
      const fileSizeMB = file.size / (1024 * 1024);
      return fileSizeMB <= maxSizeMB;
    });
    
    if (onChange) {
      onChange(validFiles);
    }
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
    noClick: true
  });

  const formatFileTypes = () => {
    return accept.map(type => type.toUpperCase().replace('.', '')).join(', ');
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const getFileIcon = (type: string) => {
    if (type.startsWith('image/')) {
      return (
        <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
          <span className="text-blue-600 text-xs font-medium">IMG</span>
        </div>
      );
    }
    if (type === 'application/pdf') {
      return (
        <div className="w-8 h-8 bg-red-100 rounded flex items-center justify-center">
          <span className="text-red-600 text-xs font-medium">PDF</span>
        </div>
      );
    }
    return (
      <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
        <span className="text-gray-600 text-xs font-medium">FILE</span>
      </div>
    );
  };

  const getStatusIcon = (status: FileStatus) => {
    switch (status) {
      case 'loading':
        return <Loader2 className="w-4 h-4 text-blue-500 animate-spin" />;
      case 'success':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'error':
        return <XCircle className="w-4 h-4 text-red-500" />;
      default:
        return null;
    }
  };

  const getStatusText = (status: FileStatus) => {
    switch (status) {
      case 'loading':
        return 'Uploading...';
      case 'success':
        return 'Upload complete';
      case 'error':
        return 'Upload failed';
      default:
        return '';
    }
  };

  return (
    <div className={cn("space-y-4", className)}>
      {/* Upload Area */}
      <div
        {...getRootProps()}
        className={cn(
          "relative border-2 border-dashed rounded-lg p-8 text-center transition-colors",
          isDragActive 
            ? "border-blue-400 bg-blue-50" 
            : "border-gray-300 bg-gray-50",
          "hover:border-gray-400 hover:bg-gray-100"
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

      {/* File List */}
      {files.length > 0 && (
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-gray-700 mb-3">
            Files ({files.length})
          </h4>
          
          {files.map((file) => (
            <div
              key={file.id}
              className={cn(
                "flex items-center justify-between p-3 rounded-lg border transition-colors",
                file.status === 'error' ? 'bg-red-50 border-red-200' : 'bg-gray-50 border-gray-200'
              )}
            >
              <div className="flex items-center space-x-3 flex-1 min-w-0">
                {getFileIcon(file.type)}
                
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-gray-900 truncate">{file.name}</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="text-sm text-gray-500">{formatFileSize(file.size)}</span>
                    <div className="flex items-center space-x-1">
                      {getStatusIcon(file.status)}
                      <span className={cn(
                        "text-xs",
                        file.status === 'success' && 'text-green-600',
                        file.status === 'error' && 'text-red-600',
                        file.status === 'loading' && 'text-blue-600'
                      )}>
                        {getStatusText(file.status)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2 ml-3">
                {file.status === 'error' && onRetry && (
                  <button
                    onClick={() => onRetry(file.id)}
                    className="p-1 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded transition-colors"
                    title="Retry upload"
                  >
                    <RefreshCcw className="w-4 h-4" />
                  </button>
                )}
                
                <button
                  onClick={() => onRemove(file.id)}
                  className="p-1 text-red-600 hover:text-red-800 hover:bg-red-50 rounded transition-colors"
                  title="Remove file"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FileUploadWithList;
