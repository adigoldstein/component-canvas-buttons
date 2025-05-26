
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { OTPInput } from './lib/OTPInput';
import BackButton from './lib/BackButton';

const OTPShowcase: React.FC = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState('');
  const [otp4, setOtp4] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  const handleBack = () => {
    navigate('/');
  };

  const handleOTPChange = (value: string) => {
    setOtp(value);
    setIsComplete(value.length === 6);
  };

  const handleOTP4Change = (value: string) => {
    setOtp4(value);
  };

  return (
    <div className="p-8 space-y-8 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <BackButton onClick={handleBack} />
        </div>

        <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">
          OTP Input Component
        </h1>

        {/* Basic OTP Input */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Basic 6-Digit OTP</h2>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="space-y-4">
              <OTPInput 
                onChange={handleOTPChange}
                autoFocus
              />
              <div className="text-sm text-gray-600">
                Current OTP: <span className="font-mono font-semibold">{otp || 'Not entered'}</span>
              </div>
              {isComplete && (
                <div className="text-green-600 font-medium">
                  ✓ OTP Complete!
                </div>
              )}
            </div>
          </div>
        </section>

        {/* 4-Digit OTP */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">4-Digit OTP</h2>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="space-y-4">
              <OTPInput 
                length={4}
                onChange={handleOTP4Change}
              />
              <div className="text-sm text-gray-600">
                Current OTP: <span className="font-mono font-semibold">{otp4 || 'Not entered'}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Disabled State */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Disabled State</h2>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <OTPInput 
              onChange={() => {}}
              disabled
            />
          </div>
        </section>

        {/* Usage Instructions */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Features</h2>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>Auto-focus:</strong> Automatically moves to the next input when a digit is entered</li>
              <li>• <strong>Backspace navigation:</strong> Moves to previous input and clears it</li>
              <li>• <strong>Arrow key navigation:</strong> Use left/right arrows to navigate between inputs</li>
              <li>• <strong>Paste support:</strong> Paste a complete OTP and it will fill all inputs</li>
              <li>• <strong>Numeric only:</strong> Only accepts numeric digits (0-9)</li>
              <li>• <strong>Accessible:</strong> Proper ARIA labels for screen readers</li>
              <li>• <strong>Visual feedback:</strong> Active input is highlighted, filled inputs have background color</li>
            </ul>
          </div>
        </section>

        {/* Code Examples */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Usage Examples</h2>
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
            <pre>{`// Basic 6-digit OTP
<OTPInput onChange={(code) => console.log(code)} />

// 4-digit OTP with auto-focus
<OTPInput 
  length={4} 
  onChange={(code) => console.log(code)}
  autoFocus 
/>

// Disabled state
<OTPInput 
  onChange={() => {}}
  disabled 
/>

// With custom styling
<OTPInput 
  onChange={(code) => console.log(code)}
  className="justify-center"
/>`}</pre>
          </div>
        </section>
      </div>
    </div>
  );
};

export default OTPShowcase;
