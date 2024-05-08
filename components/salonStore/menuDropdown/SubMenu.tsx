import React, { useState } from 'react';

interface SubmenuProps {
  items: string[];
  selected: string;
  onSelect: (item: string) => void;
}

const Submenu: React.FC<SubmenuProps> = ({ items, selected, onSelect }) => {
  return (
    <div className="bg-gray-900 ">
      {items.map((item, index) => (
        <div
          key={index}
          className={`p-4 text-gray-400 hover:text-white cursor-pointer ${
            item === selected ? 'bg-blue-500' : 'bg-gray-900'
          }`}
        >
          <button onClick={() => onSelect(item)}>{item}</button>
        </div>
      ))}
    </div>
  );
};

export default Submenu;
