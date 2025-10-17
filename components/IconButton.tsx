// The other two buttons also use <MaterialIcons> to display vertically aligned text labels and icons. Create a file named IconButton.tsx inside the components directory. This component accepts three props:

// icon: the name corresponding to the MaterialIcons library icon.
// label: the text label displayed on the button.
// onPress: this function invokes when the user presses the button.

import { Pressable, StyleSheet, Text } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

type Props = {
  icon: keyof typeof MaterialIcons.glyphMap;
  label: string;
  onPress: () => void;
};

export default function IconButton({ icon, label, onPress }: Props) {
  return (
    <Pressable style={styles.iconButton} onPress={onPress}>
      <MaterialIcons name={icon} size={24} color="#fff" />
      <Text style={styles.iconButtonLabel}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  iconButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconButtonLabel: {
    color: '#fff',
    marginTop: 12,
  },
});
// The IconButton component uses <Pressable> to handle user interactions.