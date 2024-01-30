import type { AppProps } from 'next/app';
import React from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import wrapper from '../redux/store';
import GlobalStyle from '../styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { Provider } from 'react-redux';
import '../i18n';

function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  const { store, props } = wrapper.useWrappedStore(pageProps);

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </ThemeProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}
export default App;
