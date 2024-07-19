import React from 'react';
import Card from './Card';
import { useSalons } from 'store/queries/useSalons';

const SalonCard: React.FC = () => {
  const { data: hairSalons, error, isLoading } = useSalons('hairSalons');

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading salons</div>;

  return (
    <div className="grid grid-cols-3 gap-4 text-sm sm:text-base">
      {hairSalons?.map((item, index) => {
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
