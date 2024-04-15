import React from 'react';
import { Button } from '../ui/button';
import { PanelTopCloseIcon, SettingsIcon } from '../ui/icon';
import { Switch } from '../ui/switch';
import ModalLayout from '../common/ModalLayout';
import { modalStateStore } from 'store/stores/modalStateStore';

const CountryModal: React.FC = ({}) => {
  const { countryModalState, countryModalClose } = modalStateStore();
  return (
    <ModalLayout modalClose={countryModalClose}>
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
          <Button className="text-sm flex flex-row ">
            <div>
              <p>한국어</p>
              <p className="text-gray-500">대한민국</p>
            </div>
          </Button>
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
    </ModalLayout>
  );
};
export default CountryModal;
