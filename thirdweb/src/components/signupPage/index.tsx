import React, { useState } from 'react';

import { Button, TextInput } from '@mantine/core';
import { DateInput } from '@mantine/dates';

import styles from './SignUp.module.scss';
import { contractAbi, contractAddress } from '../../utils/contract';
import { Web3Button, useContract, useContractWrite } from '@thirdweb-dev/react';

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // createProfile

  const { contract } = useContract(contractAddress, contractAbi);
  const { mutateAsync, isLoading, error } = useContractWrite(contract, 'createProfile');

  //   const [date, setDate] = useState();
  return (
    <div className="container">
      <div className={styles.wrapper}>
        <h2>Sign up</h2>

        <div className={styles.row}>
          <TextInput
            style={{ flex: 1 }}
            value={firstName}
            onChange={(text) => setFirstName(text.target.value)}
            placeholder="Your name"
            label="First name"
            withAsterisk
          />
          <TextInput
            style={{ flex: 1 }}
            placeholder="Your name"
            label="Last name"
            withAsterisk
            value={lastName}
            onChange={(text) => setLastName(text.target.value)}
          />
        </div>
        <div className={styles.row}>
          <TextInput
            style={{ flex: 1 }}
            placeholder="Your email"
            label="Email"
            withAsterisk
            value={email}
            onChange={(text) => setEmail(text.target.value)}
          />
        </div>

        <div className={styles.row}>
          <TextInput
            style={{ flex: 1 }}
            placeholder="Your password"
            label="Password"
            type="password"
            withAsterisk
            value={password}
            onChange={(text) => setPassword(text.target.value)}
          />
        </div>
        {/* <Web3Button
          contractAddress={contractAddress}
          action={() => mutateAsync({ args: ['firstName', 'lastName', 'email', 'password'] })}> */}
        <Button
          onClick={() => mutateAsync({ args: [firstName, lastName, email, password] })}
          style={{ marginTop: 24 }}
          radius="md"
          size="md"
          uppercase>
          Sign up
        </Button>
        {/* </Web3Button> */}
      </div>
    </div>
  );
};

export default SignUp;
