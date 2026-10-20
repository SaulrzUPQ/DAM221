
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
      
    {/*   <Text>Hola mundo react native!</Text>
      <Image source={require('./assets/wave.png')}  />

      <Text>------------------------------------</Text>
    
      <Saludo/>

      <Text>------------------------------------</Text>
    
      <Saludo2/>

      
      <text>------------------------------------</text>
       */}
      <Perfil style={styles.card1} nombre= "Lulu" carrera= "TIID 221"  materia= "Mvil" cuatri= "4"/>

      <Perfil style={styles.card2} nombre= "Renata" carrera= "TIID 221"  materia= "Mvil" cuatri= "4"/>

      <Perfil style={styles.card3} nombre= "Luisa" carrera= "TIID 221"  materia= "Mvil" cuatri= "4"/>



      

      <StatusBar style="auto" />
    </View>
  );
}

/*3.Zona de estilos y posicionamiento*/ 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D3D3D3',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
card1:{backgroundColor:'green'},
 card2:{backgroundColor:'orange'},
 card3:{backgroundColor:'yellow'}


});
