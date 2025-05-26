
import React from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { StepData } from './types';

interface SubStepCardProps {
  subStep: StepData;
  subStepIndex: number;
  isActive: boolean;
  isCompleted: boolean;
  isRevealed: boolean;
  onSubStepClick: (subStepIndex: number) => void;
  getStepContent: (stepIndex: number, subStepIndex: number) => React.ReactNode;
  parentStepIndex: number;
}

const SubStepCard: React.FC<SubStepCardProps> = ({
  subStep,
  subStepIndex,
  isActive,
  isCompleted,
  isRevealed,
  onSubStepClick,
  getStepContent,
  parentStepIndex,
}) => {
  if (!isRevealed) {
    return null;
  }

  if (isActive) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center justify-center w-8 h-8 bg-red-500 text-white rounded-full">
            {subStep.icon || <span className="text-sm">{subStepIndex + 1}</span>}
          </div>
          <h5 className="font-medium text-red-600">{subStep.title}</h5>
        </div>
        <div className="ml-11">
          {getStepContent(parentStepIndex, subStepIndex)}
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        'flex items-center justify-center w-16 h-16 rounded-lg cursor-pointer transition-all duration-200 border-2',
        {
          'border-green-500 bg-green-50': isCompleted,
          'border-gray-300 bg-gray-50 hover:border-red-300': !isCompleted,
        }
      )}
      onClick={() => onSubStepClick(subStepIndex)}
    >
      <div
        className={cn(
          'flex items-center justify-center w-8 h-8 rounded-full',
          {
            'bg-green-500 text-white': isCompleted,
            'bg-gray-200 text-gray-600': !isCompleted,
          }
        )}
      >
        {isCompleted ? (
          <Check className="w-4 h-4" />
        ) : (
          subStep.icon || <span className="text-sm">{subStepIndex + 1}</span>
        )}
      </div>
    </div>
  );
};

export default SubStepCard;
