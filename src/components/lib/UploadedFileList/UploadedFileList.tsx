
import React from 'react';
import { Loader2, CheckCircle, XCircle, Trash2, RefreshCcw } from 'lucide-react';
import { cn } from '@/lib/utils';

export type FileStatus = "loading" | "success" | "error";

export type UploadedFile = {
  id: string;
  name: string;
  size: number;
  type: string;
  status: FileStatus;
};

export interface UploadedFileListProps {
  files: UploadedFile[];
  onRemove: (id: string) => void;
  onRetry?: (id: string) => void;
}

export const UploadedFileList: React.FC<UploadedFileListProps> = ({
  files,
  onRemove,
  onRetry
}) => {
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

  if (files.length === 0) {
    return null;
  }

  return (
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
  );
};

export default UploadedFileList;
