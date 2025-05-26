
import React from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ButtonProps, ButtonStyleProps } from './types';

const getButtonVariantClasses = ({ variant, size, disabled, loading, fullWidth }: ButtonStyleProps): string => {
  const baseClasses = [
    'inline-flex',
    'items-center',
    'justify-center',
    'gap-2',
    'font-medium',
    'rounded-lg',
    'transition-all',
    'duration-200',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-offset-2',
    'active:transform',
    'active:scale-[0.98]',
  ];

  // Size classes
  const sizeClasses = {
    sm: ['px-3', 'py-1.5', 'text-sm', 'h-8'],
    md: ['px-4', 'py-2', 'text-base', 'h-10'],
    lg: ['px-6', 'py-3', 'text-lg', 'h-12'],
  };

  // Variant classes
  const variantClasses = {
    primary: [
      'text-white',
      'border',
      'border-transparent',
      'hover:opacity-90',
      'focus:ring-red-500',
      'disabled:opacity-60',
      '[background:var(--Gradient,linear-gradient(180deg,var(--Gradient-L-1,#E10514)_0%,var(--Gradient-L-2,#A2191C)_100%))]',
    ],
    secondary: [
      'bg-[hsl(var(--button-secondary))]',
      'text-[hsl(var(--button-secondary-foreground))]',
      'border',
      'border-[hsl(var(--border))]',
      'hover:bg-[hsl(var(--button-secondary-hover))]',
      'focus:ring-[hsl(var(--ring))]',
      'disabled:bg-[hsl(var(--muted))]',
      'disabled:text-[hsl(var(--muted-foreground))]',
    ],
    outline: [
      'bg-transparent',
      'text-[var(--Gradient-L-1)]',
      'border-2',
      'border-[var(--Gradient-L-1)]',
      'hover:[background:var(--Gradient,linear-gradient(180deg,var(--Gradient-L-1,#E10514)_0%,var(--Gradient-L-2,#A2191C)_100%))]',
      'hover:text-white',
      'focus:ring-red-500',
      'disabled:border-[hsl(var(--button-coral-disabled))]',
      'disabled:text-[hsl(var(--button-coral-disabled))]',
    ],
    ghost: [
      'bg-transparent',
      'text-[var(--Gradient-L-1)]',
      'border',
      'border-transparent',
      'hover:[background:var(--Gradient,linear-gradient(180deg,var(--Gradient-L-1,#E10514)_0%,var(--Gradient-L-2,#A2191C)_100%))]',
      'hover:text-white',
      'focus:ring-red-500',
      'disabled:text-[hsl(var(--button-coral-disabled))]',
    ],
  };

  // Width classes
  const widthClasses = fullWidth ? ['w-full'] : ['w-auto'];

  // Disabled/loading classes
  const stateClasses = (disabled || loading) ? [
    'cursor-not-allowed',
    'opacity-60',
    'hover:transform-none',
    'active:transform-none',
  ] : ['cursor-pointer'];

  return cn([
    ...baseClasses,
    ...sizeClasses[size],
    ...variantClasses[variant],
    ...widthClasses,
    ...stateClasses,
  ]);
};

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  disabled = false,
  width,
  height,
  icon,
  onClick,
  children,
  className,
  size = 'md',
  loading = false,
  fullWidth = false,
}) => {
  const handleClick = () => {
    if (!disabled && !loading) {
      onClick();
    }
  };

  const buttonClasses = getButtonVariantClasses({
    variant,
    size,
    disabled,
    loading,
    fullWidth,
  });

  const customStyles: React.CSSProperties = {};
  if (width) customStyles.width = width;
  if (height) customStyles.height = height;

  return (
    <button
      type="button"
      className={cn(buttonClasses, className)}
      style={customStyles}
      onClick={handleClick}
      disabled={disabled || loading}
      aria-disabled={disabled || loading}
    >
      {loading ? (
        <Loader2 className="w-4 h-4 animate-spin" />
      ) : icon ? (
        <span className="flex-shrink-0">{icon}</span>
      ) : null}
      
      {children && (
        <span className={cn(
          'flex-1',
          (loading || icon) && 'ml-0'
        )}>
          {children}
        </span>
      )}
    </button>
  );
};

export default Button;
