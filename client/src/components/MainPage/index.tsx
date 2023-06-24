import { useContract, useContractRead } from '@thirdweb-dev/react';
import React from 'react';
import { contractAbi, contractAddress } from '../../utils/contract';

const MainPage = () => {
  const { contract } = useContract(contractAddress, contractAbi);
  const { data, isLoading, error } = useContractRead(contract, 'getName');
  return <div>MainPage</div>;
};

export default MainPage;
