import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Index() {
  const showcases = [
    {
      title: 'Button Components',
      description: 'Explore different button variants, sizes, and states including primary, secondary, outline, and ghost buttons.',
      route: '/buttons',
      color: 'bg-blue-500 hover:bg-blue-600'
    },
    {
      title: 'OTP Input',
      description: 'One-time password input component with auto-focus, paste support, and keyboard navigation.',
      route: '/otp',
      color: 'bg-green-500 hover:bg-green-600'
    },
    {
      title: 'Stepper Component',
      description: 'Multi-step form component with navigation, validation states, and customizable content.',
      route: '/stepper',
      color: 'bg-purple-500 hover:bg-purple-600'
    },
    {
      title: 'Input Components',
      description: 'Collection of form input components including text, date, select, and textarea inputs.',
      route: '/inputs',
      color: 'bg-orange-500 hover:bg-orange-600'
    },
    {
      title: 'Profile Menu',
      description: 'Dropdown menu component for user profile actions with customizable styling and accessibility features.',
      route: '/profile-menu',
      color: 'bg-indigo-500 hover:bg-indigo-600'
    },
    {
      title: 'Hamburger Menu',
      description: 'Sliding drawer menu triggered by a hamburger icon, perfect for mobile navigation and responsive layouts.',
      route: '/hamburger-menu',
      color: 'bg-cyan-500 hover:bg-cyan-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto p-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Component Library Showcase
            </h1>
            <p className="text-xl text-gray-600">
              Explore our collection of reusable React components
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {showcases.map((showcase, index) => (
              <Link
                key={index}
                to={showcase.route}
                className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-semibold text-gray-900">
                      {showcase.title}
                    </h2>
                    <div className={`p-2 rounded-full ${showcase.color} text-white group-hover:scale-110 transition-transform duration-200`}>
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {showcase.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-block bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                More Components Coming Soon
              </h3>
              <p className="text-gray-600">
                We're continuously expanding our component library with new features and improvements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
