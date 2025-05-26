
import React from 'react';
import { cn } from '@/lib/utils';
import { StepperProps } from './types';
import StepCard from './StepCard';

const Stepper: React.FC<StepperProps> = ({
  steps,
  currentStep,
  currentSubStep = 0,
  onNext,
  onBack,
  onStepChange,
  onMemberToggle,
  onSubStepOptionToggle,
  children,
  renderStepContent,
  isStepCompleted,
  nextButtonText = 'Next',
  backButtonText = 'Back',
  hideBackButton = false,
  hideNextButton = false,
  allowStepClick = false,
  allowMultipleSelection = false,
  className,
}) => {
  const handleStepClick = (stepIndex: number) => {
    if (allowStepClick && onStepChange) {
      onStepChange(stepIndex);
    }
  };

  const handleSubStepClick = (stepIndex: number, subStepIndex: number) => {
    if (onStepChange) {
      onStepChange(stepIndex, subStepIndex);
    }
  };

  const getStepContent = (stepIndex: number, subStepIndex?: number) => {
    if (renderStepContent) {
      return renderStepContent(stepIndex, subStepIndex);
    }
    
    if (typeof children === 'function') {
      return children(stepIndex, subStepIndex);
    }
    
    return children;
  };

  const isCompleted = (stepIndex: number, subStepIndex?: number) => {
    if (isStepCompleted) {
      return isStepCompleted(stepIndex, subStepIndex);
    }
    
    if (subStepIndex !== undefined) {
      return steps[stepIndex]?.subSteps?.[subStepIndex]?.completed || false;
    }
    
    return steps[stepIndex]?.completed || stepIndex < currentStep;
  };

  return (
    <div className={cn('w-full max-w-4xl mx-auto space-y-4', className)}>
      {steps.map((step, index) => (
        <StepCard
          key={step.id}
          step={step}
          stepIndex={index}
          currentSubStep={index === currentStep ? currentSubStep : 0}
          isActive={index === currentStep}
          isCompleted={isCompleted(index)}
          onStepClick={handleStepClick}
          onSubStepClick={handleSubStepClick}
          onMemberToggle={onMemberToggle}
          onSubStepOptionToggle={onSubStepOptionToggle}
          getStepContent={getStepContent}
          currentStep={currentStep}
          totalSteps={steps.length}
          onNext={onNext}
          onBack={onBack}
          nextButtonText={nextButtonText}
          backButtonText={backButtonText}
          hideBackButton={hideBackButton}
          hideNextButton={hideNextButton}
          allowMultipleSelection={allowMultipleSelection}
        />
      ))}
    </div>
  );
};

export default Stepper;
