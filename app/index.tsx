import { Redirect } from 'expo-router'

export default function Index() {
  // Immediately redirect user to the tabs
  return <Redirect href="/(auth)/login" />
  
}


// https://internal-macaw-10.clerk.accounts.dev