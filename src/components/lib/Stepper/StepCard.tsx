
import React from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { StepData } from './types';
import StepNavigation from './StepNavigation';

interface StepCardProps {
  step: StepData;
  stepIndex: number;
  isActive: boolean;
  isCompleted: boolean;
  onStepClick: (stepIndex: number) => void;
  getStepContent: (stepIndex: number) => React.ReactNode;
  currentStep: number;
  totalSteps: number;
  onNext?: () => void;
  onBack?: () => void;
  nextButtonText: string;
  backButtonText: string;
  hideBackButton: boolean;
  hideNextButton: boolean;
}

const StepCard: React.FC<StepCardProps> = ({
  step,
  stepIndex,
  isActive,
  isCompleted,
  onStepClick,
  getStepContent,
  currentStep,
  totalSteps,
  onNext,
  onBack,
  nextButtonText,
  backButtonText,
  hideBackButton,
  hideNextButton,
}) => {
  if (isActive) {
    // Active Step Content (Expanded)
    return (
      <Card className={cn(
        'border-2 transition-all duration-200 border-red-200 shadow-lg'
      )}>
        <CardHeader className="pb-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-8 h-8 bg-red-500 text-white rounded-full">
              <span className="text-sm font-medium">{stepIndex + 1}</span>
            </div>
            <h3 className="text-lg font-semibold text-red-600">
              {step.title}
            </h3>
          </div>
        </CardHeader>
        
        <CardContent className="pt-0">
          {/* Step Content */}
          <div className="mb-6">
            {getStepContent(stepIndex)}
          </div>

          {/* Navigation Buttons */}
          <StepNavigation
            currentStep={currentStep}
            totalSteps={totalSteps}
            onNext={onNext}
            onBack={onBack}
            nextButtonText={nextButtonText}
            backButtonText={backButtonText}
            hideBackButton={hideBackButton}
            hideNextButton={hideNextButton}
          />
        </CardContent>
      </Card>
    );
  } else {
    // Inactive Steps (Collapsed)
    return (
      <Card
        className={cn(
          'border transition-all duration-200 cursor-pointer hover:shadow-md',
          {
            'border-green-200 bg-green-50': isCompleted,
            'border-gray-200 bg-gray-50': !isCompleted,
          }
        )}
        onClick={() => onStepClick(stepIndex)}
      >
        <CardContent className="py-4">
          <div className="flex items-center gap-3">
            <div
              className={cn(
                'flex items-center justify-center w-8 h-8 rounded-full border-2',
                {
                  'bg-green-500 border-green-500 text-white': isCompleted,
                  'bg-gray-100 border-gray-300 text-gray-500': !isCompleted,
                }
              )}
            >
              {isCompleted ? (
                <Check className="w-4 h-4" />
              ) : (
                <span className="text-sm">{stepIndex + 1}</span>
              )}
            </div>
            <h4
              className={cn(
                'font-medium',
                {
                  'text-green-700': isCompleted,
                  'text-gray-600': !isCompleted,
                }
              )}
            >
              {step.title}
            </h4>
          </div>
        </CardContent>
      </Card>
    );
  }
};

export default StepCard;
