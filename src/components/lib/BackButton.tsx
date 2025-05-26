
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BackButtonProps {
  onClick: () => void;
  label?: string;
  icon?: React.ReactNode;
  className?: string;
  'aria-label'?: string;
}

export const BackButton: React.FC<BackButtonProps> = ({
  onClick,
  label = 'Back',
  icon,
  className,
  'aria-label': ariaLabel,
}) => {
  const defaultIcon = <ArrowLeft className="w-4 h-4" />;

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'inline-flex items-center gap-2 px-3 py-2',
        'text-gray-600 hover:text-gray-800',
        'bg-transparent hover:bg-gray-50',
        'rounded-md transition-colors duration-200',
        'focus:outline-none',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        className
      )}
      aria-label={ariaLabel || `${label} button`}
    >
      {icon || defaultIcon}
      <span className="text-sm font-medium">{label}</span>
    </button>
  );
};

export default BackButton;
