
import React, { useState } from 'react';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

interface AppDateInputProps {
  label: string;
  placeholder?: string;
  value?: Date;
  onDateChange: (date: Date | undefined) => void;
  error?: string;
  disabled?: boolean;
  className?: string;
  required?: boolean;
}

export const AppDateInput: React.FC<AppDateInputProps> = ({
  label,
  placeholder = "mm/dd/yyyy",
  value,
  onDateChange,
  error,
  disabled = false,
  className,
  required = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const labelClasses = cn(
    'block text-sm font-medium mb-1',
    error ? 'text-red-600' : 'text-gray-700',
    disabled && 'text-gray-400'
  );

  const buttonClasses = cn(
    'w-full px-3 py-2 rounded-md transition-colors duration-200',
    'border bg-white text-gray-900 placeholder-gray-500',
    'focus:outline-none focus:ring-2 focus:border-[#E10514]',
    'disabled:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-60',
    'h-10 justify-start text-left font-normal',
    error ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300',
    !value && 'text-gray-500'
  );

  return (
    <div className={cn('w-full', className)}>
      <label className={labelClasses}>
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={buttonClasses}
            disabled={disabled}
            aria-label={label}
            aria-invalid={!!error}
            aria-describedby={error ? `${label}-error` : undefined}
          >
            {value ? format(value, "MM/dd/yyyy") : <span>{placeholder}</span>}
            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={value}
            onSelect={(date) => {
              onDateChange(date);
              setIsOpen(false);
            }}
            initialFocus
            className={cn("p-3 pointer-events-auto")}
          />
        </PopoverContent>
      </Popover>
      
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

export default AppDateInput;
