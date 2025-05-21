import { Location } from '../types';

export const locations: Location[] = [
  {
    id: 'delhi',
    name: 'Delhi',
    state: 'Delhi',
    address: 'Connaught Place, New Delhi',
    isActive: true
  },
  {
    id: 'mumbai',
    name: 'Mumbai',
    state: 'Maharashtra',
    address: 'Bandra Kurla Complex, Mumbai',
    isActive: true
  },
  {
    id: 'bangalore',
    name: 'Bangalore',
    state: 'Karnataka',
    address: 'MG Road, Bangalore',
    isActive: true
  },
  {
    id: 'hyderabad',
    name: 'Hyderabad',
    state: 'Telangana',
    address: 'Banjara Hills, Hyderabad',
    isActive: true
  },
  {
    id: 'chennai',
    name: 'Chennai',
    state: 'Tamil Nadu',
    address: 'Anna Nagar, Chennai',
    isActive: true
  },
  {
    id: 'kolkata',
    name: 'Kolkata',
    state: 'West Bengal',
    address: 'Park Street, Kolkata',
    isActive: true
  },
  {
    id: 'pune',
    name: 'Pune',
    state: 'Maharashtra',
    address: 'Koregaon Park, Pune',
    isActive: true
  },
  {
    id: 'jaipur',
    name: 'Jaipur',
    state: 'Rajasthan',
    address: 'C-Scheme, Jaipur',
    isActive: true
  },
  {
    id: 'ahmedabad',
    name: 'Ahmedabad',
    state: 'Gujarat',
    address: 'SG Highway, Ahmedabad',
    isActive: true
  },
  {
    id: 'kochi',
    name: 'Kochi',
    state: 'Kerala',
    address: 'Marine Drive, Kochi',
    isActive: true
  },
  {
    id: 'goa',
    name: 'Goa',
    state: 'Goa',
    address: 'Panjim, Goa',
    isActive: true
  },
  {
    id: 'gurgaon',
    name: 'Gurgaon',
    state: 'Haryana',
    address: 'Cyber City, Gurgaon',
    isActive: true
  },
  {
    id: 'chandigarh',
    name: 'Chandigarh',
    state: 'Punjab',
    address: 'Sector 17, Chandigarh',
    isActive: true
  },
  {
    id: 'lucknow',
    name: 'Lucknow',
    state: 'Uttar Pradesh',
    address: 'Hazratganj, Lucknow',
    isActive: true
  },
  {
    id: 'bhubaneswar',
    name: 'Bhubaneswar',
    state: 'Odisha',
    address: 'Saheed Nagar, Bhubaneswar',
    isActive: true
  }
];

// Get locations in alphabetical order
export const getLocationsAlphabetical = (): Location[] => {
  return [...locations].sort((a, b) => a.name.localeCompare(b.name));
};

// Get locations by state
export const getLocationsByState = (state: string): Location[] => {
  return locations.filter(loc => loc.state.toLowerCase() === state.toLowerCase());
};

// Get active locations only
export const getActiveLocations = (): Location[] => {
  return locations.filter(loc => loc.isActive);
};