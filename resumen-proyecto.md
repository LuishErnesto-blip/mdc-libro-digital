# Resumen del Proyecto Web: Flipbook "Memorias Deportivas Culturales"

## Objetivo General

Crear una aplicación web interactiva y profesional en React para presentar y vender el libro "Memorias Deportivas Culturales" en formato digital tipo flipbook, con diseño atractivo, moderno, minimalista y adaptable a dispositivos móviles.

---

## Tecnologías y Herramientas Utilizadas

* ReactJS (create-react-app)
* HTMLFlipBook (react-pageflip)
* CSS personalizado (Flipbook.css)
* Fuentes de Google Fonts: Roboto, Lora y Playfair Display
* Visual Studio Code
* Módulos de desarrollo: postcss-loader, css-loader, ESLint

---

## Estructura de Archivos Importantes

```
/public
└ portada.png           -> Imagen de portada del libro

/src
├ App.js
├ Flipbook.js           -> Componente principal del flipbook
├ Flipbook.css          -> Estilos principales de diseño visual
├ index.css
└ index.js
```

---

## Funcionalidades Implementadas

### 1. Visualización de Páginas del Libro

* Estructura semántica del contenido por páginas.
* Navegación mediante botones: ⬅⃣ Anterior | 🏠 Inicio | ➡️ Siguiente.
* Numeración dinámica de páginas tipo "2 – 3".

### 2. Buscador Interno

* Campo de búsqueda por texto, palabra clave o capítulo.
* Al encontrar coincidencia, se redirige automáticamente a la página correspondiente.

### 3. Portada Visual

* Se integró imagen `portada.png` en la primera página.
* Resolución de errores de carga por tipo de archivo y extensión.

### 4. Responsive y Previsualización

* Prueba en navegador con herramienta de desarrollador (modo móvil).
* Visualización local en celular mediante IP LAN: `192.168.x.x:3000`

### 5. Estilos CSS Personalizados

* Colores adaptados a la portada (amarillo, marrón, grises claros).
* Tipografías modernas importadas desde Google Fonts:

  * **Títulos:** 'Playfair Display'
  * **Cuerpo:** 'Lora'
* Mejoras visuales:

  * Bordes sutiles en las páginas
  * Botones con efecto hover y sombra
  * Fondo general en degradado gris claro
  * Tabla estilizada con encabezados y filas alternadas

### 6. Transiciones y Detalles de UX

* Transición sutil entre páginas: `transition: all 0.4s ease-in-out;`
* Estructura visual ordenada y jerárquica (h1, h2, p, tablas)

### 7. Corrección de Errores

* Se corrigieron errores de sintaxis CSS (“} inesperado”)
* Se evitó la duplicación de estilos `.page`
* Se desactivó la visualización accidental de `@import` como texto
* Se activaron los plugins de ayuda en VSCode:

  * ESLint
  * CSS Lint

---

## Buenas Prácticas Aplicadas

* Programación modular y semántica en React.
* Validación paso a paso de cada avance.
* Trabajo sobre una paleta visual coherente con la portada.
* Separación de estilos y componentes.
* Compatibilidad móvil asegurada desde el inicio.

---

## Siguientes Pasos Sugeridos

1. Agregar una **landing page externa** que enlace al flipbook.
2. Integrar un sistema de compra o descarga del ebook.
3. Mejorar accesibilidad (lectura por pantalla, contraste, etiquetas ARIA).
4. Agregar animaciones suaves al cambiar de sección o al cargar el libro.
5. Empaquetar el proyecto para despliegue en Netlify o Vercel.

---

## Autor del Libro

**Dr. Freddy E. Bracero V.**
*Memorias Deportivas Culturales: Integración del Deporte, la Cultura y la Espiritualidad*

---

## Colaboración y Mentoría en el Proyecto

Asistencia técnica paso a paso, validando código, resolviendo errores de sintaxis y diseño, y ayudando a desarrollar una interfaz profesional con altos estándares de experiencia de usuario y diseño visual.


Trabajo con Co-Pilot (04 junio 2025)

1️⃣ CREACIÓN DE CUENTAS Y CONFIGURACIÓN INICIAL
✅ GitHub → Lo usamos para gestionar el código fuente del libro digital y la landing. 🔹 Creamos el repositorio mdc-libro-digital para la app del libro digital. 🔹 Creamos mdc-landing para la página promocional. 🔹 Subimos los archivos iniciales a GitHub con:

bash
git init
git add .
git commit -m "Inicializando el proyecto"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/mdc-libro-digital.git
git push origin main
📌 Importancia: GitHub nos permite tener control de versiones y conectar el código con Vercel para el despliegue automático.

✅ Vercel → Lo usamos para alojar y desplegar ambos proyectos. 🔹 Creamos una cuenta y conectamos GitHub con Vercel. 🔹 Subimos mdc-libro-digital y mdc-landing. 📌 Importancia: Vercel nos permite desplegar cambios en tiempo real sin configurar servidores manualmente.

