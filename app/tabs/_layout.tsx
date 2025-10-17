import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';


export default function TabLayout() {
  return (
<Tabs
  screenOptions={{
    tabBarActiveTintColor: '#ffd33d',
    headerStyle: {
      backgroundColor: '#25292e',
    },
    headerShadowVisible: false,
    headerTintColor: '#fff',
    tabBarStyle: {
      backgroundColor: '#25292e',
    },
  }}
>
{/* 
The header's background is set to #25292e using the headerStyle property. 
We have also disabled the header's shadow using headerShadowVisible.
headerTintColor applies #fff to the header label
tabBarStyle.backgroundColor applies #25292e to the tab bar */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'About',
          tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
            <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24}/>
          ),
        }}
      />
    </Tabs>
    
  );
}
//we imported Ionicons from @expo/vector-icons to use icons in the tab bar
// we defined two tabs: index (Home) and about (About)
// each tab has a title and an icon that changes based on whether the tab is focused or not
// The active tab's icon color is set to #ffd33d
// This layout file sets up a bottom tab navigator for the app, allowing users to switch between the Home and About screens easily.