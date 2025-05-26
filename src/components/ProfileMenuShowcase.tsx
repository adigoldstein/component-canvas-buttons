
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileMenu from './lib/ProfileMenu';
import BackButton from './lib/BackButton';

const ProfileMenuShowcase: React.FC = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  const handleViewProfile = () => {
    alert('View Profile clicked!');
  };

  const handleSettings = () => {
    alert('Settings clicked!');
  };

  const handleLogout = () => {
    alert('Logout clicked!');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto p-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <BackButton onClick={handleBack} />
          </div>

          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Profile Menu Component
            </h1>
            <p className="text-xl text-gray-600">
              A dropdown menu component for user profile actions
            </p>
          </div>

          <div className="space-y-8">
            {/* Basic Example */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Basic Profile Menu
              </h2>
              <p className="text-gray-600 mb-6">
                Click the user icon to open the dropdown menu with profile actions.
              </p>
              <div className="flex justify-center">
                <ProfileMenu
                  onViewProfile={handleViewProfile}
                  onSettings={handleSettings}
                  onLogout={handleLogout}
                />
              </div>
            </div>

            {/* With User Info */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                With User Information
              </h2>
              <p className="text-gray-600 mb-6">
                Profile menu can display user name and email in the header.
              </p>
              <div className="flex justify-center">
                <ProfileMenu
                  userName="John Doe"
                  userEmail="john.doe@example.com"
                  onViewProfile={handleViewProfile}
                  onSettings={handleSettings}
                  onLogout={handleLogout}
                />
              </div>
            </div>

            {/* In Navigation Bar */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                In Navigation Bar
              </h2>
              <p className="text-gray-600 mb-6">
                Example of how the profile menu would appear in a typical navigation bar.
              </p>
              <div className="bg-gray-900 text-white rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="text-lg font-semibold">My App</div>
                  <ProfileMenu
                    userName="Jane Smith"
                    userEmail="jane.smith@example.com"
                    onViewProfile={handleViewProfile}
                    onSettings={handleSettings}
                    onLogout={handleLogout}
                    className="text-white hover:text-gray-200 hover:bg-gray-800"
                  />
                </div>
              </div>
            </div>

            {/* Features List */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Features
              </h2>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Accessible with proper ARIA attributes
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Keyboard navigation support
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Closes on outside click and Escape key
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Customizable styling and callbacks
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Optional user information display
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Built with shadcn/ui components
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileMenuShowcase;
