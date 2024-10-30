
import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  ImageSourcePropType,
  Image
} from 'react-native';

import DiceOne from '../assets/One.png';
import DiceTwo from '../assets/Two.png';
import DiceThree from '../assets/Three.png';
import DiceFour from '../assets/Four.png';
import DiceFive from '../assets/Five.png';
import DiceSix from '../assets/Six.png';

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType
}>

const Dice = ({imageUrl}: DiceProps):JSX.Element => {
  return (
    <View>
      <Image
        style={styles.image}
        source={imageUrl}
      />
    </View>
  );
}

function App(): React.JSX.Element {
  
  return (
    <>
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 200
  },
});

export default App;
