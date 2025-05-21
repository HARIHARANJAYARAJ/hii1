import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Check, CreditCard, Landmark, Wallet, Shield, AlertTriangle } from 'lucide-react';
import { Car } from '../../types';

interface PaymentDetailsProps {
  car: Car;
  bookingId: string;
  totalAmount: number;
  days: number;
}

const PaymentDetails: React.FC<PaymentDetailsProps> = ({ car, bookingId, totalAmount, days }) => {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [nameOnCard, setNameOnCard] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      
      // Show success and redirect
      alert('Payment successful! Your booking is confirmed.');
      navigate('/');
    }, 2000);
  };
  
  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    
    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  };
  
  const formatExpiryDate = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    
    if (v.length >= 2) {
      return `${v.substring(0, 2)}/${v.substring(2, 4)}`;
    }
    
    return value;
  };
  
  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-primary-500 p-6 text-white">
          <h2 className="text-2xl font-bold">Complete Your Payment</h2>
          <p className="text-primary-100">Booking ID: {bookingId}</p>
        </div>
        
        <div className="p-6">
          <div className="flex justify-between mb-6 pb-6 border-b border-gray-200">
            <div>
              <h3 className="font-bold text-lg">{car.name}</h3>
              <p className="text-gray-600">{days} days rental</p>
            </div>
            <p className="font-bold text-xl">₹{totalAmount}</p>
          </div>
          
          <h3 className="text-lg font-bold mb-4">Payment Method</h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            <button
              type="button"
              className={`py-3 px-4 border rounded-md flex flex-col items-center justify-center transition-colors ${
                paymentMethod === 'card' 
                  ? 'border-primary-500 bg-primary-50' 
                  : 'border-gray-200 hover:border-primary-300'
              }`}
              onClick={() => setPaymentMethod('card')}
            >
              <CreditCard className={`w-6 h-6 mb-1 ${paymentMethod === 'card' ? 'text-primary-500' : 'text-gray-500'}`} />
              <span className="text-sm font-medium">Card</span>
            </button>
            
            <button
              type="button"
              className={`py-3 px-4 border rounded-md flex flex-col items-center justify-center transition-colors ${
                paymentMethod === 'netbanking' 
                  ? 'border-primary-500 bg-primary-50' 
                  : 'border-gray-200 hover:border-primary-300'
              }`}
              onClick={() => setPaymentMethod('netbanking')}
            >
              <Landmark className={`w-6 h-6 mb-1 ${paymentMethod === 'netbanking' ? 'text-primary-500' : 'text-gray-500'}`} />
              <span className="text-sm font-medium">Net Banking</span>
            </button>
            
            <button
              type="button"
              className={`py-3 px-4 border rounded-md flex flex-col items-center justify-center transition-colors ${
                paymentMethod === 'upi' 
                  ? 'border-primary-500 bg-primary-50' 
                  : 'border-gray-200 hover:border-primary-300'
              }`}
              onClick={() => setPaymentMethod('upi')}
            >
              <Scan className={`w-6 h-6 mb-1 ${paymentMethod === 'upi' ? 'text-primary-500' : 'text-gray-500'}`} />
              <span className="text-sm font-medium">UPI</span>
            </button>
            
            <button
              type="button"
              className={`py-3 px-4 border rounded-md flex flex-col items-center justify-center transition-colors ${
                paymentMethod === 'wallet' 
                  ? 'border-primary-500 bg-primary-50' 
                  : 'border-gray-200 hover:border-primary-300'
              }`}
              onClick={() => setPaymentMethod('wallet')}
            >
              <Wallet className={`w-6 h-6 mb-1 ${paymentMethod === 'wallet' ? 'text-primary-500' : 'text-gray-500'}`} />
              <span className="text-sm font-medium">Wallet</span>
            </button>
          </div>
          
          {paymentMethod === 'card' && (
            <form onSubmit={handleSubmit}>
              <div className="space-y-4 mb-6">
                <div>
                  <label htmlFor="cardNumber" className="form-label">Card Number</label>
                  <input
                    type="text"
                    id="cardNumber"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                    required
                    maxLength={19}
                    placeholder="1234 5678 9012 3456"
                    className="form-input"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="expiryDate" className="form-label">Expiry Date</label>
                    <input
                      type="text"
                      id="expiryDate"
                      value={expiryDate}
                      onChange={(e) => setExpiryDate(formatExpiryDate(e.target.value))}
                      required
                      maxLength={5}
                      placeholder="MM/YY"
                      className="form-input"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="cvv" className="form-label">CVV</label>
                    <input
                      type="text"
                      id="cvv"
                      value={cvv}
                      onChange={(e) => setCvv(e.target.value.replace(/\D/g, ''))}
                      required
                      maxLength={3}
                      placeholder="123"
                      className="form-input"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="nameOnCard" className="form-label">Name on Card</label>
                  <input
                    type="text"
                    id="nameOnCard"
                    value={nameOnCard}
                    onChange={(e) => setNameOnCard(e.target.value)}
                    required
                    placeholder="John Doe"
                    className="form-input"
                  />
                </div>
              </div>
              
              <div className="flex items-start mb-6">
                <input
                  type="checkbox"
                  id="saveCard"
                  className="mt-1 mr-2"
                />
                <label htmlFor="saveCard" className="text-sm">
                  Save this card for future transactions
                </label>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg mb-6 flex items-start">
                <Shield className="w-5 h-5 text-primary-500 mt-0.5 mr-2 flex-shrink-0" />
                <p className="text-sm text-gray-600">
                  Your payment information is secure. We use industry-standard encryption to protect your data.
                </p>
              </div>
              
              <button
                type="submit"
                disabled={isProcessing}
                className={`btn w-full ${
                  isProcessing ? 'bg-gray-400 cursor-not-allowed' : 'btn-primary'
                }`}
              >
                {isProcessing ? 'Processing...' : `Pay ₹${totalAmount}`}
              </button>
            </form>
          )}
          
          {paymentMethod === 'upi' && (
            <div className="space-y-4 mb-6">
              <div>
                <label htmlFor="upiId" className="form-label">UPI ID</label>
                <input
                  type="text"
                  id="upiId"
                  placeholder="yourname@upi"
                  className="form-input"
                />
                <p className="text-xs text-gray-500 mt-1">Example: name@okhdfcbank, name@ybl, etc.</p>
              </div>
              
              <button
                type="button"
                onClick={handleSubmit}
                className="btn btn-primary w-full mt-4"
              >
                Pay ₹{totalAmount}
              </button>
            </div>
          )}
          
          {paymentMethod === 'netbanking' && (
            <div className="space-y-4 mb-6">
              <div>
                <label className="form-label">Select Bank</label>
                <select className="form-input">
                  <option value="">Select your bank</option>
                  <option value="hdfc">HDFC Bank</option>
                  <option value="sbi">State Bank of India</option>
                  <option value="icici">ICICI Bank</option>
                  <option value="axis">Axis Bank</option>
                  <option value="kotak">Kotak Mahindra Bank</option>
                </select>
              </div>
              
              <button
                type="button"
                onClick={handleSubmit}
                className="btn btn-primary w-full mt-4"
              >
                Pay ₹{totalAmount}
              </button>
            </div>
          )}
          
          {paymentMethod === 'wallet' && (
            <div className="space-y-4 mb-6">
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  className="border border-gray-200 rounded-md p-3 flex flex-col items-center hover:border-primary-300 transition-colors"
                >
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Paytm_Logo_%28standalone%29.svg/2560px-Paytm_Logo_%28standalone%29.svg.png" 
                    alt="Paytm" 
                    className="h-8 mb-2" 
                  />
                  <span className="text-sm">Paytm</span>
                </button>
                
                <button
                  type="button"
                  className="border border-gray-200 rounded-md p-3 flex flex-col items-center hover:border-primary-300 transition-colors"
                >
                  <img 
                    src="https://download.logo.wine/logo/PhonePe/PhonePe-Logo.wine.png" 
                    alt="PhonePe" 
                    className="h-8 mb-2" 
                  />
                  <span className="text-sm">PhonePe</span>
                </button>
              </div>
              
              <button
                type="button"
                onClick={handleSubmit}
                className="btn btn-primary w-full mt-4"
              >
                Pay ₹{totalAmount}
              </button>
            </div>
          )}
        </div>
      </div>
      
      <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-start">
          <AlertTriangle className="w-5 h-5 text-warning-500 mt-0.5 mr-2 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-gray-800">Cancellation Policy</h3>
            <p className="text-sm text-gray-600">
              Free cancellation up to 24 hours before pickup. Cancellations made within 24 hours of pickup will be charged 50% of the total booking amount.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Icons that aren't in lucide-react
const Scan: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      className={className}
    >
      <path d="M3 7V5a2 2 0 0 1 2-2h2"></path>
      <path d="M17 3h2a2 2 0 0 1 2 2v2"></path>
      <path d="M21 17v2a2 2 0 0 1-2 2h-2"></path>
      <path d="M7 21H5a2 2 0 0 1-2-2v-2"></path>
      <rect x="7" y="7" width="10" height="10" rx="2"></rect>
    </svg>
  );
};

export default PaymentDetails;