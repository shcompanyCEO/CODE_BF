import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
  category: string;
  salon: {
    address: string;
    closeTiem: string;
    designers: [];
    openTime: string;
    ownerEamil: string;
    position: string;
    salonCategory: string;
    salonId: string;
    salonIntroduction: string;
    salonName: string;
    salonPhoneNumber: string;
  };
}

const Card = (data: Salon) => {
  const { salonId, salonName, salonIntroduction, category, salon } = data;
  return (
    <div className="max-w-xs mx-auto bg-white rounded-lg shadow-md overflow-hidden transform transition-all hover:scale-105">
      <Link
        href={{ pathname: `/products/${salon.salonName}`, query: { salonName, salonId, category } }}
      >
        <div className="relative">
          <img className="w-full h-48" src="" alt="Product Image" />
        </div>
        <div className="p-4">
          <h3 className="truncate font-medium text-gray-700">{salon.salonName}</h3>
          <p className="truncate text-gray-500 mb-2">{salonIntroduction}</p>
          <div className="flex items-center mt-2">
            <span className="truncate text-gray-500">4.8</span>
            <span className="truncate text-gray-500 ml-1">(리뷰)</span>
          </div>
        </div>

        <div className="max-w-xs mx-auto bg-white rounded-lg shadow-md overflow-hidden md:max-w-sm">
          <div className="relative pb-2/3">
            <Image
              src="/images/product.jpg" // Replace with your image path
              alt="Product Image"
              layout="fill"
              objectFit="cover"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-sm font-medium text-gray-700">{salonName}</h3>
            <p className="text-sm text-gray-500">{salonIntroduction}</p>
            <div className="mt-2">
              <span className="text-red-500 text-xs">쿠폰적용가</span>
              <span className="text-gray-400 line-through text-xs ml-2">89,000</span>
            </div>
            <div className="mt-1">
              <span className="text-red-500 text-lg font-bold">11%</span>
              <span className="text-lg font-bold text-gray-900 ml-2">79,000</span>
            </div>
            <div className="flex items-center mt-2">
              <span className="text-pink-500 text-sm">★</span>
              <span className="text-sm font-medium text-gray-900 ml-1">5.0</span>
              <span className="text-sm text-gray-500 ml-1">(리뷰 3)</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
