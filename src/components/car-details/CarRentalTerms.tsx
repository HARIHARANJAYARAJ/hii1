import React from 'react';
import { Shield, Clock, MapPin, AlertTriangle } from 'lucide-react';

const CarRentalTerms: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold mb-4">Rental Terms & Conditions</h3>
      
      <div className="space-y-6">
        <div className="flex">
          <div className="mr-4">
            <Shield className="w-8 h-8 text-success-500" />
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-1">Security Deposit</h4>
            <p className="text-gray-700">
              A refundable security deposit of ₹5,000 will be collected at the time of pickup. This amount will be refunded after the car is returned in good condition.
            </p>
          </div>
        </div>
        
        <div className="flex">
          <div className="mr-4">
            <Clock className="w-8 h-8 text-primary-500" />
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-1">Rental Period</h4>
            <p className="text-gray-700">
              The minimum rental period is 24 hours. Late returns will incur additional charges at an hourly rate.
            </p>
          </div>
        </div>
        
        <div className="flex">
          <div className="mr-4">
            <MapPin className="w-8 h-8 text-primary-500" />
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-1">Kilometer Limit</h4>
            <p className="text-gray-700">
              Standard rental includes 200 km per day. Additional kilometers will be charged at ₹10/km.
            </p>
          </div>
        </div>
        
        <div className="flex">
          <div className="mr-4">
            <AlertTriangle className="w-8 h-8 text-warning-500" />
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-1">Cancellation Policy</h4>
            <p className="text-gray-700">
              Free cancellation up to 24 hours before pickup. Cancellations made within 24 hours of pickup will be charged 50% of the booking amount.
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-6 pt-6 border-t border-gray-200">
        <h4 className="font-semibold text-lg mb-2">Required Documents</h4>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>Valid Driver's License (at least 1 year old)</li>
          <li>Valid Government ID (Aadhar Card/Passport/Voter ID)</li>
          <li>Credit/Debit Card for security deposit</li>
        </ul>
      </div>
      
      <button 
        className="mt-6 text-primary-500 font-medium flex items-center hover:text-primary-600 transition-colors"
        onClick={() => window.open('/terms-and-conditions', '_blank')}
      >
        View Full Terms & Conditions
      </button>
    </div>
  );
};

export default CarRentalTerms;