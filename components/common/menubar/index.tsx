import React from 'react';
import Link from 'next/link';
import { HAIR_ROUTE, MAKEUP_ROUTE, MANS_ROUTE, NAIL_ROUTE, STYLE_ROUTE } from 'constants/routes';
import { useTranslation } from 'react-i18next';
import { NextPage } from 'next';
import { IconType } from 'react-icons';
import useMenuStore from 'store/useMenuStore';
import { FaCut, FaPaintBrush, FaHandsHelping, FaUser, FaRegCommentDots } from 'react-icons/fa';

const MenuBar: NextPage = () => {
  const { t } = useTranslation('common');
  const menuItems = [
    { id: 'hair', label: `${t('hair')}`, href: `${HAIR_ROUTE}`, icon: FaCut },
    { id: 'nail', label: `${t('nail')}`, href: `${NAIL_ROUTE}`, icon: FaPaintBrush },
    { id: 'makeup', label: `${t('makeup')}`, href: `${MAKEUP_ROUTE}`, icon: FaHandsHelping },
    { id: 'mans', label: `${t('mans')}`, href: `${MANS_ROUTE}`, icon: FaUser },
    { id: 'review', label: `${t('styleReview')}`, href: `${STYLE_ROUTE}`, icon: FaRegCommentDots },
  ];

  const { active, setActive } = useMenuStore();

  return (
    <div className="w-full">
      <div className="flex  justify-between items-center">
        {menuItems.map((item, index) => (
          <Link key={item.id} href={item.href}>
            <div
              className={`flex flex-col items-center cursor-pointer ${
                active === item.id ? 'text-pink-500' : 'text-gray-700'
              }`}
              onClick={() => setActive(item.id)}
              style={{ height: '54px', justifyContent: 'center' }}
            >
              <div
                className={`rounded-full flex items-center justify-center ${
                  active === item.id ? 'bg-pink-100' : 'bg-gray-100'
                }`}
                style={{ width: '24px', height: '24px' }}
              >
                <item.icon className="text-xl" />
              </div>
              <span className="text-xs mt-1">{item.label}</span>
            </div>
          </Link>
        ))}
      </div>
      <div className="w-full h-2 mb-10 mt-4 bg-gray-200"></div>
    </div>
  );
};

export default MenuBar;
