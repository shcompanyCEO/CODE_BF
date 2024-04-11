import LoginModal from '@components/modal/LoginModal';
import React, { useEffect, useMemo, useState } from 'react';
// import LoginModal from 'components/membership/LoginModal';
// import { login } from '@components/ui/login';

const LoginMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onClose = (): void => {
    setIsOpen(false);
    console.log('sean isOpen', isOpen);
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

export default LoginMenu;
