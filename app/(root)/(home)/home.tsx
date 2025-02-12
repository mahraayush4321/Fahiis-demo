import CustomButton from "@/components/customButton";
import { router } from "expo-router";
import { Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";

const homeScreen = () => {
    return (
        <SafeAreaView>
            <Text>home sxreen</Text>
            <CustomButton title='vehicles' onPress={()=> {router.push('/vehicles')}}/>
        </SafeAreaView>
    )
}

export default homeScreen;