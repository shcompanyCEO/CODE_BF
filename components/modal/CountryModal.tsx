import React, { useEffect, useState } from 'react';
import GoogleLoginButton from '../ui/button/GoogleLoginButton';
import { Button } from '../ui/button';
import { AppleIcon, FacebookIcon, MailIcon, PanelTopCloseIcon, SettingsIcon } from '../ui/icon';
import { Switch } from '../ui/switch';

const CountryModal: React.FC<{ isCountryMdoalOpen: boolean; onClose: () => void }> = ({
  isCountryMdoalOpen,
  onClose,
}) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 300); // Adjust the duration based on your transition time
  };

  if (!isCountryMdoalOpen && !isClosing) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center ${
        isClosing ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="fixed inset-0 bg-black opacity-50" onClick={handleClose}></div>
      <div className="bg-white p-8 rounded-lg shadow-lg z-50">
        <div className="max-w-md mx-auto">
          <div className="flex justify-between text-right">
            <Button className="text-sm" variant="ghost" onClick={handleClose}>
              X
            </Button>
          </div>
          <div className="mt-6 text-center">
            <h1 className="text-2xl font-bold">국가를 설정해주세요 </h1>
          </div>
          <div className="flex justify-between items-center mb-4">
            <PanelTopCloseIcon className="text-gray-400" />
            <h1 className="text-lg font-semibold">언어와 지역</h1>
            <SettingsIcon className="text-gray-400" />
          </div>
          <div className="border-t border-gray-200 py-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-sm font-semibold">번역</h2>
              <Switch id="translation" />
            </div>
            <p className="text-sm text-gray-500">설명란 추가가 한국어로 자동 번역됩니다.</p>
          </div>
          <div className="border-t border-gray-200 py-4">
            <h2 className="text-sm font-semibold mb-4">추천 언어 및 지역</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-sm">
                <p>English</p>
                <p className="text-gray-500">United States</p>
              </div>
              <div className="text-sm">
                <p>English</p>
                <p className="text-gray-500">United Kingdom</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 py-4">
            <h2 className="text-sm font-semibold mb-4">언어와 지역을 선택하세요</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-sm">
                <p>한국어</p>
                <p className="text-gray-500">대한민국</p>
              </div>
              <div className="text-sm">
                <p>Azərbaycan dili</p>
                <p className="text-gray-500">Azərbaycan</p>
              </div>
              <div className="text-sm">
                <p>Bahasa Indonesia</p>
                <p className="text-gray-500">Indonesia</p>
              </div>
              <div className="text-sm">
                <p>Bosanski</p>
                <p className="text-gray-500">Bosna i Hercegovina</p>
              </div>
              <div className="text-sm">
                <p>Català</p>
                <p className="text-gray-500">Espanya</p>
              </div>
              <div className="text-sm">
                <p>Čeština</p>
                <p className="text-gray-500">Česká republika</p>
              </div>
              <div className="text-sm">
                <p>Cрпски</p>
                <p className="text-gray-500">Crna Gora</p>
              </div>
              <div className="text-sm">
                <p>Dansk</p>
                <p className="text-gray-500">Danmark</p>
              </div>
              <div className="text-sm">
                <p>Deutsch</p>
                <p className="text-gray-500">Deutschland</p>
              </div>
              <div className="text-sm">
                <p>Deutsch</p>
                <p className="text-gray-500">Österreich</p>
              </div>
              <div className="text-sm">
                <p>Deutsch</p>
                <p className="text-gray-500">Schweiz</p>
              </div>
              <div className="text-sm">
                <p>Deutsch</p>
                <p className="text-gray-500">Luxemburg</p>
              </div>
              <div className="text-sm">
                <p>Eesti</p>
                <p className="text-gray-500">Eesti</p>
              </div>
              <div className="text-sm">
                <p>English</p>
                <p className="text-gray-500">Australia</p>
              </div>
              <div className="text-sm">
                <p>English</p>
                <p className="text-gray-500">Canada</p>
              </div>
              <div className="text-sm">
                <p>English</p>
                <p className="text-gray-500">Guyana</p>
              </div>
              <div className="text-sm">
                <p>English</p>
                <p className="text-gray-500">India</p>
              </div>
              <div className="text-sm">
                <p>English</p>
                <p className="text-gray-500">Ireland</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CountryModal;
