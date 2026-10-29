
/*1.Zona de importaciones*/ 

import { StyleSheet,View} from 'react-native';
import MenuScreen from './screens/MenuScreen.js';


/*2.Zona de Main o render*/ 
export default function App() {
  return (
    <View style={styles.container}>

    <MenuScreen/>  
    
    </View>
  );
}

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
