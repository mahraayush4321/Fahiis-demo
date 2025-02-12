import React from 'react';
import { Text, View, SafeAreaView, TextInput, TouchableOpacity, Image } from 'react-native';
import { Checkbox } from 'expo-checkbox';
import CustomButton from '@/components/customButton';
import { router } from 'expo-router';

const signIn = () => {
  const [isChecked, setChecked] = React.useState(false);
  const onHomepage = () => {
    router.push('/(root)/(home)/home')
  }

  return (
    <SafeAreaView className="flex-1 bg-[#B1C9EF] items-center">
      <View>
        <Text className="text-white text-3xl mt-28 font-bold">Welcome to</Text>
        <Text className="text-white text-2xl font-bold italic text-center">
          Fahiss
        </Text>
      </View>
      <View>
        <Text className="text-white mt-10 font-semibold text-2xl italic">
          Insert Your Kuwait Civil ID
        </Text>
      </View>

      <View>
        <Image
          source={require("../../assets/images/kw.png")}
          className="w-6 h-6"
          resizeMode="contain"
        />
      </View>

      <View className="mt-10 flex items-center justify-center">
        <TextInput
          className="bg-white rounded-lg p-3 text-lg"
          placeholder="Enter 12-digit national identification number"
          keyboardType="numeric"
          maxLength={12}
        />
      </View>

      <View className="w-3/4 mb-8">
        <CustomButton
          title="Login"
          onPress={() => {}}
          className="w-full bg-[#395886]"
          onPressIn={onHomepage}
        />
      </View>

      <View className="flex-row items-center w-3/4 mb-8">
        <Checkbox
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? "#395886" : undefined}
        />
        <Text className="text-white ml-3">
          I agree to Fahiss{" "}
          <Text className="underline">Terms and Services</Text>
        </Text>
      </View>

      <TouchableOpacity>
        <Text className="text-white underline">Help</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default signIn;