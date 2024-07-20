import type { AppProps } from 'next/app';
import React, { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useMapStore } from 'store/stores/useMapStore';
import useSalonStore from 'store/stores/useSalonStore';
import OwnerMenuComponent from '@/components/menuHandler/OwnerMenuComponent';
import { AuthProvider } from 'context/AuthContext';
import appWithTranslation from '../i18n';
import '../styles/globals.css';
import useGeolocation from '@/hooks/useGeolocation';

const queryClient = new QueryClient();
function App({ Component, pageProps }: AppProps) {
  // const user = useAuthStore((state) => state.user);
  const { setMapCenter, mapCenter } = useMapStore();
  const { fetchSalonsFromFirestore } = useSalonStore();
  //현재 위치 알아 오기
  const { position, error } = useGeolocation();
  const [mounted, setMounted] = useState(false);

  //현재 유저 location
  const getCurrentLocation = () => {
    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition(
    //     (position) => {
    //       const currentLocation = {
    //         lat: position.coords.latitude,
    //         lng: position.coords.longitude,
    //       };
    //       setMapCenter(currentLocation);
    //     },
    //     (error) => {
    //       console.error('Error getting current location:', error);
    //     }
    //   );
    // } else {
    //   console.error('Geolocation is not supported by this browser.');
    // }
  };

  useEffect(() => {
    getCurrentLocation();
    //hairShop all 바로 스탠드에 저장하기
    fetchSalonsFromFirestore('hairSalons');
    setMounted(true);
  }, []);

  //i18n설정 error 방어코드
  if (!mounted) return null;

  return (
    <div className="max-w-layout-maxWidth  min-h-screen mx-auto relative">
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Component {...pageProps} />
          <OwnerMenuComponent />
        </AuthProvider>
      </QueryClientProvider>
    </div>
  );
}
export default appWithTranslation(App);
