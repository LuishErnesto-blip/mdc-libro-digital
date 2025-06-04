import React, { useState, useEffect } from "react";

const niveles = ["Amateur", "Pro", "Experto", "Master"];  
const preguntas = {
  Amateur: [
    { pregunta: "¿Cuál es la duración estándar de un partido de fútbol?", opciones: ["90 minutos", "80 minutos"], respuestaCorrecta: "90 minutos" },
    { pregunta: "¿En qué año se celebró el primer Mundial de Fútbol?", opciones: ["1928", "1930", "1932", "1934"], respuestaCorrecta: "1930" },
    { pregunta: "¿Cuántos jugadores conforman un equipo de voleibol en la cancha?", opciones: ["5 jugadores", "6 jugadores", "7 jugadores", "8 jugadores"], respuestaCorrecta: "6 jugadores" },
    { pregunta: "¿Qué país ganó la Copa Mundial de Fútbol en 2018?", opciones: ["Brasil", "Alemania", "Francia", "Argentina"], respuestaCorrecta: "Francia" },
    { pregunta: "¿Cuál es la distancia oficial de una maratón?", opciones: ["42.195 km", "40 km", "45 km", "50 km"], respuestaCorrecta: "42.195 km" },
  ],
  Pro: [
    { pregunta: "¿Qué deporte utiliza el término 'birdie'?", opciones: ["Golf", "Bádminton", "Tenis", "Críquet"], respuestaCorrecta: "Golf" },
    { pregunta: "¿En qué año se celebraron los primeros Juegos Olímpicos modernos?", opciones: ["1896", "1900", "1888", "1912"], respuestaCorrecta: "1896" },
  ],
};

const Trivia = () => {
  const [nivelActual, setNivelActual] = useState(niveles[0]);  
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [respuestaSeleccionada, setRespuestaSeleccionada] = useState(null);
  const [mensaje, setMensaje] = useState("");
  const [estrellas, setEstrellas] = useState(0);
  const [mostrarInstrucciones, setMostrarInstrucciones] = useState(true);  

  useEffect(() => {
    const estrellasGuardadas = localStorage.getItem("estrellas");
    if (estrellasGuardadas) {
      setEstrellas(parseInt(estrellasGuardadas));
    }
  }, []);

  if (mostrarInstrucciones) {
    return (
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h2>Bienvenido a la Trivia Deportiva de Memorias Deportivas Culturales📚⚽</h2>
        <p>📌 Responde correctamente para ganar estrellas ⭐</p>
        <p>💪 Desbloquea los niveles: Amateur, Pro, Experto y Master</p>
        <p>🎉 Completa los desafíos y conviértete en un experto del deporte</p>
        <button onClick={() => setMostrarInstrucciones(false)} style={{ padding: "10px", fontSize: "16px" }}>
          ¡Comenzar Trivia!
        </button>
      </div>
    );
  }

  const manejarRespuesta = (opcion) => {
    setRespuestaSeleccionada(opcion);
    if (opcion === preguntas[nivelActual][preguntaActual].respuestaCorrecta) {
      setMensaje("¡Correcto! 🎉");
      if (preguntaActual + 1 === preguntas[nivelActual].length) {
        setTimeout(avanzarNivel, 2000);  
      } else {
        setPreguntaActual(preguntaActual + 1);
      }
    } else {
      setMensaje("Incorrecto. ❌");
    }
  };

  const avanzarNivel = () => {
    const siguienteNivelIndex = niveles.indexOf(nivelActual) + 1;
    if (siguienteNivelIndex < niveles.length) {
      setMensaje(`🎉 ¡Felicitaciones! Has completado ${nivelActual}. Avanzando al siguiente nivel...`);
      setTimeout(() => {  
        setNivelActual(niveles[siguienteNivelIndex]);
        setPreguntaActual(0);
        setEstrellas(estrellas + 1);
        localStorage.setItem("estrellas", estrellas + 1);
        setMensaje("");
      }, 2000);
    } else {
      setMensaje("🎉 ¡Has completado todos los niveles! Eres un verdadero experto en deportes.");
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Trivia Deportiva 📚⚽ - {nivelActual}</h2>
      <p>⭐ Estrellas obtenidas: {estrellas}</p>
      <p>{preguntas[nivelActual][preguntaActual].pregunta}</p>
      {preguntas[nivelActual][preguntaActual].opciones.map((opcion, index) => (
        <button key={index} onClick={() => manejarRespuesta(opcion)} style={{ margin: "5px", padding: "10px" }}>
          {opcion}
        </button>
      ))}
      <p>{mensaje}</p>
    </div>
  );
};

export default Trivia;
