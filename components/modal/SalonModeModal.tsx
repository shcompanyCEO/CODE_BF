import React from 'react';
import { Button } from '../ui/button';
import { modalStateStore } from 'store/stores/modalStateStore';
import ModalLayout from '../common/ModalLayout';
import { MailIcon } from 'lucide-react';

const SalnonModeModal: React.FC = () => {
  const { salonModeModalClose, salonSelctoer, selectSalonHandler } = modalStateStore();

  return (
    <ModalLayout modalClose={salonModeModalClose}>
      <div className="mt-6 text-center">
        <h1 className="text-2xl font-bold">관리자로 전환하기 </h1>
        <p className="mt-2 text-sm text-gray-600">
          살롱을 소개하기 위해서는 관리자 전환이 필요 합니다.
        </p>
      </div>
      <div className="mt-6">
        <div className="border-t border-gray-300" />
        <div className="flex flex-col space-y-4 mt-4">
          <p className="mt-2 text-sm text-gray-600">
            살롱을 소개하기 위해서는 살롱 메뉴 항목이 필요합니다.
          </p>
          <Button
            onClick={() => selectSalonHandler('hair')}
            className={`flex items-center justify-around space-x-2`}
            variant={`${salonSelctoer === 'hair' ? 'outline' : 'default'}`}
          >
            <MailIcon className="w-6 h-6 text-yellow-600" />
            <span>Hair</span>
          </Button>
          <Button
            onClick={() => selectSalonHandler('nail')}
            className="flex items-center justify-around space-x-2"
            variant={`${salonSelctoer === 'nail' ? 'outline' : 'default'}`}
          >
            <MailIcon className="w-6 h-6 text-yellow-600" />
            <span>nail</span>
          </Button>
          <Button
            onClick={() => selectSalonHandler('makeup')}
            className="flex items-center justify-around space-x-2"
            variant={`${salonSelctoer === 'makeup' ? 'outline' : 'default'}`}
          >
            <MailIcon className="w-6 h-6 text-green-600" />
            <span>make up</span>
          </Button>
          <Button
            onClick={() => selectSalonHandler('mans')}
            className="flex items-center justify-around space-x-2"
            variant={`${salonSelctoer === 'mans' ? 'outline' : 'default'}`}
          >
            <MailIcon className="w-6 h-6 text-blue-600" />
            <span>{`man's`}</span>
          </Button>

          {/* Email login */}
          <Button className="flex items-center justify-around space-x-2" variant="secondary">
            <span>다음 단계 진행하기 </span>
          </Button>
        </div>
      </div>
    </ModalLayout>
  );
};
export default SalnonModeModal;
