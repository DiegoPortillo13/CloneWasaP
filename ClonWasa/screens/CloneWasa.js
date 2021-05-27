import React from 'react';
import {Text, View, Button, TouchableOpacity, Alert} from 'react-native';

export default function ConeWasa({ navigation }){
    return(    
        <View style={{backgroundColor:'#430088'}}>
            <TouchableOpacity style={{backgroundColor:'#E500E1'}} onPress={() => navigation.navigate('Contacto')}>
                <Text style={{fontSize:35, color:'black'}}>Diego</Text>         
            </TouchableOpacity>  
            <View style={{alignContent:'center', justifyContent:'flex-end',margin:95,marginTop:600}}>
            <Button
            color="#E500E1"
            title="New Chat"
            onPress={() => Alert.alert('Aqui seria para un nuevo chat')}
            />
            </View>
        </View>
        
    );
}