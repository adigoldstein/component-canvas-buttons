
import { ReactNode } from 'react';

export interface Member {
  id: string;
  name: string;
  avatar?: string;
  selected?: boolean;
}

export interface StepData {
  id: string;
  title: string;
  icon?: ReactNode;
  subSteps?: StepData[];
  members?: Member[];
  required?: boolean;
  completed?: boolean;
}

export interface StepperProps {
  steps: StepData[];
  currentStep: number;
  currentSubStep?: number;
  onNext?: () => void;
  onBack?: () => void;
  onStepChange?: (stepIndex: number, subStepIndex?: number) => void;
  onMemberToggle?: (stepId: string, memberId: string) => void;
  children?: React.ReactNode | ((stepIndex: number, subStepIndex?: number) => React.ReactNode);
  renderStepContent?: (stepIndex: number, subStepIndex?: number) => React.ReactNode;
  isStepCompleted?: (stepIndex: number, subStepIndex?: number) => boolean;
  nextButtonText?: string;
  backButtonText?: string;
  hideBackButton?: boolean;
  hideNextButton?: boolean;
  allowStepClick?: boolean;
  allowMultipleSelection?: boolean;
  className?: string;
}
