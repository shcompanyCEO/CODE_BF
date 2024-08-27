import React from 'react';
import Logo from './Logo';
import Profile from './Profile';
import { Button } from '@/components/ui/button';
import { salonModeChangeeStore } from 'store/stores/useSalonModeChangeStore';
import ModalSalonModeChange from '@/components/modal/ModalSalonModeChange';
import { NextPage } from 'next';
import Country from '../country';
import { useAuth } from 'context/AuthProvider';
import { useTranslation } from 'react-i18next';

const Nav: NextPage = () => {
  const { user } = useAuth();
  const { t } = useTranslation();

  const { salonModeModalOpen, salonModeChangeIsOpen } = salonModeChangeeStore();

  return (
    <div className="w-full h-auto left-0 top-0">
      <div className="flex justify-between items-center h-20 px-4">
        <Logo />
        <div className="flex items-center space-x-4">
          {user?.email && user.salon !== null && (
            <div className="text-sm font-semibold">{user?.salon?.salonName}</div>
          )}
          {user?.email && user.salon === null && (
            <div>
              <Button onClick={salonModeModalOpen}>{t('salonModeChange')}</Button>
            </div>
          )}
        </div>
        <div className="flex items-center space-x-4">
          <Country />
          <Profile />
        </div>
        {salonModeChangeIsOpen && <ModalSalonModeChange />}
      </div>
    </div>
  );
};

export default Nav;
