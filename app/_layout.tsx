import { Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ClerkProvider, ClerkLoaded } from '@clerk/clerk-expo'
import { tokenCache } from '@clerk/clerk-expo/token-cache'


const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!

if(!publishableKey) {
  throw new Error(
    'Missing publishable key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env'
  )
}

export default function RootLayout() {
  return(
<ClerkProvider tokenCache={tokenCache}>
  <ClerkLoaded>
  <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#000"}}>
      <Stack screenOptions={{headerShown: false}}>
     </Stack>;
      </SafeAreaView>
    </SafeAreaProvider>
  </ClerkLoaded>
</ClerkProvider>
  )
}

