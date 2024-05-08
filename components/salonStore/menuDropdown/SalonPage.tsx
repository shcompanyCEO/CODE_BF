import React, { useEffect, useState } from 'react';
import Dropdown from './Dropdown';
import SalonCalendar from '../salonTap/SalonCalendar';
import SalonStore from '../salonTap/SalonStore';
import SalonCustomer from '../salonTap/SalonCustomer';

const SalonPage = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>('home');
  const [selectedItem, setSelectedItem] = useState<string>('calendar');

  const handleToggle = (id: string) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  const handleSelectItem = (item: string) => {
    setSelectedItem(item);
  };

  // useEffect(() => {
  //   const condition = true; // Replace this with your actual condition
  //   if (condition) {
  //     setOpenDropdown('home');
  //   }
  // }, []); // Empty dependency array ensures this runs only on component mount

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
          label="매장"
          isOpen={openDropdown === 'store'}
          toggleDropdown={() => handleToggle('store')}
          submenuItems={['Store Locator', 'Store Management']}
          onSelectItem={handleSelectItem}
          selected={selectedItem}
        />
        <Dropdown
          label="고객"
          isOpen={openDropdown === 'customer'}
          toggleDropdown={() => handleToggle('customer')}
          submenuItems={['Customer Insights', 'Feedback']}
          onSelectItem={handleSelectItem}
          selected={selectedItem}
        />
      </div>
      {selectedItem === 'calendar' && <SalonCalendar />}
      {selectedItem === 'store' && <SalonStore />}
      {selectedItem === 'customer' && <SalonCustomer />}
    </div>
  );
};

export default SalonPage;
