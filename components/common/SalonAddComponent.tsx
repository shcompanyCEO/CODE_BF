import { useAuth } from 'context/AuthProvider';
import React from 'react';
import { Button } from '../ui/button';
import { salonModeChangeeStore } from 'store/stores/useSalonModeChangeStore';
import { useTranslation } from 'react-i18next';
import ModalSalonModeChange from '../modal/ModalSalonModeChange';

const SalonAddComponent = () => {
  const { user } = useAuth();
  const { salonModeModalOpen, salonModeChangeIsOpen } = salonModeChangeeStore();
  const { t } = useTranslation();
  return (
    <div className="flex items-center space-x-4 mt-5 mb-5">
      {user?.email && user.salon !== null && (
        <div className="text-sm font-semibold">{user?.salon?.salonName}</div>
      )}
      {user?.email && user.salon === null && (
        <div className="flex justify-between items-center w-full border-[2px] border-black-200 border-solid rounded-[10px] px-2">
          매장을 등록하고 관리 해보세요
          <Button onClick={salonModeModalOpen}>+ {t('salonModeChange')}</Button>
        </div>
      )}
      {salonModeChangeIsOpen && <ModalSalonModeChange />}
    </div>
  );
};

export default SalonAddComponent;
