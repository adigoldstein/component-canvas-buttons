
export interface StepData {
  title: string;
  completed?: boolean;
}

export interface StepperProps {
  steps: StepData[];
  currentStep: number;
  onNext?: () => void;
  onBack?: () => void;
  onStepChange?: (stepIndex: number) => void;
  children?: React.ReactNode | ((stepIndex: number) => React.ReactNode);
  renderStepContent?: (stepIndex: number) => React.ReactNode;
  isStepCompleted?: (stepIndex: number) => boolean;
  nextButtonText?: string;
  backButtonText?: string;
  hideBackButton?: boolean;
  hideNextButton?: boolean;
  allowStepClick?: boolean;
  className?: string;
}
