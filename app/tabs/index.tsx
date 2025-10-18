import { Text, View,  StyleSheet, ImageSourcePropType } from 'react-native';
import { Link } from 'expo-router';
import {Image} from 'expo-image';
import Button from '@/components/button';
//taken the image from assets folder
import * as ImagePicker from 'expo-image-picker';
// expo-image-picker provides launchImageLibraryAsync() 
// method to display the system UI by choosing an image 
// or a video from the device's media library
import { useState } from 'react';
// Declare a state variable called selectedImage using 
// the useState hook from React. We'll use this state variable to hold the URI of the selected image.
import ImageViewer from '@/components/ImageViewer';
import IconButton from '@/components/IconButton';
import CircleButton from '@/components/circleButton';
import EmojiPicker from '@/components/emojiPicker';
import EmojiList from '@/components/emojiList';
import EmojiSticker from '@/components/emojiSticker';
// Gestures are a great way to provide an intuitive user experience in an app. 
// The React Native Gesture Handler library provides built-in native components that can handle gestures.
//  It recognizes pan, tap, rotation, and other gestures using the platform's native touch handling system.
//  In this chapter, we'll add two different gestures using this library:
// Double tap to scale the size of the emoji sticker and reduce the scale when double tapped again.
// Pan to move the emoji sticker around the screen so that the user can place the sticker anywhere on the image.
import { GestureHandlerRootView } from 'react-native-gesture-handler';
// The @ symbol is a custom path alias for importing custom components and 
// other modules instead of relative paths. Expo CLI automatically configures it in tsconfig.json.
const PlaceholderImage = require('../../assets/images/background-image.png');

export default function Index() {
   const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
   const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
        {/* Declare a boolean state variable, 
        showAppOptions, to show or hide the buttons 
        that open the modal, alongside a few other
         options. When the app screen loads, we'll 
         set it to false so the options are not shown before picking an image. When the user picks an image or uses the placeholder 
         image, we'll set it to true. */}
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
// Create an isModalVisible state variable with the useState hook. Its default value is false,
//  which hides the modal until the user presses the button to open it.
  const [pickedEmoji, setPickedEmoji] = useState<ImageSourcePropType | undefined>(undefined);

   const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      // mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
      // The pickImageAsync() function invokes ImagePicker.launchImageLibraryAsync() and then handles the result. The launchImageLibraryAsync()
      //  method returns an object containing information about the selected image.
    });
// The launchImageLibraryAsync() receives an object to specify different options. This object is the ImagePickerOptions object,
//  which we are passing when invoking the method.
// When allowsEditing is set to true, the user can crop the image during the selection process on Android and iOS.
    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert('You did not  any image.');
    }
  };
// Add three placeholder functions for these buttons. 
// The onReset() function invokes when the user presses the reset button, 
// causing the image picker button to appear again
  const onReset = () => {
    setShowAppOptions(false);
  };

  const onSaveImageAsync = async () => {
    // we will implement this later
  };
  const onAddSticker = () => {
    setIsModalVisible(true);
  };
  // Replace the comment in the onAddSticker() function to update the isModalVisible variable to true when the user presses the button. 
  // This will open the emoji picker.

  const onModalClose = () => {
    setIsModalVisible(false);
  };

  return (
    // <View style={styles.container}>
    //for gesture handling we have remived the viwe root level and changed to gesture handler root view
     <GestureHandlerRootView style={styles.container}>
      {/* <Text style={styles.text}>Home screen</Text>  */}
      {/* // added style to Text component */}
      {/* <Link href="/tabs/about" style={styles.button}>
        Go to About screen
      </Link> */}
         <View style={styles.imageContainer}>
          {/* //for displaying image and applying styles */}
        <ImageViewer imgSource={selectedImage||PlaceholderImage} />
        {pickedEmoji && <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />}
        </View>

          {showAppOptions ? (
             <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" label="Reset" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
          </View>
          </View>
      ) : (

      <View style={styles.footerContainer}>
        <Button 
        theme="primary" 
        label="Choose a photo"
        onPress={pickImageAsync}  />
        {/* Update the button with no theme by adding an onPress prop with the following value. */}
        <Button label="Use this photo" onPress={() => setShowAppOptions(true)}/>
        {/* // added two Button components with different labels */}
      </View>
         )}
      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
        {/* Emoji list will go here */}
         <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
      </EmojiPicker>
    </GestureHandlerRootView>
  );
}
// we imported StyleSheet from 'react-native' to create styles for our components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',// dark background color
    alignItems: 'center',
    // justifyContent: 'center',

  },
  text: {
    color: '#fff',
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
    button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
   footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
  // styles for image and footer container
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});