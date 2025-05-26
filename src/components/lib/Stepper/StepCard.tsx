
import React from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { StepData } from './types';
import StepNavigation from './StepNavigation';
import SubStepCard from './SubStepCard';
import MemberSelector from './MemberSelector';

interface StepCardProps {
  step: StepData;
  stepIndex: number;
  currentSubStep?: number;
  isActive: boolean;
  isCompleted: boolean;
  onStepClick: (stepIndex: number) => void;
  onSubStepClick?: (stepIndex: number, subStepIndex: number) => void;
  onMemberToggle?: (stepId: string, memberId: string) => void;
  getStepContent: (stepIndex: number, subStepIndex?: number) => React.ReactNode;
  currentStep: number;
  totalSteps: number;
  onNext?: () => void;
  onBack?: () => void;
  nextButtonText: string;
  backButtonText: string;
  hideBackButton: boolean;
  hideNextButton: boolean;
  allowMultipleSelection?: boolean;
}

const StepCard: React.FC<StepCardProps> = ({
  step,
  stepIndex,
  currentSubStep = 0,
  isActive,
  isCompleted,
  onStepClick,
  onSubStepClick,
  onMemberToggle,
  getStepContent,
  currentStep,
  totalSteps,
  onNext,
  onBack,
  nextButtonText,
  backButtonText,
  hideBackButton,
  hideNextButton,
  allowMultipleSelection = false,
}) => {
  const hasSubSteps = step.subSteps && step.subSteps.length > 0;
  const hasMembers = step.members && step.members.length > 0;
  
  const handleMemberToggle = (memberId: string) => {
    if (onMemberToggle) {
      onMemberToggle(step.id, memberId);
    }
  };

  const handleSubStepClick = (subStepIndex: number) => {
    if (onSubStepClick) {
      onSubStepClick(stepIndex, subStepIndex);
    }
  };

  const isSubStepCompleted = (subStepIndex: number) => {
    return step.subSteps?.[subStepIndex]?.completed || false;
  };

  const getStepProgress = () => {
    if (!hasSubSteps) return isCompleted ? 'completed' : 'pending';
    
    const completedSubSteps = step.subSteps?.filter(subStep => subStep.completed).length || 0;
    const totalSubSteps = step.subSteps?.length || 0;
    
    if (completedSubSteps === totalSubSteps) return 'completed';
    if (completedSubSteps > 0 || isActive) return 'in-progress';
    return 'pending';
  };

  const stepProgress = getStepProgress();

  if (isActive) {
    return (
      <Card className="border-2 border-red-200 shadow-lg">
        <CardHeader className="pb-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-8 h-8 bg-red-500 text-white rounded-full">
              {step.icon || <span className="text-sm font-medium">{stepIndex + 1}</span>}
            </div>
            <h3 className="text-lg font-semibold text-red-600">{step.title}</h3>
            {stepProgress === 'in-progress' && (
              <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
                In Progress
              </span>
            )}
          </div>
        </CardHeader>
        
        <CardContent className="pt-0 space-y-6">
          {/* Members Section */}
          {hasMembers && (
            <div>
              <p className="text-gray-600 mb-4">Select Covered Member{allowMultipleSelection ? 's' : ''} *</p>
              <MemberSelector
                members={step.members!}
                onMemberToggle={handleMemberToggle}
                allowMultiple={allowMultipleSelection}
              />
            </div>
          )}

          {/* Sub Steps Section */}
          {hasSubSteps && (
            <div className="space-y-3">
              <h4 className="font-medium text-gray-700">Steps to Complete:</h4>
              {step.subSteps!.map((subStep, subStepIndex) => (
                <SubStepCard
                  key={subStep.id}
                  subStep={subStep}
                  subStepIndex={subStepIndex}
                  parentStepIndex={stepIndex}
                  isActive={subStepIndex === currentSubStep}
                  isCompleted={isSubStepCompleted(subStepIndex)}
                  onSubStepClick={handleSubStepClick}
                  getStepContent={getStepContent}
                />
              ))}
            </div>
          )}

          {/* Regular Step Content */}
          {!hasSubSteps && !hasMembers && (
            <div>{getStepContent(stepIndex)}</div>
          )}

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
  }

  // Inactive Steps (Collapsed)
  return (
    <Card
      className={cn(
        'border transition-all duration-200 cursor-pointer hover:shadow-md',
        {
          'border-green-200 bg-green-50': stepProgress === 'completed',
          'border-yellow-200 bg-yellow-50': stepProgress === 'in-progress',
          'border-gray-200 bg-gray-50': stepProgress === 'pending',
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
                'bg-green-500 border-green-500 text-white': stepProgress === 'completed',
                'bg-yellow-500 border-yellow-500 text-white': stepProgress === 'in-progress',
                'bg-gray-100 border-gray-300 text-gray-500': stepProgress === 'pending',
              }
            )}
          >
            {stepProgress === 'completed' ? (
              <Check className="w-4 h-4" />
            ) : (
              step.icon || <span className="text-sm">{stepIndex + 1}</span>
            )}
          </div>
          <div className="flex-1">
            <h4
              className={cn(
                'font-medium',
                {
                  'text-green-700': stepProgress === 'completed',
                  'text-yellow-700': stepProgress === 'in-progress',
                  'text-gray-600': stepProgress === 'pending',
                }
              )}
            >
              {step.title}
            </h4>
            {hasSubSteps && (
              <p className="text-xs text-gray-500 mt-1">
                {step.subSteps?.filter(s => s.completed).length || 0} of {step.subSteps?.length || 0} completed
              </p>
            )}
          </div>
          {stepProgress === 'in-progress' && (
            <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
              In Progress
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default StepCard;
