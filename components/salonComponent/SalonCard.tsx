import React from 'react';
import Card from './Card';
import useSalonStore from 'store/stores/useSalonStore';

const Slider: React.FC = () => {
  const { hairSalons } = useSalonStore();
  return (
    <div className="grid grid-cols-3 gap-4 text-sm sm:text-base">
      {hairSalons.map((item, index) => (
        <Card key={index} {...item} />
      ))}
    </div>
  );
};

export default Slider;
