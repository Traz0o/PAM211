import { Text, View } from 'react-native'
import MenuScreen from './MenuScreen'
import { Button } from 'react-native-web'
import { useState } from 'react'


export default function BotoneScreen (){
    const [screen, setScreen] = useState('Menu');
    switch(screen) {
        case 'menu':
            return <MenuScreen />;
        case 'botones':
        default:
           return (
      <View>
        <Text>Proximamente...</Text>
        <Button title="Regresar al menu" onPress={() => setScreen('menu')}/>
      </View>

     
    )
    }
    
}
