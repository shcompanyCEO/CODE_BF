import React from 'react';
import ModalCountry from '@/components/modal/ModalCountry';

import { salonModeChangeeStore } from 'store/stores/useSalonModeChangeStore';
import { GrLanguage } from 'react-icons/gr';

const Country = () => {
  const { countryModalOpen, countryModalState } = salonModeChangeeStore();

  return (
    <div className="w-full flex justify-end items-center">
      <div className="relative flex items-center">
        <GrLanguage className="w-5 h-5 text-black cursor-pointer" onClick={countryModalOpen} />
        {countryModalState && <ModalCountry />}
      </div>
    </div>
  );
};

export default Country;
