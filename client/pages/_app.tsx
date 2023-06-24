import type { AppProps } from 'next/app';
import { ThirdwebProvider } from '@thirdweb-dev/react';
import '../styles/globals.css';

import { Astar } from '@thirdweb-dev/chains';
import MainLayout from '../src/components/global/Layout';

import { MantineProvider } from '@mantine/core';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain={Astar}>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </MantineProvider>
    </ThirdwebProvider>
  );
}

export default MyApp;
