import { View, Text, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '@/components/Button';
import { useState, useRef } from 'react';

import PhoneInput from 'react-native-phone-number-input';
import Phone from './Phone';
import OTPVerify from './OTPVerify';
import { Back } from '@/lib/image';
import { router } from 'expo-router';

const Auths = ({
  title,
  text,
  onPress,
  phone,
}: {
  title: string;
  text: string;
  onPress: any;
  phone?: string;
}) => {
  const [number, setNumber] = useState('');
  const [formattedValue, setFormattedValue] = useState('');

  const phoneInput = useRef<PhoneInput>(null);

  return (
    <SafeAreaView className="h-screen">
      <TouchableOpacity className="p-4" onPress={() => router.back()}>
        <Image source={Back} alt="Go back" />
      </TouchableOpacity>

      <View className="my-auto flex gap-20">
        <View>
          <View className="w-10/12 mx-auto flex gap-2 mb-12">
            <Text className="h2 text-center">{title}</Text>
            <Text className="body-2 text-center">
              {text}
              <Text>{phone}</Text>
            </Text>
          </View>

          {onPress === 'verify' && (
            <Phone
              phoneInput={phoneInput}
              number={number}
              setValue={setNumber}
              setFormattedValue={setFormattedValue}
              text={text}
            />
          )}

          {onPress === 'otp' && <OTPVerify />}
        </View>

        <Button
          text={onPress === 'verify' ? 'Continue' : 'Resend Code'}
          onPress={onPress}
        />
      </View>
    </SafeAreaView>
  );
};

export default Auths;
