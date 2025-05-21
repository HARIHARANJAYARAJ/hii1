import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Users, Shield, Award, ThumbsUp, Car } from 'lucide-react';

const AboutPage: React.FC = () => {
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
            About CarSeva
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            India's premier car rental service dedicated to providing exceptional vehicles and experiences since 2020.
          </motion.p>
        </div>
        
        {/* Mission and Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-primary-50 p-8 rounded-lg"
          >
            <h2 className="text-2xl font-bold mb-4 text-primary-800">Our Mission</h2>
            <p className="text-gray-700">
              To provide reliable, affordable, and hassle-free car rental services throughout India, making travel accessible to everyone while maintaining the highest standards of customer service and vehicle quality.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-secondary-50 p-8 rounded-lg"
          >
            <h2 className="text-2xl font-bold mb-4 text-secondary-800">Our Vision</h2>
            <p className="text-gray-700">
              To become India's most trusted car rental brand by embracing innovation, sustainability, and a customer-first approach, enabling people to explore the diverse beauty of our country on their own terms.
            </p>
          </motion.div>
        </div>
        
        {/* Our Story */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-4"
            >
              Our Story
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="w-24 h-1 bg-primary-500 mx-auto"
            ></motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-gray-700 mb-4">
                CarSeva was founded in 2020 by a group of travel enthusiasts who believed that everyone deserves the freedom to explore India at their own pace. We started with a small fleet of 10 cars in Bangalore and have since expanded to over 15 cities with a diverse range of over 100 vehicles.
              </p>
              <p className="text-gray-700 mb-4">
                Our journey has been driven by a simple philosophy: provide clean, well-maintained cars, transparent pricing, and exceptional customer service. We've grown by listening to our customers and continuously improving our offerings.
              </p>
              <p className="text-gray-700">
                Today, CarSeva is recognized as one of India's fastest-growing car rental services, trusted by business travelers, tourists, and locals alike. We continue to innovate with technology-driven solutions while maintaining the personal touch that has been our hallmark since day one.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <img 
                src="https://images.pexels.com/photos/2526128/pexels-photo-2526128.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="Team CarSeva" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
              <div className="absolute bottom-4 right-4 bg-white p-3 rounded-lg shadow-md">
                <p className="font-bold text-primary-500">Est. 2020</p>
                <p className="text-sm text-gray-600">Bangalore, India</p>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Core Values */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-4"
            >
              Our Core Values
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="w-24 h-1 bg-primary-500 mx-auto"
            ></motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-4">
                <ThumbsUp className="w-8 h-8 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Customer First</h3>
              <p className="text-gray-600">
                We prioritize our customers' needs and satisfaction above all else, going the extra mile to ensure the best experience.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Safety & Reliability</h3>
              <p className="text-gray-600">
                We maintain the highest standards of vehicle safety and reliability through rigorous maintenance and quality checks.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in every aspect of our business, from our fleet to our customer service to our technology.
              </p>
            </motion.div>
          </div>
        </div>
        
        {/* Team */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-4"
            >
              Meet Our Leadership Team
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="w-24 h-1 bg-primary-500 mx-auto"
            ></motion.div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg overflow-hidden shadow-md"
            >
              <img 
                src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="CEO" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">Vikram Patel</h3>
                <p className="text-primary-500 mb-2">CEO & Co-Founder</p>
                <p className="text-gray-600 text-sm">
                  With 15+ years in the automotive industry, Vikram leads our vision and strategy.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-md"
            >
              <img 
                src="https://images.pexels.com/photos/3776932/pexels-photo-3776932.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="COO" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">Neha Sharma</h3>
                <p className="text-primary-500 mb-2">COO & Co-Founder</p>
                <p className="text-gray-600 text-sm">
                  Neha oversees our day-to-day operations and drives our operational excellence.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-lg overflow-hidden shadow-md"
            >
              <img 
                src="https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="CTO" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">Rajesh Kumar</h3>
                <p className="text-primary-500 mb-2">CTO</p>
                <p className="text-gray-600 text-sm">
                  Rajesh leads our technology initiatives, bringing innovation to our digital platforms.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-lg overflow-hidden shadow-md"
            >
              <img 
                src="https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="CMO" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">Priya Iyer</h3>
                <p className="text-primary-500 mb-2">CMO</p>
                <p className="text-gray-600 text-sm">
                  Priya directs our marketing strategies, building CarSeva into a trusted brand across India.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Stats */}
        <div className="mb-16 bg-gray-50 rounded-xl p-8">
          <div className="text-center mb-8">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-4"
            >
              CarSeva By The Numbers
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="w-24 h-1 bg-primary-500 mx-auto"
            ></motion.div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-4">
                <Car className="w-8 h-8 text-primary-500" />
              </div>
              <p className="text-4xl font-bold text-gray-800 mb-2">100+</p>
              <p className="text-gray-600">Premium Vehicles</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-primary-500" />
              </div>
              <p className="text-4xl font-bold text-gray-800 mb-2">15+</p>
              <p className="text-gray-600">Cities in India</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary-500" />
              </div>
              <p className="text-4xl font-bold text-gray-800 mb-2">5000+</p>
              <p className="text-gray-600">Happy Customers</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary-500" />
              </div>
              <p className="text-4xl font-bold text-gray-800 mb-2">98%</p>
              <p className="text-gray-600">Customer Satisfaction</p>
            </motion.div>
          </div>
        </div>
        
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg p-8 text-white text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Experience CarSeva?
          </h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Join thousands of satisfied customers who choose CarSeva for their car rental needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/cars" className="btn bg-white text-primary-600 hover:bg-gray-100">
              Browse Our Cars
            </a>
            <a href="/contact" className="btn border-2 border-white text-white hover:bg-white/10">
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;