
import React from 'react';
import { Button } from '@/components/ui/button';

interface StepNavigationProps {
  currentStep: number;
  totalSteps: number;
  onNext?: () => void;
  onBack?: () => void;
  nextButtonText: string;
  backButtonText: string;
  hideBackButton: boolean;
  hideNextButton: boolean;
}

const StepNavigation: React.FC<StepNavigationProps> = ({
  currentStep,
  totalSteps,
  onNext,
  onBack,
  nextButtonText,
  backButtonText,
  hideBackButton,
  hideNextButton,
}) => {
  return (
    <div className="flex justify-between items-center">
      <div>
        {!hideBackButton && currentStep > 0 && (
          <Button
            variant="outline"
            onClick={onBack}
            className="px-6"
          >
            {backButtonText}
          </Button>
        )}
      </div>
      
      <div>
        {!hideNextButton && currentStep < totalSteps - 1 && (
          <Button
            onClick={onNext}
            className="px-6 bg-red-500 hover:bg-red-600 text-white"
          >
            {nextButtonText}
          </Button>
        )}
      </div>
    </div>
  );
};

export default StepNavigation;
