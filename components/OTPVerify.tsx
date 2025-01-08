import { Text, StyleSheet, Platform, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
  CodeFieldProps,
} from 'react-native-confirmation-code-field';
// import { Colors } from 'react-native/Libraries/NewAppScreen';
import { clsx } from 'clsx';
import Button from './Button';

const styles = StyleSheet.create({
  root: { flex: 1, padding: 20 },
  codeFieldRoot: { width: 250, margin: 'auto', marginTop: 20 },
});

const CELL_COUNT = 4;

const OTPVerify = () => {
  const [value, setValue] = useState('');
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });

  return (
    <>
      <CodeField
        ref={ref}
        {...props}
        InputComponent={TextInput}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        autoComplete={Platform.OS === 'android' ? 'sms-otp' : 'one-time-code'}
        testID="my-code-input"
        renderCell={({ index, symbol, isFocused }) => (
          <Text
            key={index}
            className={clsx(
              'h1 w-12 h-12 leading-[36px] border-2 border-[#00000030] rounded-full text-center bg-neutral-line',
              isFocused && 'border-black',
            )}
            onLayout={getCellOnLayoutHandler(index)}
          >
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />

      <View className="mt-12">
        <Button text="Go Profile" onPress="profile" />
      </View>
    </>
  );
};

export default OTPVerify;
