import Link from 'next/link';
import React from 'react';

interface Location {
  latitude: number;
  longitude: number;
}

interface Salon {
  id: string;
  salonName: string;
  address: string;
  salonPhoneNumber: string;
  location: Location;
  salonIntroduction: string; // Required property
  key: number;
}

const Card = (data: Salon) => {
  const { id, salonName, salonIntroduction } = data;
  return (
    <div className="border rounded-lg shadow-md overflow-hidden ">
      <Link href={`/products/${id}`}>
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
