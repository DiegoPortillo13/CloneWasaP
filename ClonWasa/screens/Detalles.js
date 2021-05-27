import React from 'react';
import {Text, View,Button} from 'react-native';


export default function Detalles({ navigation }){
  return(
    <View style={{flex:1, alignItems:'center',justifyContent:'center', backgroundColor:'#430088'}}>
      <Text style={{fontSize:50,color:'white'}}>Diego Portillo</Text>
      <Button color="#E500E1" title="Pagina Principal" onPress={() => navigation.navigate('CloneWasa')}/>
    </View>
  );
}