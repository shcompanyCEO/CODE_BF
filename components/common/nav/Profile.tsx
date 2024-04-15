/*profile*/
import LoginModal from '@/components/modal/LoginModal';
import { MenuIcon, UserIcon } from '@/components/ui/icon';
import { getAuth } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { userInfoStore } from 'store/stores/userData';

const Profile = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);
  const [isDropdown, setIsDropdown] = useState<boolean>(false);
  const router = useRouter();
  const auth = getAuth();
  const userInfo = auth.currentUser;
  //user Name
  const userDisplayName = userInfoStore((state) => state.displayName);
  //user Data Reset
  const userData = userInfoStore((state) => state.updateUser);

  const modalOpen = (): void => {
    setIsLoginModalOpen(true);
  };

  const onClose = (): void => {
    setIsLoginModalOpen(false);
  };

  const toggleDropdown = (): void => {
    setIsDropdown(!isDropdown);
  };

  const toggleDropdownClose = (): void => {
    setIsDropdown(false);
  };

  const signOut = async () => {
    try {
      await auth.signOut(); // Sign out the user
      console.log('User logged out successfully');
      alert('User logged out successfully');
      userData({
        userUid: '',
        email: '',
        phoneNumber: '',
        userToken: '',
        displayName: '',
      });
      // .

      router.push('/');
    } catch (error: any) {
      console.error('Error signing out:', error.message);
    }
  };
  const handleInfo = () => {
    return userDisplayName;
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
          {userDisplayName === '' ? <UserIcon /> : <div>{userDisplayName}</div>}
        </div>
      </div>
      {isDropdown && (
        <div
          className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-10"
          onClick={toggleDropdownClose}
        >
          {userInfo === null ? (
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
        <LoginModal isLoginModalOpen={isLoginModalOpen} onClose={onClose}></LoginModal>
      )}
    </div>
  );
};

export default Profile;
