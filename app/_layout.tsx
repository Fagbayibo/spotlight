import InitialLayout from "@/components/initialLayout";
import ClerkAndConvexProvider from "@/providers/ClerkAndConvexProvider";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";


const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!

if(!publishableKey) {
  throw new Error(
    'Missing publishable key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env'
  )
}

export default function RootLayout() {
  return(
<ClerkAndConvexProvider>
<SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#000"}}>
      <InitialLayout/>
      </SafeAreaView>
    </SafeAreaProvider>
</ClerkAndConvexProvider>
  )
}

