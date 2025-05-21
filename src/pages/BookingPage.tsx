import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCarById } from '../data/cars';
import { Car as CarType } from '../types';
import BookingForm from '../components/booking/BookingForm';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, AlertCircle } from 'lucide-react';

const BookingPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [car, setCar] = useState<CarType | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    if (id) {
      // Simulate loading time
      setTimeout(() => {
        const foundCar = getCarById(id);
        setCar(foundCar || null);
        setLoading(false);
      }, 500);
    }
  }, [id]);
  
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
  
  if (!car) {
    return (
      <div className="pt-24 pb-16">
        <div className="container-custom text-center py-16">
          <AlertCircle className="w-16 h-16 text-error-500 mx-auto mb-4" />
          <h1 className="text-3xl font-bold mb-2">Car Not Found</h1>
          <p className="text-gray-600 mb-8">
            The car you're looking for doesn't exist or has been removed.
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
            <span>Booking</span>
          </div>
          
          <h1 className="text-3xl font-bold mb-2">Book Your {car.name}</h1>
          <p className="text-gray-600">
            Complete the booking form below to reserve your car.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <BookingForm car={car} />
          </div>
          
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Booking Summary</h3>
                
                <div className="flex mb-6">
                  <img
                    src={car.mainImage}
                    alt={car.name}
                    className="w-24 h-24 object-cover rounded-md mr-4"
                  />
                  <div>
                    <h4 className="font-bold">{car.name}</h4>
                    <p className="text-sm text-gray-500">{car.type} • {car.transmission}</p>
                    <div className="mt-2">
                      <span className="text-lg font-bold text-primary-500">₹{car.price}</span>
                      <span className="text-gray-500 text-sm">/day</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3 border-t border-gray-200 pt-4">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Free cancellation up to 24 hours</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>200 km/day included</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Security deposit: ₹5,000</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>24/7 roadside assistance</span>
                  </div>
                </div>
                
                <div className="mt-6 bg-gray-50 p-4 rounded-md">
                  <div className="flex items-center mb-2">
                    <svg className="w-5 h-5 text-primary-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-medium">Important Information</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    You'll need to present a valid driver's license and credit card in your name at the time of pickup.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;