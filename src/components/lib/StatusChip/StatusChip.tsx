
import React from 'react';
import { cn } from '@/lib/utils';

type StatusChipProps = {
  status: string;
  className?: string;
};

const StatusChip: React.FC<StatusChipProps> = ({ status, className }) => {
  const getStatusStyles = (status: string): string => {
    const normalizedStatus = status.toLowerCase();
    
    // New/Future - Orange
    if (normalizedStatus.includes('new') || normalizedStatus.includes('future')) {
      return 'bg-orange-50 text-orange-600';
    }
    
    // Active/In Progress/Working - Green
    if (normalizedStatus.includes('active') || 
        normalizedStatus.includes('in progress') || 
        normalizedStatus.includes('working')) {
      return 'bg-green-50 text-green-600';
    }
    
    // Done/Ended - Blue
    if (normalizedStatus.includes('done') || normalizedStatus.includes('ended')) {
      return 'bg-blue-50 text-blue-600';
    }
    
    // Canceled/Declined - Gray
    if (normalizedStatus.includes('canceled') || 
        normalizedStatus.includes('cancelled') || 
        normalizedStatus.includes('declined')) {
      return 'bg-gray-50 text-gray-600';
    }
    
    // Submitted - Purple
    if (normalizedStatus.includes('submitted')) {
      return 'bg-purple-50 text-purple-600';
    }
    
    // Default - Pink
    return 'bg-pink-50 text-pink-600';
  };

  const statusStyles = getStatusStyles(status);

  return (
    <span
      className={cn(
        'inline-flex items-center justify-center px-3 py-1 rounded-full text-sm font-medium',
        statusStyles,
        className
      )}
    >
      {status}
    </span>
  );
};

export default StatusChip;
