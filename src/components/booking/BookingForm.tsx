import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Calendar, Clock, Check, User, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Car } from '../../types';
import { getActiveLocations } from '../../data/locations';
import emailjs from '@emailjs/browser';

interface BookingFormProps {
  car: Car;
}

interface FormData {
  startDate: Date;
  endDate: Date;
  pickupLocation: string;
  dropLocation: string;
  pickupTime: string;
  dropTime: string;
  name: string;
  email: string;
  phone: string;
  addOns: string[];
}

const addOnsList = [
  { id: 'gps', name: 'GPS Navigation', price: 199 },
  { id: 'childSeat', name: 'Child Seat', price: 299 },
  { id: 'additionalDriver', name: 'Additional Driver', price: 499 },
  { id: 'insurance', name: 'Full Insurance Coverage', price: 599 },
  { id: 'wifi', name: 'Portable WiFi Hotspot', price: 249 },
];

const BookingForm: React.FC<BookingFormProps> = ({ car }) => {
  const navigate = useNavigate();
  const locations = getActiveLocations();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  
  const dayAfterTomorrow = new Date();
  dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 2);
  
  const [formData, setFormData] = useState<FormData>({
    startDate: tomorrow,
    endDate: dayAfterTomorrow,
    pickupLocation: '',
    dropLocation: '',
    pickupTime: '10:00',
    dropTime: '10:00',
    name: '',
    email: '',
    phone: '',
    addOns: [],
  });
  
  const [currentStep, setCurrentStep] = useState(1);
  
  const calculateDays = () => {
    if (!formData.startDate || !formData.endDate) return 0;
    const oneDay = 24 * 60 * 60 * 1000;
    return Math.round(Math.abs((formData.endDate.getTime() - formData.startDate.getTime()) / oneDay));
  };
  
  const calculateTotal = () => {
    const days = calculateDays();
    let addOnsTotal = 0;
    
    formData.addOns.forEach(addOnId => {
      const addOn = addOnsList.find(item => item.id === addOnId);
      if (addOn) {
        addOnsTotal += addOn.price;
      }
    });
    
    return (days * car.price) + addOnsTotal;
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleDateChange = (field: 'startDate' | 'endDate', date: Date | null) => {
    if (date) {
      setFormData(prev => ({ ...prev, [field]: date }));
    }
  };
  
  const toggleAddOn = (addOnId: string) => {
    setFormData(prev => {
      const addOns = [...prev.addOns];
      const index = addOns.indexOf(addOnId);
      
      if (index === -1) {
        addOns.push(addOnId);
      } else {
        addOns.splice(index, 1);
      }
      
      return { ...prev, addOns };
    });
  };
  
  const handleNext = () => {
    setCurrentStep(prev => prev + 1);
  };
  
  const handleBack = () => {
    setCurrentStep(prev => prev - 1);
  };
  
  const sendBookingConfirmation = async () => {
    try {
      const templateParams = {
        to_name: formData.name,
        to_email: formData.email,
        car_name: car.name,
        pickup_date: formData.startDate.toLocaleDateString(),
        pickup_time: formData.pickupTime,
        pickup_location: locations.find(l => l.id === formData.pickupLocation)?.name,
        booking_id: `BK${Math.floor(Math.random() * 10000000)}`,
        total_amount: calculateTotal(),
      };

      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        templateParams,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );

      return true;
    } catch (error) {
      console.error('Failed to send email:', error);
      return false;
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const bookingId = 'BK' + Math.floor(Math.random() * 10000000);
    
    try {
      // Send booking confirmation email
      await sendBookingConfirmation();
      
      // Store booking data in localStorage for tracking
      const bookingData = {
        id: bookingId,
        car: car,
        formData: formData,
        total: calculateTotal(),
        status: 'pending',
        createdAt: new Date().toISOString()
      };
      
      const existingBookings = JSON.parse(localStorage.getItem('carBookings') || '[]');
      localStorage.setItem('carBookings', JSON.stringify([...existingBookings, bookingData]));
      
      // Navigate to payment page
      navigate(`/payment/${bookingId}`, { 
        state: { 
          car, 
          formData, 
          days: calculateDays(), 
          total: calculateTotal() 
        } 
      });
    } catch (error) {
      console.error('Booking failed:', error);
      alert('Failed to process booking. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg shadow-md"
    >
      <div className="p-6">
        <h3 className="text-xl font-bold mb-4">Book Your {car.name}</h3>
        
        <form onSubmit={handleSubmit}>
          {/* Step 1: Trip Details */}
          {currentStep === 1 && (
            <div>
              <h4 className="font-semibold text-lg mb-4">Trip Details</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="form-label">Pickup Location</label>
                  <div className="relative">
                    <select
                      name="pickupLocation"
                      value={formData.pickupLocation}
                      onChange={handleInputChange}
                      required
                      className="form-input pl-10"
                    >
                      <option value="">Select pickup location</option>
                      {locations.map(location => (
                        <option key={location.id} value={location.id}>
                          {location.name}, {location.state}
                        </option>
                      ))}
                    </select>
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
                  </div>
                </div>
                
                <div>
                  <label className="form-label">Drop Location</label>
                  <div className="relative">
                    <select
                      name="dropLocation"
                      value={formData.dropLocation}
                      onChange={handleInputChange}
                      required
                      className="form-input pl-10"
                    >
                      <option value="">Select drop location</option>
                      {locations.map(location => (
                        <option key={location.id} value={location.id}>
                          {location.name}, {location.state}
                        </option>
                      ))}
                    </select>
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="form-label">Pickup Date</label>
                  <div className="relative">
                    <DatePicker
                      selected={formData.startDate}
                      onChange={(date) => handleDateChange('startDate', date)}
                      minDate={new Date()}
                      required
                      className="form-input pl-10 w-full"
                    />
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
                  </div>
                </div>
                
                <div>
                  <label className="form-label">Return Date</label>
                  <div className="relative">
                    <DatePicker
                      selected={formData.endDate}
                      onChange={(date) => handleDateChange('endDate', date)}
                      minDate={formData.startDate}
                      required
                      className="form-input pl-10 w-full"
                    />
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="form-label">Pickup Time</label>
                  <div className="relative">
                    <select
                      name="pickupTime"
                      value={formData.pickupTime}
                      onChange={handleInputChange}
                      required
                      className="form-input pl-10"
                    >
                      {Array.from({ length: 24 }).map((_, i) => (
                        <option key={i} value={`${i.toString().padStart(2, '0')}:00`}>
                          {i.toString().padStart(2, '0')}:00
                        </option>
                      ))}
                    </select>
                    <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
                  </div>
                </div>
                
                <div>
                  <label className="form-label">Return Time</label>
                  <div className="relative">
                    <select
                      name="dropTime"
                      value={formData.dropTime}
                      onChange={handleInputChange}
                      required
                      className="form-input pl-10"
                    >
                      {Array.from({ length: 24 }).map((_, i) => (
                        <option key={i} value={`${i.toString().padStart(2, '0')}:00`}>
                          {i.toString().padStart(2, '0')}:00
                        </option>
                      ))}
                    </select>
                    <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
                  </div>
                </div>
              </div>
              
              <button
                type="button"
                onClick={handleNext}
                className="btn btn-primary w-full"
              >
                Continue to Add-Ons
              </button>
            </div>
          )}
          
          {/* Step 2: Add-ons */}
          {currentStep === 2 && (
            <div>
              <h4 className="font-semibold text-lg mb-4">Add-Ons & Extras</h4>
              
              <div className="space-y-3 mb-6">
                {addOnsList.map(addOn => (
                  <div
                    key={addOn.id}
                    className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                      formData.addOns.includes(addOn.id)
                        ? 'border-primary-500 bg-primary-50'
                        : 'border-gray-200 hover:border-primary-300'
                    }`}
                    onClick={() => toggleAddOn(addOn.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center mr-3 ${
                          formData.addOns.includes(addOn.id)
                            ? 'border-primary-500 bg-primary-500'
                            : 'border-gray-300'
                        }`}>
                          {formData.addOns.includes(addOn.id) && (
                            <Check className="w-3 h-3 text-white" />
                          )}
                        </div>
                        <span className="font-medium">{addOn.name}</span>
                      </div>
                      <span className="font-semibold">₹{addOn.price}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={handleBack}
                  className="btn btn-outline flex-1"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="btn btn-primary flex-1"
                >
                  Continue to Personal Details
                </button>
              </div>
            </div>
          )}
          
          {/* Step 3: Personal Details */}
          {currentStep === 3 && (
            <div>
              <h4 className="font-semibold text-lg mb-4">Personal Details</h4>
              
              <div className="space-y-4 mb-6">
                <div>
                  <label className="form-label">Full Name</label>
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="form-input pl-10"
                      placeholder="Enter your full name"
                    />
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
                  </div>
                </div>
                
                <div>
                  <label className="form-label">Email Address</label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="form-input pl-10"
                      placeholder="Enter your email address"
                    />
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
                  </div>
                </div>
                
                <div>
                  <label className="form-label">Phone Number</label>
                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="form-input pl-10"
                      placeholder="Enter your phone number"
                      pattern="[0-9]{10}"
                      title="Please enter a valid 10-digit phone number"
                    />
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Format: 10-digit number without spaces or country code</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={handleBack}
                  className="btn btn-outline flex-1"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="btn btn-primary flex-1"
                >
                  Review Booking
                </button>
              </div>
            </div>
          )}
          
          {/* Step 4: Review and Confirm */}
          {currentStep === 4 && (
            <div>
              <h4 className="font-semibold text-lg mb-4">Review Your Booking</h4>
              
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium">{car.name}</p>
                    <p className="text-sm text-gray-500">{car.type} • {car.transmission} • {car.fuel}</p>
                  </div>
                  <img
                    src={car.mainImage}
                    alt={car.name}
                    className="w-24 h-16 object-cover rounded"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div>
                  <p className="text-sm text-gray-500">Pickup Date</p>
                  <p className="font-medium">{formData.startDate.toDateString()}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Return Date</p>
                  <p className="font-medium">{formData.endDate.toDateString()}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Pickup Location</p>
                  <p className="font-medium">
                    {locations.find(l => l.id === formData.pickupLocation)?.name || ''}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Drop Location</p>
                  <p className="font-medium">
                    {locations.find(l => l.id === formData.dropLocation)?.name || ''}
                  </p>
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-4 mb-6">
                <h5 className="font-medium mb-2">Price Breakdown</h5>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Base Rate (₹{car.price} x {calculateDays()} days)</span>
                    <span>₹{car.price * calculateDays()}</span>
                  </div>
                  
                  {formData.addOns.length > 0 && formData.addOns.map(addOnId => {
                    const addOn = addOnsList.find(item => item.id === addOnId);
                    return addOn ? (
                      <div key={addOn.id} className="flex justify-between">
                        <span>{addOn.name}</span>
                        <span>₹{addOn.price}</span>
                      </div>
                    ) : null;
                  })}
                  
                  <div className="flex justify-between font-bold pt-2 border-t border-gray-200">
                    <span>Total Amount</span>
                    <span>₹{calculateTotal()}</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="termsCheck"
                    className="mt-1 mr-2"
                    required
                  />
                  <label htmlFor="termsCheck" className="text-sm">
                    I agree to the <a href="#" className="text-primary-500">Terms and Conditions</a> and <a href="#" className="text-primary-500">Privacy Policy</a>
                  </label>
                </div>
              </div>
              
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={handleBack}
                  className="btn btn-outline flex-1"
                  disabled={isSubmitting}
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="btn btn-primary flex-1 relative"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="absolute inset-0 flex items-center justify-center">
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                      </span>
                      <span className="opacity-0">Proceed to Payment</span>
                    </>
                  ) : (
                    'Proceed to Payment'
                  )}
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default BookingForm;