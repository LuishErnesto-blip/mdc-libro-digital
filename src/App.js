import React from "react";
import Flipbook from "./Flipbook";
import Trivia from "./components/trivia";  // Asegúrate de que el nombre coincide

function App() {
  return (
<div className="app-main-layout"> {/* Esta línea reemplaza la línea 7 */}
      <header className="app-header"> {/* Nueva línea para el encabezado */}
        <h1>Memorias Deportivas Culturales ⭐⭐</h1> {/* Tu título, ahora dentro del header. Elimina el inline style */}
      </header> {/* Cierre del header */}
      <main className="app-content-wrapper"> {/* Nuevo contenedor para el contenido */}
        <Flipbook />
        <Trivia />
      </main> {/* Cierre de main */}
    </div>  
    );
}

export default App;
