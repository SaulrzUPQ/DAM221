import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Switch,
  TouchableOpacity,
  Alert,
  SafeAreaView,
  ScrollView,
  Platform
} from 'react-native';

export default function App() {
  // Estados para los campos de texto
  const [nombre, setNombre] = useState('');
  const [carrera, setCarrera] = useState('');
  const [semestre, setSemestre] = useState('');

  // Estados para las opciones (Sí / No) con Switch
  const [asisteTaller, setAsisteTaller] = useState(false);
  const [requiereConstancia, setRequiereConstancia] = useState(false);
  const [participaDeportes, setParticipaDeportes] = useState(false);

  const mostrarMensaje = (titulo, mensaje) => {
    if (Platform.OS === 'web') {
      alert(`${titulo}\n\n${mensaje}`);
    } else {
      Alert.alert(titulo, mensaje);
    }
  };

  const handleRegistro = () => {
    // 1. Validar que no haya campos vacíos
    if (!nombre.trim() || !carrera.trim() || !semestre.trim()) {
      mostrarMensaje('Campos incompletos', 'Debes llenar todos los campos.');
      return;
    }

    // 2. Validar que semestre sea numérico
    if (isNaN(semestre.trim()) || !/^\d+$/.test(semestre.trim())) {
      mostrarMensaje('Error', 'El semestre debe ser un número.');
      return;
    }

    // 3. Si las validaciones pasan, mostrar los datos ingresados
    const mensajeExito = 
      `Nombre: ${nombre.trim()}\n` +
      `Carrera: ${carrera.trim()}\n` +
      `Semestre: ${semestre.trim()}\n\n` +
      `Taller: ${asisteTaller ? 'Sí' : 'No'}\n` +
      `Constancia: ${requiereConstancia ? 'Sí' : 'No'}\n` +
      `Deportes: ${participaDeportes ? 'Sí' : 'No'}`;

    mostrarMensaje('Registro enviado', mensajeExito);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.titulo}>Registro de Evento Universitario</Text>

        {/* Inputs de texto */}
        <TextInput
          style={styles.input}
          placeholder="Nombre completo"
          value={nombre}
          onChangeText={setNombre}
        />

        <TextInput
          style={styles.input}
          placeholder="Carrera"
          value={carrera}
          onChangeText={setCarrera}
        />

        <TextInput
          style={styles.input}
          placeholder="Semestre"
          value={semestre}
          onChangeText={setSemestre}
          keyboardType="numeric"
        />

        {/* Sección de Opciones */}
        <Text style={styles.subtitulo}>Opciones</Text>

        <View style={styles.switchRow}>
          <Text style={styles.switchLabel}>¿Asistirá al taller?</Text>
          <Switch
            value={asisteTaller}
            onValueChange={setAsisteTaller}
            trackColor={{ false: '#d1d5db', true: '#22c55e' }}
            thumbColor="#ffffff"
          />
        </View>

        <View style={styles.switchRow}>
          <Text style={styles.switchLabel}>¿Requiere constancia?</Text>
          <Switch
            value={requiereConstancia}
            onValueChange={setRequiereConstancia}
            trackColor={{ false: '#d1d5db', true: '#22c55e' }}
            thumbColor="#ffffff"
          />
        </View>

        <View style={styles.switchRow}>
          <Text style={styles.switchLabel}>¿Participará en deportes?</Text>
          <Switch
            value={participaDeportes}
            onValueChange={setParticipaDeportes}
            trackColor={{ false: '#d1d5db', true: '#22c55e' }}
            thumbColor="#ffffff"
          />
        </View>

        {/* Botón de Enviar */}
        <TouchableOpacity style={styles.boton} onPress={handleRegistro}>
          <Text style={styles.textoBoton}>Enviar Registro</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  container: {
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 20,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0f172a',
    marginBottom: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: '#e2e8f0',
    backgroundColor: '#f8fafc',
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 16,
    color: '#1e293b',
    marginBottom: 16,
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0f172a',
    marginTop: 12,
    marginBottom: 16,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  switchLabel: {
    fontSize: 15,
    color: '#334155',
  },
  boton: {
    backgroundColor: '#007aff',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 20,
  },
  textoBoton: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});