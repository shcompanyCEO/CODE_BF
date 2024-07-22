import React from 'react';
import useModalStore from 'store/stores/useModalStore';
import SalonMenuBar from './SalonMenuBar';
import StoreOperation from '../storeOperation/StoreOperation';
import ModalSalonReservationPage from '../modal/ModalSalonReservationPage';

const OwnerMenuComponent = () => {
  const { isSalonControllerHandler } = useModalStore();
  return (
    <>
      <div className="fixed right-0 bottom-40 z-50 max-[640px]:">
        <div className="relative max-w-layout-maxWidth left-1/2 transform -translate-x-1/2">
          <div className="absolute bottom-[calc(env(safe-area-inset-bottom) + 72px)] right-14 text-right">
            <button
              onClick={isSalonControllerHandler}
              className="relative text-gray-800 hover:text-gray-600 focus:outline-none"
            >
              handler
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OwnerMenuComponent;
