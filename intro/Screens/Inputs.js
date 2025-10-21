import { Text, StyleSheet, View, Button, Alert, TextInput,Platform} from 'react-native'
import React, { Component, useState } from 'react'

export default function Inputs(){
    const [nombre, setNombre] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [descripcion, setDescripcion] = useState('');

    const mostrarAlerta = () => {
        if(nombre.trim() === '' || contrasena.trim() === '' || descripcion.trim() === ''){
            if(Platform.OS === 'web'){
                window.alert('Error: Ingresa todos correctamente los datos');
            }else{
                Alert.alert('Error: Ingresa todos correctamente los datos');
            }}
            else{
                if(Platform.OS === 'web'){
                    window.alert('Hola ' + nombre);
                }else{
                    Alert.alert('Hola ' + nombre);
                }
            }
        
    }

    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Inputs</Text>

       <TextInput style={styles.recuadro} placeholder='Escribe tu nombre' value={nombre} onChangeText={setNombre} maxLength={50}/>

       <TextInput style={styles.recuadro} placeholder='Escribe la contraseña' value={contrasena} onChangeText={setContrasena} secureTextEntry={true} maxLength={20}/>

       <TextInput style={styles.recuadro} placeholder='Escribe la descripcion' value={descripcion} onChangeText={setDescripcion} multiline={true} numberOfLines={4} maxLength={50}/>

       <Button color='blue' title='Mostrar Saludo' onPress={mostrarAlerta}/> 
      </View>
    )
}

const styles = StyleSheet.create({
container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 20,
},
titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
},
recuadro: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    marginBottom: 20,
},

});