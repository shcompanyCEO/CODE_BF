import React, { ReactNode, useEffect } from 'react';
import { Button } from '../ui/button';
import { unloadGoogleMapsScript } from 'utility/apis/googleMap';

interface IModalProps {
  children: ReactNode;
  modalClose: () => void;
}
const ModalLayout: React.FC<IModalProps> = ({ children, modalClose }) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        modalClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [modalClose]);

  useEffect(() => {
    unloadGoogleMapsScript();
  }, []);
  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center`}>
      <div className="fixed inset-0 bg-black opacity-50" onClick={modalClose}></div>
      <div className="bg-white p-8 rounded-lg shadow-lg z-50">
        <div className="max-w-md mx-auto">
          <div className="flex justify-between text-right">
            <Button className="text-sm" variant="ghost" onClick={modalClose}>
              X
            </Button>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default ModalLayout;
