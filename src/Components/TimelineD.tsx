import React from "react";
import { Timeline } from "@/Components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "01",
      content: (
        <div>
            <h2 className="text-neutral-600 md:text-sm dark:text-neutral-200">Step 1</h2>
            <p className="mb-8 text-lg font-normal">
              Register Your Account    
            </p>
        </div>
      ),
    },
    {
      title: "02",
      content: (
        <div>
            <h2 className="text-neutral-600 md:text-sm dark:text-neutral-200">Step 2</h2>
            <p className="text-lg font-normal  ">
              Deposit Your Funds    
            </p>
        </div>
        
      ),
    },
    {
      title: "03",
      content: (
       <div>
            <h2 className="text-neutral-600 md:text-sm dark:text-neutral-200">Step 3</h2>
            <p className="mb-8 text-lg font-normal">
              KYC  
            </p>
        </div>
      ),
    },
    {
      title: "04",
      content: (
       <div>
            <h2 className="text-neutral-600 md:text-sm dark:text-neutral-200">Step 4</h2>
            <p className="mb-8 text-lg font-normal">
              Start Trading & Earn Profits 
            </p>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
