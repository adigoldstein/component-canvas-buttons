
import React from 'react';
import { User } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface MemberCardProps {
  member: string;
  isSelected?: boolean;
  onClick?: () => void;
  className?: string;
}

const MemberCard: React.FC<MemberCardProps> = ({
  member,
  isSelected = false,
  onClick,
  className,
}) => {
  return (
    <div
      className={cn(
        'flex flex-col items-center p-4 border-2 rounded-lg cursor-pointer transition-colors',
        {
          'border-red-500 bg-red-50': isSelected,
          'border-gray-200 hover:border-red-300': !isSelected,
        },
        className
      )}
      onClick={onClick}
    >
      <User className="w-8 h-8 text-gray-400 mb-2" />
      <span className="text-sm font-medium">{member}</span>
    </div>
  );
};

export default MemberCard;
