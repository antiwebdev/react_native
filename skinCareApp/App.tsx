import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import MainPage from './pages/MainPage';
import RoutinePage from './pages/RoutinePage';
import ResultPage from './pages/ResultPage';

export type RootStackParamList = {
  MainPage: undefined;
  RoutinePage: undefined;
  ResultPage: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainPage">
        <Stack.Screen name="MainPage" component={MainPage} />
        <Stack.Screen name="RoutinePage" component={RoutinePage} />
        <Stack.Screen name="ResultPage" component={ResultPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
