import {Text, View, StyleSheet, Button} from 'react-native';
import {useState} from 'react';

export const Perfil=({nombre,carrera,materia,cuatri,style})=>{

    const [mostrar, setMostrar]= useState(false);
       

    return(
        <View style={[estilos.card, style]}>
            <Text style={estilos.nombre}>{nombre}</Text>
             {/* renderizado condicional */}
            {mostrar && 
            <>  
            <Text style={estilos.carrera}>{carrera}</Text>
            <Text style={estilos.otrotexto}>{materia}</Text>
            <Text style={estilos.otrotexto}>{cuatri}</Text>
            </>
            }
            <Button title="Ver perfil" onPress={() => setMostrar(!mostrar)} />
        </View>
    );
}
const estilos = StyleSheet.create({ 
    nombre: {
        fontSize: 24,
        fontWeight: '600',
        textTransform: 'uppercase',
    },
    carrera: {
        fontSize: 20,
        color: 'black',
        fontFamily: 'Arial',
    },
    otrotexto: {
        fontSize: 18,
        color: 'blue',
        fontFamily: 'Courier',
        fontStyle: 'italic',
    },
    card:{
        borderWidth:3,
        borderRadius:10,
        padding:15,
        margin:10,
    },
});
