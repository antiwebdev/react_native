import { StyleSheet, Text, View } from 'react-native'
import React, {useContext, useEffect, useState} from 'react'
import { RoutineContext } from '../services/RoutineContext';
import { getSkincareAdvice } from '../services/gptApi';



export default function ResultPage() {

  const routineContext = useContext(RoutineContext);
  const [response, setResponse] = useState<string | null>(null);

  if (!routineContext) {
    return <Text>Контекст не найден!</Text>;
  }

  const {productList, photo} = routineContext;

  

  useEffect(() => {
    const fetchSkincareAdvice = async () => {
      if (photo) {
        const advice = await getSkincareAdvice(photo.uri, productList.join(', '));
        setResponse(advice);
        console.log("Api response:" + response);
      }
    };

    fetchSkincareAdvice();
  }, [photo, productList]);

  

  return (
    
    <View style={styles.container}>
      <View style={styles.title}>
        <Text>Result</Text>
      </View>
      <View style={styles.resultText}>
        <Text>{response ? response : "Waiting for response..."}</Text>
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