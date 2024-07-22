import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { salonModeChangeeStore } from 'store/stores/useSalonModeChangeStore';
import ModalCountry from '@/components/modal/ModalCountry';

const Country = () => {
  const [langugeSelect, setLangugeSelect] = useState<string>('language');

  const { countryModalOpen, countryModalState } = salonModeChangeeStore();

  useEffect(() => {
    //위치에 따라 국가가 설정된다.
  }, [langugeSelect]);

  return (
    <div className="flex items-center w-2/4">
      <div className="flex justify-end w-full">
        <div className="relative right-3 flex hover:focus">
          <div className="relative right-2.5 flex hover:cursor-pointer" onClick={countryModalOpen}>
            <Image
              src={`${
                langugeSelect === 'language'
                  ? '/images/language.jpeg'
                  : `${'/images/' + `${langugeSelect}` + '.png'}`
              }`}
              alt={'world'}
              width={30}
              height={20}
            />
          </div>

          {countryModalState && <ModalCountry />}
        </div>
      </div>
    </div>
  );
};

export default Country;
