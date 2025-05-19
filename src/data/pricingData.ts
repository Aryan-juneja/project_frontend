import { PlanType } from '../types';

export const pricingData: PlanType[] = [
  {
    id: 'vintage',
    name: 'Vintage',
    description: 'Perfect for balanced, all-level traders looking for consistency and solid growth.',
    price: '10k',
    spreadValue: '0.2',
    highlight: false,
    features: {
      initial: '$10k',
      spread: 'from 0.2 pips',
      fees: 'No Commission',
      leverage: '1:Unlimited',
      lot: '0.01',
      execution: '200 trades during peak hours',
      open: 'Unlimited',
      threshold: '0%',
      margin: '30%',
      swap: '0%',
      risk: 'Moderate',
      assets: 'Forex, Crypto, Stocks,\nCommodities, Indices',
    }
  },
  {
    id: 'cent',
    name: 'Cent',
    description: 'Designed for beginners ready to step into the trading world with minimal risk.',
    price: '10',
    spreadValue: '0.3',
    highlight: true,
    features: {
      initial: '$10',
      spread: 'from 0.3 pips',
      fees: 'Zero Commission',
      leverage: '1:Unlimited',
      lot: 'Same',
      execution: '200 trades during peak hours',
      open: 'Unlimited',
      threshold: '0%',
      margin: '30%',
      swap: '0%',
      risk: 'Low',
      assets: 'Forex, Crypto, Stocks,\nCommodities, Indices',
    }
  },
  {
    id: 'pro',
    name: 'Pro',
    description: 'Ideal for experienced traders seeking precision, speed, and high-stakes performance.',
    price: '500',
    spreadValue: '0.1',
    highlight: false,
    features: {
      initial: '$500',
      spread: 'from 0.1 pips',
      fees: 'No Commission',
      leverage: '1:Unlimited',
      lot: 'Same',
      execution: '200 trades during peak hours',
      open: 'Unlimited',
      threshold: '0%',
      margin: '30%',
      swap: '0%',
      risk: 'High',
      assets: 'Forex, Crypto, Stocks,\nCommodities, Indices',
    }
  }
];