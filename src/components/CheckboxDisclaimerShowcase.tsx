
import React from 'react';
import { CheckboxDisclaimer } from '@/components/lib/CheckboxDisclaimer';

const CheckboxDisclaimerShowcase: React.FC = () => {
  const handleDisclaimerChange = (id: string, checked: boolean) => {
    console.log(`Disclaimer ${id} is now ${checked ? 'checked' : 'unchecked'}`);
  };

  return (
    <div className="max-w-4xl mx-auto p-8 space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Checkbox Disclaimer Component
        </h1>
        <p className="text-gray-600">
          A component for displaying disclaimer text with a checkbox
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-4">Examples</h2>
          
          <div className="space-y-4">
            <CheckboxDisclaimer
              id="disclaimer-1"
              text="I confirm that this information is accurate and complete. I understand that providing false information may result in claim denial."
              onChange={handleDisclaimerChange}
            />

            <CheckboxDisclaimer
              id="disclaimer-2"
              text="I agree to the terms and conditions and privacy policy. By checking this box, I consent to the collection and processing of my personal data."
              defaultChecked={true}
              onChange={handleDisclaimerChange}
            />

            <CheckboxDisclaimer
              id="disclaimer-3"
              text="I acknowledge that I have read and understood the insurance policy details, including coverage limits, deductibles, and exclusions."
              onChange={handleDisclaimerChange}
            />
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Custom Styling</h2>
          
          <CheckboxDisclaimer
            id="disclaimer-custom"
            text="This is a custom styled disclaimer with a different background color and border."
            className="bg-blue-50 border-blue-200"
            onChange={handleDisclaimerChange}
          />
        </div>
      </div>
    </div>
  );
};

export default CheckboxDisclaimerShowcase;
