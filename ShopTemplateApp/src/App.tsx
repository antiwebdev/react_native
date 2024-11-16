import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
//Navigation
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"

//screens
import Home from './screens/Home'
import Details from './screens/Details'

export type RooTStackParamList = {
  Home: undefined;
  Details: {product: Product}
}

const Stack = createNativeStackNavigator<RooTStackParamList>()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name = 'Home' component={Home} options={{title: "ProductList"}}/>
        <Stack.Screen name = 'Details' component={Details} options={{title: "Product Details"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App