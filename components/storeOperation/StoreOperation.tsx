import React from 'react';
import Dropdown from './salonMenuComponent/Dropdown';
import SalonStore from './storeManagement/reservationManagement/ReservationManagement';
import SalonCustomer from './storeManagement/customer_care/SalonCustomer';
import ReservationManagement from './storeManagement/reservationManagement/ReservationManagement';
import useMenuStore from 'store/stores/storeOperation/useDropdownStore';
import EmployeeManagement from './storeManagement/employeeManagement/EmployeeManagement';

const StoreOperation = () => {
  const { openDropdown, setOpenDropdown, selectedItem, setSelectedItem } = useMenuStore();

  const handleToggle = (id: string) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  const handleSelectItem = (item: string) => {
    setSelectedItem(item);
  };

  return (
    <div className="flex">
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
  );
};

export default StoreOperation;
