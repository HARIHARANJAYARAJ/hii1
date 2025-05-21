import React from 'react';
import Hero from '../components/home/Hero';
import FeaturedCars from '../components/home/FeaturedCars';
import HowItWorks from '../components/home/HowItWorks';
import Testimonials from '../components/home/Testimonials';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>CarSeva - Premium Car Rentals in India</title>
        <meta name="description" content="Book premium car rentals across India with CarSeva. Choose from a wide range of Indian cars at affordable prices." />
      </Helmet>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Hero />
        <FeaturedCars />
        <HowItWorks />
        <Testimonials />
      </motion.div>
    </>
  );
};

export default HomePage;