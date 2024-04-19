import React from 'react';
import { Button } from '../ui/button';
import { salonModeChangeeStore } from 'store/stores/useSalonModeChangeStore';
import GoogleMapComponent from 'utility/apis/googleMapAPI';
import { useMapStore } from 'store/stores/useMapStore';
import { useRouter } from 'next/router';
import useAuthStore from 'store/stores/useAuthStore';
import { addSalonWithId, salonOwnerFeildChange } from 'utility/salonUpdateAPI';

const Step3 = () => {
  const {
    handlePrevStep,
    salonModeModalClose,
    salonIntroduction,
    totalStep,
    currentStep,
    salonName,
    salonPhoneNumber,
    salonSelector,
  } = salonModeChangeeStore();
  const { selectedPlace } = useMapStore();
  const { user } = useAuthStore();
  const router = useRouter();

  const salonSettingData = async () => {
    if (selectedPlace) {
      const salon = {
        id: `${salonName}/${user?.uid}`, // Generate a unique ID or use Firebase auto-generated ID
        name: salonName,
        address: selectedPlace?.formatted_address,
        salonPhoneNumber: salonPhoneNumber,
        salonIntroduction: salonIntroduction,

        location: {
          latitude: selectedPlace && selectedPlace.geometry?.location?.lat(),
          longitude: selectedPlace && selectedPlace?.geometry?.location?.lng(),
        },
      };
      //살롱 DB에 생성₩
      addSalonWithId(`${salonSelector}Salons`, `${salon.id}`, salon);
      //살롱을 등록한 유저 owner field change
      const fieldsToUpdate = {
        owner: true,
      };
      await salonOwnerFeildChange('users', `${user?.email}`, fieldsToUpdate);
      console.log('User fields updated successfully!');
      salonModeModalClose();
      alert('User changeData');
      router.push('/');
    }
    // Other salon information
  };

  const callbackControl = () => {
    return salonSettingData();
  };

  return (
    <>
      <div className="mt-6 text-center">
        <div className="flex flex-col space-y-4 mt-4">
          <h1 className="text-2xl font-bold">salon 위치 설정 </h1>
          <div className="mt-6">
            <div className="border-t border-gray-300" />
            <div className="flex flex-col space-y-4 mt-4"></div>
          </div>
        </div>
      </div>
      <div>
        <GoogleMapComponent />
      </div>
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
            disabled={selectedPlace ? false : true}
            // onClick={salonSettingData}
            onClick={callbackControl}
            className="flex items-center justify-around space-x-2"
            variant="secondary"
          >
            <span>설정 끝내기</span>
          </Button>
          <div className="text-right">
            {currentStep} / {totalStep}
          </div>
        </div>
      </div>
    </>
  );
};

export default Step3;
