
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface AppTextAreaProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  maxLength?: number;
  placeholder?: string;
  rows?: number;
  disabled?: boolean;
  error?: string;
  className?: string;
}

export const AppTextArea: React.FC<AppTextAreaProps> = ({
  label,
  value,
  onChange,
  maxLength = 500,
  placeholder,
  rows = 5,
  disabled = false,
  error,
  className,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const characterCount = value.length;
  const isNearLimit = characterCount > maxLength * 0.9;
  const isOverLimit = characterCount > maxLength;

  const labelClasses = cn(
    'block text-sm font-medium mb-1',
    error ? 'text-red-600' : 'text-gray-700',
    disabled && 'text-gray-400'
  );

  const textareaClasses = cn(
    'w-full px-3 py-2 rounded-md transition-colors duration-200 resize-y',
    'border bg-white text-gray-900 placeholder-gray-500',
    'focus:outline-none focus:ring-2 focus:border-[#E10514]',
    'disabled:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-60',
    'font-sans text-sm leading-relaxed',
    error ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300',
    isFocused && !error && 'border-[#E10514] ring-2 ring-[#E10514] ring-opacity-20'
  );

  const counterClasses = cn(
    'text-xs mt-1 text-right',
    isOverLimit ? 'text-red-600' : isNearLimit ? 'text-orange-500' : 'text-gray-500',
    disabled && 'text-gray-400'
  );

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    
    // Allow typing even when over limit, but don't call onChange if it would exceed maxLength
    if (newValue.length <= maxLength) {
      onChange(newValue);
    }
  };

  return (
    <div className={cn('w-full', className)}>
      <label className={labelClasses}>
        {label}
      </label>
      
      <textarea
        value={value}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={placeholder}
        rows={rows}
        disabled={disabled}
        spellCheck={true}
        className={textareaClasses}
        aria-label={label}
        aria-invalid={!!error}
        aria-describedby={error ? `${label}-error` : `${label}-counter`}
        maxLength={maxLength}
      />
      
      <div className="flex justify-between items-center mt-1">
        {error && (
          <p 
            id={`${label}-error`}
            className="text-sm text-red-600"
            role="alert"
          >
            {error}
          </p>
        )}
        <div className="flex-1" />
        <span 
          id={`${label}-counter`}
          className={counterClasses}
        >
          {characterCount}/{maxLength} characters
        </span>
      </div>
    </div>
  );
};

export default AppTextArea;
