import type { AppProps } from 'next/app';
import React from 'react';
import wrapper from '../redux/store';
import { Provider } from 'react-redux';
import '../i18n';
import '../styles/globals.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  const { store, props } = wrapper.useWrappedStore(pageProps);

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </QueryClientProvider>
  );
}
export default App;
