import React from 'react';
import CommonLayout from '@/components/common/CommonLayout';
import SalonPage from '@/components/salonStore/menuDropdown/SalonPage';

const index = () => {
  return (
    <CommonLayout>
      mypage
      <SalonPage />
    </CommonLayout>
  );
};

export default index;
