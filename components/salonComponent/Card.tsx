import Link from 'next/link';
import React from 'react';

interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
  productId: string;
}

const Card: React.FC<CardProps> = ({ imageUrl, title, description, productId }) => {
  return (
    <div className="border rounded-lg shadow-md overflow-hidden">
      <Link href={`/products/${[productId]}`}>
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">{title}</h2>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
