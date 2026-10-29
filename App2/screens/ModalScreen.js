/*1.Zona de importaciones*/ 

import { StyleSheet,View,Text} from 'react-native';

/*2.Zona de Main o render*/ 
export default function PresScreen() {
  return (
    <View style={styles.container}>
       <Text> Practica 10 </Text>
      <Text>Daniela Ramirez Mercado 

 </Text>
    
    </View>
  );
}

/*3.Zona de estilos y posicionamiento*/ 
const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: '#D3D3D3',
  flexDirection: 'row',
  justifyContent: 'space-evenly',  
  alignItems: 'center',          


}
});