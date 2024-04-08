import React from 'react';
import Card from './Card';

interface SliderProps {
  data: {
    imageUrl: string;
    title: string;
    description: string;
    productId: string;
  }[];
}

const Slider: React.FC<SliderProps> = ({ data }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {data.map((item, index) => (
        <Card key={index} {...item} />
      ))}
    </div>
  );
};

export default Slider;
