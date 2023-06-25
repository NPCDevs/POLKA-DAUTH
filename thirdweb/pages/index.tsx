import { ConnectWallet, useAddress } from '@thirdweb-dev/react';
import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import MainPage from '../src/components/MainPage';

const Home: NextPage = () => {
  const address = useAddress();

  if (address && address.length > 0) {
    return <MainPage />;
  }

  return <h1 style={{ margin: '0 auto', width: 300 }}>Connect wallet</h1>;
};

export default Home;
