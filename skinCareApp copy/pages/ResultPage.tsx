import { StyleSheet, Text, View } from 'react-native'
import React, {useContext} from 'react'
import { RoutineContext } from '../services/RoutineContext';
import { getSkincareAdvice } from '../services/gptApi';



export default function ResultPage() {

  const routineContext = useContext(RoutineContext);

  if (!routineContext) {
    return <Text>Контекст не найден!</Text>;
  }

  const {productList, photo} = routineContext;

  const response = photo
  ? getSkincareAdvice("iamge of regular person", productList.join(', '))
  : null;

  console.log(response);

  return (
    
    <View style={styles.container}>
      <View style={styles.title}>
        <Text>Result</Text>
      </View>
      <View style={styles.resultText}>
        <Text>Respons from api</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey'
    },
    title: {
        fontSize: 24,
        marginBottom: 20
    },
    resultText: {
        fontSize: 18,
        color: 'black',
        textAlign: 'center',
        marginBottom: 20,
    }
})