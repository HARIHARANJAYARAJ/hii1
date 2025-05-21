import React, { useState, useEffect } from 'react';
import { cars, getSortedCarsByPrice } from '../data/cars';
import CarCard from '../components/common/CarCard';
import CarFilters from '../components/cars/CarFilters';
import { motion } from 'framer-motion';
import { Car, FilterX } from 'lucide-react';

const CarsPage: React.FC = () => {
  const [filteredCars, setFilteredCars] = useState(cars);
  const [activeFilters, setActiveFilters] = useState<Record<string, any>>({});
  const [sortOption, setSortOption] = useState('recommended');
  
  const handleFilterChange = (filters: any) => {
    setActiveFilters(filters);
    
    let result = [...cars];
    
    // Filter by type
    if (filters.type && filters.type.length > 0) {
      result = result.filter(car => filters.type.includes(car.type));
    }
    
    // Filter by transmission
    if (filters.transmission && filters.transmission.length > 0) {
      result = result.filter(car => filters.transmission.includes(car.transmission));
    }
    
    // Filter by fuel
    if (filters.fuel && filters.fuel.length > 0) {
      result = result.filter(car => filters.fuel.includes(car.fuel));
    }
    
    // Filter by price range
    if (filters.priceRange) {
      const [min, max] = filters.priceRange;
      result = result.filter(car => car.price >= min && car.price <= max);
    }
    
    setFilteredCars(result);
  };
  
  const handleSort = (option: string) => {
    setSortOption(option);
    
    let sorted = [...filteredCars];
    
    switch (option) {
      case 'price_low':
        sorted = getSortedCarsByPrice(true);
        break;
      case 'price_high':
        sorted = getSortedCarsByPrice(false);
        break;
      case 'rating':
        sorted = [...filteredCars].sort((a, b) => b.rating - a.rating);
        break;
      default:
        // Default to recommended (we'll just use the original order for this example)
        sorted = [...cars];
    }
    
    // Re-apply filters after sorting
    handleFilterChange(activeFilters);
  };
  
  const clearAllFilters = () => {
    handleFilterChange({
      type: [],
      transmission: [],
      fuel: [],
      priceRange: [0, 10000],
    });
  };
  
  const hasActiveFilters = () => {
    return (
      (activeFilters.type && activeFilters.type.length > 0) || 
      (activeFilters.transmission && activeFilters.transmission.length > 0) || 
      (activeFilters.fuel && activeFilters.fuel.length > 0)
    );
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Explore Our Cars</h1>
          <p className="text-gray-600">
            Choose from our wide range of premium cars for your next journey.
          </p>
        </div>
        
        <CarFilters onFilterChange={handleFilterChange} onSort={handleSort} />
        
        {hasActiveFilters() && (
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-sm font-medium mr-2">Active Filters:</span>
              <div className="flex flex-wrap gap-2">
                {activeFilters.type && activeFilters.type.map((type: string) => (
                  <span key={type} className="inline-flex items-center px-2 py-1 bg-primary-100 text-primary-800 rounded-md text-sm">
                    {type}
                  </span>
                ))}
                {activeFilters.transmission && activeFilters.transmission.map((transmission: string) => (
                  <span key={transmission} className="inline-flex items-center px-2 py-1 bg-primary-100 text-primary-800 rounded-md text-sm">
                    {transmission}
                  </span>
                ))}
                {activeFilters.fuel && activeFilters.fuel.map((fuel: string) => (
                  <span key={fuel} className="inline-flex items-center px-2 py-1 bg-primary-100 text-primary-800 rounded-md text-sm">
                    {fuel}
                  </span>
                ))}
              </div>
            </div>
            <button
              onClick={clearAllFilters}
              className="text-sm font-medium text-primary-500 flex items-center"
            >
              <FilterX className="w-4 h-4 mr-1" />
              Clear All
            </button>
          </div>
        )}
        
        {filteredCars.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCars.map((car, index) => (
              <CarCard key={car.id} car={car} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <Car className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">No cars found</h3>
            <p className="text-gray-600">
              No cars match your current filters. Try adjusting your search criteria.
            </p>
            <button
              onClick={clearAllFilters}
              className="mt-4 btn btn-outline"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarsPage;