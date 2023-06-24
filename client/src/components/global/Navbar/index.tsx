import React from 'react';

import styles from './Navbar.module.scss';
import { ConnectWallet } from '@thirdweb-dev/react';

const Navbar = () => {
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <div className={styles.content}>
          <h2>IAS</h2>
          <ConnectWallet style={{ transform: 'scale(0.8)' }} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
