import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ResultPage() {
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