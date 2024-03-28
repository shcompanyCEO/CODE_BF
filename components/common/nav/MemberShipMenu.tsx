import React, { useState } from 'react';
import LoginModal from 'components/membership/LoginModal';

const MemberShipMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const onClose = () => {
    setIsOpen(isOpen!);
  };
  const modalOpen = () => {
    setIsOpen(true);
  };
  return (
    <button
      className="ml-2 text-gray-600 hover:text-gray-800 transition duration-300"
      onClick={modalOpen}
    >
      Login {isOpen && <LoginModal isOpen={isOpen} onClose={onClose}></LoginModal>}
    </button>
  );
};

export default MemberShipMenu;
