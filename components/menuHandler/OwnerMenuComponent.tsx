import React from 'react';
import { useMenuHandlerStore } from 'store/stores/useMenuHandlerStore';

const OwnerMenuComponent = () => {
  const { isOpen, toggleMenu } = useMenuHandlerStore();

  return (
    <div className="fixed right-0 bottom-24 z-50">
      <div className="relative max-w-layout-maxWidth left-1/2 transform -translate-x-1/2">
        <div className="absolute bottom-[calc(env(safe-area-inset-bottom) + 72px)] right-14 text-right">
          <button
            onClick={toggleMenu}
            className="relative text-gray-800 hover:text-gray-600 focus:outline-none"
          >
            handler
          </button>
          {isOpen && (
            <div className="absolute bg-white shadow-md rounded-md 10-4">
              {/* 메뉴 아이템들 */}
              <ul>
                <li>메뉴 항목 1</li>
                <li>메뉴 항목 2</li>
                <li>메뉴 항목 3</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OwnerMenuComponent;
