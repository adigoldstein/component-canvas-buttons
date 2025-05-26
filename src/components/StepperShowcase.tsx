
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Stepper } from './lib/Stepper';
import { StepData, Member } from './lib/Stepper/types';
import BackButton from './lib/BackButton';
import { User, FileText, Upload } from 'lucide-react';

const StepperShowcase: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [currentSubStep, setCurrentSubStep] = useState(0);
  const [stepData, setStepData] = useState<StepData[]>([
    {
      id: 'step-1',
      title: 'Member & Claim Type Selection',
      icon: <User className="w-4 h-4" />,
      members: [
        { id: 'me', name: 'Me', selected: false },
        { id: 'spouse', name: 'Spouse', selected: false },
        { id: 'child1', name: 'Child 1', selected: false },
        { id: 'child2', name: 'Child 2', selected: false },
      ],
      subSteps: [
        { id: 'sub-1-1', title: 'Select Member', completed: false },
        { id: 'sub-1-2', title: 'Choose Claim Type', completed: false },
        { id: 'sub-1-3', title: 'Verify Information', completed: false },
      ],
      required: true,
      completed: false,
    },
    {
      id: 'step-2',
      title: 'Document Upload',
      icon: <Upload className="w-4 h-4" />,
      subSteps: [
        { id: 'sub-2-1', title: 'Upload Medical Records', completed: false },
        { id: 'sub-2-2', title: 'Upload Insurance Card', completed: false },
        { id: 'sub-2-3', title: 'Upload Supporting Documents', completed: false },
      ],
      required: true,
      completed: false,
    },
    {
      id: 'step-3',
      title: 'Claim Details',
      icon: <FileText className="w-4 h-4" />,
      required: true,
      completed: false,
    },
  ]);

  const handleBack = () => {
    navigate('/');
  };

  const handleNext = () => {
    const currentStepData = stepData[currentStep];
    
    if (currentStepData.subSteps && currentSubStep < currentStepData.subSteps.length - 1) {
      // Move to next sub-step
      setCurrentSubStep(currentSubStep + 1);
      
      // Mark current sub-step as completed
      const updatedSteps = [...stepData];
      updatedSteps[currentStep].subSteps![currentSubStep].completed = true;
      setStepData(updatedSteps);
    } else if (currentStep < stepData.length - 1) {
      // Move to next main step
      const updatedSteps = [...stepData];
      
      // Complete current sub-step if exists
      if (currentStepData.subSteps) {
        updatedSteps[currentStep].subSteps![currentSubStep].completed = true;
      }
      
      // Mark main step as completed
      updatedSteps[currentStep].completed = true;
      setStepData(updatedSteps);
      
      setCurrentStep(currentStep + 1);
      setCurrentSubStep(0);
    }
  };

  const handleBackStepper = () => {
    if (currentSubStep > 0) {
      setCurrentSubStep(currentSubStep - 1);
    } else if (currentStep > 0) {
      const prevStep = currentStep - 1;
      const prevStepData = stepData[prevStep];
      setCurrentStep(prevStep);
      setCurrentSubStep(prevStepData.subSteps ? prevStepData.subSteps.length - 1 : 0);
    }
  };

  const handleStepChange = (stepIndex: number, subStepIndex?: number) => {
    setCurrentStep(stepIndex);
    setCurrentSubStep(subStepIndex || 0);
  };

  const handleMemberToggle = (stepId: string, memberId: string) => {
    const updatedSteps = stepData.map(step => {
      if (step.id === stepId && step.members) {
        return {
          ...step,
          members: step.members.map(member => 
            member.id === memberId 
              ? { ...member, selected: !member.selected }
              : member
          ),
        };
      }
      return step;
    });
    setStepData(updatedSteps);
  };

  const isStepCompleted = (stepIndex: number, subStepIndex?: number) => {
    if (subStepIndex !== undefined) {
      return stepData[stepIndex]?.subSteps?.[subStepIndex]?.completed || false;
    }
    return stepData[stepIndex]?.completed || false;
  };

  const renderStepContent = (stepIndex: number, subStepIndex?: number) => {
    const step = stepData[stepIndex];
    
    if (step.subSteps && subStepIndex !== undefined) {
      const subStep = step.subSteps[subStepIndex];
      
      switch (subStep.id) {
        case 'sub-1-2':
          return (
            <div>
              <p className="text-gray-600 mb-4">Choose your claim type:</p>
              <div className="space-y-2">
                <label className="flex items-center space-x-2">
                  <input type="radio" name="claimType" value="medical" />
                  <span>Medical Claim</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="radio" name="claimType" value="dental" />
                  <span>Dental Claim</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="radio" name="claimType" value="vision" />
                  <span>Vision Claim</span>
                </label>
              </div>
            </div>
          );
        case 'sub-1-3':
          return (
            <div>
              <p className="text-gray-600 mb-4">Please verify your information:</p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-700">
                  Selected members and claim type will be verified here.
                </p>
              </div>
            </div>
          );
        case 'sub-2-1':
        case 'sub-2-2':
        case 'sub-2-3':
          return (
            <div>
              <p className="text-gray-600 mb-4">Upload your {subStep.title.toLowerCase()}</p>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <p className="text-gray-500">Drag and drop files here or click to browse</p>
              </div>
            </div>
          );
        default:
          return <div>Sub-step content for {subStep.title}</div>;
      }
    }

    // Main step content without sub-steps
    switch (stepIndex) {
      case 2:
        return (
          <div>
            <p className="text-gray-600 mb-4">Provide claim details</p>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Claim Description
                </label>
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  rows={4}
                  placeholder="Describe your claim..."
                />
              </div>
            </div>
          </div>
        );
      default:
        return <div>Step content for step {stepIndex + 1}</div>;
    }
  };

  return (
    <div className="p-8 space-y-8 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <BackButton onClick={handleBack} />
        </div>

        <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">
          Advanced Stepper Component Showcase
        </h1>

        <Stepper
          steps={stepData}
          currentStep={currentStep}
          currentSubStep={currentSubStep}
          onNext={handleNext}
          onBack={handleBackStepper}
          onStepChange={handleStepChange}
          onMemberToggle={handleMemberToggle}
          renderStepContent={renderStepContent}
          isStepCompleted={isStepCompleted}
          allowStepClick={true}
          allowMultipleSelection={true}
        />

        {/* Code Example */}
        <section className="mt-12">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Usage Example</h2>
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
            <pre>{`// Advanced Stepper with nested steps and members
const steps = [
  {
    id: 'step-1',
    title: 'Member & Claim Type Selection',
    icon: <User className="w-4 h-4" />,
    members: [
      { id: 'me', name: 'Me', selected: false },
      { id: 'spouse', name: 'Spouse', selected: false },
    ],
    subSteps: [
      { id: 'sub-1-1', title: 'Select Member', completed: false },
      { id: 'sub-1-2', title: 'Choose Claim Type', completed: false },
    ],
    required: true,
  },
];

<Stepper
  steps={steps}
  currentStep={currentStep}
  currentSubStep={currentSubStep}
  onNext={handleNext}
  onBack={handleBack}
  onStepChange={handleStepChange}
  onMemberToggle={handleMemberToggle}
  renderStepContent={renderStepContent}
  allowStepClick={true}
  allowMultipleSelection={true}
/>`}</pre>
          </div>
        </section>
      </div>
    </div>
  );
};

export default StepperShowcase;
