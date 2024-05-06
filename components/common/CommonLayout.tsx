import { PropsWithChildren, useEffect } from 'react';
import Nav from '@/components/common/nav';
import Banner from '@/components/event/Banner';
import Footer from '@/components/common/footer/Footer';
import MenuBar from '@/components/common/menubar';
import { useRouter } from 'next/router';
import SalonCard from '@/components/salonComponent/SalonCard';
import { HOME_ROUTE } from 'constants/routes';
import OwnerMenuComponent from '../menuHandler/OwnerMenuComponent';

const CommonLayout = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <>
      <div className="sticky m-auto p-0 bg-white top-0 z-10">
        <Nav />
        <MenuBar />
      </div>
      {/* {pathname === HOME_ROUTE && <Banner />} */}
      {pathname === HOME_ROUTE && <SalonCard />}
      <div className="w-full h-full">{children}</div>
    </>
  );
};

export default CommonLayout;
