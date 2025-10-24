import { Text, StyleSheet, View, Image, ImageBackground, Dimensions,  Alert, TextInput,Platform, Switch, Button} from 'react-native'
import React, { Component, useState, useEffect } from 'react'

const background = require('../assets/fondosplash.jpg');
const fondo = require('../assets/fondoinputs.jpg');

export default function RepasoScreen (){
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [show, setShow] = useState(true);
    const [termsAccepted, setTermsAccepted] = useState(false);

    const mostrarAlerta = () => {
            if(nombre.trim() === ''){
                if(Platform.OS === 'web'){
                    window.alert('Error: Ingrese su nombre correctamente');
                }else{
                    Alert.alert('Error: Ingrese su nombre correctamente');
                }}
                if(correo.trim() === ''){
                    if(Platform.OS === 'web'){
                        window.alert('Error: Ingrese su correo correctamente');
                    }else{
                        Alert.alert('Error: Ingrese su correo correctamente');
                    }}
                if(termsAccepted === false){
                    if(Platform.OS === 'web'){
                        window.alert('Error: Debe aceptar los terminos y condiciones');
                    }else{
                        Alert.alert('Error: Debe aceptar los terminos y condiciones');
                    }}
                else{
                    if(Platform.OS === 'web'){
                        window.alert('Usuario ' + nombre + ' con correo ' + correo + ' registrado correctamente');
                    }else{
                        Alert.alert('Usuario ' + nombre + ' con correo ' + correo + ' registrado correctamente');
                    }
                }
            
        }

    useEffect(() => {
            const timer = setTimeout(() => {
                setShow(false);
            }, 3000);
            return () => clearTimeout(timer);
        }, []);
        if(show){
        return (
          <ImageBackground source={background} style={styles.background} resizeMode='cover'>
            <View style={styles.overlay}>
                <Text style={styles.title}>Bienvenido</Text>
                <Text style={styles.title}>Cargando...</Text>
            </View>
          </ImageBackground>
    
        );
      }
    return(
        <ImageBackground source={fondo} style={styles.background} resizeMode="cover">
          <View style={styles.mainScreen}>
            <View style={styles.contorno}>
            <Text style={styles.titulo}>Registro de Usuario</Text>
            
                   <TextInput style={styles.recuadro} placeholder='Nombre' value={nombre} onChangeText={setNombre} maxLength={50}/>
            
                   <TextInput style={styles.recuadro} placeholder='Correo' value={correo} onChangeText={setCorreo} keyboardType='email-adress' maxLength={20}/>

                   <View style={styles.switchContainer}>
                   <Text style={styles.textoterminos}>Acepta los terminos y condiciones</Text>
                   <Switch value={termsAccepted} onValueChange={setTermsAccepted} />
                     </View>

                    <Button color='blue' title='Registrar' onPress={mostrarAlerta}/>
            </View>
          </View>
        </ImageBackground>
      );
  }

  const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    contorno:{
        backfaceVisibility:'hidden',
        backgroundColor:'#grey',
        opacity:20,
    },
    background:{
        width: width,
        height: height,
    },
    overlay:{
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title:{
        color: '#ffffff',
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    mainScreen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
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
    color: '#ffffff',
},
recuadro: {
    borderWidth: 1,
    borderColor: 'white',
    padding: 10,
    marginBottom: 20,
    opacity: 0.8,
    color: '#ffffff',
},
switchContainer:{
    flexDirection:'row',
    alignItems:'center',
    marginBottom:20,
    color: '#ffffff',
},
textoterminos:{
    fontSize:16,
    marginRight:10,
    color: '#ffffff',
},

})