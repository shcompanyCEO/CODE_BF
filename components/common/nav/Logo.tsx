import Link from 'next/link';
import React from 'react';
import useMenuStore from 'store/useMenuStore';

const Logo = () => {
  const { active, setActive } = useMenuStore();

  return (
    <div className="flex w-4/5 justify-start">
      <Link href={'/'} onClick={() => setActive('home')}>
        <div className="w-108 h-full">Salon Store</div>
      </Link>
    </div>
  );
};

export default Logo;
