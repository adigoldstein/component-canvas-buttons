
import { ReactNode } from 'react';

export interface ButtonProps {
  /** The visual style variant of the button */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  
  /** Whether the button is disabled */
  disabled?: boolean;
  
  /** Custom width for the button */
  width?: string;
  
  /** Custom height for the button */
  height?: string;
  
  /** Icon to display before the text */
  icon?: ReactNode;
  
  /** Click handler function */
  onClick: () => void;
  
  /** Button content/text */
  children: ReactNode;
  
  /** Additional CSS classes */
  className?: string;
  
  /** Button size preset */
  size?: 'sm' | 'md' | 'lg';
  
  /** Loading state */
  loading?: boolean;
  
  /** Full width button */
  fullWidth?: boolean;
}

export interface ButtonStyleProps {
  variant: NonNullable<ButtonProps['variant']>;
  size: NonNullable<ButtonProps['size']>;
  disabled: boolean;
  loading: boolean;
  fullWidth: boolean;
}
