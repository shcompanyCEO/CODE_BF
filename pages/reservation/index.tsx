import React, { useEffect } from 'react';
import RootComponent from '@/components/common/RootComponent';
import { Button } from '@/components/ui/button';
import Dropdown from '@/components/storeOperation/salonMenuComponent/Dropdown';
import useMenuStore from 'store/stores/storeOperation/useDropdownStore';

import useModalStore from 'store/stores/useModalStore';
import ReservationManagement from '@/components/storeOperation/storeManagement/reservationManagement/ReservationCalendar';
import SalonCustomer from '@/components/storeOperation/storeManagement/customer_care/SalonCustomer';
import EmployeeManagement from '@/components/storeOperation/storeManagement/employeeManagement/EmployeeManagement';
import { FaHome, FaPalette, FaStore, FaHeart, FaUser } from 'react-icons/fa';
import { HOME_ROUTE } from 'constants/routes';
import Link from 'next/link';

const ReservationPage = () => {
  const { openDropdown, setOpenDropdown, selectedItem, setSelectedItem } = useMenuStore();

  const handleToggle = (id: string) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  const handleSelectItem = (item: string) => {
    setSelectedItem(item);
  };

  return (
    <>
      <div className="flex justify-start text-right">
        <Link href={HOME_ROUTE}>
          <Button className="text-sm" variant="ghost" size="lg">
            {`<`}
          </Button>
        </Link>
      </div>
      <div className="flex">
        <div className="bg-gray-800 text-white min-h-screen">
          <Dropdown
            label="홈"
            isOpen={openDropdown === 'home'}
            toggleDropdown={() => handleToggle('home')}
            submenuItems={['calendar', 'todayCalendar']}
            onSelectItem={handleSelectItem}
            selected={selectedItem}
          />
          <Dropdown
            label="고객관리"
            isOpen={openDropdown === 'customer'}
            toggleDropdown={() => handleToggle('customer')}
            submenuItems={['고객차트', '회원권 포인트관리']}
            onSelectItem={handleSelectItem}
            selected={selectedItem}
          />
          <Dropdown
            label="우리샵관리"
            isOpen={openDropdown === 'employeeManagement'}
            toggleDropdown={() => handleToggle('employeeManagement')}
            submenuItems={['시술메뉴', '직원관리']}
            onSelectItem={handleSelectItem}
            selected={selectedItem}
          />
        </div>

        {selectedItem === 'calendar' && <ReservationManagement />}
        {selectedItem === 'customer' && <SalonCustomer />}
        {selectedItem === '직원관리' && <EmployeeManagement />}
      </div>
    </>
  );

  // <RootComponent></RootComponent>;

  // <ootComponent>stylebook</ootComponent>;
};

export default ReservationPage;
