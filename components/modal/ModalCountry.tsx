import React from 'react';
import ModalLayout from '../common/ModalLayout';
import { salonModeChangeeStore } from 'store/stores/useSalonModeChangeStore';
import LanguageSwitcher from '../LanguageSwitcher';

const ModalCountry: React.FC = ({}) => {
  const { countryModalClose } = salonModeChangeeStore();

  return (
    <ModalLayout modalClose={countryModalClose}>
      <LanguageSwitcher />
    </ModalLayout>
  );
};
export default ModalCountry;
