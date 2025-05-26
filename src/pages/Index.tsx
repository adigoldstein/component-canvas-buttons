
import { Link } from "react-router-dom";
import ButtonShowcase from "../components/ButtonShowcase";

export default function Index() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto p-4">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Component Library Demo</h1>
          <div className="flex justify-center gap-4">
            <Link 
              to="/otp" 
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              View OTP Input Demo
            </Link>
          </div>
        </div>
        <ButtonShowcase />
      </div>
    </div>
  );
