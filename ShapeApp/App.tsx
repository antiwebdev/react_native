import React, {useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function App(): React.JSX.Element {

  const [bgColor, setBgColor] = useState("#ffffff");

  const [secondBgColor, setSecondBgColor] = useState("#ffffff");

  const generateColor = () => {
    const hexRange = "0123456789ABCDEF"
    let randomColor= "#"

    for (let index = 0; index < 6; index++) {
      randomColor += hexRange[Math.floor(Math.random() * 16)]
    }

    console.log("Current random color" + randomColor);
    setBgColor(randomColor);
  }

  return (
    <>
      <StatusBar backgroundColor={bgColor}/>
      <View style={[styles.container, {backgroundColor: bgColor}]}>
        <TouchableOpacity
          onPress={generateColor}
        >
          <View style={styles.actionBtn}>
            <Text style={styles.actionBtnTxt}>Press</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={[styles.container, {backgroundColor: bgColor}]}>
        <TouchableOpacity
          onPress={generateColor}
        >
          <View style={styles.actionBtn}>
            <Text style={styles.actionBtnTxt}>Press</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  actionBtn: {
    borderRadius: 12,
    backgroundColor: "#6A1B4D",
    paddingVertical: 10,
    paddingHorizontal: 40
  },
  actionBtnTxt: {
    fontSize: 24,
    color: "#FFFFFF",
    textTransform: "uppercase"
  }
})


export default App;
