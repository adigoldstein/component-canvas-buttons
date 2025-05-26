
import React from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SubStepData } from './types';

interface SubStepCardProps {
  subStep: SubStepData;
  subStepIndex: number;
  isActive: boolean;
  isCompleted: boolean;
  isRevealed: boolean;
  onSubStepClick: (subStepIndex: number) => void;
  onOptionToggle: (optionId: string) => void;
  parentStepIndex: number;
}

const SubStepCard: React.FC<SubStepCardProps> = ({
  subStep,
  subStepIndex,
  isActive,
  isCompleted,
  isRevealed,
  onOptionToggle,
}) => {
  if (!isRevealed) {
    return null;
  }

  const gridCols = {
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
  }[subStep.maxCardsPerRow || 3] || 'grid-cols-3';

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <div
          className={cn(
            'flex items-center justify-center w-6 h-6 rounded-full text-xs font-medium',
            {
              'bg-green-500 text-white': isCompleted,
              'bg-red-500 text-white': isActive && !isCompleted,
              'bg-gray-300 text-gray-600': !isActive && !isCompleted,
            }
          )}
        >
          {isCompleted ? (
            <Check className="w-3 h-3" />
          ) : (
            <span>{subStepIndex + 1}</span>
          )}
        </div>
        <h4 className={cn(
          'font-medium',
          {
            'text-green-700': isCompleted,
            'text-red-600': isActive && !isCompleted,
            'text-gray-500': !isActive && !isCompleted,
          }
        )}>
          {subStep.title} *
        </h4>
      </div>
      
      <div className={cn('grid gap-4', gridCols)}>
        {subStep.options.map((option) => (
          <div
            key={option.id}
            className={cn(
              'flex flex-col items-center p-4 border-2 rounded-lg transition-colors min-h-[100px] justify-center',
              {
                'border-red-500 bg-red-50': option.selected,
                'border-gray-200 hover:border-red-300 bg-white': !option.selected && (isActive || isCompleted),
                'border-gray-200 bg-gray-50': !option.selected && !isActive && !isCompleted,
                'cursor-pointer': isActive,
                'cursor-not-allowed opacity-60': !isActive && !isCompleted,
              }
            )}
            onClick={() => {
              if (isActive) {
                onOptionToggle(option.id);
              }
            }}
          >
            <div className="flex items-center justify-center w-8 h-8 mb-2">
              {option.icon}
            </div>
            <span className="text-sm font-medium text-center">{option.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubStepCard;
