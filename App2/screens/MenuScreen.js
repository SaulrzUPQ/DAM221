
/*1.Zona de importaciones*/ 

import { StyleSheet,View, Text , Button} from 'react-native';
import { useState } from 'react';
import TarjetaScreen from './TarjetaScreen.js';
import SafeScreen from './SafeScreen.js';
import PresScreen from './PresScreen.js';
import TextScreen from './TextScreen.js';
import FlatScreen from './FlatScreen.js';
import ImageScreen from './ImageScreen.js';
import ModalScreen from './ModalScreen.js';
import ActivityScreen from './ActivityScreen.js';

/*2.Zona de Main o render*/ 
export default function MenuScreen() {
  const [Screen, setScreen]  = useState('menu');
    switch(Screen){
      case 'tarjetas':
        return <TarjetaScreen />;
      case 'safe':
        return <SafeScreen />;
      case 'pressable':
        return <PresScreen />;
      case 'text':
        return <TextScreen />;
      case 'flat':
        return <FlatScreen />;
      case 'image':
        return <ImageScreen />;
      case 'modal':
        return <ModalScreen />;
      case 'activity':
        return <ActivityScreen />;
      case 'menu':
            default:  
    
        return(
            <View style={styles.container}>
                <Text>Menu de Practicas</Text>
                <Button title = "Pract:Tarjetas" onPress={() => setScreen('tarjetas')} />
                <Button title = "Pract:SafeArea" onPress={() => setScreen('safe')} />
                <Button title = "Pract:Pressable"onPress={() => setScreen('pressable')} />
                <Button title = "Pract:Text" onPress={() => setScreen('text')} />
                <Button title = "Pract:FlatList" onPress={() => setScreen('flat')} />
            </View>
        );
} //switch
} //funcion


/*3.Zona de estilos y posicionamiento*/ 
const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: '#D3D3D3',
  flexDirection: 'column',
  justifyContent: 'space-evenly',  
  alignItems: 'center',          

  }
});
