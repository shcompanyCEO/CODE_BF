import Link from 'next/link';
import { FaHome, FaPalette, FaStore, FaHeart, FaUser } from 'react-icons/fa';
import useMenuStore from 'store/useMenuStore';
import { useTranslation } from 'react-i18next';
import {
  HOME_ROUTE,
  RESERVATION_ROUTE,
  MARKET_ROUTE,
  MYPICK_ROUTE,
  MYPAGE_ROUTE,
} from 'constants/routes';
import UserMenuComponent from '@/components/menuHandler/UserMenuComponent';

const Footer = () => {
  const { active, setActive } = useMenuStore();
  const { t } = useTranslation('common');
  const footerItems = [
    { id: 'home', label: `${t('home')}`, href: `${HOME_ROUTE}`, icon: FaHome },
    { id: 'palette', label: `${t('reservation')}`, href: `${RESERVATION_ROUTE}`, icon: FaPalette },
    { id: 'market', label: `${t('store')}`, href: `${MARKET_ROUTE}`, icon: FaStore },
    { id: 'pick', label: `${t('mypick')}`, href: `${MYPICK_ROUTE}`, icon: FaHeart },
    { id: 'mypage', label: `${t('mypage')}`, href: `${MYPAGE_ROUTE}`, icon: FaUser },
  ];

  return (
    <div className="fixed bottom-0 px-4 left-1/2 transform -translate-x-1/2 w-full max-w-[640px] bg-white">
      <div className="w-full flex justify-between items-center py-2 ">
        {footerItems.map((item) => (
          <Link key={item.id} href={item.href} passHref>
            <ul
              className="flex grow-1 flex-col items-center cursor-pointer relative"
              onClick={() => setActive(item.id)}
            >
              <li className="w-full h-1 mt-1">
                {active === item.id && (
                  <div className="absolute top-0 left-0 w-full h-1 bg-pink-500"></div>
                )}
              </li>
              <item.icon
                className={`text-2xl  ${active === item.id ? 'text-pink-500' : 'text-gray-400'}`}
              />
              <span
                className={`text-xs  ${active === item.id ? 'text-pink-500' : 'text-gray-400'}`}
              >
                {item.label}
              </span>
            </ul>
          </Link>
        ))}
      </div>
      <div className="fixed bottom-20 right-20 h-10 max-[640px]">
        <UserMenuComponent />
      </div>
    </div>
  );
};

export default Footer;
