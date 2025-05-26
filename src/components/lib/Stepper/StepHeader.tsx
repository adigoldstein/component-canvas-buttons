
import React from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { StepData } from './types';

interface StepHeaderProps {
  steps: StepData[];
  currentStep: number;
  onStepClick: (stepIndex: number) => void;
  isStepCompleted: (stepIndex: number) => boolean;
  allowStepClick: boolean;
}

const StepHeader: React.FC<StepHeaderProps> = ({
  steps,
  currentStep,
  onStepClick,
  isStepCompleted,
  allowStepClick,
}) => {
  return (
    <div className="flex items-center justify-between">
      {steps.map((step, index) => (
        <div key={index} className="flex items-center flex-1">
          {/* Step Circle */}
          <div
            className={cn(
              'flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-200',
              {
                'bg-red-500 border-red-500 text-white': index === currentStep,
                'bg-green-500 border-green-500 text-white': isStepCompleted(index) && index !== currentStep,
                'bg-gray-100 border-gray-300 text-gray-500': index > currentStep && !isStepCompleted(index),
                'cursor-pointer hover:border-red-400': allowStepClick,
              }
            )}
            onClick={() => onStepClick(index)}
          >
            {isStepCompleted(index) && index !== currentStep ? (
              <Check className="w-5 h-5" />
            ) : (
              <span className="text-sm font-medium">{index + 1}</span>
            )}
          </div>

          {/* Step Title */}
          <div className="ml-3 flex-1">
            <p
              className={cn(
                'text-sm font-medium transition-colors duration-200',
                {
                  'text-red-600': index === currentStep,
                  'text-green-600': isStepCompleted(index) && index !== currentStep,
                  'text-gray-500': index > currentStep && !isStepCompleted(index),
                }
              )}
            >
              {step.title}
            </p>
          </div>

          {/* Connector Line */}
          {index < steps.length - 1 && (
            <div
              className={cn(
                'h-0.5 w-full mx-4 transition-colors duration-200',
                {
                  'bg-green-500': isStepCompleted(index),
                  'bg-gray-300': !isStepCompleted(index),
                }
              )}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default StepHeader;
