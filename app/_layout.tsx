import { Stack } from "expo-router";
//this is the root layout file where we define the navigation structure of the app
export default function RootLayout() {
  return (//added Stack.Screen for both screens
  <Stack>
 <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
  </Stack> )
    ;
}
