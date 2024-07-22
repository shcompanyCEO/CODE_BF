import React, { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { AppleIcon, FacebookIcon, MailIcon } from '../ui/icon';
import { GoogleLogin } from '../auth/GoogleLogin';
import useModalStore from 'store/stores/useModalStore';

const ModalLogin: React.FC = () => {
  const { LoginModalHandler } = useModalStore();

  return (
    <div>
      <div className="bg-white p-4">
        <div className="max-w-md mx-auto">
          <div className="mt-6 text-center">
            <h1 className="text-2xl font-bold">Wellcome to salon sotre</h1>
            <p className="mt-2 text-sm text-gray-600">
              예약을 이용하기 위해서는 로그인 필요합니다.
            </p>
          </div>
          <div className="mt-6">
            <div className="border-t border-gray-300" />
            <div className="flex flex-col space-y-4 mt-4">
              {/* Google login*/}
              <GoogleLogin onClose={LoginModalHandler} />
              {/* Facebook login*/}
              <Button className="flex items-center justify-around space-x-2" variant="secondary">
                <FacebookIcon className="w-6 h-6 text-blue-600" />
                <span>페이스북으로 로그인하기</span>
              </Button>
              {/* Apple login */}
              <Button className="flex items-center justify-around space-x-5" variant="secondary">
                <AppleIcon className="w-6 h-6" />
                <span>애플로 로그인하기</span>
              </Button>
              {/* Email login */}
              <Button className="flex items-center justify-around space-x-2" variant="secondary">
                <MailIcon className="w-6 h-6" />
                <span>이메일로 로그인하기</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ModalLogin;
