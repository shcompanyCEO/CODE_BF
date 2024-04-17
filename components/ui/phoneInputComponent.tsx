import React from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { salonModeChangeeStore } from 'store/stores/useSalonModeChangeStore';

const PhoneInputComponent: React.FC = () => {
  const { salonPhoneNumber, handleSalonNumber } = salonModeChangeeStore();
  const handleInputChange = (value: string) => {
    handleSalonNumber(value);
  };

  return (
    <div>
      <PhoneInput
        placeholder="Enter phone number"
        value={salonPhoneNumber}
        onChange={handleInputChange}
        defaultCountry="TH" // Set the default country code
      />
    </div>
  );
};

export default PhoneInputComponent;
