import type { AppProps } from 'next/app';
import React, { useEffect } from 'react';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import { useMapStore } from 'store/stores/useMapStore';
import useSalonStore from 'store/stores/useSalonStore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getUser } from 'store/queries/userDataQuery';
import { useUserDataStore } from 'store/stores/useUserData';
import { appWithTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import OwnerMenuComponent from '@/components/menuHandler/OwnerMenuComponent';
import '../styles/globals.css';

const queryClient = new QueryClient();
function App({ Component, pageProps }: AppProps) {
  // const user = useAuthStore((state) => state.user);
  const { setMapCenter, mapCenter } = useMapStore();
  const { fetchSalonsFromFirestore } = useSalonStore();
  const { userUpdateData } = useUserDataStore();
  const auth = getAuth();
  const user = auth.currentUser;
  const states = useUserDataStore.getState();

  //현재 유저 location
  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const currentLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setMapCenter(currentLocation);
        },
        (error) => {
          console.error('Error getting current location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  useEffect(() => {
    getCurrentLocation();
    //hairShop all 바로 주스탠드에 저장하기
    fetchSalonsFromFirestore('hairSalons');
    //로그인 되어있는지.
    onAuthStateChanged(auth, (user) => {
      const userDataUpdate = async () => {
        const userData = await getUser(`${user?.email}`);
        userUpdateData(userData);
      };
      userDataUpdate();
      // useAuthStore.setState({ user, isLogin: true });
    });
  }, []);

  return (
    <div className="max-w-layout-maxWidth  min-h-screen mx-auto relative">
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        <OwnerMenuComponent />
      </QueryClientProvider>
    </div>
  );
}

// Pass the fetched data as props

export default appWithTranslation(App);
export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'footer'])),
      // Will be passed to the page component as props
    },
  };
}
