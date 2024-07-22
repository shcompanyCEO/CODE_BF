import Link from 'next/link';
import { FaHome, FaPalette, FaStore, FaHeart, FaUser } from 'react-icons/fa';
import useMenuStore from 'store/useMenuStore';
import { useTranslation } from 'react-i18next';
import {
  HOME_ROUTE,
  STYLE_ROUTE,
  MARKET_ROUTE,
  MYPICK_ROUTE,
  MYPAGE_ROUTE,
} from 'constants/routes';
import OwnerMenuComponent from '@/components/menuHandler/OwnerMenuComponent';

const Footer = () => {
  const { active, setActive } = useMenuStore();
  const { t } = useTranslation('common');
  const navItems = [
    { id: 'home', label: `${t('home')}`, href: `${HOME_ROUTE}`, icon: FaHome },
    { id: 'palette', label: `${t('palette')}`, href: `${STYLE_ROUTE}`, icon: FaPalette },
    { id: 'market', label: `${t('store')}`, href: `${MARKET_ROUTE}`, icon: FaStore },
    { id: 'pick', label: `${t('mypick')}`, href: `${MYPICK_ROUTE}`, icon: FaHeart },
    { id: 'mypage', label: `${t('mypage')}`, href: `${MYPAGE_ROUTE}`, icon: FaUser },
  ];

  return (
    <div className="fixed bottom-0 px-4 left-1/2 transform -translate-x-1/2 w-full max-w-[640px] bg-white border-t border-gray-200 ">
      <OwnerMenuComponent />
      <div className="flex justify-between items-center py-2">
        {navItems.map((item) => (
          <Link key={item.id} href={item.href} passHref>
            <div
              className="flex flex-col items-center cursor-pointer relative w-full"
              onClick={() => setActive(item.id)}
            >
              <div className="w-full h-1 mt-1">
                {active === item.id && (
                  <div className="absolute top-0 left-0 w-full h-1 bg-pink-500"></div>
                )}
              </div>
              <item.icon
                className={`text-2xl  ${active === item.id ? 'text-pink-500' : 'text-gray-400'}`}
              />
              <span
                className={`text-xs  ${active === item.id ? 'text-pink-500' : 'text-gray-400'}`}
              >
                {item.label}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
