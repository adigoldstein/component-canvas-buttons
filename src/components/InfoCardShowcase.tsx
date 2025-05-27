
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Clock, Users, TrendingUp, CheckCircle, ShoppingCart, BarChart3, Check } from 'lucide-react';
import { InfoCard } from './lib/InfoCard';
import { MemberChip } from './lib/MemberChip';
import { Button } from './lib/button-library';
import { BackButton } from './lib/BackButton';

const InfoCardShowcase: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log('Action clicked!');
  };

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="p-8 space-y-8 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <BackButton onClick={handleBackClick} />
        </div>

        <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">
          InfoCard Component Library
        </h1>

        {/* Featured Policy Card - Full Width */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Featured: Your Active Policy</h2>
          <InfoCard 
            title="Your Active Policy"
            icon={<Check className="w-5 h-5 text-green-500" />}
            footer={
              <div className="flex justify-end">
                <button 
                  onClick={handleClick}
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center gap-1 transition-colors"
                >
                  View All Policy
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            }
            className="w-full"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Left Section - Dates and Status */}
              <div className="space-y-2">
                <p className="text-sm text-gray-600">Jan 1, 2024 - Dec 31, 2024</p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-green-600">Status: Active</span>
                </div>
              </div>

              {/* Middle Section - Policy Details */}
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900 text-lg">Family Health Insurance</h4>
                <p className="text-sm text-gray-600">Policy: POL-2024-001234</p>
              </div>

              {/* Right Section - Covered Members */}
              <div className="space-y-3">
                <p className="text-sm font-medium text-gray-700">Covered Members:</p>
                <div className="flex gap-2 flex-wrap">
                  <MemberChip label="HOF" size="md" />
                  <MemberChip label="SP" size="md" />
                  <MemberChip label="C1" size="md" />
                  <MemberChip label="C2" size="md" />
                </div>
              </div>
            </div>
          </InfoCard>
        </section>

        {/* Basic Usage */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Basic Usage</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Simple Card */}
            <InfoCard title="Simple Card">
              <p className="text-gray-600">
                This is a basic card with just a title and content. Perfect for simple information display.
              </p>
            </InfoCard>

            {/* Card with Icon */}
            <InfoCard 
              title="Card with Icon" 
              icon={<Clock className="w-5 h-5 text-blue-500" />}
            >
              <p className="text-gray-600">
                This card includes an icon next to the title for better visual hierarchy.
              </p>
            </InfoCard>

            {/* Centered Title */}
            <InfoCard title="Centered Title" titleAlign="center">
              <p className="text-gray-600 text-center">
                This card has a centered title alignment for different layout needs.
              </p>
            </InfoCard>
          </div>
        </section>

        {/* Screenshot Examples */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Screenshot Examples</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Track Claims Card */}
            <InfoCard 
              title="Track Claims" 
              icon={<Clock className="w-5 h-5 text-blue-500" />}
              footer={
                <Button variant="ghost" onClick={handleClick} className="w-full justify-between">
                  <span>Check status of submitted claims</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              }
            >
              <p className="text-gray-600 mb-4">
                Check status of submitted claims
              </p>
            </InfoCard>

            {/* Claim Submission Card */}
            <InfoCard title="Claim Submission" titleAlign="center">
              <p className="text-gray-600 text-center mb-6">
                Submit a new insurance claim
              </p>
              <Button variant="primary" onClick={handleClick} fullWidth>
                Start New Claim
              </Button>
            </InfoCard>

            {/* Original Active Policy Card - Compact Version */}
            <InfoCard 
              title="Compact Policy View"
              footer={
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Jan 1, 2024 - Dec 31, 2024</span>
                  <Button variant="ghost" size="sm" onClick={handleClick}>
                    View Details
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              }
            >
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900">Family Health Insurance</h4>
                  <p className="text-sm text-gray-600">Policy: POL-2024-001234</p>
                  <p className="text-sm text-green-600">Status: Active</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">Covered Members:</p>
                  <div className="flex gap-2">
                    <MemberChip label="HOF" size="sm" />
                    <MemberChip label="SP" size="sm" />
                    <MemberChip label="C1" size="sm" />
                    <MemberChip label="C2" size="sm" />
                  </div>
                </div>
              </div>
            </InfoCard>
          </div>
        </section>

        {/* Advanced Use Cases */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Advanced Use Cases</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Chart Card */}
            <InfoCard 
              title="Monthly Analytics" 
              icon={<BarChart3 className="w-5 h-5 text-green-500" />}
              footer={
                <Button variant="outline" size="sm" onClick={handleClick}>
                  View Details
                </Button>
              }
            >
              <div className="h-32 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-8 h-8 text-green-500" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Claims Processed</span>
                  <span className="font-medium">127</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Avg. Processing Time</span>
                  <span className="font-medium">2.3 days</span>
                </div>
              </div>
            </InfoCard>

            {/* Product Card */}
            <InfoCard 
              title="Premium Plan"
              footer={
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-green-600">$299/mo</span>
                  <Button variant="primary" size="sm" onClick={handleClick}>
                    <ShoppingCart className="w-4 h-4 mr-1" />
                    Select Plan
                  </Button>
                </div>
              }
            >
              <div className="space-y-3">
                <div className="h-20 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg flex items-center justify-center">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Up to 6 family members</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>24/7 customer support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Global coverage</span>
                  </li>
                </ul>
              </div>
            </InfoCard>

            {/* Task Progress Card */}
            <InfoCard 
              title="Task Progress" 
              icon={<CheckCircle className="w-5 h-5 text-green-500" />}
            >
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Application Review</span>
                    <span>75%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Document Verification</span>
                    <span>100%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Final Approval</span>
                    <span>25%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-orange-500 h-2 rounded-full" style={{ width: '25%' }}></div>
                  </div>
                </div>
              </div>
            </InfoCard>
          </div>
        </section>

        {/* Usage Examples */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Usage Examples</h2>
          <div className="bg-gray-900 text-gray-100 p-6 rounded-lg text-sm overflow-x-auto">
            <pre>{`// Basic InfoCard
<InfoCard title="Simple Card">
  <p>Your content goes here</p>
</InfoCard>

// With icon and footer
<InfoCard 
  title="Card with Icon" 
  icon={<Clock />}
  footer={<Button>Action</Button>}
>
  <p>Content with action footer</p>
</InfoCard>

// Centered title
<InfoCard title="Centered" titleAlign="center">
  <div className="text-center">
    Centered content layout
  </div>
</InfoCard>

// Full-width policy card with 3-column layout
<InfoCard 
  title="Your Active Policy"
  icon={<Check className="w-5 h-5 text-green-500" />}
  footer={
    <div className="flex justify-end">
      <button className="text-blue-600">
        View All Policy <ArrowRight />
      </button>
    </div>
  }
  className="w-full"
>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div>Date and Status</div>
    <div>Policy Details</div>
    <div>Covered Members</div>
  </div>
</InfoCard>`}</pre>
          </div>
        </section>
      </div>
    </div>
  );
};

export default InfoCardShowcase;
