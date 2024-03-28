import React from 'react';
import Logo from './Logo';
import CountryComponent from './CountryComponent';
import MemberShipMenu from './MemberShipMenu';

const Nav = () => {
  return (
    <div className="sticky w-full left-0 top-0 bg-white z-1000">
      <div className="flex justify-between items-center h-32">
        <Logo />
        <CountryComponent />
        <MemberShipMenu />
      </div>
    </div>
  );
};

export default Nav;
