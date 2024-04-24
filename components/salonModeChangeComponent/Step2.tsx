import React from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { salonModeChangeeStore } from 'store/stores/useSalonModeChangeStore';
import { Textarea } from '../ui/textarea';
import PhoneInputComponent from '../ui/phoneInputComponent';

const Step2 = () => {
  const {
    currentStep,
    totalStep,
    salonName,
    salonPhoneNumber,
    salonIntroduction,
    handlePrevStep,
    handleNextStep,
    handleTextArea,
    handleSalonName,
  } = salonModeChangeeStore();

  const handleSalonInfo = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'name') {
      handleSalonName(value);
    } else {
      handleTextArea(value);
    }
  };

  return (
    <>
      <div className="mt-6 text-center">
        <div className="flex flex-col space-y-4 mt-4">
          <h1 className="text-2xl font-bold">살롱 소개하기</h1>
          <p className="mt-2 text-sm text-gray-600">살롱을 소개하기 위해서는 소개글이 필요합니다</p>
          <div className="mt-6">
            <div className="border-t border-gray-300" />
            <div className="flex flex-col space-y-4 mt-4">
              <div className="flex">
                <Input
                  onChange={handleSalonInfo}
                  name={'name'}
                  placeholder="salon name"
                  value={salonName}
                ></Input>
              </div>
              <div>
                <PhoneInputComponent />
              </div>
              <Textarea
                onChange={handleSalonInfo}
                name="textarea"
                placeholder="introduce the salon"
                value={salonIntroduction}
              ></Textarea>
            </div>
          </div>
        </div>
      </div>
      {/* // */}
      <div className="mt-6">
        <div className="border-t border-gray-300" />
        <div className="flex flex-col space-y-4 mt-4">
          <Button
            onClick={() => handlePrevStep(1)}
            className="flex items-center justify-around space-x-2"
            variant="secondary"
          >
            <span>이전 단계 돌아가기</span>
          </Button>
          <Button
            onClick={() => handleNextStep(3)}
            className="flex items-center justify-around space-x-2"
            variant="secondary"
          >
            <span>다음 단계 진행하기 </span>
          </Button>
          <div className="text-right">
            {currentStep} / {totalStep}
          </div>
        </div>
      </div>
    </>
  );
};

export default Step2;
