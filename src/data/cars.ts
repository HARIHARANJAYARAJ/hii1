import { Car } from '../types';

export const cars: Car[] = [
  {
    id: 'tata-nexon',
    name: 'Tata Nexon',
    brand: 'Tata',
    model: 'Nexon XZ+',
    type: 'SUV',
    price: 1699,
    mainImage: 'https://images.pexels.com/photos/13834744/pexels-photo-13834744.jpeg?auto=compress&cs=tinysrgb&w=1600',
    images: [
      'https://images.pexels.com/photos/13834744/pexels-photo-13834744.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/13834743/pexels-photo-13834743.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/13834742/pexels-photo-13834742.jpeg?auto=compress&cs=tinysrgb&w=1600'
    ],
    seats: 5,
    transmission: 'Manual',
    fuel: 'Petrol',
    mileage: 17.5,
    rating: 4.5,
    features: [
      'Touchscreen Infotainment',
      'Reverse Camera',
      'Keyless Entry',
      'Cruise Control',
      'Airbags',
      'Sunroof'
    ],
    description: 'The Tata Nexon is a stylish, feature-packed compact SUV that offers excellent performance and safety features. It comes with a 1.2-liter turbocharged petrol engine that delivers a perfect balance of power and efficiency.',
    availability: true
  },
  {
    id: 'mahindra-xuv700',
    name: 'Mahindra XUV700',
    brand: 'Mahindra',
    model: 'XUV700 AX7',
    type: 'SUV',
    price: 2799,
    mainImage: 'https://images.pexels.com/photos/15013228/pexels-photo-15013228.jpeg?auto=compress&cs=tinysrgb&w=1600',
    images: [
      'https://images.pexels.com/photos/15013228/pexels-photo-15013228.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/15013227/pexels-photo-15013227.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/15013226/pexels-photo-15013226.jpeg?auto=compress&cs=tinysrgb&w=1600'
    ],
    seats: 7,
    transmission: 'Automatic',
    fuel: 'Diesel',
    mileage: 16.0,
    rating: 4.7,
    features: [
      'Panoramic Sunroof',
      'ADAS Features',
      'Dual 10.25-inch Screens',
      'Connected Car Tech',
      '7 Airbags',
      'Wireless Charging'
    ],
    description: 'The Mahindra XUV700 is a premium SUV with an impressive combination of style, comfort, and technology. Its powerful 2.2-liter diesel engine provides excellent performance for both city and highway driving.',
    availability: true
  },
  {
    id: 'maruti-swift',
    name: 'Maruti Swift',
    brand: 'Maruti Suzuki',
    model: 'Swift ZXi',
    type: 'Hatchback',
    price: 1199,
    mainImage: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=1600',
    images: [
      'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=1600'
    ],
    seats: 5,
    transmission: 'Manual',
    fuel: 'Petrol',
    mileage: 22.0,
    rating: 4.2,
    features: [
      'Touchscreen Infotainment',
      'Keyless Entry',
      'Push-button Start',
      'Auto AC',
      'Dual Airbags',
      'ABS with EBD'
    ],
    description: 'The Maruti Swift is one of India\'s most popular hatchbacks, known for its fun-to-drive character and excellent fuel efficiency. Its compact size makes it perfect for navigating busy city streets and tight parking spaces.',
    availability: true
  },
  {
    id: 'hyundai-creta',
    name: 'Hyundai Creta',
    brand: 'Hyundai',
    model: 'Creta SX(O)',
    type: 'SUV',
    price: 2299,
    mainImage: 'https://images.pexels.com/photos/1682666/pexels-photo-1682666.jpeg?auto=compress&cs=tinysrgb&w=1600',
    images: [
      'https://images.pexels.com/photos/1682666/pexels-photo-1682666.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/1682666/pexels-photo-1682666.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/1682666/pexels-photo-1682666.jpeg?auto=compress&cs=tinysrgb&w=1600'
    ],
    seats: 5,
    transmission: 'Automatic',
    fuel: 'Petrol',
    mileage: 17.0,
    rating: 4.6,
    features: [
      'Panoramic Sunroof',
      'Ventilated Seats',
      'BlueLink Connected Car Tech',
      'BOSE Premium Sound System',
      '6 Airbags',
      'Air Purifier'
    ],
    description: 'The Hyundai Creta is a feature-rich compact SUV that offers premium comfort and modern technology. Its spacious cabin and powerful engine make it perfect for both city commutes and weekend getaways.',
    availability: true
  },
  {
    id: 'honda-city',
    name: 'Honda City',
    brand: 'Honda',
    model: 'City ZX',
    type: 'Sedan',
    price: 1999,
    mainImage: 'https://images.pexels.com/photos/4511379/pexels-photo-4511379.jpeg?auto=compress&cs=tinysrgb&w=1600',
    images: [
      'https://images.pexels.com/photos/4511379/pexels-photo-4511379.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/4511379/pexels-photo-4511379.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/4511379/pexels-photo-4511379.jpeg?auto=compress&cs=tinysrgb&w=1600'
    ],
    seats: 5,
    transmission: 'Automatic',
    fuel: 'Petrol',
    mileage: 19.5,
    rating: 4.5,
    features: [
      '8-inch Touchscreen',
      'Electric Sunroof',
      'Lane Watch Camera',
      'Alexa Support',
      'Paddle Shifters',
      'Cruise Control'
    ],
    description: 'The Honda City is a premium sedan known for its refinement, comfort, and reliability. Its elegant design, spacious interior, and responsive handling make it a preferred choice for executive travel and family outings.',
    availability: true
  },
  {
    id: 'toyota-innova',
    name: 'Toyota Innova Crysta',
    brand: 'Toyota',
    model: 'Innova Crysta ZX',
    type: 'MUV',
    price: 2999,
    mainImage: 'https://images.pexels.com/photos/10910691/pexels-photo-10910691.jpeg?auto=compress&cs=tinysrgb&w=1600',
    images: [
      'https://images.pexels.com/photos/10910691/pexels-photo-10910691.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/10910691/pexels-photo-10910691.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/10910691/pexels-photo-10910691.jpeg?auto=compress&cs=tinysrgb&w=1600'
    ],
    seats: 7,
    transmission: 'Automatic',
    fuel: 'Diesel',
    mileage: 14.0,
    rating: 4.7,
    features: [
      'Captain Seats',
      'Ambient Lighting',
      'Auto Climate Control',
      'Touchscreen Infotainment',
      '7 Airbags',
      'Hill Start Assist'
    ],
    description: 'The Toyota Innova Crysta is the gold standard of MPVs in India, offering unmatched comfort, reliability, and space. Its powerful diesel engine and premium features make it perfect for family travel and corporate transportation.',
    availability: true
  },
  {
    id: 'kia-seltos',
    name: 'Kia Seltos',
    brand: 'Kia',
    model: 'Seltos GTX+',
    type: 'SUV',
    price: 2199,
    mainImage: 'https://images.pexels.com/photos/5417837/pexels-photo-5417837.jpeg?auto=compress&cs=tinysrgb&w=1600',
    images: [
      'https://images.pexels.com/photos/5417837/pexels-photo-5417837.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/5417837/pexels-photo-5417837.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/5417837/pexels-photo-5417837.jpeg?auto=compress&cs=tinysrgb&w=1600'
    ],
    seats: 5,
    transmission: 'Automatic',
    fuel: 'Petrol',
    mileage: 16.5,
    rating: 4.6,
    features: [
      'Bose Sound System',
      'Ventilated Seats',
      'Heads-up Display',
      'All-wheel Disc Brakes',
      '6 Airbags',
      'Drive Modes'
    ],
    description: 'The Kia Seltos is a feature-loaded compact SUV that combines bold styling with advanced technology. Its spacious interior, powerful engine options, and premium features make it a compelling choice in its segment.',
    availability: true
  },
  {
    id: 'mg-hector',
    name: 'MG Hector',
    brand: 'MG',
    model: 'Hector Sharp',
    type: 'SUV',
    price: 2399,
    mainImage: 'https://images.pexels.com/photos/3786091/pexels-photo-3786091.jpeg?auto=compress&cs=tinysrgb&w=1600',
    images: [
      'https://images.pexels.com/photos/3786091/pexels-photo-3786091.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/3786091/pexels-photo-3786091.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/3786091/pexels-photo-3786091.jpeg?auto=compress&cs=tinysrgb&w=1600'
    ],
    seats: 5,
    transmission: 'Automatic',
    fuel: 'Petrol',
    mileage: 15.8,
    rating: 4.4,
    features: [
      '14-inch Touchscreen',
      'Panoramic Sunroof',
      'Voice Commands',
      'Connected Car Tech',
      '6 Airbags',
      'Infinity Sound System'
    ],
    description: 'The MG Hector is known for its "Internet Inside" features and spacious cabin. With the largest touchscreen in its class and numerous connected car features, it offers a tech-savvy driving experience combined with comfort and style.',
    availability: true
  },
  {
    id: 'maruti-baleno',
    name: 'Maruti Baleno',
    brand: 'Maruti Suzuki',
    model: 'Baleno Alpha',
    type: 'Hatchback',
    price: 1399,
    mainImage: 'https://images.pexels.com/photos/5370264/pexels-photo-5370264.jpeg?auto=compress&cs=tinysrgb&w=1600',
    images: [
      'https://images.pexels.com/photos/5370264/pexels-photo-5370264.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/5370264/pexels-photo-5370264.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/5370264/pexels-photo-5370264.jpeg?auto=compress&cs=tinysrgb&w=1600'
    ],
    seats: 5,
    transmission: 'Manual',
    fuel: 'Petrol',
    mileage: 22.5,
    rating: 4.3,
    features: [
      'SmartPlay Studio',
      'LED Projector Headlamps',
      'Climate Control',
      'Keyless Entry',
      'Dual Airbags',
      'Rear Parking Camera'
    ],
    description: 'The Maruti Baleno is a premium hatchback that offers a spacious cabin, refined driving experience, and excellent fuel efficiency. Its lightweight design and responsive engine make it enjoyable to drive while being economic to run.',
    availability: true
  },
  {
    id: 'audi-a4',
    name: 'Audi A4',
    brand: 'Audi',
    model: 'A4 Premium Plus',
    type: 'Luxury',
    price: 5999,
    mainImage: 'https://images.pexels.com/photos/2834653/pexels-photo-2834653.jpeg?auto=compress&cs=tinysrgb&w=1600',
    images: [
      'https://images.pexels.com/photos/2834653/pexels-photo-2834653.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/2834653/pexels-photo-2834653.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/2834653/pexels-photo-2834653.jpeg?auto=compress&cs=tinysrgb&w=1600'
    ],
    seats: 5,
    transmission: 'Automatic',
    fuel: 'Petrol',
    mileage: 12.0,
    rating: 4.9,
    features: [
      'Bang & Olufsen Sound',
      'MMI Navigation Plus',
      'Virtual Cockpit',
      'LED Matrix Headlights',
      'Audi Drive Select',
      'Wireless Charging'
    ],
    description: 'The Audi A4 is a luxury sedan that offers a perfect blend of sophisticated design, cutting-edge technology, and dynamic performance. Its premium interior, smooth ride, and advanced driving aids make every journey special.',
    availability: true
  }
];

// Function to get a car by ID
export const getCarById = (id: string): Car | undefined => {
  return cars.find(car => car.id === id);
};

// Function to filter cars by type
export const getCarsByType = (type: string): Car[] => {
  return cars.filter(car => car.type.toLowerCase() === type.toLowerCase());
};

// Function to sort cars by price (low to high)
export const getSortedCarsByPrice = (ascending: boolean = true): Car[] => {
  return [...cars].sort((a, b) => ascending ? a.price - b.price : b.price - a.price);
};

// Function to get featured cars (top 4 by rating)
export const getFeaturedCars = (): Car[] => {
  return [...cars].sort((a, b) => b.rating - a.rating).slice(0, 4);
};