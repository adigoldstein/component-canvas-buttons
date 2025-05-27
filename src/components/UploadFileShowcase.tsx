
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import UploadFile from '@/components/lib/UploadFile';
import UploadedFileList, { UploadedFile, FileStatus } from '@/components/lib/UploadedFileList';
import { toast } from 'sonner';

const UploadFileShowcase: React.FC = () => {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);

  // Simulate upload process with different outcomes
  const simulateUpload = (file: File): Promise<void> => {
    return new Promise((resolve, reject) => {
      // Simulate different upload scenarios
      const random = Math.random();
      const delay = 1000 + Math.random() * 2000; // 1-3 seconds
      
      setTimeout(() => {
        if (random > 0.8) {
          reject(new Error('Upload failed'));
        } else {
          resolve();
        }
      }, delay);
    });
  };

  const handleFileUpload = async (files: File[]) => {
    const newFiles: UploadedFile[] = files.map(file => ({
      id: `${Date.now()}-${Math.random()}`,
      name: file.name,
      size: file.size,
      type: file.type,
      status: 'loading' as FileStatus
    }));

    setUploadedFiles(prev => [...prev, ...newFiles]);
    toast.success(`Starting upload of ${files.length} file(s)...`);

    // Process each file
    for (const newFile of newFiles) {
      const originalFile = files.find(f => f.name === newFile.name);
      if (!originalFile) continue;

      try {
        await simulateUpload(originalFile);
        
        setUploadedFiles(prev => 
          prev.map(f => 
            f.id === newFile.id 
              ? { ...f, status: 'success' as FileStatus }
              : f
          )
        );
        toast.success(`${newFile.name} uploaded successfully!`);
      } catch (error) {
        setUploadedFiles(prev => 
          prev.map(f => 
            f.id === newFile.id 
              ? { ...f, status: 'error' as FileStatus }
              : f
          )
        );
        toast.error(`Failed to upload ${newFile.name}`);
      }
    }
  };

  const handleRemoveFile = (id: string) => {
    setUploadedFiles(prev => prev.filter(f => f.id !== id));
    toast.info('File removed');
  };

  const handleRetryFile = async (id: string) => {
    const file = uploadedFiles.find(f => f.id === id);
    if (!file) return;

    // Reset to loading state
    setUploadedFiles(prev => 
      prev.map(f => 
        f.id === id 
          ? { ...f, status: 'loading' as FileStatus }
          : f
      )
    );

    toast.info(`Retrying upload of ${file.name}...`);

    // Create a fake File object for retry simulation
    const fakeFile = new File([''], file.name, { type: file.type });

    try {
      await simulateUpload(fakeFile);
      
      setUploadedFiles(prev => 
        prev.map(f => 
          f.id === id 
            ? { ...f, status: 'success' as FileStatus }
            : f
        )
      );
      toast.success(`${file.name} uploaded successfully!`);
    } catch (error) {
      setUploadedFiles(prev => 
        prev.map(f => 
          f.id === id 
            ? { ...f, status: 'error' as FileStatus }
            : f
        )
      );
      toast.error(`Failed to upload ${file.name}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Upload File Component
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A complete file upload system with drag-and-drop, status tracking, and file management.
          </p>
        </div>

        <div className="grid gap-8">
          {/* Complete Upload System */}
          <Card>
            <CardHeader>
              <CardTitle>Complete File Upload System</CardTitle>
              <CardDescription>
                Upload files with real-time status feedback, retry failed uploads, and manage your file list.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <UploadFile onChange={handleFileUpload} />
              
              {uploadedFiles.length > 0 && (
                <UploadedFileList
                  files={uploadedFiles}
                  onRemove={handleRemoveFile}
                  onRetry={handleRetryFile}
                />
              )}
            </CardContent>
          </Card>

          {/* Basic Upload Example */}
          <Card>
            <CardHeader>
              <CardTitle>Basic File Upload</CardTitle>
              <CardDescription>
                Simple drag and drop without status tracking.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <UploadFile
                onChange={(files) => {
                  toast.success(`Selected ${files.length} file(s)`);
                  console.log('Files selected:', files);
                }}
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
                  toast.success(`Image selected: ${files[0]?.name}`);
                }}
                accept={['.jpg', '.png']}
                maxSizeMB={2}
                multiple={false}
              />
            </CardContent>
          </Card>

          {/* Component API Documentation */}
          <Card>
            <CardHeader>
              <CardTitle>Component API</CardTitle>
              <CardDescription>
                Props and configuration options for both components.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">UploadFile Props</h4>
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
                  <h4 className="font-medium text-gray-900 mb-2">UploadedFileList Props</h4>
                  <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm">
                    <div className="space-y-2">
                      <div><span className="text-blue-600">files</span>: UploadedFile[]</div>
                      <div><span className="text-blue-600">onRemove</span>: (id: string) =&gt; void</div>
                      <div><span className="text-blue-600">onRetry?</span>: (id: string) =&gt; void</div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Features</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>Drag and drop file upload</li>
                    <li>Manual file selection via button</li>
                    <li>File type and size validation</li>
                    <li>Real-time upload status feedback</li>
                    <li>Retry failed uploads</li>
                    <li>Remove files from list</li>
                    <li>Visual status indicators (loading, success, error)</li>
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
