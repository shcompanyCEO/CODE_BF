import Link from 'next/link';
import React from 'react';

const Logo = () => {
  return (
    <div className="flex w-4/5 justify-start">
      <Link href={'/'}>
        <div className="w-108 h-full">Salon Store</div>
      </Link>
    </div>
  );
};

export default Logo;
