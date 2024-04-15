import React, { useEffect } from 'react';
import Logo from './Logo';
import Profile from './Profile';
import { userInfoStore } from 'store/stores/userData';
import { Button } from '@/components/ui/button';
import { modalStateStore } from 'store/stores/modalStateStore';
import SalnonModeModal from '@/components/modal/SalonModeModal';
import Country from '../country';

const Nav = () => {
  const userName = userInfoStore((state) => state.displayName);
  const { salonModeModalOpen, salonModeChangeIsOpen } = modalStateStore();

  return (
    <div className="w-full h-auto left-0 top-0 bg-white z-1000">
      <div className="flex justify-between items-center h-32">
        <Logo />
        <Country />
        {userName && (
          <div>
            <Button onClick={salonModeModalOpen}>살롱모드로 전환</Button>
          </div>
        )}
        <Profile />
        {salonModeChangeIsOpen && <SalnonModeModal />}
      </div>
    </div>
  );
};

export default Nav;
