// Now, we'll put the emoji sticker on the image
import { View, Text,ImageSourcePropType } from 'react-native'
import React from 'react'
import { Image } from 'expo-image';

type Props = {
  imageSize: number;
  stickerSource: ImageSourcePropType;
};
// imageSize: a value defined inside the Index component.
//  We will use this value in the next chapter to scale the image's size when tapped.
// stickerSource: the source of the selected emoji image.


export default function emojiSticker({ imageSize, stickerSource }: Props) {
  return (
    <View style={{ top: -350 }}>
      <Image source={stickerSource} style={{ width: imageSize, height: imageSize }} />
    </View>
  )
}