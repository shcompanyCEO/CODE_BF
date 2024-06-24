import React from 'react';
import Logo from './Logo';
import Profile from './Profile';
import { useUserDataStore } from 'store/stores/useUserData';
import { Button } from '@/components/ui/button';
import { salonModeChangeeStore } from 'store/stores/useSalonModeChangeStore';
import SalnonModeChangeModal from '@/components/modal/SalonModeChangeModal';
// import Country from '../country';

const Nav = () => {
  const userInfo = useUserDataStore.getState();
  const { salonModeModalOpen, salonModeChangeIsOpen } = salonModeChangeeStore();
  return (
    <div className="w-full h-auto left-0 top-0 bg-white z-1000">
      <div className="flex justify-between items-center h-26">
        <Logo />
        {userInfo.email && userInfo.owner === true && <div>{`${userInfo.salonName!}`} owner</div>}
        {userInfo.email && userInfo.owner === false && (
          <div>
            <Button onClick={salonModeModalOpen}>살롱모드로 전환</Button>
          </div>
        )}
        <Profile />
        {salonModeChangeIsOpen && <SalnonModeChangeModal />}
      </div>
      {/* <Country /> */}
    </div>
  );
};

export default Nav;
