import Link from 'next/link';
import React from 'react';

interface Location {
  latitude: number;
  longitude: number;
}

interface Salon {
  salonId: string;
  salonName: string;
  address: string;
  salonPhoneNumber: string;
  location: Location;
  salonIntroduction: string; // Required property
  key: number;
  category: string;
}

const Card = (data: Salon) => {
  const { salonId, salonName, salonIntroduction, category } = data;
  return (
    <div className="max-w-xs mx-auto bg-white rounded-lg shadow-md overflow-hidden transform transition-all hover:scale-105">
      <Link href={{ pathname: `/products/${salonName}`, query: { salonName, salonId, category } }}>
        <div className="relative">
          <img className="w-full h-48" src="" alt="Product Image" />
        </div>
        <div className="p-4">
          <h3 className="truncate font-medium text-gray-700">{salonName}</h3>
          <p className="truncate text-gray-500 mb-2">{salonIntroduction}341414</p>
          <div className="flex items-center mt-2">
            <span className="truncate text-gray-500">4.8</span>
            <span className="truncate text-gray-500 ml-1">(리뷰)</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
