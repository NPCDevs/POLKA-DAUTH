import { ConnectWallet, useAddress } from '@thirdweb-dev/react';
import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import MainPage from '../src/components/MainPage';

const Home: NextPage = () => {
  const address = useAddress();

  if (address && address.length > 0) {
    return <MainPage />;
  }

  return <h1>123</h1>;
};

export default Home;
