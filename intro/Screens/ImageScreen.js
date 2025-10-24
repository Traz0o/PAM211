import { Text, StyleSheet, View, Image, ImageBackground, Dimensions} from 'react-native'
import React, { useState, useEffect } from 'react'
import { Button } from 'react-native-web';

const BackgroundImage = require('../assets/splash-icon.png');
const MonoImage = require('../assets/mono.jpg');


export default function ImageScreen({navigation}) {
    const [show, setShow] = useState(true);
    const [mono, setMono] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);
    if(show){
    return (
      <ImageBackground source={MonoImage} style={styles.background} resizeMode='cover'>
        <View style={styles.overlay}>
            <Text style={styles.title}>Bienvenido</Text>
            <Text style={styles.title}>Cargando...</Text>
        </View>
      </ImageBackground>

    );
  }
  return(
    <ImageBackground source={BackgroundImage} style={styles.background} resizeMode="cover">
      <View style={styles.mainScreen}>
        <Text style={styles.mainText}>Pantalla Principal</Text>
        <Button title={mono ? "Ocultar Mono" : "Mostrar Mono"} onPress={() => setMono(!mono)} />
        {mono && <Image source={MonoImage} style={styles.imagen} />}
      </View>
    </ImageBackground>
  );

}

const {width, height} = Dimensions.get('window');


const styles = StyleSheet.create({
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
       //backgroundColor: '#77b25cff',
    },
    mainText:{
        fontSize: 28,
        fontWeight: 'bold',
        color: '#1f5226ff',
    },
  imagen: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
})