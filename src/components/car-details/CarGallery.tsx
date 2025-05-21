import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarGalleryProps {
  images: string[];
  name: string;
}

const CarGallery: React.FC<CarGalleryProps> = ({ images, name }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const selectImage = (index: number) => {
    setCurrentImage(index);
  };

  return (
    <div className="rounded-lg overflow-hidden shadow-lg">
      <div className="relative">
        <motion.div
          key={currentImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="relative h-[300px] md:h-[400px] lg:h-[500px]"
        >
          <img
            src={images[currentImage]}
            alt={`${name} - View ${currentImage + 1}`}
            className="w-full h-full object-cover"
          />
          
          {/* Navigation Arrows */}
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          
          {/* Image Counter */}
          <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
            {currentImage + 1} / {images.length}
          </div>
        </motion.div>
      </div>
      
      {/* Thumbnails */}
      <div className="flex p-2 bg-gray-100">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => selectImage(index)}
            className={`relative w-1/5 h-20 mx-1 rounded-md overflow-hidden ${
              currentImage === index ? 'ring-2 ring-primary-500' : ''
            }`}
          >
            <img
              src={image}
              alt={`${name} thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {currentImage === index && (
              <div className="absolute inset-0 bg-primary-500/20"></div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CarGallery;