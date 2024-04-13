import LoginModal from '@/components/modal/LoginModal';
import { MenuIcon, UserIcon } from '@/components/ui/icon';
import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { getUsers } from 'store/queries/firebaseDataFetch';

const Profile = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);
  const [isDropdown, setIsDropdown] = useState<boolean>(false);

  const {
    data: users,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
  });

  console.log('sean data', users);

  const modalOpen = () => {
    setIsLoginModalOpen(true);
  };

  const onClose = (): void => {
    setIsLoginModalOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdown(!isDropdown);
  };

  const toggleDropdownClose = () => {
    setIsDropdown(false);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsDropdown(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isDropdown]);

  return (
    <div className="relative ">
      <div
        className="flex  items-center justify-between bg-white p-2 rounded-full shadow-md  hover:cursor-pointer "
        onClick={toggleDropdown}
      >
        <div className="flex items-center mr-2 justify-center w-10 h-10 bg-gray-200 text-gray-600 rounded-full focus:outline-none focus:ring focus:ring-gray-300">
          <MenuIcon />
        </div>
        <div className="flex items-center justify-center w-10 h-10 bg-gray-200 text-gray-600 rounded-full focus:outline-none focus:ring focus:ring-gray-300">
          <UserIcon />
        </div>
      </div>
      {isDropdown && (
        <div
          className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-10"
          onClick={toggleDropdownClose}
        >
          <div className="py-1">
            <button
              onClick={modalOpen}
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
            >
              로그인
            </button>
            <button className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left">
              회원가입
            </button>
            <button className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left">
              도움말 센터
            </button>
          </div>
        </div>
      )}
      {isLoginModalOpen && (
        <LoginModal isLoginModalOpen={isLoginModalOpen} onClose={onClose}></LoginModal>
      )}
    </div>
  );
};

export default Profile;
