
import React from 'react';
import { cn } from '@/lib/utils';
import { StepperProps } from './types';
import StepHeader from './StepHeader';
import StepCard from './StepCard';

const Stepper: React.FC<StepperProps> = ({
  steps,
  currentStep,
  onNext,
  onBack,
  onStepChange,
  children,
  renderStepContent,
  isStepCompleted,
  nextButtonText = 'Next',
  backButtonText = 'Back',
  hideBackButton = false,
  hideNextButton = false,
  allowStepClick = false,
  className,
}) => {
  const handleNext = () => {
    if (currentStep < steps.length - 1 && onNext) {
      onNext();
    }
  };

  const handleBack = () => {
    if (currentStep > 0 && onBack) {
      onBack();
    }
  };

  const handleStepClick = (stepIndex: number) => {
    if (allowStepClick && onStepChange) {
      onStepChange(stepIndex);
    }
  };

  const getStepContent = (stepIndex: number) => {
    if (renderStepContent) {
      return renderStepContent(stepIndex);
    }
    
    if (typeof children === 'function') {
      return children(stepIndex);
    }
    
    return children;
  };

  const isCompleted = (stepIndex: number) => {
    if (isStepCompleted) {
      return isStepCompleted(stepIndex);
    }
    return steps[stepIndex]?.completed || stepIndex < currentStep;
  };

  return (
    <div className={cn('w-full max-w-4xl mx-auto space-y-6', className)}>
      {/* Steps Header */}
      {/* <StepHeader
        steps={steps}
        currentStep={currentStep}
        onStepClick={handleStepClick}
        isStepCompleted={isCompleted}
        allowStepClick={allowStepClick}
      /> */}

      {/* All Steps */}
      <div className="space-y-4">
        {steps.map((step, index) => (
          <StepCard
            key={index}
            step={step}
            stepIndex={index}
            isActive={index === currentStep}
            isCompleted={isCompleted(index)}
            onStepClick={handleStepClick}
            getStepContent={getStepContent}
            currentStep={currentStep}
            totalSteps={steps.length}
            onNext={handleNext}
            onBack={handleBack}
            nextButtonText={nextButtonText}
            backButtonText={backButtonText}
            hideBackButton={hideBackButton}
            hideNextButton={hideNextButton}
          />
        ))}
      </div>
    </div>
  );
};

export default Stepper;
