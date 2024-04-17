import React, { useEffect } from 'react';
import Logo from './Logo';
import Profile from './Profile';
import { userInfoStore } from 'store/stores/useUserData';
import { Button } from '@/components/ui/button';
import { salonModeChangeeStore } from 'store/stores/useSalonModeChangeStore';
import SalnonModeChangeModal from '@/components/modal/SalonModeChangeModal';
import Country from '../country';

const Nav = () => {
  const userName = userInfoStore((state) => state.displayName);
  const { salonModeModalOpen, salonModeChangeIsOpen } = salonModeChangeeStore();

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
        {salonModeChangeIsOpen && <SalnonModeChangeModal />}
      </div>
    </div>
  );
};

export default Nav;
