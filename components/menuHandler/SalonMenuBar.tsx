import React from 'react';
import useModalStore from 'store/stores/useModalStore';
import { Transition, TransitionChild } from '@headlessui/react';

const SalonMenuBar = () => {
  const {
    isSalonController,
    isReservationPageOpen,
    isReservationPageHandler,
    isSalonControllerHandler,
  } = useModalStore();

  const menuHandler = (type: string) => {
    if (type === 'reservation') {
      isSalonControllerHandler();
      isReservationPageHandler();
    }
  };

  return (
    <>
      <Transition show={isSalonController} as={React.Fragment}>
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <TransitionChild
            as={React.Fragment}
            enter="transition-opacity duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              className="fixed inset-0 bg-gray-600 bg-opacity-50"
              onClick={isSalonControllerHandler}
            />
          </TransitionChild>
          <TransitionChild
            as={React.Fragment}
            enter="transition-transform transform duration-300"
            enterFrom="scale-0"
            enterTo="scale-100"
            leave="transition-transform transform duration-300"
            leaveFrom="scale-100"
            leaveTo="scale-0"
          >
            <div className="absolute bottom-0 bg-white rounded-full p-8 shadow-lg max-w-md mx-auto">
              <div className="relative w-64 h-64 flex items-center justify-center">
                <button className="absolute top-0 left-1/2 transform -translate-x-1/2">
                  <div className="flex flex-col items-center">
                    <div
                      className="bg-green-500 rounded-full p-2"
                      onClick={() => menuHandler('reservation')}
                    >
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M..." />
                      </svg>
                    </div>
                    <span className="text-xs mt-1">예약 캘린더</span>
                  </div>
                </button>
                <button className="absolute top-1/4 right-0 transform -translate-y-1/2">
                  <div className="flex flex-col items-center">
                    <div className="bg-green-500 rounded-full p-2">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M..." />
                      </svg>
                    </div>
                    <span className="text-xs mt-1">내주변</span>
                  </div>
                </button>
                <button className="absolute bottom-1/4 right-0 transform translate-y-1/2">
                  <div className="flex flex-col items-center">
                    <div className="bg-green-500 rounded-full p-2">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M..." />
                      </svg>
                    </div>
                    <span className="text-xs mt-1">매장관리</span>
                  </div>
                </button>
                <button className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                  <div className="flex flex-col items-center">
                    <div className="bg-green-500 rounded-full p-2">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M..." />
                      </svg>
                    </div>
                    <span className="text-xs mt-1">파파고번역</span>
                  </div>
                </button>
                <button className="absolute bottom-1/4 left-0 transform translate-y-1/2">
                  <div className="flex flex-col items-center">
                    <div className="bg-green-500 rounded-full p-2">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M..." />
                      </svg>
                    </div>
                    <span className="text-xs mt-1">QR바코드</span>
                  </div>
                </button>
                <button className="absolute top-1/4 left-0 transform -translate-y-1/2">
                  <div className="flex flex-col items-center">
                    <div className="bg-green-500 rounded-full p-2">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M..." />
                      </svg>
                    </div>
                    <span className="text-xs mt-1">렌즈</span>
                  </div>
                </button>
              </div>
              <button
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 rounded-full p-4 shadow-lg"
                onClick={isSalonControllerHandler}
              >
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M..." />
                </svg>
              </button>
            </div>
          </TransitionChild>
        </div>
      </Transition>
    </>
  );
};

export default SalonMenuBar;
