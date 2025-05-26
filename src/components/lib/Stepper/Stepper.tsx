
import React from 'react';
import { Check, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { StepperProps } from './types';

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
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center flex-1">
            {/* Step Circle */}
            <div
              className={cn(
                'flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-200',
                {
                  'bg-red-500 border-red-500 text-white': index === currentStep,
                  'bg-green-500 border-green-500 text-white': isCompleted(index) && index !== currentStep,
                  'bg-gray-100 border-gray-300 text-gray-500': index > currentStep && !isCompleted(index),
                  'cursor-pointer hover:border-red-400': allowStepClick,
                }
              )}
              onClick={() => handleStepClick(index)}
            >
              {isCompleted(index) && index !== currentStep ? (
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
                    'text-green-600': isCompleted(index) && index !== currentStep,
                    'text-gray-500': index > currentStep && !isCompleted(index),
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
                    'bg-green-500': isCompleted(index),
                    'bg-gray-300': !isCompleted(index),
                  }
                )}
              />
            )}
          </div>
        ))}
      </div>

      {/* Active Step Content */}
      <Card className={cn(
        'border-2 transition-all duration-200',
        {
          'border-red-200 shadow-lg': true,
        }
      )}>
        <CardHeader className="pb-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-8 h-8 bg-red-500 text-white rounded-full">
              <span className="text-sm font-medium">{currentStep + 1}</span>
            </div>
            <h3 className="text-lg font-semibold text-red-600">
              {steps[currentStep]?.title}
            </h3>
          </div>
        </CardHeader>
        
        <CardContent className="pt-0">
          {/* Step Content */}
          <div className="mb-6">
            {getStepContent(currentStep)}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center">
            <div>
              {!hideBackButton && currentStep > 0 && (
                <Button
                  variant="outline"
                  onClick={handleBack}
                  className="px-6"
                >
                  {backButtonText}
                </Button>
              )}
            </div>
            
            <div>
              {!hideNextButton && currentStep < steps.length - 1 && (
                <Button
                  onClick={handleNext}
                  className="px-6 bg-red-500 hover:bg-red-600 text-white"
                >
                  {nextButtonText}
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Inactive Steps (Collapsed) */}
      <div className="space-y-4">
        {steps.map((step, index) => {
          if (index === currentStep) return null;
          
          return (
            <Card
              key={index}
              className={cn(
                'border transition-all duration-200 cursor-pointer hover:shadow-md',
                {
                  'border-green-200 bg-green-50': isCompleted(index),
                  'border-gray-200 bg-gray-50': !isCompleted(index),
                }
              )}
              onClick={() => handleStepClick(index)}
            >
              <CardContent className="py-4">
                <div className="flex items-center gap-3">
                  <div
                    className={cn(
                      'flex items-center justify-center w-8 h-8 rounded-full border-2',
                      {
                        'bg-green-500 border-green-500 text-white': isCompleted(index),
                        'bg-gray-100 border-gray-300 text-gray-500': !isCompleted(index),
                      }
                    )}
                  >
                    {isCompleted(index) ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <span className="text-sm">{index + 1}</span>
                    )}
                  </div>
                  <h4
                    className={cn(
                      'font-medium',
                      {
                        'text-green-700': isCompleted(index),
                        'text-gray-600': !isCompleted(index),
                      }
                    )}
                  >
                    {step.title}
                  </h4>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Stepper;