2️⃣ DESARROLLO DE LA APP "LIBRO DIGITAL" (mdc-libro-digital)
✅ Estructura del proyecto 🔹 Organizamos los archivos en public/ para que fueran accesibles desde el navegador. 🔹 Archivos clave en public/:

public/
├── index.html  → Página principal del libro digital
├── prologo.html → Prólogo del libro
├── styles.css  → Estilos generales
├── script.js  → Lógica de la app
📌 Importancia: Esto garantizó que prologo.html fuera accesible sin configuraciones extra.

✅ Corrección de errores en Vercel 🔹 Inicialmente, Vercel no encontraba favicon.ico y manifest.json, generando errores de protocolo HTTP2. 🔹 Solucionamos el problema asegurando que las rutas en index.html fueran absolutas:

html
<link rel="icon" href="/favicon.ico">
<link rel="manifest" href="/manifest.json">
📌 Importancia: Sin esta corrección, los archivos no se cargaban correctamente y la app mostraba pantalla blanca.

✅ Navegación y pruebas 🔹 Probamos https://mdc-libro-digital.vercel.app/prologo.html y verificamos que la app cargaba bien. 🔹 Verificamos la funcionalidad en distintos navegadores y limpiamos caché (Ctrl + Shift + R). 📌 Importancia: Esto nos permitió validar que el libro digital estaba listo para conexión con la landing.

3️⃣ CREACIÓN DE LA LANDING PAGE (mdc-landing)
✅ Diseño y estructura 🔹 Incluimos una presentación del libro con imágenes y animaciones. 🔹 Agregamos optimización SEO (meta tags) para mejorar visibilidad en buscadores. 📌 Importancia: La landing debía ser atractiva y funcional para atraer a lectores.

✅ Corrección de enlace al prólogo 🔹 Inicialmente, el botón "Leer el Prólogo" tenía una URL incorrecta (tuapp-librodigital.vercel.app). 🔹 Corregimos el enlace para que apuntara correctamente:

html
<button class="cta" onclick="window.location.href='https://mdc-libro-digital.vercel.app/prologo.html'">Leer el Prólogo</button>
📌 Importancia: Aseguró que los usuarios pudieran acceder al prólogo sin errores.

✅ Corrección de enlace al libro completo 🔹 Inicialmente, "Accede al libro completo" llevaba a un error 404. 🔹 Corregimos la URL:

html
<a href="https://mdc-libro-digital.vercel.app">aquí</a>
📌 Importancia: Evitamos que los usuarios se encontraran con páginas inexistentes.

4️⃣ CREACIÓN DE LA APP DE TRIVIA
✅ Objetivo: Agregar interactividad al proyecto mediante un juego de trivia. 📌 Tecnología usada: HTML + CSS + JavaScript

✅ Estructura del código 🔹 Creamos trivia.html, trivia.js y trivia.css. 🔹 Código base en trivia.html:

html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Trivia Deportiva</title>
    <link rel="stylesheet" href="trivia.css">
</head>
<body>
    <h1>Trivia Deportiva</h1>
    <div id="pregunta"></div>
    <button onclick="siguientePregunta()">Siguiente Pregunta</button>
    <script src="trivia.js"></script>
</body>
</html>
🔹 Lógica en trivia.js:

javascript
const preguntas = [
    { pregunta: "¿Quién ganó el Mundial 2014?", respuesta: "Alemania" },
    { pregunta: "¿Cuántos jugadores tiene un equipo de fútbol?", respuesta: "11" }
];

let indice = 0;

function siguientePregunta() {
    if (indice < preguntas.length) {
        document.getElementById("pregunta").innerText = preguntas[indice].pregunta;
        indice++;
    } else {
        document.getElementById("pregunta").innerText = "¡Fin de la trivia!";
    }
}
📌 Importancia: Esto creó una trivia interactiva para mejorar el engagement en el sitio.

✅ Integración en la landing 🔹 Agregamos un botón que lleva a la trivia desde mdc-landing/index.html:

html
<button class="cta" onclick="window.location.href='https://mdc-libro-digital.vercel.app/trivia.html'">Jugar Trivia</button>
📌 Importancia: La trivia hizo que la página fuera más atractiva e interactiva para los usuarios.

5️⃣ DEPLOY FINAL Y AJUSTES EN VERCEL
✅ Corrección de problemas en producción 🔹 Vercel no permitía redeploy automático, así que creamos un nuevo proyecto desde cero. 🔹 Configuramos "Framework Preset" como "Other" y "Build Output Directory" como public/. 📌 Importancia: Esto eliminó errores acumulados y dejó el despliegue limpio.

✅ Verificación final 🔹 Probamos mdc-libro-digital.vercel.app y mdc-landing.vercel.app. 🔹 Verificamos que todos los botones y enlaces funcionaran bien. 📌 Importancia: Confirmamos que todo quedó bien estructurado y funcional.

📌 RESULTADO FINAL
🚀 Logramos: ✅ Landing funcional con enlaces correctos. ✅ App del libro digital accesible sin errores. ✅ Trivia integrada y disponible para los usuarios. ✅ Despliegue limpio y optimizado en Vercel.