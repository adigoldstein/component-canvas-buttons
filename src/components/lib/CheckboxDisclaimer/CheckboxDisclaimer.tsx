
import React from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { cn } from '@/lib/utils';

export type CheckboxDisclaimerProps = {
  id: string;
  text: string;
  defaultChecked?: boolean;
  onChange: (id: string, checked: boolean) => void;
  className?: string;
};

const CheckboxDisclaimer: React.FC<CheckboxDisclaimerProps> = ({
  id,
  text,
  defaultChecked = false,
  onChange,
  className,
}) => {
  const [checked, setChecked] = React.useState(defaultChecked);

  const handleCheckedChange = (checkedValue: boolean) => {
    setChecked(checkedValue);
    onChange(id, checkedValue);
  };

  return (
    <div className={cn("bg-gray-50 rounded-lg p-4 border border-gray-200", className)}>
      <div className="flex items-start space-x-3">
        <Checkbox
          id={id}
          checked={checked}
          onCheckedChange={handleCheckedChange}
          className="mt-0.5 flex-shrink-0"
        />
        <label
          htmlFor={id}
          className="text-sm text-gray-600 leading-relaxed cursor-pointer"
        >
          {text}
        </label>
      </div>
    </div>
  );
};

export default CheckboxDisclaimer;
