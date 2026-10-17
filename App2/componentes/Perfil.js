import {Text, View, Button} from 'react-native';
import {useState} from 'react';

export const Perfil=({Nombre,Carrera,Materia,Cuatri})=>{

    const [mostrar, setMostrar]= useState(false);
       

    return(
        <View>
            <Text>{Nombre}</Text>
             {/* renderizado condicional */}
            {mostrar && 
            <>  
            <Text>{Carrera}</Text>
            <Text>{Materia}</Text>
            <Text>{Cuatri}</Text>
            </>
            }
            <Button title="Ver perfil" onPress={() => setMostrar(!mostrar)} />
        </View>
    );
}