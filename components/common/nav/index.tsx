import React from 'react';
import Logo from './Logo';
import Profile from './Profile';
import { Button } from '@/components/ui/button';
import { salonModeChangeeStore } from 'store/stores/useSalonModeChangeStore';
import ModalSalonModeChange from '@/components/modal/ModalSalonModeChange';
import { NextPage } from 'next';
import Country from '../country';
import { useAuth } from 'context/AuthContext';
import { useTranslation } from 'react-i18next';

const Nav: NextPage = () => {
  const { user } = useAuth();
  const { t } = useTranslation();

  const { salonModeModalOpen, salonModeChangeIsOpen } = salonModeChangeeStore();
  return (
    <div className="w-full h-auto left-0 top-0 bg-white">
      <div className="flex justify-between items-center h-26">
        <Logo />
        <div className="flex">
          {user?.email && user.owner === true && (
            <div className="flex items-center">{`${user?.salonName}`}</div>
          )}
          {user?.email && user.owner === false && (
            <div className="flex items-center">
              <Button onClick={salonModeModalOpen}>{t('salonModeChange')}</Button>
            </div>
          )}
          <Country />
          <Profile />
        </div>
        <div>{salonModeChangeIsOpen && <ModalSalonModeChange />}</div>
      </div>
    </div>
  );
};

export default Nav;
