import React, { useEffect, useState } from 'react';
import { useParams, useLocation, Link, useNavigate } from 'react-router-dom';
import { getCarById } from '../data/cars';
import { Car as CarType } from '../types';
import { motion } from 'framer-motion';
import { ChevronRight, AlertCircle } from 'lucide-react';
import PaymentDetails from '../components/payment/PaymentDetails';

interface LocationState {
  car: CarType;
  formData: any;
  days: number;
  total: number;
}

const PaymentPage: React.FC = () => {
  const { bookingId } = useParams<{ bookingId: string }>();
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  
  // Attempt to get data from location state, otherwise fall back to fetching
  const [car, setCar] = useState<CarType | null>(null);
  const [formData, setFormData] = useState<any>(null);
  const [days, setDays] = useState(0);
  const [total, setTotal] = useState(0);
  
  useEffect(() => {
    // Check if we have data from the previous page
    if (location.state) {
      const state = location.state as LocationState;
      setCar(state.car);
      setFormData(state.formData);
      setDays(state.days);
      setTotal(state.total);
      setLoading(false);
    } else {
      // If there's no state, we need to redirect back to booking
      // In a real app, you'd fetch the booking data from an API
      alert('Payment information not available. Redirecting to cars page.');
      navigate('/cars');
    }
  }, [location, bookingId, navigate]);
  
  if (loading) {
    return (
      <div className="pt-24 pb-16 flex justify-center items-center min-h-[50vh]">
        <div className="animate-pulse text-center">
          <div className="h-8 w-64 bg-gray-300 rounded-md mb-4 mx-auto"></div>
          <div className="h-4 w-48 bg-gray-200 rounded-md mx-auto"></div>
        </div>
      </div>
    );
  }
  
  if (!car || !bookingId) {
    return (
      <div className="pt-24 pb-16">
        <div className="container-custom text-center py-16">
          <AlertCircle className="w-16 h-16 text-error-500 mx-auto mb-4" />
          <h1 className="text-3xl font-bold mb-2">Payment Information Not Found</h1>
          <p className="text-gray-600 mb-8">
            The payment information you're looking for is missing or invalid.
          </p>
          <Link to="/cars" className="btn btn-primary">
            Browse All Cars
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <div className="container-custom">
        <div className="mb-6">
          <div className="flex items-center text-sm text-gray-500 mb-2">
            <Link to="/" className="hover:text-primary-500">Home</Link>
            <ChevronRight className="w-4 h-4 mx-1" />
            <Link to="/cars" className="hover:text-primary-500">Cars</Link>
            <ChevronRight className="w-4 h-4 mx-1" />
            <Link to={`/cars/${car.id}`} className="hover:text-primary-500">{car.name}</Link>
            <ChevronRight className="w-4 h-4 mx-1" />
            <Link to={`/booking/${car.id}`} className="hover:text-primary-500">Booking</Link>
            <ChevronRight className="w-4 h-4 mx-1" />
            <span>Payment</span>
          </div>
          
          <h1 className="text-3xl font-bold mb-2">Complete Your Payment</h1>
          <p className="text-gray-600">
            Your booking is almost complete. Please enter your payment details to finalize.
          </p>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <PaymentDetails 
            car={car}
            bookingId={bookingId}
            totalAmount={total}
            days={days}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default PaymentPage;