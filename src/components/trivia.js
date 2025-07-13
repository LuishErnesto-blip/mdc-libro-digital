import React, { useState, useEffect } from "react";
import "./trivia.css"; // Asegúrate de que esta línea esté presente

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
  Experto: [
    // Preguntas para el nivel Experto (puedes añadir más aquí)
    { pregunta: "¿Qué país ha ganado más Copas Mundiales de la FIFA?", opciones: ["Alemania", "Brasil", "Italia", "Argentina"], respuestaCorrecta: "Brasil" },
    { pregunta: "¿Quién es el máximo goleador en la historia de los Mundiales de Fútbol?", opciones: ["Pelé", "Miroslav Klose", "Ronaldo Nazário", "Gerd Müller"], respuestaCorrecta: "Miroslav Klose" },
  ],
  Master: [
    // Preguntas para el nivel Master (puedes añadir más aquí)
    { pregunta: "¿Cuál es el único jugador en la historia que ha ganado 3 Copas Mundiales de la FIFA?", opciones: ["Diego Maradona", "Pelé", "Franz Beckenbauer", "Cafú"], respuestaCorrecta: "Pelé" },
    { pregunta: "¿En qué deporte se utiliza el término 'ace'?", opciones: ["Tenis", "Voleibol", "Bádminton", "Todos los anteriores"], respuestaCorrecta: "Todos los anteriores" },
  ],
};

const Trivia = () => {
  const [nivelActual, setNivelActual] = useState(niveles[0]);  
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [respuestaSeleccionada, setRespuestaSeleccionada] = useState(null); // Para aplicar estilos al botón seleccionado
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
      <div className="trivia-container trivia-instructions"> {/* Clases CSS para el contenedor de instrucciones */}
        <h2>Bienvenido a la Trivia Deportiva de Memorias Deportivas Culturales📚⚽</h2>
        <p>📌 Responde correctamente para ganar estrellas ⭐</p>
        <p>💪 Desbloquea los niveles: Amateur, Pro, Experto y Master</p>
        <p>🎉 Completa los desafíos y conviértete en un experto del deporte</p>
        <button onClick={() => setMostrarInstrucciones(false)} className="start-trivia-button"> {/* Clase CSS para el botón */}
          ¡Comenzar Trivia!
        </button>
      </div>
    );
  }

  const manejarRespuesta = (opcion) => {
    setRespuestaSeleccionada(opcion); // Guarda la opción seleccionada para aplicar el estilo
    if (opcion === preguntas[nivelActual][preguntaActual].respuestaCorrecta) {
      setMensaje("¡Correcto! 🎉");
      // Espera un momento para que el usuario vea la respuesta antes de avanzar
      setTimeout(() => {
        if (preguntaActual + 1 === preguntas[nivelActual].length) {
          avanzarNivel();
        } else {
          setPreguntaActual(preguntaActual + 1);
        }
        setMensaje(""); // Limpia el mensaje
        setRespuestaSeleccionada(null); // Resetea la selección para la siguiente pregunta
      }, 1500); // Muestra el mensaje y el color por 1.5 segundos
    } else {
      setMensaje("Incorrecto. ❌");
      // Espera un momento para que el usuario vea la respuesta antes de resetear
      setTimeout(() => {
        setMensaje(""); // Limpia el mensaje
        setRespuestaSeleccionada(null); // Resetea la selección
      }, 1500);
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
    <div className="trivia-container"> {/* Contenedor principal de la trivia */}
      <div className="trivia-header"> {/* Contenedor para el título y estrellas */}
        <h2>Trivia Deportiva 📚⚽ - {nivelActual}</h2>
        <p>⭐ Estrellas obtenidas: {estrellas}</p>
      </div>
      <p className="trivia-question">{preguntas[nivelActual][preguntaActual].pregunta}</p> {/* Clase para la pregunta */}
      <div className="trivia-options"> {/* Contenedor para las opciones */}
        {preguntas[nivelActual][preguntaActual].opciones.map((opcion, index) => (
          <button
            key={index}
            onClick={() => manejarRespuesta(opcion)}
            className={`option-button ${
              respuestaSeleccionada === opcion
                ? (opcion === preguntas[nivelActual][preguntaActual].respuestaCorrecta ? 'selected-correct' : 'selected-incorrect')
                : ''
            }`}
          >
            {opcion}
          </button>
        ))}
      </div>
      <p className={`trivia-message ${mensaje.includes('Correcto') ? 'correct' : mensaje.includes('Incorrecto') ? 'incorrect' : ''}`}> {/* Clase para el mensaje */}
        {mensaje}
      </p>
    </div>
  );
};

export default Trivia;
