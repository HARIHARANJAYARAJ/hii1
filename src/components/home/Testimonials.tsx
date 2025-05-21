import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Rahul Sharma',
    location: 'Delhi',
    rating: 5,
    comment: 'Excellent service and impeccable cars. The booking process was smooth, and the car was delivered on time. Will definitely use CarSeva again for my future trips.',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },
  {
    name: 'Priya Patel',
    location: 'Mumbai',
    rating: 5,
    comment: 'CarSeva made my family trip to Lonavala hassle-free. The car was clean, well-maintained, and the customer service was top-notch. Highly recommended!',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },
  {
    name: 'Karthik Reddy',
    location: 'Bangalore',
    rating: 4,
    comment: 'Great range of cars to choose from and the prices are competitive. The app is user-friendly and the booking process is straightforward. Would rent again.',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600'
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary-900 text-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-white"
          >
            What Our Customers Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto"
          >
            Don't just take our word for it. Here's what our happy customers have to say about their experience with CarSeva.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-secondary-800 p-6 rounded-lg"
            >
              <div className="flex items-center space-x-4 mb-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-400">{testimonial.location}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${i < testimonial.rating ? 'text-accent-500 fill-accent-500' : 'text-gray-600'}`} 
                  />
                ))}
              </div>
              <p className="text-gray-300">{testimonial.comment}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-secondary-800 inline-block px-8 py-4 rounded-lg max-w-3xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">
                  Ready to experience the best car rental service in India?
                </h3>
                <p className="text-gray-300">
                  Join thousands of satisfied customers who choose CarSeva for their travel needs.
                </p>
              </div>
              <div>
                <a 
                  href="/cars" 
                  className="btn btn-primary whitespace-nowrap"
                >
                  Book Your Car Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;