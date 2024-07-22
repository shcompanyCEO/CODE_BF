/*profile*/
import LoginModal from '@/components/modal/LoginModal';
import { MenuIcon, UserIcon } from '@/components/ui/icon';
import React, { useEffect, useState } from 'react';
import { useUserDataStore } from 'store/stores/useUserData';
import useModalStore from 'store/stores/useModalStore';
import { useAuth } from 'context/AuthContext';
import ModalLayout from '../ModalLayout';

const Profile = () => {
  const { user, loading, loginWithGoogle, logout } = useAuth();
  console.log('sean user', user, '', loading);

  const [isDropdown, setIsDropdown] = useState<boolean>(false);
  //user Name
  const userDisplayName = useUserDataStore((state) => state.displayName);
  //modal Open
  const { isLoginModalOpen, LoginModalHandler } = useModalStore();

  const toggleDropdown = (): void => {
    setIsDropdown(!isDropdown);
  };
  const toggleDropdownClose = (): void => {
    setIsDropdown(false);
  };
  const signOut = async () => {
    const userLogOut = await logout();
  };
  const handleInfo = () => {
    return userDisplayName;
  };
  //esc
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
          {user === null ? <UserIcon /> : <div>{user?.displayName}</div>}
        </div>
      </div>
      {isDropdown && (
        <div
          className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-10"
          onClick={toggleDropdownClose}
        >
          {user === null ? (
            <div className="py-1">
              <button
                onClick={LoginModalHandler}
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
          ) : (
            <div className="py-1">
              <button
                onClick={signOut}
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
              >
                로그아웃
              </button>
              <button
                onClick={handleInfo}
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
              >
                내정보
              </button>
              <button className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left">
                도움말 센터
              </button>
            </div>
          )}
        </div>
      )}
      {isLoginModalOpen && (
        <ModalLayout modalClose={LoginModalHandler}>
          <LoginModal />
        </ModalLayout>
      )}
    </div>
  );
};

export default Profile;
