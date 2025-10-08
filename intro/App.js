//1.- Zona de los Imports
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react'; //Agregar hook useState
import { Button } from 'react-native-web';



  
//2.- Zona de la funcion principal
export default function App() {
  const [contador, setContador] = useState(0); //Estado inicial del contador
  //contador = la variable, setContador = funcion para actualizar el estado, useState(0) = valor inicial del estado
  return (


    <View style={styles.container}>
      <Text>Contador {contador}</Text> {/* Para mostrar la variable del estado poner en llaves*/}
      <Button title = "Agregar" onPress={()=>setContador(contador+1)}/> {/* onPress es un evento, se usa una funcion flecha para llamar a la funcion que actualiza el estado */}
      <Button title = "Disminuir" onPress={()=>setContador(contador-1)}/> {/* Llamar a la funcion que actualiza el estado, en este caso se le resta 1 al contador */}
      <Button title = "Reiniciar" onPress={()=>setContador(contador===0)}/> {/* Llamar a la funcion que actualiza el estado, en este caso se reinicia el contador a 0 */}

      <StatusBar style="auto" />
    </View>
  );
}

//3.- Zona de los estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
