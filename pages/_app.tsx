import type { AppProps } from 'next/app';
import React, { useEffect } from 'react';
import wrapper from '../redux/store';
import { Provider } from 'react-redux';
import '../i18n';
import '../styles/globals.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { userInfoStore } from 'store/stores/userData';

function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  const { store, props } = wrapper.useWrappedStore(pageProps);

  const auth = getAuth();
  const userData = userInfoStore((state) => state.updateUser);
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
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </QueryClientProvider>
  );
}
export default App;
