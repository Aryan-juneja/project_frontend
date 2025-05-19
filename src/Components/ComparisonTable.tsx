import React from 'react';
import { PlanType } from '../types';

interface ComparisonTableProps {
  plans: PlanType[];
}

const ComparisonTable = ({ plans }: ComparisonTableProps) => {
  const features = [
    { id: 'initial', name: 'Initial Capital Requirement' },
    { id: 'spread', name: 'Spread Advantage' },
    { id: 'fees', name: 'Trading Fees' },
    { id: 'leverage', name: 'Leverage Capacity' },
    { id: 'lot', name: 'Minimum Lot Size' },
    { id: 'execution', name: 'Trade Execution Limit' },
    { id: 'open', name: 'Open Position Capacity' },
    { id: 'threshold', name: 'Stop Out Threshold' },
    { id: 'margin', name: 'Margin Call Activation' },
    { id: 'swap', name: 'Swap Policy' },
    { id: 'risk', name: 'Risk Exposure' },
    { id: 'assets', name: 'Asset Options' },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-separate border-spacing-0">
        <thead>
          <tr>
            <th className="text-left p-4 text-gray-400 font-normal">Who It's For</th>
            {plans.map((plan) => (
              <th key={plan.id} className="p-4 text-2xl font-bold">
                Zuper {plan.name}
                <p className="text-sm font-normal text-gray-400 mt-2">{plan.description}</p>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {features.map((feature) => (
            <tr key={feature.id} className="border-t border-gray-800">
              <td className="p-4 text-gray-400">{feature.name}</td>
              {plans.map((plan) => (
                <td key={`${plan.id}-${feature.id}`} className="p-4 text-center">
                  {plan.features[feature.id]}
                </td>
              ))}
            </tr>
          ))}
          <tr>
            <td className="p-4"></td>
            {plans.map((plan) => (
              <td key={`${plan.id}-button`} className="p-4 text-center">
                <button className="w-full px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-md transition-colors">
                  Start Trading
                </button>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ComparisonTable;