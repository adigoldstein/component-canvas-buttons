import React from 'react';
import { Upload, Download, Settings, Trash2, Plus, Check } from 'lucide-react';
import { Button } from './lib/button-library';

const ButtonShowcase: React.FC = () => {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div className="p-8 space-y-8 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">
          Button Component Library
        </h1>

        {/* Basic Variants */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Basic Variants</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" onClick={handleClick}>
              Choose Files
            </Button>
            <Button variant="secondary" onClick={handleClick}>
              Cancel
            </Button>
            <Button variant="outline" onClick={handleClick}>
              Save Draft
            </Button>
            <Button variant="ghost" onClick={handleClick}>
              Learn More
            </Button>
          </div>
        </section>

        {/* With Icons */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">With Icons</h2>
          <div className="flex flex-wrap gap-4">
            <Button 
              variant="primary" 
              icon={<Upload className="w-4 h-4" />} 
              onClick={handleClick}
            >
              Upload Files
            </Button>
            <Button 
              variant="secondary" 
              icon={<Download className="w-4 h-4" />} 
              onClick={handleClick}
            >
              Download
            </Button>
            <Button 
              variant="outline" 
              icon={<Settings className="w-4 h-4" />} 
              onClick={handleClick}
            >
              Settings
            </Button>
            <Button 
              variant="ghost" 
              icon={<Plus className="w-4 h-4" />} 
              onClick={handleClick}
            >
              Add New
            </Button>
          </div>
        </section>

        {/* Sizes */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Sizes</h2>
          <div className="flex flex-wrap items-end gap-4">
            <Button variant="primary" size="sm" onClick={handleClick}>
              Small
            </Button>
            <Button variant="primary" size="md" onClick={handleClick}>
              Medium
            </Button>
            <Button variant="primary" size="lg" onClick={handleClick}>
              Large
            </Button>
          </div>
        </section>

        {/* Custom Dimensions */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Custom Dimensions</h2>
          <div className="space-y-4">
            <Button 
              variant="primary" 
              icon={<Upload className="w-4 h-4" />} 
              height="48px" 
              width="200px"
              onClick={handleClick}
            >
              Custom Size
            </Button>
            <Button 
              variant="secondary" 
              fullWidth
              onClick={handleClick}
            >
              Full Width Button
            </Button>
          </div>
        </section>

        {/* States */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">States</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" onClick={handleClick}>
              Normal
            </Button>
            <Button variant="primary" disabled onClick={handleClick}>
              Disabled
            </Button>
            <Button 
              variant="primary" 
              loading 
              icon={<Check className="w-4 h-4" />}
              onClick={handleClick}
            >
              Loading
            </Button>
          </div>
        </section>

        {/* Real World Examples */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Real World Examples</h2>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
              <div>
                <h3 className="font-medium text-gray-900">Document Upload</h3>
                <p className="text-sm text-gray-600">Select files to upload to your workspace</p>
              </div>
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  icon={<Trash2 className="w-4 h-4" />}
                  onClick={handleClick}
                >
                  Clear
                </Button>
                <Button 
                  variant="primary" 
                  icon={<Upload className="w-4 h-4" />}
                  onClick={handleClick}
                >
                  Choose Files
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Code Examples */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Usage Examples</h2>
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
            <pre>{`// Basic usage
<Button variant="primary" onClick={handleClick}>
  Choose Files
</Button>

// With icon and custom dimensions
<Button 
  variant="primary" 
  icon={<Upload />} 
  height="48px" 
  width="100%"
  onClick={handleClick}
>
  Upload Files
</Button>

// Disabled state
<Button variant="secondary" disabled onClick={handleClick}>
  Cancel
</Button>

// Loading state
<Button variant="primary" loading onClick={handleClick}>
  Processing...
</Button>`}</pre>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ButtonShowcase;
