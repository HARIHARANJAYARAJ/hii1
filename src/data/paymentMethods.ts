import { PaymentMethod } from '../types';

export const paymentMethods: PaymentMethod[] = [
  {
    id: 'cc',
    name: 'Credit Card',
    icon: 'credit-card'
  },
  {
    id: 'dc',
    name: 'Debit Card',
    icon: 'credit-card'
  },
  {
    id: 'upi',
    name: 'UPI',
    icon: 'scan'
  },
  {
    id: 'netbanking',
    name: 'Net Banking',
    icon: 'landmark'
  },
  {
    id: 'wallet',
    name: 'Paytm/PhonePe',
    icon: 'wallet'
  }
];