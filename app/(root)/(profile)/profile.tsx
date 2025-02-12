import { useTranslation } from "react-i18next";
import { Text, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";

const profileScreen = () => {
    const {t, i18n} = useTranslation();
    const changeLanguage = () => {
      if (i18n.language === 'en'){
        i18n.changeLanguage('ar')
      }else{
        i18n.changeLanguage('en')
      }
    }
    return (
        <SafeAreaView className="m-auto">
            <Text>home sxreen</Text>
        <Text className="text-xl mt-10 mb-5">{t('title')}</Text>
      <TouchableOpacity onPress={changeLanguage}>
        <Text className="text-lg">Change Lang</Text>
      </TouchableOpacity>
        </SafeAreaView>
    )
}

export default profileScreen;