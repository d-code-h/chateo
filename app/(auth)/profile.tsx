import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Add, Avatar, Back } from '@/lib/image';
import { router } from 'expo-router';
import Button from '@/components/Button';

const Profile = () => {
  return (
    <SafeAreaView className="h-screen">
      <View className="p-4 flex flex-row items-center gap-2">
        <TouchableOpacity onPress={() => router.back()}>
          <Image source={Back} />
        </TouchableOpacity>
        <Text className="h3">Your Profile</Text>
      </View>

      <View className="w-10/12 mx-auto mt-16 mb-20">
        <View className="w-24 h-24 rounded-full bg-neutral-200 justify-center items-center relative mx-auto mb-16">
          <Image source={Avatar} />
          <Image source={Add} className="w-6 h-6 absolute right-0 bottom-0" />
        </View>
        <View className="gap-3">
          <TextInput
            placeholder="First Name (Required)"
            className="px-2 py-1.5 h-10 bg-neutral-200"
          />
          <TextInput
            placeholder="Last Name (Required)"
            className="px-2 py-1.5 h-10 bg-neutral-200"
          />
        </View>
      </View>

      <Button text="Save" onPress="home" />
    </SafeAreaView>
  );
};

export default Profile;
