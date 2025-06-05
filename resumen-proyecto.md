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

📌 1️⃣ CREACIÓN DE CUENTAS Y CONFIGURACIÓN INICIAL
✅ GitHub: 🔹 Creamos una cuenta para gestionar el código de la app "Libro Digital" (mdc-libro-digital). 🔹 Subimos el repositorio inicial a GitHub para tener control de versiones. 📌 ¿Por qué es importante? Nos permite guardar cambios, compartir código y desplegarlo en Vercel fácilmente.

✅ Vercel: 🔹 Creamos una cuenta en Vercel para hacer el despliegue de la app del libro y la landing page. 🔹 Conectamos Vercel con GitHub para automatizar la publicación de cambios. 📌 ¿Por qué es importante? Vercel permite alojar proyectos web y actualizarlos con cada cambio en GitHub.

📌 2️⃣ PROCESO DE MEJORAS EN LA APP "LIBRO DIGITAL" (mdc-libro-digital)
✅ Estructura de archivos: 🔹 Organizamos los archivos dentro de public/ para que prologo.html pudiera ser accesible. 🔹 Configuramos correctamente index.html y los enlaces internos.

✅ Corrección de errores en Vercel: 🔹 Verificamos "Output Directory" en Vercel, asegurándonos de que sirviera los archivos desde public/. 🔹 Arreglamos errores de configuración que impedían cargar el prólogo correctamente.

✅ Pruebas y ajustes: 🔹 Probamos la URL manualmente (https://mdc-libro-digital.vercel.app/prologo.html) para asegurarnos de que funcionaba. 📌 ¿Por qué es importante? Permitió que los usuarios pudieran acceder a prologo.html correctamente.

📌 3️⃣ CREACIÓN DE LA LANDING PAGE (mdc-landing)
✅ Diseño y estructura: 🔹 Creaste una página atractiva con secciones clave: presentación del libro, testimonios y botones de acción. 🔹 Incluiste imágenes y optimización SEO (meta tags para descripción, autor y palabras clave).

✅ Enlace al prólogo: 🔹 Inicialmente, el botón "Leer el Prólogo" tenía una URL incorrecta (tuapp-librodigital.vercel.app). 🔹 Corregimos la URL para que apuntara a https://mdc-libro-digital.vercel.app/prologo.html.

✅ Pruebas y correcciones: 🔹 Verificamos cada botón y enlace para asegurarnos de que llevaban a la sección correcta. 📌 ¿Por qué es importante? La landing debía ofrecer una experiencia fluida, permitiendo acceso fácil al contenido del libro.

📌 4️⃣ CONEXIÓN ENTRE APP DEL LIBRO Y LANDING PAGE
✅ Repositorio GitHub: 🔹 Separamos mdc-libro-digital y mdc-landing en dos repositorios para un mejor control. 📌 ¿Por qué es importante? Separar los repositorios evita conflictos en la gestión de cambios.

✅ Deploy en Vercel: 🔹 Cada proyecto (mdc-libro-digital y mdc-landing) se desplegó por separado en Vercel. 🔹 Aseguramos que ambos tenían la configuración correcta (public/ como "Output Directory"). 📌 ¿Por qué es importante? Esto permitió que la landing cargara correctamente la app del libro.

✅ Corrección final de enlaces: 🔹 El enlace "Accede al libro completo" estaba mal y llevaba a un error 404. 🔹 Lo corregimos para que apuntara a https://mdc-libro-digital.vercel.app. 📌 ¿Por qué es importante? Así los usuarios pueden acceder al contenido completo del libro sin errores.

📌 5️⃣ PROBLEMAS EN VERCEL Y SOLUCIÓN FINAL
✅ Problemas: 🔹 Vercel no permitía hacer "Redeploy" en producción. 🔹 Errores de ERR_HTTP2_PROTOCOL_ERROR afectaban favicon.ico y manifest.json.

✅ Soluciones: 🔹 Creamos un nuevo despliegue manual en Vercel (New Project). 🔹 Configuramos "Framework Preset" como "Other" para HTML puro. 🔹 Establecimos "Build Output Directory" como public/. 📌 ¿Por qué es importante? Esto garantizó un despliegue limpio y sin errores.

✅ Resultado final: 🔹 La landing (mdc-landing) y la app del libro (mdc-libro-digital) ahora funcionan perfectamente. 🔹 Los enlaces están corregidos y conectados correctamente.

📌 ¿QUÉ LOGRAMOS EN TOTAL?
✅ Creación de cuentas en GitHub y Vercel. ✅ Desarrollo y mejora de la app "Libro Digital". ✅ Creación y optimización de la landing page. ✅ Corrección de errores de despliegue y conexión entre ambos proyectos. ✅ Un despliegue exitoso con navegación fluida y sin errores.

🚀 Luis, esto fue un trabajo increíble! Ahora tienes una infraestructura web sólida para seguir optimizando y mejorando. 🎉📖💪

📌 Si quieres seguir modificando o mejorar más funciones, dime y seguimos avanzando juntos! 🔥 ¡Vamos por ello! 🎯