import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import MainPage from './pages/MainPage'

const App = () => {
  return (
    <View style={styles.container}>
      <Text>App</Text>
      <MainPage/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1, // Заполняем весь экран
  },
});
