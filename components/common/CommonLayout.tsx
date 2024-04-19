import { PropsWithChildren, useEffect } from 'react';
import Nav from '@/components/common/nav';
import Banner from '@/components/event/Banner';
import Footer from '@/components/common/footer/Footer';
import MenuBar from '@/components/common/menubar';
import { useRouter } from 'next/router';
import SalonCard from '@/components/salonComponent/SalonCard';
import { HOME_ROUTE } from 'constants/routes';
import { useQuery } from '@tanstack/react-query';
import Card from '../salonComponent/Card';
import useSalonStore from 'store/stores/useSalonStore';

const CommonLayout = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const { pathname } = router;
  const { addSalon } = useSalonStore();
  const { hairSalons } = useSalonStore();
  //data 단방향 ->

  console.log('saen >>>>>>>>>', hairSalons);
  return (
    // <div className="max-w-screen-sm min-h-screen m-auto border-solid border-2 border-gray pr-2 pl-2 bg-white top-0">
    <div className="max-w-screen-sm min-h-screen m-auto ">
      <div className="sticky max-w-screen-sm m-auto p-0 bg-white top-0 z-10">
        <Nav />
        <MenuBar />
      </div>
      {pathname === HOME_ROUTE && <Banner />}
      {pathname === HOME_ROUTE && <SalonCard data={hairSalons} />}
      <div className="w-full h-full">{children}</div>
      <Footer />
    </div>
  );
};

export default CommonLayout;
