import React from 'react';
import ModalLayout from '../common/ModalLayout';
import Step1 from '../salonModeChangeComponent/Step1';
import Step2 from '../salonModeChangeComponent/Step2';
import Step3 from '../salonModeChangeComponent/Step3';

import { salonModeChangeeStore } from 'store/stores/useSalonModeChangeStore';

const SalonModeChangeModal: React.FC = () => {
  const { salonModeModalClose, salonSelector, selectSalonHandler, currentStep } =
    salonModeChangeeStore();

  return (
    <ModalLayout modalClose={salonModeModalClose}>
      {currentStep === 1 && <Step1 />}
      {currentStep === 2 && <Step2 />}
      {currentStep === 3 && <Step3 />}
    </ModalLayout>
  );
};
export default SalonModeChangeModal;
