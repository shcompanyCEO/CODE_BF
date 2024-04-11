import Link from 'next/link';
import React from 'react';

const Logo = () => {
  return (
    <div className="flex w-4/5 justify-end items-center">
      <Link href={'/'}>
        <div className="text-3xl">Salon Store</div>
      </Link>
    </div>
  );
};

export default Logo;
