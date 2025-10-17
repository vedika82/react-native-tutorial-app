//The modal allows the user to choose an emoji from a list of available emoji. 
// isVisible: a boolean to determine the state of the modal's visibility.
// onClose: a function to close the modal.
// children: used later to display a list of emoji.
import { Modal, View, Text, Pressable, StyleSheet } from 'react-native';
import React from 'react'
import { PropsWithChildren } from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

type Props = PropsWithChildren<{
  isVisible: boolean;
  onClose: () => void;
}>;

export default function emojiPicker({ isVisible, children, onClose }: Props) {
  return (
    <View>
     {/* The <Modal> component displays a title and a close button. */}
      <Modal animationType="slide" transparent={true} visible={isVisible}>
       {/* Its visible prop takes the value of isVisible and controls whether the modal is open or closed.
          Its transparent prop is a boolean value, which determines whether the modal fills the entire view.
          Its animationType prop determines how it enters and leaves the screen. In this case, it is sliding from the bottom of the screen.
          Lastly, the <EmojiPicker> invokes the onClose prop when the user presses the close <Pressable>. */}
        <View style={styles.modalContent}>
        <View style={styles.titleContainer}></View>
       <Text style={styles.title}>Choose a sticker</Text>
          <Pressable onPress={onClose}> 
                       <MaterialIcons name="close" color="#fff" size={22} />
          </Pressable>
        </View>
        {/* The children prop renders the stickers passed from the parent component. */}
        {children}
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    height: '25%',
    width: '100%',
    backgroundColor: '#25292e',
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    position: 'absolute',
    bottom: 0,
  },
  titleContainer: {
    height: '16%',
    backgroundColor: '#464C55',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: '#fff',
    fontSize: 16,
  },
});