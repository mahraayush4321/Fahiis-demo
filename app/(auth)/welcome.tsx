import { router } from 'expo-router';
import { useRef, useState } from 'react';
import { SafeAreaView, Text, View, Image, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import { onboarding } from '@/constants';

const OnBoarding = () => {
 const swiperRef = useRef<any>(null);
 const [activeIndex, setActiveIndex] = useState(0);
  return (
    <SafeAreaView className='flex-1 bg-[#B1C9EF]'>
      <Swiper
        ref={swiperRef}
        loop={false}
        dot={<View className='w-2.5 h-2.5 bg-white rounded-full mx-1' />}
        activeDot={<View className='w-2.5 h-2.5 bg-blue-900 rounded-full mx-1' />}
        onIndexChanged={(index) => setActiveIndex(index)}
      >
        {onboarding.map((item) => (
          <View key= {item.id} className='flex-1 justify-center items-center'>
            <Image  source={item.image} className='w-64 h-64 rounded-3xl ' resizeMode='cover' />
            <Text className= 'mt-6 mx-6 text-white font-bold italic text-2xl'>{item.title}</Text>
            <Text className= 'mt-4 mx-10 text-white text-center text-xl font-normal italic'>{item.description}</Text>
          </View>
        ))}
      </Swiper>
      <View className='flex-row justify-between items-center px-6 pb-6'>
        <TouchableOpacity onPress={() => router.push('/(auth)/sign-in')}>
          <Text className='text-blue-800 text-lg'>Skip</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() =>{
          if(activeIndex < onboarding.length - 1) {
            swiperRef.current.scrollBy(1);
          }else if(activeIndex === onboarding.length - 1) {
            router.push('/(auth)/sign-up');
          }
        } } className='w-10 h-10 bg-blue-900 rounded-full justify-center items-center'>
          <Text className='text-white text-lg'>{'>'}</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
};

export default OnBoarding;
