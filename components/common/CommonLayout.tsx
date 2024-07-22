import { PropsWithChildren } from 'react';
import Nav from '@/components/common/nav';
import Footer from '@/components/common/footer/Footer';
import { useRouter } from 'next/router';
import SalonCard from '@/components/salonComponent/SalonCard';
import { HOME_ROUTE } from 'constants/routes';
import Banner from '../event/Banner';
import MenuBar from './menubar';
import StoreOperation from '../storeOperation/StoreOperation';
import useModalStore from 'store/stores/useModalStore';

const CommonLayout = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <div className="sticky m-auto bg-white top-0 ">
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
