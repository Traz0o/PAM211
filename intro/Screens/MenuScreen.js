import { Text, StyleSheet, View } from 'react-native'
import React, { Component, use } from 'react'
import BotoneScreen from './BotoneScreen'
import ContadorScreen from './ContadorScreen'
import ImageScreen from './ImageScreen'
import RepasoScreen from './RepasoScreen'
import ScrollviewScreen from './ScrollviewScreen'
import { Button } from 'react-native-web'
import { useState } from 'react'
import Inputs from './Inputs'

export default function MenuScreen() {
    const [screen, setScreen] = useState('menu');
    switch(screen) {
        case 'contador':
            return <ContadorScreen />;
        case 'botones':
            return <BotoneScreen/>;
        case 'inputs':
          return <Inputs/>;
        case 'image':
           return <ImageScreen/>;
        case 'repaso':
          return <RepasoScreen/>;
        case 'scroll':
          return <ScrollviewScreen/>
        case 'menu':
            default:
                return (

      <View style={styles.container}>
        <Text style={styles.texto}>Menu de practicas</Text>
        <View style = {styles.botones}>
        <Button title = "Pract:Contador" onPress={() => setScreen('contador')}/>
        <Button title = 'Pract:Botones' onPress={() => setScreen('botones')}/>
        <Button title = 'Pract:Inputs' onPress={() => setScreen('inputs')}/>
        <Button title = 'Pract:image' onPress={() => setScreen('image')}/>
        <Button title = 'Pract:Scroll' onPress={() => setScreen('scroll')}/>
        <Button title = 'Pract:activity' onPress={() => setScreen('botones')}/>
        <Button title = 'Pract:Flatlist' onPress={() => setScreen('botones')}/>
        <Button title = 'Pract:Modal' onPress={() => setScreen('botones')}/>
        <Button title = 'Pract:Repaso' onPress={() => setScreen('repaso')}/>
        </View>
        
      </View>
    )



    }

}

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
  botones:{
    marginTop:20,
    flexDirection:'column',
    justifyContent:'space-between',
    gap:20,
  },


})