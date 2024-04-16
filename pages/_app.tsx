import type { AppProps } from 'next/app';
import React, { useEffect } from 'react';
import wrapper from '../redux/store';
import { Provider } from 'react-redux';
import '../i18n';
import '../styles/globals.css';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { userInfoStore } from 'store/stores/userData';
import { useMapStore } from 'store/stores/useMapStore';
import { db } from './api/firebase/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { getSalons } from 'store/queries/firebaseDataFetch';

function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  const { store, props } = wrapper.useWrappedStore(pageProps);

  const { setMapCenter } = useMapStore();

  const auth = getAuth();
  //user리프레쉬되어도 유지하는 코드
  const userData = userInfoStore((state) => state.updateUser);

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
    onAuthStateChanged(auth, (user) => {
      if (user) {
        userData({
          userUid: user.uid,
          email: user.email,
          phoneNumber: user.phoneNumber ? user.phoneNumber : '',
          userToken: '',
          displayName: user.displayName ? user.displayName : '',
        });
        // ...
      } else {
        return;
      }
    });
  }, []);

  useEffect(() => {
    getCurrentLocation();
  });
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </QueryClientProvider>
  );
}
export default App;
