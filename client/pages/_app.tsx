import type { AppProps } from 'next/app';
import { ThirdwebProvider } from '@thirdweb-dev/react';
import '../styles/globals.css';

import { Astar } from '@thirdweb-dev/chains';
import MainLayout from '../src/components/global/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain={Astar}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ThirdwebProvider>
  );
}

export default MyApp;
