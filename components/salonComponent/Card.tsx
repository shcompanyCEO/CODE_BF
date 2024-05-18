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
  console.log('sean id', data);
  return (
    <div className="border rounded-lg shadow-md overflow-hidden ">
      <Link href={{ pathname: `/products/${salonName}`, query: { salonName, salonId, category } }}>
        <img src={''} alt={''} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">{salonName}</h2>
          <p>{salonIntroduction}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
