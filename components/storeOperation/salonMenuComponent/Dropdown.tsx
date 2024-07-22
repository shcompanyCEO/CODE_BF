import React from 'react';
import SubmMenu from './SubMenu';

interface DropdownProps {
  label: string;
  isOpen: boolean;
  selected: string | null;
  submenuItems: string[];
  toggleDropdown: () => void;
  onSelectItem: (item: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  isOpen,
  selected,
  submenuItems,
  toggleDropdown,
  onSelectItem,
}) => {
  return (
    <div>
      <div
        className="z-50 p-4 border-b border-gray-700 flex justify-between items-center cursor-pointer"
        onClick={toggleDropdown}
      >
        {label}
        <span className="text-gray-400">{isOpen ? '▼' : '▶'}</span>
      </div>
      {isOpen && <SubmMenu items={submenuItems} onSelect={onSelectItem} selected={selected} />}
    </div>
  );
};

export default Dropdown;
