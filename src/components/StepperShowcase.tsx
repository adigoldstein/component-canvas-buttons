import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Stepper } from './lib/Stepper';
import { StepData } from './lib/Stepper/types';
import { MemberCard } from './lib/MemberCard';
import BackButton from './lib/BackButton';

const StepperShowcase: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedMember, setSelectedMember] = useState<string | null>(null);

  const handleBack = () => {
    navigate('/');
  };

  const steps: StepData[] = [
    { title: 'Step 1: Claim Type Selection' },
    { title: 'Step 2: Upload Documents' },
    { title: 'Step 3: Claim Details' },
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBackStepper = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleStepChange = (stepIndex: number) => {
    setCurrentStep(stepIndex);
  };

  const isStepCompleted = (stepIndex: number) => {
    return stepIndex < currentStep;
  };

  const handleMemberSelect = (member: string) => {
    setSelectedMember(member);
  };

  const renderStepContent = (stepIndex: number) => {
    switch (stepIndex) {
      case 0:
        return (
          <div>
            <p className="text-gray-600 mb-6">Select Covered Member *</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Me', 'Spouse', 'Child 1', 'Child 2'].map((member) => (
                <MemberCard
                  key={member}
                  member={member}
                  isSelected={selectedMember === member}
                  onClick={() => handleMemberSelect(member)}
                />
              ))}
            </div>
          </div>
        );
      case 1:
        return (
          <div>
            <p className="text-gray-600 mb-4">Upload your claim documents</p>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <p className="text-gray-500">Drag and drop files here or click to browse</p>
            </div>
          </div>
        );
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
        return <div>Step content not found</div>;
    }
  };

  return (
    <div className="p-8 space-y-8 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <BackButton onClick={handleBack} />
        </div>

        <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">
          Stepper Component Showcase
        </h1>

        <Stepper
          steps={steps}
          currentStep={currentStep}
          onNext={handleNext}
          onBack={handleBackStepper}
          onStepChange={handleStepChange}
          renderStepContent={renderStepContent}
          isStepCompleted={isStepCompleted}
          allowStepClick={true}
        />

        {/* Code Example */}
        <section className="mt-12">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Usage Example</h2>
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
            <pre>{`// Basic usage with MemberCard component
const steps = [
  { title: 'Step 1: Claim Type Selection' },
  { title: 'Step 2: Upload Documents' },
  { title: 'Step 3: Claim Details' },
];

<Stepper
  steps={steps}
  currentStep={currentStep}
  onNext={handleNext}
  onBack={handleBack}
  renderStepContent={renderStepContent}
  isStepCompleted={isStepCompleted}
  allowStepClick={true}
/>

// MemberCard usage
<MemberCard
  member="Me"
  isSelected={selectedMember === "Me"}
  onClick={() => handleMemberSelect("Me")}
/>`}</pre>
          </div>
        </section>
      </div>
    </div>
  );
};

export default StepperShowcase;
