export interface Car {
  id: string;
  name: string;
  brand: string;
  model: string;
  type: CarType;
  price: number; // Price per day in INR
  images: string[];
  mainImage: string;
  seats: number;
  transmission: 'Manual' | 'Automatic';
  fuel: 'Petrol' | 'Diesel' | 'Electric' | 'CNG';
  mileage: number; // km/l
  rating: number;
  features: string[];
  description: string;
  availability: boolean;
}

export type CarType = 'Hatchback' | 'Sedan' | 'SUV' | 'Luxury' | 'MUV';

export interface Booking {
  id: string;
  userId: string;
  carId: string;
  startDate: Date;
  endDate: Date;
  pickupLocation: string;
  dropLocation: string;
  totalAmount: number;
  status: BookingStatus;
  addOns: string[];
  createdAt: Date;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  paymentStatus: PaymentStatus;
  trackingNumber: string;
}

export type BookingStatus = 'pending' | 'confirmed' | 'completed' | 'cancelled';
export type PaymentStatus = 'pending' | 'paid' | 'failed' | 'refunded';

export interface Location {
  id: string;
  name: string;
  state: string;
  address: string;
  isActive: boolean;
}

export interface PaymentMethod {
  id: string;
  name: string;
  icon: string;
}