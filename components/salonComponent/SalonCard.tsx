import React from 'react';
import Card from './Card';
import useSalonStore from 'store/stores/useSalonStore';

const SalonCard: React.FC = () => {
  const { hairSalons } = useSalonStore();
  return (
    <div className="grid grid-cols-3 gap-4 text-sm sm:text-base">
      {hairSalons.map((item, index) => {
        const data = {
          ...item,
          category: 'hair',
        };
        return <Card key={index} {...data} />;
      })}
    </div>
  );
};

export default SalonCard;
