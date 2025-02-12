import React from 'react'
import { Text, View,SafeAreaView,Image, TouchableOpacity } from 'react-native'
import CustomButton from '@/components/customButton'
import { Link, router } from 'expo-router'
import checkBox, { Checkbox } from 'expo-checkbox'
// import { typography } from '@/constants/themes/typography'
import { typography } from '../themes/typography'

const signUp = () => {
  const [isChecked, setChecked] = React.useState(false);

  const onSignUp = () => {
    router.push('/(auth)/sign-in')
  }
  const onLogin = () => {
    router.push('/(auth)/sign-in')
  }

  return (
   <SafeAreaView className='flex-1 bg-[#B1C9EF] justify-center items-center'>
    <View className='mb-10'>
  <Text className='text-white' style={typography.heading3}>Fahiss yyy</Text>

      <Text className='text-white' style={typography.heading2}>Fahiss yyy</Text>
    </View>
    <View className='mb-8  shadow-md'  style={{maxWidth:316 ,width:"calc((316 / 390) * 100vw)", height:316}}>
      <Image source={require('../../assets/images/solo4.jpg')} 
      className=' rounded-3xl ' resizeMode='cover' 
      style={{maxWidth:316 , height:316}}
      />
    </View>
    <CustomButton title="Sign up" onPress={onSignUp} className="w-3/4 mb-10" bgVariant='outline'/>
    <CustomButton title="Login" onPress={onLogin} className="w-3/4 " textVariant='secondary'  style={{ backgroundColor: '#395886' }}/>
    <View className='flex-row items-center w-3/4 mb-4 '>
        <Checkbox
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#B1C9EF' : 'black'} 
          style={{ marginRight: 12}}
        />
        <Text className='text-black font-normal  mt-4 mx-5 justify-center items-center '>
          By Signing up, you agree to Fahiss 
          <View >
          <Text style={{ color: '#395886'}} className='underline '>Terms and Services</Text>
          </View>
        </Text>
      </View>

      <TouchableOpacity >
        <Text className='text-black font-light underline'>I'll do it later, Skip now</Text>
      </TouchableOpacity>
   </SafeAreaView>
  )
}

export default signUp
