import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { router } from 'expo-router';
import clsx from 'clsx';

const Button = ({ text, onPress }: { text: string; onPress: any }) => {
  const sendOtpCode = (phone: string) => {};

  return (
    <TouchableOpacity
      onPress={() => router.push(onPress)}
      className="mx-auto w-10/12"
    >
      <Text
        className={clsx(
          'text-center rounded-full py-4',
          onPress === 'otp'
            ? 'text-brand-default'
            : 'bg-brand-default text-neutral-off-white ',
        )}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
