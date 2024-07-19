import React from 'react';
import Logo from './Logo';
import Profile from './Profile';
import { useUserDataStore } from 'store/stores/useUserData';
import { Button } from '@/components/ui/button';
import { salonModeChangeeStore } from 'store/stores/useSalonModeChangeStore';
import SalnonModeChangeModal from '@/components/modal/SalonModeChangeModal';
import { NextPage } from 'next';
import Country from '../country';
import { useAuth } from 'context/AuthContext';

const Nav: NextPage = () => {
  const userInfo = useUserDataStore.getState();
  const { user } = useAuth();
  console.log('sean 111', user);

  const { salonModeModalOpen, salonModeChangeIsOpen } = salonModeChangeeStore();
  return (
    <div className="w-full h-auto left-0 top-0 bg-white z-1000">
      <div className="flex justify-between items-center h-26">
        <Logo />
        {user?.email && user.owner === true && <div>{`${user?.salonName}`} owner</div>}
        {user?.email && user.owner === false && (
          <div>
            <Button onClick={salonModeModalOpen}>살롱모드로 전환</Button>
          </div>
        )}
        <Country />
        <Profile />
        <div>{salonModeChangeIsOpen && <SalnonModeChangeModal />}</div>
      </div>
    </div>
  );
};

export default Nav;
