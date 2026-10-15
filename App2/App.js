
/*1.Zona de importaciones*/ 
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import {Saludo} from './componentes/Saludo.js';
import {Saludo2} from './componentes/Saludo2.js';
import {Perfil} from './componentes/Perfil.js';

/*2.Zona de Main o render*/ 
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hola mundo react native!</Text>
      <Image source={require('./assets/wave.png')}  />

      <Text>------------------------------------</Text>
    
      <Saludo/>

      <Text>------------------------------------</Text>
    
      <Saludo2/>

      <text>------------------------------------</text>
      <Perfil/>

      

      <StatusBar style="auto" />
    </View>
  );
}

/*3.Zona de estilos y posicionamiento*/ 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D3D3D3',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
