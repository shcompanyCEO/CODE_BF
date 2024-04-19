import type { AppProps } from 'next/app';
import React, { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useMapStore } from 'store/stores/useMapStore';
import useSalonStore from 'store/stores/useSalonStore';
import '../i18n';
import '../styles/globals.css';

function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  // const user = useAuthStore((state) => state.user);
  const { setMapCenter, mapCenter } = useMapStore();
  const { fetchSalonsFromFirestore, hairSalons } = useSalonStore();

  console.log('hairSalons_DATA', hairSalons);
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
