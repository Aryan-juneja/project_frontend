import React, { useState } from 'react';
import ResourcesHeader from './ResourcesHeader';
import ResourcesCards from './ResourcesCards';

const ResourcesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('education');

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-950">
      <div className="container mx-auto px-4">
        <ResourcesHeader 
          activeCategory={activeCategory} 
          setActiveCategory={setActiveCategory} 
        />
        <ResourcesCards activeCategory={activeCategory} />
      </div>
    </section>
  );
};

export default ResourcesSection;