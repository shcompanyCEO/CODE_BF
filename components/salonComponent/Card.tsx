import Link from 'next/link';
import React from 'react';

interface CardProps {
  id: string; // Generate a unique ID or use Firebase auto-generated ID
  name: string;
  address: string;
  salonPhoneNumber: string;
  salonIntroduction: string;

  location: {
    latitude: number;
    longitude: number;
  };
}

const Card: React.FC<CardProps> = (data) => {
  return (
    <div className="border rounded-lg shadow-md overflow-hidden">
      <Link href={`/products/${[data.name]}`}>
        <img src={''} alt={''} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">{data.name}</h2>
          <p>{data.salonIntroduction}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
