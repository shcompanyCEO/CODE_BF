import React from 'react';
import Card from './Card';

interface SliderProps {
  data: {
    id: string; // Generate a unique ID or use Firebase auto-generated ID
    name: string;
    address: string;
    salonPhoneNumber: string;
    salonIntroduction: string;

    location: {
      latitude: number;
      longitude: number;
    };
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
