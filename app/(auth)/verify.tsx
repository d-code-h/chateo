import React from 'react';
import Auths from '@/components/Auths';

const Verify = () => {
  return (
    <Auths
      title="Enter Code"
      text="We have sent you an SMS with the code to "
      phone="+62 1309 - 1710 - 1920"
      onPress="otp"
    />
  );
};

export default Verify;
