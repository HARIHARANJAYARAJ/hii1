import React from 'react';
import { motion } from 'framer-motion';
import { Search, Calendar, Car, CreditCard } from 'lucide-react';

const steps = [
  {
    icon: <Search className="w-12 h-12 text-primary-500" />,
    title: 'Search',
    description: 'Browse our wide selection of cars and choose the one that suits your needs and budget.'
  },
  {
    icon: <Calendar className="w-12 h-12 text-primary-500" />,
    title: 'Book',
    description: 'Select your pickup and return dates and locations, and reserve your car instantly.'
  },
  {
    icon: <CreditCard className="w-12 h-12 text-primary-500" />,
    title: 'Pay',
    description: 'Complete your secure payment using any of our flexible payment options.'
  },
  {
    icon: <Car className="w-12 h-12 text-primary-500" />,
    title: 'Drive',
    description: 'Pick up your car and enjoy your journey with our 24/7 roadside assistance.'
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            How It Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Renting a car with CarSeva is easy, transparent, and hassle-free. Follow these simple steps to get on the road quickly.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="relative">
                <div className="w-24 h-24 rounded-full bg-primary-50 flex items-center justify-center mx-auto mb-6">
                  {step.icon}
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[calc(100%-12px)] w-full h-0.5 border-t-2 border-dashed border-primary-200"></div>
                )}
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-primary-50 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-4">Customer Support Every Step of the Way</h3>
              <p className="text-gray-600 mb-6">
                Our dedicated support team is available 24/7 to assist you with any questions or issues you may encounter during your rental experience.
              </p>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <p className="font-semibold">Need help? Call us</p>
                    <p className="text-primary-500 font-bold">+91 98765 43210</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src="https://images.pexels.com/photos/7709242/pexels-photo-7709242.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="Customer service" 
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Phone: React.FC<{ className?: string }> = ({ className }) => {
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
  );
};

export default HowItWorks;