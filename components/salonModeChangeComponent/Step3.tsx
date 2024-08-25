import React from 'react';
import { Button } from '../ui/button';
import { salonModeChangeeStore } from 'store/stores/useSalonModeChangeStore';
import GoogleMapComponent from 'utility/apis/googleMapAPI';
import { useMapStore } from 'store/stores/useMapStore';
import { addSalonWithId, salonOwnerFeildChange } from 'utility/salonUpdateAPI';
import { useAuth } from 'context/AuthProvider';

const Step3 = () => {
  const {
    handlePrevStep,
    salonModeModalClose,
    salonIntroduction,
    totalStep,
    currentStep,
    salonName,
    salonPhoneNumber,
    salonCategory,
  } = salonModeChangeeStore();
  const { selectedPlace } = useMapStore();
  const { user } = useAuth();

  const salonSettingData = async () => {
    if (selectedPlace) {
      const salon = {
        salonId: `${salonName}_${user?.email}`, // Generate a unique ID or use Firebase auto-generated ID
        ownerEamil: user?.email,
        salonName: salonName,
        address: selectedPlace?.formatted_address ?? '',
        salonPhoneNumber: salonPhoneNumber ?? '',
        salonIntroduction: salonIntroduction ?? '',
        salonCategory: salonCategory,
        openTime: '',
        closeTime: '',
        location: {
          latitude: selectedPlace.geometry?.location?.lat() ?? '',
          longitude: selectedPlace?.geometry?.location?.lng() ?? '',
        },
        position: 'ceo',
        designers: [],
      };
      //살롱 DB에 생성₩
      addSalonWithId(`${salonCategory}Salons`, `${salon.salonId}`, {
        ...user,
        role: 'host',
        salon,
      });

      //살롱을 등록한 유저 owner field change
      await salonOwnerFeildChange('users', `${user?.email}`, { ...user, role: 'host', salon });
      salonModeModalClose();
      alert('User changeData');
    }
    // Other salon information
    window.location.reload();
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
