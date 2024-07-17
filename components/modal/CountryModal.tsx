import React from 'react';
import { PanelTopCloseIcon, SettingsIcon } from '../ui/icon';
import { Switch } from '../ui/switch';
import ModalLayout from '../common/ModalLayout';
import { salonModeChangeeStore } from 'store/stores/useSalonModeChangeStore';
import LanguageSwitcher from '../LanguageSwitcher';

const CountryModal: React.FC = ({}) => {
  const { countryModalState, countryModalClose } = salonModeChangeeStore();

  return (
    <ModalLayout modalClose={countryModalClose}>
      <LanguageSwitcher />
    </ModalLayout>
  );
};
export default CountryModal;
