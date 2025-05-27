
import React from 'react';
import { cn } from '@/lib/utils';

type MemberChipProps = {
  label: string;
  backgroundColor?: string;
  size?: "sm" | "md" | "lg";
};

const MemberChip: React.FC<MemberChipProps> = ({
  label,
  backgroundColor,
  size = "md"
}) => {
  // Default pastel color mapping for common member types
  const getDefaultBackgroundColor = (label: string): string => {
    const normalizedLabel = label.toUpperCase();
    
    switch (normalizedLabel) {
      case 'HOF':
        return 'bg-gray-100';
      case 'SP':
      case 'SPOUSE':
        return 'bg-blue-100';
      case 'C1':
      case 'CHILD1':
        return 'bg-green-100';
      case 'C2':
      case 'CHILD2':
        return 'bg-yellow-100';
      case 'C3':
      case 'CHILD3':
        return 'bg-purple-100';
      case 'C4':
      case 'CHILD4':
        return 'bg-pink-100';
      default:
        return 'bg-gray-100';
    }
  };

  const sizeClasses = {
    sm: 'px-2 py-1 text-xs min-w-[32px] h-6',
    md: 'px-3 py-1.5 text-sm min-w-[40px] h-8',
    lg: 'px-4 py-2 text-base min-w-[48px] h-10'
  };

  const backgroundColorClass = backgroundColor || getDefaultBackgroundColor(label);

  return (
    <div
      className={cn(
        'inline-flex items-center justify-center rounded-full font-medium text-gray-700',
        sizeClasses[size],
        backgroundColorClass
      )}
    >
      {label}
    </div>
  );
};

export default MemberChip;
