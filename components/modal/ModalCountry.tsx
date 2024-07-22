import React from 'react';
import { PanelTopCloseIcon, SettingsIcon } from '../ui/icon';
import { Switch } from '../ui/switch';
import ModalLayout from '../common/ModalLayout';
import { salonModeChangeeStore } from 'store/stores/useSalonModeChangeStore';
import LanguageSwitcher from '../LanguageSwitcher';

const ModalCountry: React.FC = ({}) => {
  const { countryModalState, countryModalClose } = salonModeChangeeStore();

  return (
    <ModalLayout modalClose={countryModalClose}>
      <LanguageSwitcher />
    </ModalLayout>
  );
};
export default ModalCountry;
