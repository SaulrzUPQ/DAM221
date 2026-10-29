
/*1.Zona de importaciones*/ 
import {useState} from 'react';
import { StyleSheet,View,Text, Pressable, Switch } from 'react-native';

/*2.Zona de Main o render*/ 
export default function PresScreen() {
  const [mensaje, setMensaje] = useState('Precionar el boton ');
  const [activado, setActivado] = useState(false);

  return (
    <View style={styles.container}>
       <Text style={styles.titulo}> Pressable </Text>

        <Text> {mensaje} </Text>

        <Pressable
        onPress={() => setMensaje('Boton presionado')}
        onPressIn={() => console.log('Inicio de pulsacion')}
        onPressOut={() => console.log('Fin de pulsacion')}
        onLongPress={() => console.log('Pulsacion larga')}
        disabled={false}
        style={({ pressed }) => [
          styles.boton,
           pressed && styles.botonPresionado

        ]}
        >

          <Text style={styles.textoBoton}> Presioname </Text>
        </Pressable>

        <View style={styles.separador} />
        <Text style={styles.titulo}> Switch </Text>
        <Text> Estado: {activado ? 'Activado' : 'Desactivado'} </Text>

        <Switch
        value={activado}
        onValueChange={setActivado}
        disabled={false}
        trackColor={{ false: '#777575', true: '#81b0ff' }}
        thumbColor={activado ? '#f5dd4b' : '#f4f3f4'}
        />



    
    </View>
  );
}

/*3.Zona de estilos y posicionamiento*/ 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f2f2f2',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  boton: {
    backgroundColor: '#319b80',
    padding: 15,
    borderRadius: 10,
    marginTop: 15,
  },
  botonPresionado: {
    backgroundColor: '#1e6655',
  },
  textoBoton: {
    color: 'white',
    fontSize: 16,
  },
  separador: {
    height: 2,
    backgroundColor: '#cccccc',
    width: '90%',
    marginVertical: 35,
  },
});