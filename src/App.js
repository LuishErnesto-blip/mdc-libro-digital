import React from "react";
import Flipbook from "./Flipbook";
import Trivia from "./components/trivia";  // Asegúrate de que el nombre coincide

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center", padding: "1rem" }}>
        Memorias Deportivas Culturales ⭐⭐
      </h1>
      <Flipbook />
      <Trivia />  
    </div>
  );
}

export default App;
