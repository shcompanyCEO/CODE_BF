import React from 'react';
import useModalStore from 'store/stores/useModalStore';
import { SiTheconversation } from 'react-icons/si';

const UserMenuComponent = () => {
  const { isSalonControllerHandler } = useModalStore();
  return (
    <>
      <div className="z-50 max-[640px]:">
        <div className="relative max-w-layout-maxWidth left-1/2 transform -translate-x-1/2">
          <div className="absolute bottom-[calc(env(safe-area-inset-bottom) + 72px)] right-14 text-right">
            <button
              onClick={isSalonControllerHandler}
              className="relative text-gray-800 hover:text-gray-600 focus:outline-none"
            >
              <div className="flex flex-col items-center">
                <div className="bg-pink-400 rounded-full p-2">
                  <SiTheconversation className="w-6 h-6 text-white" />
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserMenuComponent;
