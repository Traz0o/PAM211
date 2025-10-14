//1.- Zona de los Imports
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react'; //Agregar hook useState
import { Button } from 'react-native-web';



  
//2.- Zona de la funcion principal
export default function ContadorScreen() {
  const [contador, setContador] = useState(0); //Estado inicial del contador
  //contador = la variable, setContador = funcion para actualizar el estado, useState(0) = valor inicial del estado
  const [screen, setScreen] = useState('Menu');
  switch(screen) {
    case 'menu':
        return <MenuScreen />;
    case 'contador':
    default:
  return (


    <View style={styles.container}>
      <Text style = {styles.texto}>Contador:</Text> {/* Para mostrar la variable del estado poner en llaves*/}
      <Text style = {styles.texto2}>{contador}</Text> {/* Para mostrar la variable del estado poner en llaves*/}
      <View style = {styles.botonesContainers}>
      <Button color='green' title = "Agregar" onPress={()=>setContador(contador+1)}/> {/* onPress es un evento, se usa una funcion flecha para llamar a la funcion que actualiza el estado */}
      <Button color='red' title = "Disminuir" onPress={()=>setContador(contador-1)}/> {/* Llamar a la funcion que actualiza el estado, en este caso se le resta 1 al contador */}
      <Button color='gold' title = "Reiniciar" onPress={()=>setContador(contador==0)}/> {/* Llamar a la funcion que actualiza el estado, en este caso se reinicia el contador a 0 */}
        </View>
        <View style = {styles.botonMenu}>
      <Button title = "Regresar al menu" onPress={()=>setScreen('menu')}/> {/* Llamar a la funcion que actualiza el estado, en este caso se reinicia el contador a 0 */}
        </View>

      <StatusBar style="auto" />
    </View>
  );
}

}

//3.- Zona de los estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    color:'#ffffffff',
    fontSize:40,
    fontFamily:'Times New Roman',
    fontWeight: 'bold',
    fontStyle: 'italic',
    textDecorationLine: 'underline',
  },
  texto2:{
    color:'#f31427ff',
    fontSize:40,
    fontFamily:'Courier',
    fontWeight: '900',
    fontStyle: 'italic',
    textDecorationLine: 'underline',
  },
  botonesContainers:{
    marginTop:20,
    flexDirection:'row',
    justifyContent:'space-between',
    gap:20,
  },
  botonMenu:{
    marginTop:20,
    padding:10,
    borderRadius:5,
  }

});
