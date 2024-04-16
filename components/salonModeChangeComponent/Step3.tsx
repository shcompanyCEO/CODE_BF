import Reac from 'react';
import { Button } from '../ui/button';
import { salonModeChangeeStore } from 'store/stores/salonModeChangeStore';
import GoogleMapComponent from 'utility/apis/googleMapAPI';
import { useMapStore } from 'store/stores/useMapStore';
import { userInfoStore } from 'store/stores/userData';
import useSalonStore from 'store/stores/useSalonStore';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '@/api/firebase/firebase';
import { useRouter } from 'next/router';

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
  const { userUid } = userInfoStore();
  const { addSalon } = useSalonStore();

  const router = useRouter();

  const salonSettingData = async () => {
    if (selectedPlace) {
      const salon = {
        id: `${salonName}/${userUid}`, // Generate a unique ID or use Firebase auto-generated ID
        name: salonName,
        address: selectedPlace?.formatted_address,
        salonPhoneNumber: salonPhoneNumber,
        salonIntroduction: salonIntroduction,
        location: {
          latitude: selectedPlace && selectedPlace.geometry?.location?.lat(),
          longitude: selectedPlace && selectedPlace?.geometry?.location?.lng(),
        },
      };
      // @ts-ignore
      addSalon(salon);
      await setDoc(doc(db, 'salons', `${salonSelector}`), { salon });
      salonModeModalClose();
      alert('User changeData');
      router.push('/');
    }
    // Other salon information
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
            onClick={salonSettingData}
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
