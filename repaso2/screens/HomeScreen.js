import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  FlatList,
  ImageBackground,
  ActivityIndicator,
  Alert,
  Keyboard,
  StyleSheet,
  StatusBar,
} from "react-native";

export default function HomeScreen() {
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [genero, setGenero] = useState("");
  const [libros, setLibros] = useState([]);
  const [guardando, setGuardando] = useState(false);

  const agregarLibro = () => {
    if (guardando) {
      return;
    }

    if (!titulo.trim() || !autor.trim() || !genero.trim()) {
      Alert.alert(
        "Campos incompletos",
        "Escribe el título, el autor y el género."
      );
      return;
    }

    Keyboard.dismiss();
    setGuardando(true);

    setTimeout(() => {
      const nuevoLibro = {
        id: Date.now().toString(),
        titulo: titulo.trim(),
        autor: autor.trim(),
        genero: genero.trim(),
      };

      setLibros((listaActual) => [nuevoLibro, ...listaActual]);

      setTitulo("");
      setAutor("");
      setGenero("");
      setGuardando(false);

      Alert.alert(
        "Registro correcto",
        "El libro se agregó correctamente."
      );
    }, 4000);
  };

  return (
    <ImageBackground
      source={require("../assets/fondo.jpg")}
      style={styles.fondo}
      resizeMode="cover"
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.contenedor}>
        <Text style={styles.tituloPantalla}>
          Registro de Libros Leídos
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Título del libro"
          placeholderTextColor="#777777"
          value={titulo}
          onChangeText={setTitulo}
          editable={!guardando}
        />

        <TextInput
          style={styles.input}
          placeholder="Autor"
          placeholderTextColor="#777777"
          value={autor}
          onChangeText={setAutor}
          editable={!guardando}
        />

        <TextInput
          style={styles.input}
          placeholder="Género"
          placeholderTextColor="#777777"
          value={genero}
          onChangeText={setGenero}
          editable={!guardando}
        />

        <Pressable
          style={({ pressed }) => [
            styles.boton,
            pressed && styles.botonPresionado,
            guardando && styles.botonDeshabilitado,
          ]}
          onPress={agregarLibro}
          disabled={guardando}
        >
          <Text style={styles.textoBoton}>
            {guardando ? "Guardando..." : "Agregar libro"}
          </Text>
        </Pressable>

        {guardando && (
          <View style={styles.cargando}>
            <ActivityIndicator size="large" color="#ffffff" />
            <Text style={styles.textoCargando}>
              Guardando libro...
            </Text>
          </View>
        )}

        <Text style={styles.total}>
          Total de libros: {libros.length}
        </Text>

        <FlatList
          data={libros}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.lista}
          ListEmptyComponent={
            <Text style={styles.vacio}>
              Aún no has registrado libros.
            </Text>
          }
          renderItem={({ item }) => (
            <View style={styles.tarjetaLibro}>
              <Text style={styles.nombreLibro}>{item.titulo}</Text>
              <Text style={styles.detalle}>Autor: {item.autor}</Text>
              <Text style={styles.detalle}>Género: {item.genero}</Text>
            </View>
          )}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
  },
  contenedor: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 45,
    backgroundColor: "rgba(0, 0, 0, 0.25)",
  },
  tituloPantalla: {
    color: "#ffffff",
    fontSize: 23,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 22,
  },
  input: {
    backgroundColor: "rgba(255, 255, 255, 0.94)",
    borderRadius: 9,
    paddingHorizontal: 13,
    paddingVertical: 12,
    marginBottom: 10,
    color: "#222222",
  },
  boton: {
    backgroundColor: "#1769c2",
    padding: 14,
    borderRadius: 9,
    alignItems: "center",
    marginTop: 2,
  },
  botonPresionado: {
    opacity: 0.75,
  },
  botonDeshabilitado: {
    backgroundColor: "#888888",
  },
  textoBoton: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 16,
  },
  cargando: {
    alignItems: "center",
    marginTop: 14,
  },
  textoCargando: {
    color: "#ffffff",
    marginTop: 7,
    fontWeight: "bold",
  },
  total: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 18,
    marginBottom: 9,
  },
  lista: {
    paddingBottom: 25,
  },
  vacio: {
    color: "#ffffff",
    backgroundColor: "rgba(0, 0, 0, 0.35)",
    padding: 12,
    borderRadius: 8,
  },
  tarjetaLibro: {
    backgroundColor: "rgba(255, 255, 255, 0.94)",
    borderRadius: 9,
    padding: 13,
    marginBottom: 10,
  },
  nombreLibro: {
    color: "#111111",
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 4,
  },
  detalle: {
    color: "#333333",
    fontSize: 13,
  },
});
