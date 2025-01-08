import React from 'react';
import Auths from '@/components/Auths';

const Auth = () => {
  return (
    <Auths
      title="Enter Your Phone Number"
      text="Please confirm your country code and enter your phone number"
      onPress="verify"
    />
  );
};

export default Auth;
