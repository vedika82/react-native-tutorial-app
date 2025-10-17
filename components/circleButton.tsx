import { View, Text,StyleSheet, Pressable } from 'react-native'
import React from 'react'
import Materials from '@expo/vector-icons/MaterialIcons';

type Props={
 onPress:() =>void;
};

export default function circleButton({onPress}: Props) {
  return (
    <View style={styles.circleButtonContainer}>
     <Pressable style={styles.circleButton} onPress={onPress}>
      {/* To render the plus icon, this button uses the <MaterialIcons> 
      icon set from the @expo/vector-icons library. */}
      <Materials name="add" size={38} color="#25292e" />
     </Pressable>
      {/* <Text>circleButton</Text> */}
    </View>
  )
}

const styles = StyleSheet.create({
  circleButtonContainer: {
    width: 100,
    height: 100,
    marginHorizontal: 60,
    borderWidth: 4,
    borderColor: '#ffd33d',
    borderRadius: 50,
    padding: 3,
  },
  circleButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 42,
    backgroundColor: '#fff',
  },
});