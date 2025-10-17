// //to add not found screen to the app
// import { View, StyleSheet } from 'react-native';
// import { Link, Stack } from 'expo-router';

// export default function NotFoundScreen() {
//   return (
//     <>
//       <Stack.Screen options={{ title: 'Oops! Not Found' }} />
//       <View style={styles.container}>
//         <Link href="/" style={styles.button}>
//         {/* //Add a Link component to navigate to the / route, which is our fallback route. */}
//           Go back to Home screen!
//         </Link>
//       </View>
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#25292e',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },

//   button: {
//     fontSize: 20,
//     textDecorationLine: 'underline',
//     color: '#fff',
//   },
// });
// //if we change the URL to a non-existent route,
// //  this NotFoundScreen will be displayed,
// //  allowing users to navigate back to the home screen.