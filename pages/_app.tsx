import type { AppProps } from 'next/app';
import React, { useEffect } from 'react';
import '../i18n';
import '../styles/globals.css';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useMapStore } from 'store/stores/useMapStore';
import { userInfoStore } from 'store/stores/useUserData';
import useSalonStore from 'store/stores/useSalonStore';
import useAuthStore from 'store/stores/useAuthStore';

function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  // const user = useAuthStore((state) => state.user);
  const { setMapCenter } = useMapStore();
  const { fetchSalonsFromFirestore } = useSalonStore();

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
    // useAuthStore;
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
export default App;
