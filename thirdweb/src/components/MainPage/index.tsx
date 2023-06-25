import { useAddress, useContract, useContractRead } from '@thirdweb-dev/react';
import React from 'react';
import { contractAbi, contractAddress } from '../../utils/contract';
import styles from './MainPage.module.scss';
import Link from 'next/link';
import { Button } from '@mantine/core';

const MainPage = () => {
  const address = useAddress();
  const { contract } = useContract(contractAddress, contractAbi);
  const { data, isLoading, error } = useContractRead(contract, 'getUser', [address]);
  console.log(data);
  return (
    <div className={styles.wrapper}>
      <h2>Profile</h2>
      <p style={{ marginBottom: 20 }}>{address}</p>
      {isLoading && <div>Loading...</div>}
      {data && data[0] ? (
        <>
          <div className={styles.content}>
            <p>Your name:</p>
            <p>
              {data.user[0]} {data.user[1]}
            </p>
          </div>
          <div className={styles.content}>
            <p>Your email:</p>
            <p>{data.user[2]}</p>
          </div>
        </>
      ) : (
        <>
          <h2 style={{ marginBottom: 10 }}>You dont have an account</h2>
          <Link href="/signup">
            <Button>Sign up</Button>
          </Link>
        </>
      )}
    </div>
  );
};

export default MainPage;
