import { Stack } from "expo-router";
//this is the root layout file where we define the navigation structure of the app
import { StatusBar } from 'expo-status-bar';
// expo-status-bar library comes pre-installed in every project 
// created using create-expo-app. 
// This library provides a StatusBar component to configure the app's status bar style.


export default function RootLayout() {
  return (//added Stack.Screen for both screens
       <>
  <Stack>
 <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
  </Stack> 
   <StatusBar style="light" />
  </>
  );
}
