import type { AppProps } from 'next/app';
import { ThirdwebProvider } from '@thirdweb-dev/react';
import '../styles/globals.css';

import { Astar } from '@thirdweb-dev/chains';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain={Astar}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
