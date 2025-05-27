
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import UploadFile from '@/components/lib/UploadFile';
import { toast } from 'sonner';

const UploadFileShowcase: React.FC = () => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const handleFileUpload = (files: File[]) => {
    setUploadedFiles(prev => [...prev, ...files]);
    toast.success(`${files.length} file(s) uploaded successfully!`);
    console.log('Uploaded files:', files);
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Upload File Component
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A drag-and-drop file upload component with support for multiple file types and size validation.
          </p>
        </div>

        <div className="grid gap-8">
          {/* Basic Upload Example */}
          <Card>
            <CardHeader>
              <CardTitle>Basic File Upload</CardTitle>
              <CardDescription>
                Drag and drop files or click to select. Supports JPG, PNG, and PDF files up to 5MB each.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <UploadFile
                onChange={handleFileUpload}
              />
            </CardContent>
          </Card>

          {/* Custom Configuration Example */}
          <Card>
            <CardHeader>
              <CardTitle>Custom Configuration</CardTitle>
              <CardDescription>
                Single file upload, images only, 2MB limit.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <UploadFile
                onChange={(files) => {
                  toast.success(`Image uploaded: ${files[0]?.name}`);
                  console.log('Single image uploaded:', files[0]);
                }}
                accept={['.jpg', '.png']}
                maxSizeMB={2}
                multiple={false}
              />
            </CardContent>
          </Card>

          {/* Uploaded Files Display */}
          {uploadedFiles.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Uploaded Files ({uploadedFiles.length})</CardTitle>
                <CardDescription>
                  Files that have been successfully uploaded to the basic upload component.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {uploadedFiles.map((file, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                          <span className="text-blue-600 text-xs font-medium">
                            {file.name.split('.').pop()?.toUpperCase()}
                          </span>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{file.name}</p>
                          <p className="text-sm text-gray-500">{formatFileSize(file.size)}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => setUploadedFiles(prev => prev.filter((_, i) => i !== index))}
                        className="text-red-600 hover:text-red-800 text-sm font-medium"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Component API Documentation */}
          <Card>
            <CardHeader>
              <CardTitle>Component API</CardTitle>
              <CardDescription>
                Props and configuration options for the UploadFile component.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Props</h4>
                  <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm">
                    <div className="space-y-2">
                      <div><span className="text-blue-600">onChange</span>: (files: File[]) =&gt; void</div>
                      <div><span className="text-blue-600">accept?</span>: string[] <span className="text-gray-500">// default: ['.jpg', '.png', '.pdf']</span></div>
                      <div><span className="text-blue-600">maxSizeMB?</span>: number <span className="text-gray-500">// default: 5</span></div>
                      <div><span className="text-blue-600">multiple?</span>: boolean <span className="text-gray-500">// default: true</span></div>
                      <div><span className="text-blue-600">className?</span>: string</div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Features</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>Drag and drop file upload</li>
                    <li>Manual file selection via button</li>
                    <li>File type validation</li>
                    <li>File size validation</li>
                    <li>Multiple file support</li>
                    <li>Visual feedback for drag states</li>
                    <li>Accessible and keyboard-friendly</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default UploadFileShowcase;
