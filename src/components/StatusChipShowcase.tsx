
import React from 'react';
import { StatusChip } from './lib/StatusChip';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const StatusChipShowcase: React.FC = () => {
  const statusExamples = [
    // Orange - New/Future
    { status: 'New', category: 'New/Future (Orange)' },
    { status: 'Future Policy', category: 'New/Future (Orange)' },
    
    // Green - Active/In Progress/Working
    { status: 'Active', category: 'Active/Working (Green)' },
    { status: 'In Progress', category: 'Active/Working (Green)' },
    { status: 'Working', category: 'Active/Working (Green)' },
    
    // Blue - Done/Ended
    { status: 'Done', category: 'Done/Ended (Blue)' },
    { status: 'Ended', category: 'Done/Ended (Blue)' },
    
    // Gray - Canceled/Declined
    { status: 'Canceled', category: 'Canceled/Declined (Gray)' },
    { status: 'Cancelled', category: 'Canceled/Declined (Gray)' },
    { status: 'Declined', category: 'Canceled/Declined (Gray)' },
    
    // Purple - Submitted
    { status: 'Submitted', category: 'Submitted (Purple)' },
    
    // Pink - Default/Other
    { status: 'Pending Review', category: 'Other (Pink - Default)' },
    { status: 'Unknown Status', category: 'Other (Pink - Default)' },
  ];

  const groupedStatuses = statusExamples.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item.status);
    return acc;
  }, {} as Record<string, string[]>);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto p-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              StatusChip Component Showcase
            </h1>
            <p className="text-xl text-gray-600">
              Color-coded status chips with automatic styling based on status keywords
            </p>
          </div>

          <div className="space-y-8">
            {Object.entries(groupedStatuses).map(([category, statuses]) => (
              <Card key={category} className="w-full">
                <CardHeader>
                  <CardTitle className="text-lg">{category}</CardTitle>
                  <CardDescription>
                    Status keywords that trigger this color scheme
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {statuses.map((status) => (
                      <StatusChip key={status} status={status} />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Component Usage</CardTitle>
              <CardDescription>
                How to use the StatusChip component in your application
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-100 rounded-lg p-4 font-mono text-sm">
                <div className="text-gray-700">
                  {`import { StatusChip } from './components/lib/StatusChip';`}
                </div>
                <div className="mt-2 text-gray-700">
                  {`<StatusChip status="Active" />`}
                </div>
                <div className="text-gray-700">
                  {`<StatusChip status="Submitted" />`}
                </div>
                <div className="text-gray-700">
                  {`<StatusChip status="Canceled" />`}
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="font-semibold text-gray-900 mb-2">Color Logic:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Keywords are matched case-insensitively</li>
                  <li>• Multiple keywords can trigger the same color (e.g., "canceled" and "cancelled")</li>
                  <li>• Default pink color is used for unrecognized statuses</li>
                  <li>• Component accepts additional className prop for custom styling</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default StatusChipShowcase;
