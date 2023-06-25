import React from 'react';

import styles from './Navbar.module.scss';
import { ConnectWallet, useAddress } from '@thirdweb-dev/react';
import Link from 'next/link';

const Navbar = () => {
  const address = useAddress();
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <div className={styles.content}>
          <Link href="/">
            <h2>IAS</h2>
          </Link>
          <ConnectWallet
            detailsBtn={() => {
              return <button className={styles.addressbtn}> {address?.slice(0, 5)}... </button>;
            }}
            style={{
              transform: 'scale(0.8)',
              backgroundColor: '#FFF',
              color: '#000',
              fontSize: 18,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
