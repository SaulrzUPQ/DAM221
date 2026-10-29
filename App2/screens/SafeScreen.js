
/*1.Zona de importaciones*/ 

import { StyleSheet, View, Text , ScrollView, SafeAreaView} from 'react-native';

/*2.Zona de Main o render*/ 
export default function SafeScreen() {
  
    const canciones = [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      '11',
      '12',
      '13',

    ];
 return (
  <SafeAreaView

  style={styles.container}>

    <Text style={styles.titulo}> spotify </Text>
  
  <View
  style={styles.reproductor}>
    <Text style={styles.subtitulo
    }> lista de musica </Text>

    <Text> canciones mas escuchadas </Text>
    
  </View>
  

     <Text style={styles.texto}> canciones disponibles </Text>
     <ScrollView style={styles.lista}
     contentContainerStyle={styles.contenidolista}
    showVerticalScrollIndicator={true}

    >
      {canciones.map((item, index) => (
          <View key={index} style={styles.tarjeta}> 
          <Text style={styles.textolista}>{item}</Text>


          </View>
      ))  }


      </ScrollView>

      </SafeAreaView>


  );
}

/*3.Zona de estilos y posicionamiento*/ 
const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: '#d3d3d38d',
  padding: 20,   
},
titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
},
reproductor: {
    backgroundColor: 'gray',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
},
subtitulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
},
texto: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20,
    textAlign: 'center',
},
lista: {
    flex: 1,
},  

tarjeta: {
    backgroundColor: 'gray',
    padding: 20,
    marginBottom: 10,
    borderRadius: 16,
},

textolista: {
    fontSize: 18,
    textAlign: 'center',
},



});