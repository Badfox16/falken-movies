import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaHome from '../screens/TelaHome';

const Stack = createNativeStackNavigator();

function AppNav() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={TelaHome} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNav