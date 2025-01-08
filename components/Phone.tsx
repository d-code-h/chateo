import { View, Text } from 'react-native';
import React from 'react';
import PhoneInput from 'react-native-phone-number-input';

const Phone = ({
  phoneInput,
  number,
  setValue,
  setFormattedValue,
  text,
}: PhoneProps) => {
  return (
    <View className="px-8">
      <View>
        <PhoneInput
          containerStyle={{ width: 'auto' }}
          ref={phoneInput}
          value={number}
          defaultCode="NG"
          layout="first"
          onChangeText={(text) => {
            setValue(text);
          }}
          onChangeFormattedText={(text) => {
            setFormattedValue(text);
          }}
          withDarkTheme
          withShadow
          autoFocus
        />
      </View>

      {/* {!valid && (
                <Text className="text-red-500 text-center mt-2">
                  Your phone might be incorrect.
                </Text>
              )} */}

      {/* {showMessage && (
                <View>
                  <Text>Formatted Number : {formattedValue}</Text>
                </View>
              )} */}
      {/* <TouchableOpacity
                onPress={() => {
                  const checkValid = phoneInput.current?.isValidNumber(value);
                  setShowMessage(true);
                  setValid(checkValid ? checkValid : false);
                }}
              >
                <Text>Check</Text>
              </TouchableOpacity> */}
    </View>
  );
};

export default Phone;
