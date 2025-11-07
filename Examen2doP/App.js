import { StyleSheet, Text, View, Image, ImageBackground, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import { useState } from 'react';

const fondo = require('./assets/fondo.jpeg');
const pastor = require('./assets/tacospastor.jpeg');
const jamaica = require('./assets/jamaica.jpeg');
const donjulio = require('./assets/donjulio.jpeg');
const sopes = require('./assets/sopes.jpeg');
const tacosduros = require('./assets/tacosduros.jpeg');
const pizza = require('./assets/pizza.jpeg');
const hochata = require('./assets/aguahorchata.avif');




export default function App() {
  const [ordenar, setOrdenar] = useState(false)

  return (
    <ImageBackground source={fondo} style={styles.background} resizeMode="cover">
      <View>
        <Text style={styles.header}>SonuraGrill</Text>
        <Text style={styles.headerdescription}>Restaurante de alta gama con los mejores platillos de méxico con los productos de la mejor alta calidad </Text>
      </View>
      <ScrollView style={styles.scrollArea} contentContainerStyle={styles.scrollcontenido} showsVerticalScrollIndicator={true} >
        <Text style={styles.headerdescription}>
          Platillos Especiales Mexicanos
        </Text>

        <View>
          <Image source={tacosduros} style={styles.iconos}/>
          <Text style={style.texticonos}>Tacos Duros</Text>
          <Text style={style.texticonos}>Deliciosos tacos duros con ingrediente a elegir con verdura y salsa</Text>
          <Text style={style.texticonos}>70$</Text>
          <TouchableOpacity styles={styles.botonordenar} onPress={() => setOrdenar(true)}>
            <Text styles={styles.textordernar}>Ordenar</Text>
          </TouchableOpacity>

        </View>




      </ScrollView>
    </ImageBackground>
  );
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  background: {
    width: width,
    height: height,
  },
  header: {
    height: 70,
    fontFamily: 'Times New Roman',
    fontSize: 40,
    color: 'white',
    textAlign: 'center',
    marginTop: 40,
  },
  headerdescription: {
    height: 70,
    fontFamily: 'Times New Roman',
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
  },
  scrollArea: {
    flex: 1,

  },
  scrollcontenido: {
    alignItems: 'center',
    paddingVertical: 20,

  },
  iconos:{

  },

});
