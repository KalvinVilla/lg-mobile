import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'


import Home from './pages/Home';


import Game from './pages/Game';

import Create from './pages/party/Create';
import Join from './pages/party/Join';

const Stack = createNativeStackNavigator();

export default function App() {
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