import { COLORS } from '@/constants/theme'
import { styles } from '@/styles/auth.styles'
import { useSSO } from '@clerk/clerk-expo'
import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import { Image, Text, TouchableOpacity, View } from 'react-native'

export default function Login() {

  const {startSSOFlow} = useSSO();
  const router = useRouter();
  const handleGoogleLogin = async () => {
    try {
      const {createdSessionId, setActive} = await startSSOFlow({strategy: "oauth_google"})

      if(setActive && createdSessionId) {
        setActive({session: createdSessionId})
        router.replace("/(tabs)")
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <View style={styles.container}>
        {/* BRAND SECTION */}
        <View style={styles.brandSection}>
            <View style={styles.logoContainer}>
    <Ionicons name="leaf" size={32}  color={COLORS.primary}/>
            </View>
            <Text style={styles.appName}>Spotlight</Text>
            <Text style={styles.tagline}>Don&apos;t miss anything</Text>
        </View>

{/* Illustrations */}
<View style={styles.illustrationContainer}>
  <Image source={require('../../assets/images/bro.png')} style={styles.illustration}/>
  </View>    


      {/* Login section */}
      <View style={styles.loginSection}>
        <TouchableOpacity style={styles.googleButton} onPress={handleGoogleLogin} activeOpacity={0.9}>
          <View style={styles.googleIconContainer}>
              <Ionicons name="logo-google" size={20} color={COLORS.surface}/>
          </View>
          <Text style={styles.googleButtonText}>Continue with Google</Text>
        </TouchableOpacity>

        <Text style={styles.termsText}>
          By continuing, you agree to our <b>Terms</b> and <b>Privacy</b> Policy
        </Text>
      </View>
    </View>
  )
}


