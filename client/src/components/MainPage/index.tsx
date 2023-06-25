import { useAddress, useContract, useContractRead } from '@thirdweb-dev/react';
import React from 'react';
import { contractAbi, contractAddress } from '../../utils/contract';

const MainPage = () => {
  const address = useAddress();
  const { contract } = useContract(contractAddress, contractAbi);
  const { data, isLoading, error } = useContractRead(contract, 'getUser', [address]);
  console.log(data);
  return (
    <div>
      MainPage
      {isLoading && <div>Loading...</div>}
      {data && data[0] && <div>{data}</div>}
    </div>
  );
};

export default MainPage;
