import { StyleSheet, Text, View, Image, ImageBackground, Dimensions, TouchableOpacity, ScrollView, Alert, Platform } from 'react-native';
import { useState } from 'react';

const fondo = require('./assets/fondo.jpeg');
const pastor = require('./assets/tacospastor.jpeg');
const jamaica = require('./assets/jamaica.jpeg');
const donjulio = require('./assets/donjulio.jpeg');
const sopes = require('./assets/sopes.jpeg');
const tacosduros = require('./assets/tacosduros.jpeg');
const pizza = require('./assets/pizza.jpeg');
const hochata = require('./assets/aguadehorchata.jpeg');
const Hamburguesa = require('./assets/hamburguesa.jpeg');

const comidaobjct = [


]






export default function App() {
  const [ordenar, setOrdenar] = useState(false)

  const tacosd = 'Tacos duros';
  const tacosp = 'Tacos de Pastor';
  const pissa = 'Pizza';
  const zopes = 'Sopes';
  const h2ojamaica = 'Agua de Jamaica';
  const julio = 'Don Julio 70';
  const h2ohorchata = 'Agua de Horchata';
  const burgir = 'Hamburguesa';

  const alerta = () =>{
    if(ordenar == true){
      if(Platform.OS === 'web'){
        window.alert('Orden registrada correctamente');
      }
    }
  }


  return (
    <ImageBackground source={fondo} style={styles.background} resizeMode="cover">
      <ScrollView style={styles.scrollArea} contentContainerStyle={styles.scrollcontenido} showsVerticalScrollIndicator={true} >
      <View>
        <Text style={styles.header}>SonuraGrill</Text>
        <Text style={styles.headerdescription}>Restaurante de alta gama con los mejores platillos de méxico con los productos de la mejor alta calidad </Text>
      </View>
      
        <Text style={styles.headerdescription}>
          Platillos Especiales Mexicanos
        </Text>

        <View style={styles.platillos}>
          <Image source={tacosduros} />
          <Text style={styles.textoplatillos}>{tacosd}</Text>
          <Text style={styles.textoplatillos}>Deliciosos tacos duros con ingrediente a elegir con verdura y salsa</Text>
          <Text style={styles.textoplatillos}>70$</Text>
          <TouchableOpacity style={styles.botonordenar} onPress={() => alerta()}>
            <Text style={styles.textordernar}>Ordenar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.platillos}>
          <Image source={pastor} />
          <Text style={styles.textoplatillos}>{tacosp}</Text>
          <Text style={styles.textoplatillos}>Deliciosos tacos duros con ingrediente a elegir con verdura y salsa</Text>
          <Text style={styles.textoplatillos}>70$</Text>
          <TouchableOpacity style={styles.botonordenar} onPress={() => alerta()}>
            <Text style={styles.textordernar}>Ordenar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.platillos}>
          <Image source={sopes} />
          <Text style={styles.textoplatillos}>{zopes}</Text>
          <Text style={styles.textoplatillos}>Deliciosos tacos duros con ingrediente a elegir con verdura y salsa</Text>
          <Text style={styles.textoplatillos}>70$</Text>
          <TouchableOpacity style={styles.botonordenar} onPress={() => alerta()}>
            <Text style={styles.textordernar}>Ordenar</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.headerdescription}>
          Platillos Especiales Gringos
        </Text>

        <View style={styles.platillos}>
          <Image source={pizza} />
          <Text style={styles.textoplatillos}>{pissa}</Text>
          <Text style={styles.textoplatillos}>Deliciosos tacos duros con ingrediente a elegir con verdura y salsa</Text>
          <Text style={styles.textoplatillos}>70$</Text>
          <TouchableOpacity style={styles.botonordenar} onPress={() => alerta()}>
            <Text style={styles.textordernar}>Ordenar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.platillos}>
          <Image source={Hamburguesa} />
          <Text style={styles.textoplatillos}>{burgir}</Text>
          <Text style={styles.textoplatillos}>Deliciosos tacos duros con ingrediente a elegir con verdura y salsa</Text>
          <Text style={styles.textoplatillos}>70$</Text>
          <TouchableOpacity style={styles.botonordenar} onPress={() => alerta()}>
            <Text style={styles.textordernar}>Ordenar</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.headerdescription}>
          Bebidas
        </Text>

        <View style={styles.platillos}>
          <Image source={jamaica} />
          <Text style={styles.textoplatillos}>{h2ojamaica}</Text>
          <Text style={styles.textoplatillos}>Deliciosos tacos duros con ingrediente a elegir con verdura y salsa</Text>
          <Text style={styles.textoplatillos}>70$</Text>
          <TouchableOpacity style={styles.botonordenar} onPress={() => alerta()}>
            <Text style={styles.textordernar}>Ordenar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.platillos}>
          <Image source={hochata} />
          <Text style={styles.textoplatillos}>{h2ohorchata}</Text>
          <Text style={styles.textoplatillos}>Deliciosos tacos duros con ingrediente a elegir con verdura y salsa</Text>
          <Text style={styles.textoplatillos}>70$</Text>
          <TouchableOpacity style={styles.botonordenar} onPress={() => alerta()}>
            <Text style={styles.textordernar}>Ordenar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.platillos}>
          <Image source={donjulio} />
          <Text style={styles.textoplatillos}>{julio}</Text>
          <Text style={styles.textoplatillos}>Deliciosos tacos duros con ingrediente a elegir con verdura y salsa</Text>
          <Text style={styles.textoplatillos}>70$</Text>
          <TouchableOpacity style={styles.botonordenar} onPress={() => alerta()}>
            <Text style={styles.textordernar}>Ordenar</Text>
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
  platillos: {
    flex: 1,
    backgroundColor: '#a2a2a2ff',
    paddingVertical: 10
  },
  botonordenar: {
    backgroundColor: 'white',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  textordernar: {
    textAlign: 'center',
  },
  textoplatillos:{
    fontSize: 10,
    color: 'white',
    lineHeight: 24,
    textAlign: 'justify',
    marginBottom: 20,
    padding: 10,


  },

});
