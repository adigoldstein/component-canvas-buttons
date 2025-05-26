
import React from 'react';
import { cn } from '@/lib/utils';
import { SelectionOption } from './types';
import { Plus } from 'lucide-react';

interface SelectionGridProps {
  title: string;
  options: SelectionOption[];
  selectionType: 'single' | 'multiple';
  maxCardsPerRow?: number;
  onOptionToggle: (optionId: string) => void;
  className?: string;
}

const SelectionGrid: React.FC<SelectionGridProps> = ({
  title,
  options,
  selectionType,
  maxCardsPerRow = 3,
  onOptionToggle,
  className,
}) => {
  const gridCols = {
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
  }[maxCardsPerRow] || 'grid-cols-3';

  return (
    <div className={cn('space-y-4', className)}>
      <h4 className="font-medium text-gray-700">{title}</h4>
      <div className={cn('grid gap-4', gridCols)}>
        {options.map((option) => (
          <div
            key={option.id}
            className={cn(
              'flex flex-col items-center p-4 border-2 rounded-lg cursor-pointer transition-colors min-h-[100px] justify-center',
              {
                'border-red-500 bg-red-50': option.selected,
                'border-gray-200 hover:border-red-300 bg-white': !option.selected,
              }
            )}
            onClick={() => onOptionToggle(option.id)}
          >
            <div className="flex items-center justify-center w-8 h-8 mb-2">
              {option.icon || <Plus className="w-4 h-4 text-gray-400" />}
            </div>
            <span className="text-sm font-medium text-center">{option.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectionGrid;
