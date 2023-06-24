import React, { useState } from 'react';

import { Button, TextInput } from '@mantine/core';
import { DateInput } from '@mantine/dates';

import styles from './SignUp.module.scss';

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //   const [date, setDate] = useState();
  return (
    <div className="container">
      <div className={styles.wrapper}>
        <h2>Sign up</h2>
        <div className={styles.row}>
          <TextInput style={{ flex: 1 }} placeholder="Your name" label="First name" withAsterisk />
          <TextInput style={{ flex: 1 }} placeholder="Your name" label="Last name" withAsterisk />
        </div>
        <div className={styles.row}>
          <TextInput style={{ flex: 1 }} placeholder="Your email" label="Email" withAsterisk />
        </div>
        {/* <DateInput
          style={{ width: '100%' }}
          value={date}
          //   @ts-ignore
          onChange={(date) => setDate(new Date(date))}
          label="Birth date"
          placeholder="Your birth date"
          maw={400}
          mx="auto"
        /> */}
        <div className={styles.row}>
          <TextInput
            style={{ flex: 1 }}
            placeholder="Your password"
            label="Password"
            type="password"
            withAsterisk
          />
        </div>

        <Button style={{ marginTop: 24 }} radius="md" size="md" uppercase>
          Sign up
        </Button>
      </div>
    </div>
  );
};

export default SignUp;
