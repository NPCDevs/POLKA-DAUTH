import React from 'react';
import Navbar from '../Navbar';

const MainLayout = ({ children }: any) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default MainLayout;
