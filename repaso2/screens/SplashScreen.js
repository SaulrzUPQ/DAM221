import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
export default function SlapScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.icono}>{"\uD83D\uDCDA"}</Text>
            <Text style={styles.Titulo}>Registro de libros leidos</Text>
            <Text style={styles.Subtitulo}>Bienvenido</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    icono: {
        fontSize: 70,
        marginBottom: 15,
    },
    Titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        color: "#17365D",
        textAlign: 'center',
    },
    Subtitulo: {
        fontSize: 16,
        color: '#555555',
        marginTop: 20,
        textAlign: 'center',
    },
});