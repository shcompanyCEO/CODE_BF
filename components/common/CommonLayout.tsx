import { PropsWithChildren } from 'react';
import Nav from '@/components/common/nav';
import Footer from '@/components/common/footer/Footer';
import MenuBar from '@/components/common/menubar';
import { useRouter } from 'next/router';
import SalonCard from '@/components/salonComponent/SalonCard';
import { HOME_ROUTE } from 'constants/routes';
import Country from './country';
import Banner from '../event/Banner';

const CommonLayout = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <div className="sticky m-auto px-5 bg-white top-0 z-10 ">
      <Nav />
      {pathname === HOME_ROUTE && <Banner />}
      <MenuBar />
      {pathname === HOME_ROUTE && <SalonCard />}
      <div className="w-full h-full">{children}</div>
      <Footer />
    </div>
  );
};

export default CommonLayout;
