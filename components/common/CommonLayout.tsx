import { PropsWithChildren, useEffect, useState } from 'react';
import Nav from '@/components/common/nav';
import Footer from '@/components/common/footer/Footer';
import { useRouter } from 'next/router';
import SalonCard from '@/components/salonComponent/SalonCard';
import { HOME_ROUTE } from 'constants/routes';
import Banner from '../event/Banner';
import MenuBar from './menubar';
import { useAuth } from 'context/AuthProvider';
import HostMenuButton from '../menuHandler/host/HostMenuButton';
import ModalSalonReservationPage from '../modal/ModalSalonReservationPage';
import UserMenuComponent from '../menuHandler/UserMenuComponent';
import ClientMenuButton from '../menuHandler/client/ClientMenuButton';

const CommonLayout = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const { pathname } = router;
  const { user, loading } = useAuth();
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loader">Loading...</div>
      </div>
    );
  }
  return (
    <>
      <div className="w-full h-full m-auto bg-white top-0">
        <Nav />
        {pathname === HOME_ROUTE && <Banner />}
        <MenuBar />
        {pathname === HOME_ROUTE && <SalonCard />}
        <div className="w-full h-full">{children}</div>
        <Footer />
      </div>
      <div className="fixed h-10 max-[640px]">
        {user?.role === 'host' ? (
          <div className="">
            <HostMenuButton />
            <UserMenuComponent />
          </div>
        ) : (
          <div className="">
            <ClientMenuButton />
            <UserMenuComponent />
          </div>
        )}
      </div>
      <ModalSalonReservationPage />
    </>
  );
};

export default CommonLayout;
