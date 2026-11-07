import React, { useEffect, useState } from "react";
import SplashScreen from "./screens/SplashScreen";
import HomeScreen from "./screens/HomeScreen";
export default function App() {
 const [mostrarSplash, setMostrarSplash] = useState(true);
 useEffect(() => {
 const temporizador = setTimeout(() => {
 setMostrarSplash(false);
 }, 2000);
 return () => clearTimeout(temporizador);
 }, []);
 if (mostrarSplash) {
 return <SplashScreen />;
 }
  return <HomeScreen />;
}