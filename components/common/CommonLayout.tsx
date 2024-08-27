import { PropsWithChildren } from 'react';
import Nav from '@/components/common/nav';
import { useRouter } from 'next/router';
import { HOME_ROUTE } from 'constants/routes';
import { useAuth } from 'context/AuthProvider';
import Banner from '../event/Banner';
import Footer from '@/components/common/footer/Footer';
import SalonCard from '@/components/salonComponent/SalonCard';
import MenuBar from './menubar';
import HostMenuButton from '../menuHandler/host/HostMenuButton';
import ModalSalonReservationPage from '../modal/ModalSalonReservationPage';
import ClientMenuButton from '../menuHandler/client/ClientMenuButton';
import LoadingBar from './loadingBar/LoadingBar';

const CommonLayout = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const { pathname } = router;
  const { user, loading } = useAuth();
  if (loading) {
    return <LoadingBar percentage={0} />;
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
          <div className="absolute bottom-0">
            <HostMenuButton />
          </div>
        ) : (
          <div className="">
            <ClientMenuButton />
          </div>
        )}
      </div>
      <ModalSalonReservationPage />
    </>
  );
};

export default CommonLayout;
