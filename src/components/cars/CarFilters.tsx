import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, X } from 'lucide-react';

interface FiltersProps {
  onFilterChange: (filters: FilterState) => void;
  onSort: (option: string) => void;
}

interface FilterState {
  type: string[];
  transmission: string[];
  fuel: string[];
  priceRange: [number, number];
}

const initialFilters: FilterState = {
  type: [],
  transmission: [],
  fuel: [],
  priceRange: [0, 10000],
};

const CarFilters: React.FC<FiltersProps> = ({ onFilterChange, onSort }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState<FilterState>(initialFilters);

  const handleFilterChange = (category: keyof FilterState, value: any) => {
    let updatedFilters = { ...filters };
    
    if (category === 'priceRange') {
      updatedFilters.priceRange = value;
    } else {
      const values = [...updatedFilters[category]] as string[];
      const index = values.indexOf(value);
      
      if (index === -1) {
        values.push(value);
      } else {
        values.splice(index, 1);
      }
      
      updatedFilters[category] = values;
    }
    
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  const resetFilters = () => {
    setFilters(initialFilters);
    onFilterChange(initialFilters);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-bold">Filter Cars</h3>
        
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <select 
              className="border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary-500"
              onChange={(e) => onSort(e.target.value)}
            >
              <option value="recommended">Recommended</option>
              <option value="price_low">Price: Low to High</option>
              <option value="price_high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
          <button 
            className="md:hidden flex items-center text-sm font-medium text-primary-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <>
                <X className="w-4 h-4 mr-1" /> Close
              </>
            ) : (
              <>
                <Filter className="w-4 h-4 mr-1" /> Filters
              </>
            )}
          </button>
        </div>
      </div>
      
      <div className={`md:block ${isOpen ? 'block' : 'hidden'} mt-4`}>
        <div className="grid md:grid-cols-4 gap-6">
          {/* Car Type */}
          <div>
            <h4 className="font-medium mb-2">Car Type</h4>
            <div className="space-y-2">
              {['Hatchback', 'Sedan', 'SUV', 'Luxury', 'MUV'].map((type) => (
                <label key={type} className="flex items-center">
                  <input
                    type="checkbox"
                    className="rounded text-primary-500 focus:ring-primary-500 mr-2"
                    checked={filters.type.includes(type)}
                    onChange={() => handleFilterChange('type', type)}
                  />
                  <span>{type}</span>
                </label>
              ))}
            </div>
          </div>
          
          {/* Transmission */}
          <div>
            <h4 className="font-medium mb-2">Transmission</h4>
            <div className="space-y-2">
              {['Manual', 'Automatic'].map((transmission) => (
                <label key={transmission} className="flex items-center">
                  <input
                    type="checkbox"
                    className="rounded text-primary-500 focus:ring-primary-500 mr-2"
                    checked={filters.transmission.includes(transmission)}
                    onChange={() => handleFilterChange('transmission', transmission)}
                  />
                  <span>{transmission}</span>
                </label>
              ))}
            </div>
          </div>
          
          {/* Fuel Type */}
          <div>
            <h4 className="font-medium mb-2">Fuel Type</h4>
            <div className="space-y-2">
              {['Petrol', 'Diesel', 'Electric', 'CNG'].map((fuel) => (
                <label key={fuel} className="flex items-center">
                  <input
                    type="checkbox"
                    className="rounded text-primary-500 focus:ring-primary-500 mr-2"
                    checked={filters.fuel.includes(fuel)}
                    onChange={() => handleFilterChange('fuel', fuel)}
                  />
                  <span>{fuel}</span>
                </label>
              ))}
            </div>
          </div>
          
          {/* Price Range */}
          <div>
            <h4 className="font-medium mb-2">Price Range</h4>
            <div>
              <p className="text-sm text-gray-500 mb-2">
                ₹{filters.priceRange[0]} - ₹{filters.priceRange[1]}
              </p>
              <input
                type="range"
                min="0"
                max="10000"
                step="500"
                value={filters.priceRange[1]}
                onChange={(e) => 
                  handleFilterChange('priceRange', [
                    filters.priceRange[0], 
                    parseInt(e.target.value)
                  ])
                }
                className="w-full"
              />
            </div>
          </div>
        </div>
        
        <div className="flex justify-end mt-4 pt-4 border-t border-gray-200">
          <button
            onClick={resetFilters}
            className="text-sm font-medium text-gray-600 hover:text-gray-900 mr-4"
          >
            Reset Filters
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="md:hidden bg-primary-500 text-white px-4 py-2 rounded-md text-sm font-medium"
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarFilters;