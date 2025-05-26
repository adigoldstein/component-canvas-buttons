
import { Link } from "react-router-dom";
import ButtonShowcase from "../components/ButtonShowcase";

export default function Index() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto p-4">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Component Library Demo</h1>
          <div className="flex justify-center gap-4 mb-6">
            <Link 
              to="/showcases" 
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-lg font-medium"
            >
              View All Component Showcases
            </Link>
          </div>
          <div className="flex justify-center gap-4">
            <Link 
              to="/buttons" 
              className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
            >
              Button Components
            </Link>
            <Link 
              to="/otp" 
              className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
            >
              OTP Input Demo
            </Link>
          </div>
        </div>
        <ButtonShowcase />
      </div>
    </div>
  );
}
