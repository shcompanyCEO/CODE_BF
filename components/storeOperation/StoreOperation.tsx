import React, { useEffect } from 'react';
import Dropdown from './salonMenuComponent/Dropdown';
import SalonCustomer from './storeManagement/customer_care/SalonCustomer';
import ReservationManagement from './storeManagement/reservationManagement/ReservationManagement';
import useMenuStore from 'store/stores/storeOperation/useDropdownStore';
import EmployeeManagement from './storeManagement/employeeManagement/EmployeeManagement';
import useModalStore from 'store/stores/useModalStore';
import { Button } from '../ui/button';

const StoreOperation = () => {
  const { openDropdown, setOpenDropdown, selectedItem, setSelectedItem } = useMenuStore();
  const { isReservationPageHandler } = useModalStore();

  const handleToggle = (id: string) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  const handleSelectItem = (item: string) => {
    setSelectedItem(item);
  };
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        isReservationPageHandler();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isReservationPageHandler]);

  return (
    <>
      <div className="flex justify-end text-right">
        <Button className="text-sm" variant="ghost" onClick={isReservationPageHandler} size="sm">
          X
        </Button>
      </div>
      <div className="flex w-full">
        <div className="w-48 bg-gray-800 text-white min-h-screen">
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
};

export default StoreOperation;
