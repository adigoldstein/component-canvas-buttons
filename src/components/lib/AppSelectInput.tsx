
import React from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export interface SelectOption {
  value: string;
  label: string;
}

interface AppSelectInputProps {
  label: string;
  placeholder?: string;
  value?: string;
  onValueChange: (value: string) => void;
  options: SelectOption[];
  error?: string;
  disabled?: boolean;
  className?: string;
  required?: boolean;
}

export const AppSelectInput: React.FC<AppSelectInputProps> = ({
  label,
  placeholder = "Select an option",
  value,
  onValueChange,
  options,
  error,
  disabled = false,
  className,
  required = false,
}) => {
  const labelClasses = cn(
    'block text-sm font-medium mb-1',
    error ? 'text-red-600' : 'text-gray-700',
    disabled && 'text-gray-400'
  );

  const triggerClasses = cn(
    'w-full px-3 py-2 rounded-md transition-colors duration-200',
    'border bg-white text-gray-900',
    'focus:outline-none focus:ring-2 focus:ring-[#E10514] focus:border-[#E10514]',
    'disabled:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-60',
    'h-10 justify-between',
    error ? 'border-red-500' : 'border-gray-300',
    '[&>span]:text-left'
  );

  return (
    <div className={cn('w-full', className)}>
      <label className={labelClasses}>
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      
      <Select
        value={value}
        onValueChange={onValueChange}
        disabled={disabled}
      >
        <SelectTrigger 
          className={triggerClasses}
          aria-label={label}
          aria-invalid={!!error}
          aria-describedby={error ? `${label}-error` : undefined}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent className="bg-white border border-gray-300 shadow-lg rounded-md z-50">
          {options.map((option) => (
            <SelectItem 
              key={option.value} 
              value={option.value}
              className="hover:bg-gray-100 cursor-pointer px-3 py-2"
            >
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      
      {error && (
        <p 
          id={`${label}-error`}
          className="mt-1 text-sm text-red-600"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
};

export default AppSelectInput;
