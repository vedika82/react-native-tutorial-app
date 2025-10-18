// Now, we'll put the emoji sticker on the image
import { View, Text,ImageSourcePropType } from 'react-native'
import React from 'react'
import { Image } from 'expo-image';
import Animated from 'react-native-reanimated';
// An Animated component looks at the style prop of 
// the component and determines which values to animate and apply updates to create an animation
import {Gesture , GestureDetector} from 'react-native-gesture-handler';
// React Native Gesture Handler allows us to add behavior when it detects 
// touch input, like a double tap event.
import { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
// To recognize the tap on the sticker,

type Props = {
  imageSize: number;
  stickerSource: ImageSourcePropType;
};
// imageSize: a value defined inside the Index component.
//  We will use this value in the next chapter to scale the image's size when tapped.
// stickerSource: the source of the selected emoji image.


export default function emojiSticker({ imageSize, stickerSource }: Props) {
  // Inside the EmojiSticker component,
  //  create a reference called scaleImage using 
  //  the useSharedValue() hook. It will take the value of imageSize as its initial value.
  const scaleImage = useSharedValue(imageSize);
  // We'll create a doubleTap object to scale the 
  // initial value and use Gesture.Tap() to 
  // animate the transition while scaling the sticker image
  const doubleTap = Gesture.Tap()
  .numberOfTaps(2)
  .onStart(() => {
    if (scaleImage.value !== imageSize * 2) {
      scaleImage.value = scaleImage.value * 2;
    } else {
      scaleImage.value = Math.round(scaleImage.value / 2);
    }
  });
  const imageStyle = useAnimatedStyle(() => {
  return {
    width: withSpring(scaleImage.value),
    height: withSpring(scaleImage.value),
  };
});
 const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
// To recognize a dragging gesture on the sticker and to track its movement, 
// we'll use a pan gesture. 
// In the useSharedValue() hooks, 
// we have set both translation variables to have an 
// initial position of 0. 
// This is the sticker's initial position and a starting point. This value sets the sticker's initial position when the gesture starts.

const drag = Gesture.Pan().onChange(event => {
  translateX.value += event.changeX;
  translateY.value += event.changeY;
});
// The drag object uses Gesture.Pan() to track the movement of the sticker. 
// The onChange() method updates the translation values 
// whenever the user moves the sticker around the screen.
const containerStyle = useAnimatedStyle(() => {
  return {
    transform: [
      {
        translateX: translateX.value,
      },
      {
        translateY: translateY.value,
      },
    ],
  };
});
// The containerStyle object uses the useAnimatedStyle() hook to apply the translation values to the sticker's style. 
// The transform property applies the translation values to move the sticker around the screen.
  return (
        <GestureDetector gesture={drag}>
{/* // Wrap the entire return statement with the GestureDetector component and
//  pass the drag gesture to its gesture prop. */}
      <Animated.View style={[containerStyle, { top: -350 }]}>
      <GestureDetector gesture={doubleTap}>
      <Animated.Image 
      source={stickerSource} 
      resizeMode={'contain'} // ensures the entire emoji is visible within the specified dimensions
      style={[imageStyle, { width: imageSize, height: imageSize }]}
      />
      </GestureDetector>
    </Animated.View>
        </GestureDetector>

    
  )
}