import * as React from 'react';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from './pages/Home';
import Game from './pages/Game';
import Create from './pages/party/Create';
import Join from './pages/party/Join';

const Stack = createNativeStackNavigator();

export const SERVER_ADDRESS = process.env.EXPO_PUBLIC_SERVER_URL || 'http://192.168.1.23:3000';

console.log(process.env)
console.log(process.env.EXPO_PUBLIC_SERVER_URL)

export default function App() {

  React.useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        'ancient': require('./assets/fonts/ancient.ttf'),
      });
    }

    loadFont();
  }, []);

  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Game" component={Game} />
        <Stack.Screen name="Create" component={Create} />
        <Stack.Screen name="Join" component={Join} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}