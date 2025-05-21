import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, Check } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormStatus('idle');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      }, 3000);
    }, 1500);
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Have questions or need assistance? Our team is here to help you with all your car rental needs.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-md p-8"
          >
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="form-label">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input" 
                    placeholder="Enter your full name"
                    disabled={formStatus !== 'idle'}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input" 
                    placeholder="Enter your email address"
                    disabled={formStatus !== 'idle'}
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="form-label">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input" 
                    placeholder="Enter your phone number"
                    pattern="[0-9]{10}"
                    title="Please enter a valid 10-digit phone number"
                    disabled={formStatus !== 'idle'}
                  />
                  <p className="text-xs text-gray-500 mt-1">Format: 10-digit number without spaces</p>
                </div>
                
                <div>
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <select 
                    id="subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="form-input" 
                    disabled={formStatus !== 'idle'}
                  >
                    <option value="">Select a subject</option>
                    <option value="booking">Booking Inquiry</option>
                    <option value="support">Customer Support</option>
                    <option value="feedback">Feedback</option>
                    <option value="partnership">Business Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="form-label">Your Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="form-input min-h-[150px]" 
                  placeholder="Tell us how we can help you..."
                  disabled={formStatus !== 'idle'}
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className={`btn relative ${
                  formStatus === 'success' 
                    ? 'bg-success-500 hover:bg-success-500' 
                    : 'btn-primary'
                } w-full`}
                disabled={formStatus !== 'idle'}
              >
                {formStatus === 'idle' && (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
                
                {formStatus === 'submitting' && (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                )}
                
                {formStatus === 'success' && (
                  <>
                    <Check className="w-4 h-4 mr-2" />
                    Message Sent!
                  </>
                )}
              </button>
            </form>
          </motion.div>
          
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-primary-500 text-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Head Office</h3>
                    <p>123 MG Road, Bangalore,<br />Karnataka, India - 560001</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="w-6 h-6 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Phone</h3>
                    <p>Customer Support: +91 98765 43210</p>
                    <p>Booking Helpline: +91 98765 43211</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="w-6 h-6 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <p>info@carseva.in</p>
                    <p>support@carseva.in</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-white/30">
                <h3 className="font-semibold text-lg mb-4">Operating Hours</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <p className="font-medium">Monday - Friday:</p>
                    <p>9:00 AM - 8:00 PM</p>
                  </div>
                  <div>
                    <p className="font-medium">Saturday - Sunday:</p>
                    <p>10:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6">Major Service Locations</h2>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="text-center p-4 rounded-lg bg-gray-50 hover:bg-primary-50 transition-colors">
                  <p className="font-medium">Delhi NCR</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-gray-50 hover:bg-primary-50 transition-colors">
                  <p className="font-medium">Mumbai</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-gray-50 hover:bg-primary-50 transition-colors">
                  <p className="font-medium">Bangalore</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-gray-50 hover:bg-primary-50 transition-colors">
                  <p className="font-medium">Chennai</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-gray-50 hover:bg-primary-50 transition-colors">
                  <p className="font-medium">Hyderabad</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-gray-50 hover:bg-primary-50 transition-colors">
                  <p className="font-medium">Kolkata</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-gray-50 hover:bg-primary-50 transition-colors">
                  <p className="font-medium">Jaipur</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-gray-50 hover:bg-primary-50 transition-colors">
                  <p className="font-medium">Ahmedabad</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-gray-50 hover:bg-primary-50 transition-colors">
                  <p className="font-medium">Pune</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="aspect-video w-full">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.990177316031!2d77.5968455!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sMG%20Road%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1631234567890!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                title="CarSeva Head Office Location"
              ></iframe>
            </div>
          </div>
        </motion.div>
        
        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Find quick answers to common questions about our car rental services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-2">What documents do I need to rent a car?</h3>
              <p className="text-gray-600">
                You'll need a valid driver's license (at least 1 year old), a government-issued ID (Aadhar/Passport/Voter ID), and a credit/debit card for the security deposit.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-2">Is there a security deposit?</h3>
              <p className="text-gray-600">
                Yes, a refundable security deposit of ₹5,000 is collected at the time of pickup and refunded after the car is returned in good condition.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-2">What is the cancellation policy?</h3>
              <p className="text-gray-600">
                Free cancellation up to 24 hours before pickup. Cancellations within 24 hours will be charged 50% of the booking amount.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-2">Is there a kilometer limit?</h3>
              <p className="text-gray-600">
                Yes, standard rental includes 200 km per day. Additional kilometers will be charged at ₹10/km.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-2">Do you provide doorstep delivery?</h3>
              <p className="text-gray-600">
                Yes, we offer doorstep delivery and pickup services in selected cities for an additional charge based on your location.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-2">What happens if I return the car late?</h3>
              <p className="text-gray-600">
                Late returns will incur additional charges at an hourly rate. Please inform us in advance if you need to extend your rental period.
              </p>
            </div>
          </div>
        </motion.div>
        
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg p-8 text-white text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Experience Premium Car Rental?
          </h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Book your dream car today and enjoy the freedom of exploring India on your own terms.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/cars" className="btn bg-white text-primary-600 hover:bg-gray-100">
              Browse Our Cars
            </a>
            <a href="tel:+919876543210" className="btn border-2 border-white text-white hover:bg-white/10">
              <Phone className="w-4 h-4 mr-2" />
              Call Us Now
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;