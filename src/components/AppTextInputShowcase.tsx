import React, { useState } from 'react';
import { AppTextInput } from './lib/AppTextInput';
import { AppDateInput } from './lib/AppDateInput';
import { AppSelectInput, SelectOption } from './lib/AppSelectInput';
import { AppTextArea } from './lib/AppTextArea';

const AppTextInputShowcase: React.FC = () => {
  const [textValue, setTextValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [ageValue, setAgeValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [multilineValue, setMultilineValue] = useState('');
  const [errorValue, setErrorValue] = useState('invalid-email');
  const [serviceDate, setServiceDate] = useState<Date | undefined>();
  const [birthDate, setBirthDate] = useState<Date | undefined>();
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedTreatments, setSelectedTreatments] = useState('');
  const [descriptionValue, setDescriptionValue] = useState('This is a description of the treatment with some sample text.');

  const countryOptions: SelectOption[] = [
    { value: 'us', label: 'United States' },
    { value: 'ca', label: 'Canada' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'de', label: 'Germany' },
    { value: 'fr', label: 'France' },
    { value: 'au', label: 'Australia' },
  ];

  const cityOptions: SelectOption[] = [
    { value: 'ny', label: 'New York' },
    { value: 'la', label: 'Los Angeles' },
    { value: 'chicago', label: 'Chicago' },
    { value: 'houston', label: 'Houston' },
    { value: 'phoenix', label: 'Phoenix' },
  ];

  const treatmentOptions: SelectOption[] = [
    { value: '1', label: '1 Treatment' },
    { value: '2', label: '2 Treatments' },
    { value: '3', label: '3 Treatments' },
    { value: '4', label: '4 Treatments' },
    { value: '5', label: '5+ Treatments' },
  ];

  return (
    <div className="p-8 space-y-8 bg-gray-50 min-h-screen">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">
          App Input Component Library
        </h1>

        {/* Dropdown/Select Input Examples */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Dropdown Inputs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <AppSelectInput
              label="Select Country"
              placeholder="Select country"
              value={selectedCountry}
              onValueChange={setSelectedCountry}
              options={countryOptions}
              required
            />
            <AppSelectInput
              label="Select City"
              placeholder="Select city"
              value={selectedCity}
              onValueChange={setSelectedCity}
              options={cityOptions}
            />
          </div>
          <div className="mt-4">
            <AppSelectInput
              label="Number of Treatments"
              placeholder="Choose Amount"
              value={selectedTreatments}
              onValueChange={setSelectedTreatments}
              options={treatmentOptions}
              required
            />
          </div>
        </section>

        {/* Date Input Examples */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Date Inputs</h2>
          <div className="space-y-4">
            <AppDateInput
              label="Service Date"
              placeholder="mm/dd/yyyy"
              value={serviceDate}
              onDateChange={setServiceDate}
              required
            />
            <AppDateInput
              label="Date of Birth"
              placeholder="Select your birth date"
              value={birthDate}
              onDateChange={setBirthDate}
            />
          </div>
        </section>

        {/* TextArea Input */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">TextArea Input</h2>
          <AppTextArea
            label="Description of Treatment"
            placeholder="Please describe the treatment in detail..."
            value={descriptionValue}
            onChange={setDescriptionValue}
            maxLength={500}
            rows={6}
          />
        </section>

        {/* Basic Text Input */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Text Input</h2>
          <AppTextInput
            label="Name"
            placeholder="Enter your full name"
            value={textValue}
            onChangeText={setTextValue}
          />
        </section>

        {/* Email Input */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Email Input</h2>
          <AppTextInput
            label="Email Address"
            placeholder="Enter your email"
            value={emailValue}
            onChangeText={setEmailValue}
            keyboardType="email"
          />
        </section>

        {/* Number Input */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Number Input</h2>
          <AppTextInput
            label="Age"
            placeholder="Enter your age"
            value={ageValue}
            onChangeText={setAgeValue}
            keyboardType="number"
          />
        </section>

        {/* Password Input */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Password Input</h2>
          <AppTextInput
            label="Password"
            placeholder="Enter your password"
            value={passwordValue}
            onChangeText={setPasswordValue}
            secureTextEntry={true}
          />
        </section>

        {/* Multiline Input */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Multiline Input</h2>
          <AppTextInput
            label="Comments"
            placeholder="Enter your comments here..."
            value={multilineValue}
            onChangeText={setMultilineValue}
            multiline={true}
          />
        </section>

        {/* Error State */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Error State</h2>
          <AppTextInput
            label="Email with Error"
            placeholder="Enter a valid email"
            value={errorValue}
            onChangeText={setErrorValue}
            keyboardType="email"
            error="Please enter a valid email address"
          />
        </section>

        {/* Disabled State */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Disabled State</h2>
          <AppTextInput
            label="Disabled Input"
            placeholder="This input is disabled"
            value="Cannot edit this"
            onChangeText={() => {}}
            disabled={true}
          />
        </section>

        {/* Code Example */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Usage Examples</h2>
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
            <pre>{`// TextArea input
<AppTextArea
  label="Description of Treatment"
  placeholder="Please describe the treatment..."
  value={descriptionValue}
  onChange={setDescriptionValue}
  maxLength={500}
  rows={6}
/>

// Dropdown/Select input
<AppSelectInput
  label="Select Country"
  placeholder="Select country"
  value={selectedCountry}
  onValueChange={setSelectedCountry}
  options={countryOptions}
  required
/>

// Date input
<AppDateInput
  label="Service Date"
  placeholder="mm/dd/yyyy"
  value={serviceDate}
  onDateChange={setServiceDate}
  required
/>

// Text input
<AppTextInput
  label="Name"
  placeholder="Enter your full name"
  value={textValue}
  onChangeText={setTextValue}
/>

// Email input
<AppTextInput
  label="Email Address"
  placeholder="Enter your email"
  value={emailValue}
  onChangeText={setEmailValue}
  keyboardType="email"
/>

// Password input
<AppTextInput
  label="Password"
  placeholder="Enter your password"
  value={passwordValue}
  onChangeText={setPasswordValue}
  secureTextEntry={true}
/>`}</pre>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AppTextInputShowcase;
