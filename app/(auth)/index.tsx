import Button from '@/components/Button';
import { onBoard } from '@/lib/image';
import { Text, Image, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Index() {
  return (
    <SafeAreaView className="flex justify-between h-screen pb-12">
      {/* Welcome message */}
      <View className="flex justify-center gap-10 items-center h-2/3 my-auto">
        <Image source={onBoard} className="w-auto h-auto" alt="Welcome" />
        <Text className="h2 w-8/12 text-center">
          Connect easily with your family and friends over countries
        </Text>
      </View>

      {/* Button to Phone Sign-in */}
      <View className="space-y-4 flex gap-4">
        <Text className="body-1 text-center">Terms & Privacy Policy</Text>
        <Button text="Start Messaging" onPress="auth" />
      </View>
    </SafeAreaView>
  );
}
