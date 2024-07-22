import React, { useEffect, useState } from 'react';
import useModalStore from 'store/stores/useModalStore';
import StoreOperation from '../storeOperation/StoreOperation';
import { Transition, TransitionChild } from '@headlessui/react';
import { Button } from '../ui/button';

const ModalSalonReservationPage = () => {
  const { isReservationPageOpen, isReservationPageHandler } = useModalStore();
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    if (isReservationPageOpen) {
      setAnimationClass('slide-up');
    } else {
      setAnimationClass('slide-down');
    }
  }, [isReservationPageOpen]);

  return (
    <Transition show={isReservationPageOpen} as={React.Fragment}>
      <TransitionChild
        as={React.Fragment}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 z-40" />
      </TransitionChild>
      <TransitionChild
        as={React.Fragment}
        enter="transition-transform transform duration-300"
        enterFrom="translate-y-full"
        enterTo="translate-y-0"
        leave="transition-transform transform duration-300"
        leaveFrom="translate-y-0"
        leaveTo="translate-y-full"
      >
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded shadow-lg w-full h-full max-w-[640px] max-h-full">
            <StoreOperation />
          </div>
        </div>
      </TransitionChild>
    </Transition>
  );
};

export default ModalSalonReservationPage;
