import type { AppProps } from 'next/app';
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import wrapper from '../redux/store';
// import GlobalStyle from '../styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
// import { theme } from '../styles/theme';
import { Provider } from 'react-redux';
import '../i18n';
import '../styles/globals.css';

function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  const { store, props } = wrapper.useWrappedStore(pageProps);

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        {/* <ThemeProvider theme={theme}> */}
        {/* <GlobalStyle /> */}
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
        {/* </ThemeProvider> */}
      </Provider>
    </QueryClientProvider>
  );
}
export default App;
