import React from 'react';
import {Text, View, Button, Alert,TextInput,StyleSheet} from 'react-native';
import { State } from 'react-native-gesture-handler';


export default function Contacto({ navigation }){
  return(  
    <View style={{flex:1,backgroundColor:'#430088',flexDirection:'column',padding:10}} >
    <Button color="#E500E1" title="Detalles" onPress={() => navigation.navigate('Detalles')}/>
      <View style={{flex:3,justifyContent:'flex-end',backgroundColor:'#430088'}}>
        <Text></Text>
      </View>
      <View style={{flex:.5,justifyContent:'flex-end',backgroundColor:'#E500E1'}}>
        <TextInput placeholder="Escriba" ></TextInput> 
        <Button title="Enviar" onPress={() => Alert.alert('Se supone q deberia enviar mensajes pero mi cabeza no dio con la respuesta')}/>
      </View>
      
    </View>
  );
}
