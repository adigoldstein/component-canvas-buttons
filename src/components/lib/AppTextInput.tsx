
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface AppTextInputProps {
  label: string;
  placeholder?: string;
  value: string;
  onChangeText: (value: string) => void;
  keyboardType?: 'default' | 'email' | 'number' | 'tel';
  secureTextEntry?: boolean;
  multiline?: boolean;
  error?: string;
  disabled?: boolean;
  className?: string;
}

export const AppTextInput: React.FC<AppTextInputProps> = ({
  label,
  placeholder,
  value,
  onChangeText,
  keyboardType = 'default',
  secureTextEntry = false,
  multiline = false,
  error,
  disabled = false,
  className,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const inputType = secureTextEntry ? 'password' : 
                   keyboardType === 'email' ? 'email' :
                   keyboardType === 'number' ? 'number' :
                   keyboardType === 'tel' ? 'tel' : 'text';

  const baseInputClasses = cn(
    'w-full px-3 py-2 rounded-md transition-colors duration-200',
    'border bg-white text-gray-900 placeholder-gray-500',
    'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500',
    'disabled:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-60',
    multiline ? 'min-h-[80px] resize-y' : 'h-10',
    error ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300',
    isFocused && !error && 'border-blue-500 ring-2 ring-blue-500 ring-opacity-20'
  );

  const labelClasses = cn(
    'block text-sm font-medium mb-1',
    error ? 'text-red-600' : 'text-gray-700',
    disabled && 'text-gray-400'
  );

  const InputComponent = multiline ? 'textarea' : 'input';

  return (
    <div className={cn('w-full', className)}>
      <label className={labelClasses}>
        {label}
      </label>
      
      <InputComponent
        type={multiline ? undefined : inputType}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChangeText(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        disabled={disabled}
        className={baseInputClasses}
        aria-label={label}
        aria-invalid={!!error}
        aria-describedby={error ? `${label}-error` : undefined}
        {...(multiline && { rows: 3 })}
      />
      
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

export default AppTextInput;
