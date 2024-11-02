
import React, {useState} from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  ImageSourcePropType,
  Image,
  Text,
  Pressable
} from 'react-native';

import ReactNativeHapticFeedback from "react-native-haptic-feedback";

import DiceOne from '../assets/One.png';
import DiceTwo from '../assets/Two.png';
import DiceThree from '../assets/Three.png';
import DiceFour from '../assets/Four.png';
import DiceFive from '../assets/Five.png';
import DiceSix from '../assets/Six.png';

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType
}>

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

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

  const [diceImg, setDiceImg] = useState<ImageSourcePropType>(DiceOne);
  const [secodDiceImg, setSecondDiceImg] = useState<ImageSourcePropType>(DiceOne);

  const rollDice = () => {
    let randomNum = Math.floor(Math.random()*6) + 1;
    let secondRandomNum = Math.floor(Math.random()*6) + 1;

    switch (randomNum) {
      case 1:
        setDiceImg(DiceOne);
        break;
      case 2:
        setDiceImg(DiceTwo);
        break;
      case 3:
        setDiceImg(DiceThree);
        break;
      case 4:
        setDiceImg(DiceFour);
        break;
      case 5:
        setDiceImg(DiceFive);
        break;
      case 6:
        setDiceImg(DiceSix);
        break;
      default:
        setDiceImg(DiceOne);
        break;
    }

    switch (secondRandomNum) {
      case 1:
        setSecondDiceImg(DiceOne);
        break;
      case 2:
        setSecondDiceImg(DiceTwo);
        break;
      case 3:
        setSecondDiceImg(DiceThree);
        break;
      case 4:
        setSecondDiceImg(DiceFour);
        break;
      case 5:
        setSecondDiceImg(DiceFive);
        break;
      case 6:
        setSecondDiceImg(DiceSix);
        break;
      default:
        setSecondDiceImg(DiceOne);
        break;
    }
    
    ReactNativeHapticFeedback.trigger("impactLight", options);
    console.log(randomNum, secondRandomNum)
  }
  
  return (
    <View style={styles.container}>
      <Dice imageUrl={diceImg}/>
      <Dice imageUrl={secodDiceImg}/>
      <Pressable onPress={rollDice} style={styles.btn}><Text>Roll</Text></Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 200
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#5c807b"
  },
  diceContainer: {
    margin: 12
  },
  btn: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: "#E5E0FF",
    fontSize: 15,
    color: "#8EA7F9",
    backgroundColor: "gray"
  }
});

export default App;
