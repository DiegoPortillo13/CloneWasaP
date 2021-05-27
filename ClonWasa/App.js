import React from 'react';
import {Text, View, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CloneWasa from "./screens/CloneWasa";
import Detalles from "./screens/Detalles";
import Contacto from "./screens/Contacto";

const Stack = createStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="CloneWasa" component={CloneWasa}/>
        <Stack.Screen name="Contacto" component={Contacto}/>
        <Stack.Screen name="Detalles" component={Detalles}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}