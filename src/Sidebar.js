import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Contenido</h2>
      <ul>
        <li><a href="#prologo">Prólogo</a></li>
        <li><a href="#cap1">Capítulo 1</a></li>
        <li><a href="#cap2">Capítulo 2</a></li>
        <li><a href="#galeria">Galería</a></li>
      </ul>
    </div>
  );
}

export default Sidebar;
