
import React from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { StepData } from './types';

interface SubStepCardProps {
  subStep: StepData;
  subStepIndex: number;
  isActive: boolean;
  isCompleted: boolean;
  onSubStepClick: (subStepIndex: number) => void;
  getStepContent: (stepIndex: number, subStepIndex: number) => React.ReactNode;
  parentStepIndex: number;
}

const SubStepCard: React.FC<SubStepCardProps> = ({
  subStep,
  subStepIndex,
  isActive,
  isCompleted,
  onSubStepClick,
  getStepContent,
  parentStepIndex,
}) => {
  if (isActive) {
    return (
      <Card className="border border-red-200 bg-red-50">
        <CardContent className="py-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-6 h-6 bg-red-500 text-white rounded-full text-xs">
              {subStepIndex + 1}
            </div>
            <h5 className="font-medium text-red-600">{subStep.title}</h5>
          </div>
          <div className="ml-9">
            {getStepContent(parentStepIndex, subStepIndex)}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card
      className={cn(
        'border cursor-pointer hover:shadow-sm transition-all duration-200',
        {
          'border-green-200 bg-green-50': isCompleted,
          'border-gray-200 bg-gray-50': !isCompleted,
        }
      )}
      onClick={() => onSubStepClick(subStepIndex)}
    >
      <CardContent className="py-3">
        <div className="flex items-center gap-3">
          <div
            className={cn(
              'flex items-center justify-center w-6 h-6 rounded-full text-xs',
              {
                'bg-green-500 text-white': isCompleted,
                'bg-gray-200 text-gray-600': !isCompleted,
              }
            )}
          >
            {isCompleted ? (
              <Check className="w-3 h-3" />
            ) : (
              <span>{subStepIndex + 1}</span>
            )}
          </div>
          <h5
            className={cn(
              'font-medium text-sm',
              {
                'text-green-700': isCompleted,
                'text-gray-600': !isCompleted,
              }
            )}
          >
            {subStep.title}
          </h5>
        </div>
      </CardContent>
    </Card>
  );
};

export default SubStepCard;
