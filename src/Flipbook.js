import React, { useRef, useState, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
import "./Flipbook.css";

const Flipbook = () => {
  const book = useRef();
  const [currentPage, setCurrentPage] = useState("1");
  const [searchQuery, setSearchQuery] = useState("");

  const nextPage = () => {
    book.current.pageFlip().flipNext();
  };

  const prevPage = () => {
    book.current.pageFlip().flipPrev();
  };

  const goToStart = () => {
    book.current.pageFlip().flip(1); // Página del prólogo
  };

  const handleSearch = () => {
    const pages = document.querySelectorAll(".page");
    for (let i = 0; i < pages.length; i++) {
      const pageText = pages[i].innerText.toLowerCase();
      if (pageText.includes(searchQuery.toLowerCase())) {
        book.current.pageFlip().flip(i);
        break;
      }
    }
  };

useEffect(() => {
  const interval = setInterval(() => {
    const instance = book.current?.pageFlip?.();
    if (!instance || typeof instance.getCurrentPageIndex !== "function") return;

    const current = instance.getCurrentPageIndex();
    const pageCount = instance.getPageCount();

    if (current === 0) {
      setCurrentPage("1");
    } else {
      const left = current + 1;
      const right = current + 2 <= pageCount ? ` – ${current + 2}` : "";
      setCurrentPage(`${left}${right}`);
    }
  }, 300); // chequea cada 300ms hasta que cargue

  return () => clearInterval(interval);
}, []);

  
return (
    <div className="flipbook-section-wrapper"> {/* Nuevo contenedor principal para el Flipbook y sus controles */}
      <div className="book-and-controls-container"> {/* Contenedor para el libro y sus controles directos */}
        {/* Controles de navegación */}
        <div className="book-controls"> 
          <button onClick={prevPage} className="nav-button prev">⬅️</button>
          <button onClick={goToStart} className="nav-button home">🏠</button>
          <button onClick={nextPage} className="nav-button next">➡️</button>
        </div>

        {/* Contiene el libro y la información de página/búsqueda */}
        <div className="book-main-content"> 
          <div className="book-container">
            <HTMLFlipBook
              ref={book}
              width={window.innerWidth < 768 ? window.innerWidth * 0.9 : 400} // Ajusta el ancho para móvil
              height={window.innerWidth < 768 ? window.innerHeight * 0.7 : 550} // Ajusta la altura para móvil              showCover={true}
              className="flip-book"
              mobileScrollSupport={true}
              clickEventForward={true}
              useMouseEvents={false}
            >
              {/* Todas tus páginas del libro van aquí, exactamente como estaban */}
              <div className="page portada">
                <img
                  src={process.env.PUBLIC_URL + "/portada.png"}
                  alt="Portada del libro"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
              </div>

              <div className="page">
                <h1 className="titulo-libro">Memorias Deportivas Culturales</h1>
                <p><strong>Integración del Deporte, la Cultura y la Espiritualidad.</strong><br />Autor: Dr. Freddy E. Bracero V.</p>
              </div>

              <div className="page">
                <h2>Prólogo</h2>
                <p>MEMORIAS DEPORTIVAS CULTURALES “MDC”
                      Es una colección de libros de literatura, teoría y práctica forense deportiva, escrito con un lenguaje sencillo, de fácil comprensión y entendimiento.
                      En sus variados tomos y páginas, ha plasmado una recopilación de entretenidas anécdotas, e incorporado todo un conjunto de ideas, conocimientos, experiencias y sabidurías adquiridos antes, durante y después, como jugador, dirigente barrial, deportivo, educativo, social y cultural. 
                      Para todos quienes tienen sangre de campeón, esta literatura hermosa de mucho valor e importancia, debe estar engalanando la biblioteca de su hogar, oficina, sitio o espacio predilecto, junto a la Biblia, la Constitución, Leyes, Estatutos, Reglamentos, etc.
                      Debo aclarar que no es un compendio cualquiera, ni uno de los mejores, tampoco pretende ser perfecto, pero, posiblemente el único deportivamente hablando, que puede ser una guía referencial para todos los que se encuentran estrechamente ligados con la práctica social, cultural, deportiva, a nivel local, nacional, internacional y mundial.
                      Se encuentran incorporados una gran diversidad de temas, relacionados a la Motivación, Deporte Barrial, Dirigencia Deportiva, Traumatología, Alimentación, Biotipo del futbolista, Cultura Deportiva, Preparación Física, Nutrición, Entrenamiento, Reglamentos de Competencia y Sanciones, Procedimiento Parlamentario, Arbitraje, Psicología, Lesiones, Refranes, Dichos, Barras Bravas, Práctica Forense, Juego Limpio, Tácticas y Técnicas, Primeros Auxilios, etc. etc.
                      Sin duda alguna será de mucha utilidad en todos los niveles educativos, para las etnias, razas, jugadores, niños, jóvenes, adultos mayores, deportistas especiales, damas, caballeros; Presidentes de los Clubes, Directivos, Entrenadores, Profesores de Educación Física; Árbitros de Fútbol, Asistentes; Hinchas, Simpatizantes, Periodistas, etc. 
                      Con su sabiduría y ejemplo, le corresponde al distinguido público lector, hacer historia e inscribir su nombre para que su huella sea imborrable. </p>
                      
              </div>
              
              <div className="page">
                <p>Juntos vamos hacer realidad esta misión: “JUEGO LIMPIO Y CERO VIOLENCIA”, para al final de la jornada al unísono orgullosamente decir LABOR CUMPLIDA de un ecuatoriano que ama la vida, a su Familia, a su Institución y a su Patria.
                      “Pequeños esfuerzos unidos hacen grandes realidades”. “La gente vive para servir y quien no vive para servir no sirve para vivir”.
                      Estoy plenamente convencido de que, al leer esta obra de principio a fin, o parte de ella, como hincha, directivo, socio, jugador, simpatizante, la elogiará, criticará, se emocionará, e inclusive a lo mejor, se decepcionará; pero, que no le quepa la menor duda, que, siempre estará apoyando la cultura deportiva y al deporte de su predilección, porque más que una obra, más que un equipo, siente una verdadera pasión por el club de sus amores, por la camiseta predilecta, más aun, cuando junto a todo el grupo de amigos, acuden a vivar con la misma ilusión, de ver a su equipo triunfar y ser campeón.
                      A pesar de los múltiples esfuerzos realizados, no creo de modo alguno haber logrado mi propósito, por ser tan arduo y complejo, toda vez que, inclusive con la modernidad actual los archivos físicos que tenían las bibliotecas han sido trasladados al sistema digital, mientras otras instituciones bibliotecarias han cerrado sus puertas a raíz de la pandemia del COVID 19. 
                      Esto no impide mi obligación de continuar investigando, para darles a conocer muchos temas que no se les ha dado la debida importancia, para que sean transmitidos de generación en generación y que la flama del conocimiento y la sabiduría, sigan brillando con luz propia en el horizonte sin fronteras y nunca jamás se apague.</p>
                                             
                      <p><strong>El Autor.</strong></p>
                      
              </div>
              
              <div className="page">
                <h2>Capítulo 1: Introducción</h2>
                <p>Rememorar es cerrar los ojos y con el pensamiento hacer una transgresión al pasado, para darnos cuenta de lo maravilloso que es vivir cada segundo, minuto, hora, día, semana, mes, año; avanzando con paso firme hasta llegar a la feliz culminación de los objetivos y metas propuestas. Recordar con felicidad bellos momentos y con nostalgia tristes episodios, marcan la diferencia en el mundo en que vivimos. 
                      La historia deportiva tiene mucho de inesperado, no sabemos a ciencia cierta que nos deparará el futuro, hasta cuando seguiremos existiendo, qué nuevas sorpresas nos traerá el futuro.
                      Lo que sí estamos seguros es que dejamos para siempre, el recuerdo especial e inolvidable, un legado de sabiduría plasmados en todo un cúmulo de conocimientos, para que sea transmitido por las futuras generaciones.
                      Con el avance vertiginoso de la ciencia y la tecnología, la inteligencia artificial en todos sus niveles, va ganando espacio, poco a poco va consumiendo al ser humano, a tal punto que llegará el momento que ya no haga falta el esfuerzo físico ni la mano del hombre.
                      Se terminarán los reclamos, las protestas, las huelgas, los paros, la paralización de servicios, seremos gobernados por máquinas con la apariencia de seres humanos. Los entendidos en la materia, afirman que inclusive la corrupción llegaría a su fin, que los custodios de los detenidos por la infinidad de delitos cometidos serán robots.
                      Se daría la apariencia de vivir en una era galáctica. Pero, mientras esto no suceda, continuemos con el desarrollo de nuestras actividades diarias, aprovechando al máximo nuestras capacidades, esfuerzo y sabiduría, para ser cada día mejores, valorando lo que tenemos, lo que somos, creyendo en nosotros mismos, teniéndonos confianza, para tener armonía, equilibrio, con un balance que nos permita combinar actividad con descanso, trabajo con diversión o energía con recuperación.</p>
             
              </div>

              <div className="page">
                <p>En las fustas deportivas, se une fronteras, nacionalidades, pueblos; se congregan diferentes razas, culturas e idiomas, para vivar a su equipo, a su selección, a su país. Sanamente, hay que disfrutar de cada competencia, con las normas del buen vivir y el “Juego Limpio o Fair Play”, en todos los aspectos de la vida.
                      A los escenarios deportivos, desde las regiones más recónditas del país, sin importar el clima y estado del tiempo, la distancia a recorrer o el esfuerzo económico que tengan que realizar, acuden semanalmente, los simpatizantes, fanáticos, hinchas, e inclusive jugadores y familias enteras, con la convicción que les impone su corazón, ver triunfar a su club, aceptando con humildad y modestia la victoria, con altivez y serenidad la derrota. 
                      Los resultados que se obtienen en el deporte, son en base al trabajo en equipo, respeto con el compañero, con equipo rival, árbitros, directivos, hinchas, simpatizantes, jugadores. Ganamos, empatamos o perdemos. Independientemente del resultado obtenido, sigue perdurando con más fuerza, el compañerismo y solidaridad, la gran amistad existente. 
                      Lamentablemente, la violencia está presente y se lo vive en carne propia, en las canchas y escenarios deportivos, por el juego desleal y brutal ejecutado por ciertos jugadores que desconocen las reglas de juego, que con su accionar inoportuno y equivocado, no miden las consecuencias. 
                      A este “cáncer” de la violencia deportiva, se ha sumado no solamente la corrupción, sino que también el Covid19 y sus variantes, que ha matado a nivel mundial, no solamente familiares, seres queridos, amigos, sino también, talentosos y reconocidos deportistas.
                      Aprender a disfrutar de la vida, de los deportes y del buen fútbol sin violencia, no debe ser un secreto, sino, una meta por conquistar en cada participación y encuentro.</p>
           
              </div>

              <div className="page">
                <p>Todo en la vida tiene su razón de ser, el esfuerzo, el sacrificio, la constancia, la responsabilidad, el actuar con honestidad, porque, al final de la jornada tiene su recompensa. 
                      Seguimos haciendo historia, forjando el camino con total éxito, porque los deportistas tenemos “sangre de campeón” y con el ejemplo estamos logrando la excelencia deportiva. 
                      Las sabias palabras de quienes en su debido momento fueron grandes deportistas y hoy eminentes profesionales, nos llevan a reflexionar si vamos a buscar el cambio o seguiremos ignorando los problemas, la violencia, el juego desleal, el irrespeto, la mala intención, la falta de tolerancia, la negativa de los encargados de administrar justicia deportiva en el derecho a la réplica y apelación, la falta de informes arbitrales, la atención a medias a los usuarios perjudicados, etc., etc.
                      Es un verdadero privilegio ser parte importante del selecto grupo de amigos lectores, con valores, principios y cualidades, intachables, que siempre, en el lugar en que se encuentren y la actividad que estén desempeñando, promueven el “JUEGO LIMPIO Y CERO TOLERANCIA A LA VIOLENCIA”. 
                      Es que, la sabiduría y la capacitación, acorta distancias, entre lo que somos y lo que queremos, nivelamos la balanza y nos preparamos para el próximo paso ¡a ir por más!, realizando pequeñas acciones diarias que nos permitan vivir a plenitud. 
                      El aprendizaje y la capacitación, seguirán su camino y nada ni nadie detendrán su avance, para forjarnos mucho más como personas y como individuos, con la perseverancia y mucho conocimiento. 
                      Las huellas imborrables, profundas e imperecederas, del ayer, hoy y mañana, quedan inmortalizados en los anales deportivos y registrados con mayúsculas en los archivos del corazón, para que las futuras generaciones y personas interesadas recuerden la majestuosidad de sus protagonistas y sigan sus pasos con más ahínco.</p>
            
              </div>
              
              <div className="page">
                <p><em>SIN AMOR, COMPRENSION NI TERNURA CON EL COVID 19.</em> Con el aparecimiento de la pandemia del covid-19, las diferentes historias de la familia deportiva fueron restringidas y dolorosas. 
                      Ya nada fue igual, todo cambió. El día anterior a los variados encuentros programados, se dejaba listo el bolso con el uniforme, canilleras, vendas, zapatos, cremas, jabones, perfumes, desodorantes, toallas, una mudada de ropa, a esto se debía incluir de forma obligatoria, mascarillas, guantes y el alcohol para las manos.
                      En las diversas instituciones y a nivel personal, muchos proyectos que se encontraban en marcha se vieron truncados, invitaciones, exhibiciones para participar en evento barriales, parroquiales, nacionales e internacionales se suspendieron de manera inmediata y obligatoria, por el temor a ser contagiados por el virus mortal. 
                      Lo preocupante es que, por parte de algunas autoridades gremiales deportivas de aquella época, no existió pronunciamiento alguno sobre los deportistas que adelantaron su partida a causa de este mal incurable.
                      En las actividades diarias profesionales y en los complejos deportivos, entre otros, los directivos, jugadores, hinchas, simpatizantes, antes del coronavirus y después del coronavirus, tuvimos que someternos a estrictas medidas sanitarias, por nuestro bien, de nuestras familias y el de las demás personas.</p>
              
              </div>

              <div className="page">
                  <h2>Antes y Después (Pandemia)</h2>
                   <table className="tabla-pandemia">
              <thead>
              <tr>
              <th>ANTES</th>
              <th>DESPUÉS</th>
              </tr>
              </thead>
              <tbody>
              <tr>
              <td>Se daba la mano como muestra de respeto y reverencia, no había miedo de nada. La parcería era de lo mejor con amigos, familiares, conocidos.</td>
              <td>Nada de darse la mano, eso es historia.</td>
              </tr>
              <tr>
              <td>Todos lucían sus sonrisas. Muchos hasta sacaban lámpara de sus dentaduras nuevas en las que habían gastado para pelar el diente en esta temporada.</td>
              <td>Mascarillas obligadas para evitar el contagio. La mayoría usa con los colores de su equipo o de algún equipo del exterior.</td>
              </tr>
              <tr>
              <td>Nada de guantes, estos se usaban solo cuando se jugaba en la altura.</td>
              <td>Los guantes son una obligación en estos tiempos de medidas sanitarias.</td>
              </tr>
              <tr>
              <td>Un abrazo y estar en grupo era algo natural, más aún cuando el equipo ganaba y se quedaban a festejar en el bar.</td>
              <td>Evitar las aglomeraciones. El distanciamiento social es obligatorio.</td>
              </tr>
              <tr>
              <td>No tenían miedo de llegar con libras de más. A nadie se le ocurría llegar con el físico ideal.</td>
              <td>No llegan con sobrepeso. Han estado entrenando en casa y hasta han subido videos.</td>
              </tr>
              </tbody>
              </table>
              </div>

              <div className="page">
              <p>Pero, éstas enfermedades y cepas, así como las que aparezcan posteriormente, no son imbatibles ni eternas. 
                  Las autoridades tanto de los gobiernos central, municipal, cantonal, parroquial, como de los diferentes organismos e instituciones, han tomado cartas en el asunto y están realizando un enorme esfuerzo, poniéndole ganas, empeño, coraje, para exterminar de raíz estos males, o por lo menos controlarlos, pero, para ello, debemos aplicar estrictas normas de bioseguridad e higiénicas (lavándonos las manos, protegiéndonos con mascarillas, utilizando gel o alcohol desinfectante, además del distanciamiento recomendado) en forma obligatoria. 
                  Éstas normas de bioseguridad mencionadas, fueron dadas a conocer a la nación de Israel, hace 3500 años, según consta en el libro más importante, grandioso y lleno de sabiduría como lo es la Biblia.  
                  En el año 2004, Juan Luis Guerra, genio dominicano, cantante, compositor musical, arreglista, etc., inspirado en su amor a Dios, con grandiosas influencias en el género salsa y música tropical, escribió la canción “Las avispas”, compuesta por nada menos que 12 textos bíblicos transformados en versículos, que le permitió ganar un Premio Grammy Latino en la categoría Mejor Canción Tropical. Aquí los mencionamos, con el libro de la Biblia en el que aparecen.</p>
            
              </div>
              
              <div className="page">
              <p><strong>“CANCIÓN LAS AVISPAS”</strong> 
                  Tengo un Dios admirable en los cielos. ISAÍAS 9:6.
                  Y el amor de su Espíritu Santo. 1 JUAN 5:7-8.
                  Por su gracia yo soy hombre nuevo, EFESIOS 4:22-25.
                  Y de gozo se llena mi canto. PROVERBIOS 29:6.
                  De su imagen soy un reflejo. GÉNESIS 1:27.
                  Que me lleva por siempre en victoria. 1 CORINTIOS 15:57.
                  Y me ha hecho cabeza y no cola. DEUTERONOMIO 28:13.
                  En mi Cristo yo todo lo puedo. FILIPENSES 4:13.
                  Jesús me dijo que me riera. JOB 5:22.
                  Si el enemigo me tienta en la carrera, HEBREOS 12:1.
                  Y también me dijo “no te mortifiques”. FILIPENSES 4:6.
                  Que yo envío mis avispas pa que lo piquen. DEUTERONOMIO 7:20.
                  Todo queda registrado en los libros de la historia y será ella quien nos juzgue, por nuestras correctas o inadecuadas acciones u omisiones. Lo que dejamos a las futuras generaciones es nuestro bien ganado prestigio, la decencia, el buen nombre, la moral, la honradez, la honorabilidad, los principios y valores que nos inculcaron nuestros antepasados.
                  MEMORIAS DEPORTIVAS CULTURALES “MDC”, es una obra literaria deportiva coleccionable, cuyo objetivo principal es la lectura, el aprendizaje, la educación y el conocimiento en todos los niveles. 
                  Cumplimos con el objetivo propuesto por parte del gobierno central al estar inmersos dentro de la Política Nacional de Fomento a la Lectura, la Oralidad y Acceso al Libro de Ecuador.
                  Esperamos que sea del completo agrado de todo el público lector.

                  <strong>El Autor</strong></p>

               </div>


              <div className="page">
                <h2>Capítulo 2: Agradecimientos</h2>
                <p><strong>A MI MAMI “COQUITA”</strong>
                Quien, con su ternura, amor, paciencia, 
                sabiduría desbordante, vitalidad, comprensión 
                inigualable y excelente compañía antes, durante y 
                después de mi prematuro nacimiento hasta la presente, con sus cuidados, atenciones, valores inculcados, res
                peto, honor, lealtad, solidaridad, responsabilidad, humildad, 
                sencillez y su santa bendición, pese a las dificultades, me permitieron cruzar barreras, salir adelante y caminar por el sendero del bien con la frente muy en alto, ayudando y colaborando
                con los más necesitados, poniendo en práctica los sabios consejos recibidos, que todas las cosas materiales y el dinero a pesar
                de ser necesarios, hoy las tienes mañana no, porque no es todo 
                en la vida, que los dones del señor se los de debe recibir con 
                mucha más humildad y mucha más sencillez, ya que para 
                sonreír debemos haber llorado, para ser felices debemos 
                conocer la tristeza, para ser ricos debemos conocer la pobreza. Gracias mil veces gracias, por ti madre puedo mi
                rar la luz del día, el anochecer, la luna y sus estrellas, 
                desde aquel instante y por siempre serás mi inspiración. Por ti me eduqué, sonrío, dibujo, pinto, escri
                bo poemas, artículos de prensa, frases, acrósticos,
                libros. Por esto y mucho más, con la bendición 
                de Dios desde lo más profundo del corazón, de
                aquí al infinito, te digo GRACIAS sagrada madre Armenia Ecuador Velasco Mayorga y hermanos Vanner Rolando, Jenny Cecibel, Flor
                Sayonara, Katia Margarita, Luis Ernesto y 
                en todo su conjunto a la familia Bracero 
                Velasco, así como también a las generaciones que se integraron con el devenir 
                del tiempo, Familias: Bracero Santamaría, Freddy, Mónica,
                Felipe, Santiago, Raúl;
                Bracero Ballesteros, Rolando,
                Susana (+). Lizeth; Caicedo Bracero, Cecibel, Luis, Richard, Melanie; Graux Bracero, Flor, Patrick, Erick, Yanhic, Loy; Guaña Bracero, Katia, Christian, Mateo, Matías; Bracero
                Cadena, Luis, Catalina, Martina, Nicolás;
                Bracero Cortéz, 
                Felipe, Tatiana, Alejandro; Bracero Guanoluisa, 
                Felipe, Guissella, Doménica; Bracero Tituaña, 
                Santiago, Verónica, Alejandro, Thiago; 
                Bracero Vilaña, Raúl, Viviana, Emily, Rafaela; y las que lo 
                hagan en lo futuro. No
                crean que me he ol
                vidado, de las personas
                muy especiales en mi vida,
                una de ellas, mi abuelita materna Judith Angélica Mayorga
                Moreno vda. de Velasco, quien
                desde temprana edad me enseñó
                el valor del trabajo, su constancia
                y a reverenciar a Dios nuestro creador, a respetar a padres, hermanos, familiares, ser muy educados con el prójimo, a valorar la vida, a ser humildes, sencillos, responsables, puntuales, honrados, 
                gratos, tolerantes, pacientes, considerados, ayudando al más necesitado con
                la bendición de Dios.</p>

<p><strong>El Autor.</strong></p>
              </div>

              <div className="page">
                <h2>Capítulo 3: Trilogía Perfecta</h2>
                <p>Así como en la Biblia se hace referencia a la Trilogía Perfecta Padre, Hijo, Espíritu Santo,el autor de esta obra, la dedica también a su trilogía, con la que
                  conforman el cuarteto ideal en lo familiar y deportivo. Gracias Hijos por ser el motivo de inspiración, ayer, hoy, mañana y siempre.
</p>
              </div>

              <div className="page">
                <h2>Capítulo 4: Reflexiones 1</h2>
                <p>REFEXIONES 
                ADOLFO PEREZ ESQUIVEL Tenemos
                que estar unidos y tener conciencia de nuesttra responsabilidad histórica no para quejarnos del paasado sino para que
                ese pasado nos ayude
                a iluminar el presente. He
                ahí el camino abierto. ALBE
                RT CAMUS Todo lo que sé dede moral y obligaciones en la vida se lo debo al fútbol. ANÓNIMO
                El deportista vive junto a las lesiones y al dolor esas son en realidad sus
                eternas compañeras. ANÓNIMO He
                aprendido de mis propios errores y
                he sacado una enseñanza positiva
                de mis fracasos para vivir con la 
                misma sencillez y modestia de 
                siempre. ANÓNIMO Un sueño 
                se hace realidad con dos partes 
                deseo y voluntad. Muchas de las
                mejores cosas vienen por separa
                do y las circunstancias las juntan
                para llegar a construir algo real
                mente importante. ANÓNIMO 
                No te rindas, no dejes que nadie 
                mate tus sueños se valiente. ANÓNIMO Señor si me das fortuna no
                me quites la razón si me das éxitos
                no me quites humildad si me das 
                humildad no me quites dignidad ayúdame a decir la verdad y no mentiras para ganar el aplauso de los demás. f) LOS AUTORES DE LAS 
                FRASES.</p>
              </div>

              <div className="page">
                <h2>Capítulo 5: Reflexiones 2</h2>
                <p>REFEXIONES 
                ANÓNIMO
                El deporte es
                lo que me ha
                mantenido vivo. ANÓNIMO. Tener 
                conocimiento 
                es saber lo que 
                hay que hacer 
                pero tener conciencia es saber cómo
                lo hay que hacer. CONCEPCIÓN ARENAL
                El hombre que se levanta
                es aun, más grande que el que
                ha caído. EUGENIO ESPEJO
                La luz de la sabiduría puede alumbrar al mundo entero. FRANCO CAPUTTI Caminante no hay camino se
                hace camino al andar y al volver la vista atrás se ve la senda que nunca se ha
                de volver a pisar. HELLEN HELER
                (CIEGO y SORDO) Las cosas más
                valiosas en el mundo no se pueden
                ver deben ser sentidos con el corazón. UN HOMBRE MUY SABIO La gran línea divisoria entre el éxito y el fracaso se encierra en tres palabras NO TUVE 
                TIEMPO. MARIO SARMIENTO. No basta con ser inteligente no soy un genio, todo lo que sé
                lo aprendí por mí mismo como autodidacta y a mi personal esfuerzo. 
                f) LOS AUTORES DE LAS FRASES
                .</p>
              </div>

              <div className="page">
                <h2>Capítulo 6: El Papa Francisco</h2>
                <p>“EL PAPA FRANCISCO”
                Su nombre real y verdadero es Jorge Mario Bergoglio. Su título completo, raramente usado, es “Su Santidad el Papa Francisco, Obispo de Roma, Vicario de Cristo, sucesor del Príncipe de los Apóstoles, Sumo Pontífice de la Iglesia Universal, primado de Italia, Arzobispo y metropolitano de la provincia romana, soberano del Estado de la Ciudad del Vaticano, Siervo de los siervos de Dios”.
                Cuando se hace referencia a los Papas, se acostumbra a traducir el nombre Papal en los idiomas locales. 
                Predecesor de Benedicto XVI. Su nombre secular es Jorge Mario Bergoglio, mientras que su nombre religioso es Franciscus en latín (idioma oficial de la Santa Sede), Francesco en italiano (idioma del Vaticano), y Francisco en su español materno.
                El lema escogido por el Papa Francisco para el escudo Papal, en el que ha integrado el emblema de la Compañía de Jesús, a la que pertenece, sobre un sol radiante, es “Miserando atque eligendo” que significa “Lo miró con misericordia y lo eligió”.
                Con su voz pura y radiante, antes de dar la bendición os pide de favor, que en silencio hagan una oración pidiendo al señor la bendición vuestra por mí, para su obispo"
                Francisco, como Papa de la iglesia católica indica que la gente es pobre y que él es uno de ellos.</p>

                        <p><strong>BIOGRAFÍA.</strong>  Jorge Mario Bergoglio, nació 17 de diciembre de 1936 en el barrio de Flores, Buenos Aires en el seno de una familia modesta. Hijo de un empleado ferroviario de origen piamontés, Mario Bergoglio, y de Regina María Sívori, ama de casa. 
                Tiene cuatro hermanos y hermanas. Su padre emigró a Argentina desde la región italiana de Piamonte. Fue bautizado el día de Navidad de 1936 en la Basílica María Auxiliadora y San Carlos del barrio de Almagro en Buenos Aires. De su abuela Rosa Vasallo ha dicho que fue «la mujer que mayor influencia» ha ejercido en su vida.
                Asistió durante su infancia al colegio salesiano Wilfrid Barón de los Santos Ángeles de la localidad de Ramos Mejía. Heredó de su padre la pasión por el Club Atlético San Lorenzo de Almagro, del que tiene camisetas y carné de socio número 88.235, y de joven trabajó limpiando el suelo de una floristería y como portero de discoteca. Cursó estudios en la escuela secundaria industrial E.N.E.T Nº 27 Hipólito Yrigoyen, recibiendo el título de técnico químico. Le gustaba bailar tango y solía salir a practicarlo con sus amigos.
                A los 21 años, le extirparon parte de un pulmón cuando se sometió a una operación. Sin embargo, salvo limitarle un poco su capacidad respiratoria, no le afecta a su calidad de vida. A los 21 años decidió convertirse en sacerdote.
                El 11 de marzo de 1958 se unió al noviciado de la Compañía de Jesús ingresando en el seminario del barrio Villa Devoto. Obtiene una licenciatura en Filosofía y estudia Humanidades en Chile. 
                Entre 1964 y 1965 fue profesor de Literatura y Psicología en el Colegio de la Inmaculada Concepción de Santa Fe, para posteriormente decantarse por la Teología en el colegio 'San José', en San Miguel.  
                Fue ordenado sacerdote el 13 de diciembre de 1969. Desde entonces realizó una larga carrera dentro de la orden de la cual llegó a ser «provincial» desde 1973 hasta 1979, durante la dictadura militar argentina. Domina el idioma español, el italiano con fluidez, además de tener conocimientos medios de inglés, francés, portugués, ucraniano y piamontés (dialecto italiano), alemán. Se trasladó a Alemania para obtener su doctorado y a su regreso retomó la actividad pastoral como sacerdote en la provincia de Mendoza.
                Con respecto al latín, idioma oficial de la Santa Sede, el latinista Wilfried Stroh declaró que Francisco no sabría mantener una conversación fluida en ese idioma. En cambio, otros medios indican que Francisco habla en latín, y The Boston Globe afirmó que un estudiante estadounidense habló con el Papa en esa lengua. Francisco tiene conocimientos básicos del idioma inglés.
                Fue consagrado obispo titular de Auca el 20 de mayo de 1992, para ejercer como uno de los cuatro obispos auxiliares de Buenos Aires. Posteriormente fue obispo coadjutor de la misma el 3 de junio de 1997. Recibió el cargo de arzobispo de Buenos Aires el 28 de febrero de 1998. 
                Por entonces no vivía en el palacio cardenalicio, sino en un piso normal y corriente. Iba a trabajar todos los días en autobús y se hacía la comida.  
                Durante el consistorio del 21 de febrero de 2001, el Papa Juan Pablo II lo nombró cardenal del título de san Roberto Belarmino. Además, es primado de la Argentina. Miembro de CAL (Comisión para América Latina), la Congregación para el Clero, el Pontificio Consejo para la Familia, la Congregación para el Culto Divino y la Disciplina de los Sacramentos, el Consejo Ordinario de la Secretaría General para el Sínodo de los Obispos, la Congregación para los Institutos de Vida Consagrada y las Sociedades de Vida Apostólica. Aficionado a la literatura de Jorge Luis Borges, Leopoldo Marechal y Fiedor Dostoievski y amante de la ópera. 
                Con prestigio por sus dotes intelectuales y dentro del Episcopado argentino es considerado un moderado entre los prelados más conservadores y la minoría "progresista". 
                Lavó los pies a enfermos de sida, comió con los pobres. Criticó duramente el capitalismo, el consumismo y la lógica perversa de la economía de mercado. Siendo cardenal se opuso al proyecto de Ley de Matrimonio entre personas del mismo sexo. 
                Jesuita ortodoxo en cuestiones dogmáticas. El 9 de julio de 2010, días antes de su aprobación, se hizo pública una nota suya calificando como una «guerra de Dios» dicho proyecto, que contemplaba que las personas homosexuales pudieran contraer matrimonio y adoptar niños. 
                Además, chocó en otras ocasiones con los gobiernos de Néstor y Cristina Fernández de Kirchner, con sus críticas por la corrupción y la pobreza. 
                Miembro de la Conferencia Episcopal Argentina, de la cual fue presidente en dos ocasiones, y CELAM (Consejo Episcopal Latinoamericano). En la Santa Sede fue miembro de la Congregación para el Culto Divino y la disciplina de los Sacramentos; de la Congregación para el Clero; de la Congregación para los Institutos de Vida Consagrada y de las Sociedades de Vida Apostólica; del Pontificio Consejo para la Familia y de la Pontificia Comisión para América Latina. 
                Fue mencionado como uno de los prelados mejor posicionados para suceder a Juan Pablo II, siendo el principal rival de Ratzinger en el Cónclave de 2005. 
                En marzo de 2013, Jorge Bergoglio fue uno de los dos cardenales argentinos que participan del cónclave para elegir al sucesor del Papa Benedicto XVI. 
                Tras al menos cuatro votaciones en un cónclave que duró 25 horas y media, y dos fumatas negras, los 115 cardenales electores, inclinaron la votación a su favor y el 13 de marzo de 2013fue elegido el Papa 266. 
                Fue elegido teniendo 76 años; dos años menor que el Papa Benedicto XVI tras su elección. 
                Se impuso el nombre de Francisco en memoria de San Francisco de Asís, convirtiéndose en el primer americano y el primer miembro de la compañía de Jesús en dirigir la Iglesia católica, y el primer Papa no europeo desde el sirio Gregorio III en 741. 
                La fumata blanca se alzó sobre el cielo de Roma a las 19.08. 
                Reconocido por su humildad, conservadorismo doctrinal, defensor de la teología moral de la Iglesia y compromiso con la justicia social. 
                Después de ser elegido Papa, optó por no vivir en la residencia oficial del Papa en el Palacio Apostólico, sino en otra dependencia del Vaticano mucho más humilde y donde puede recibir visitas y celebrar reuniones. 
                Es el primer Papa desde Pío X que vive fuera de los apartamentos Papales.</p><strong>OBRAS</strong>
              <p>1982: 	Meditaciones para religiosos</p>
              <p>1986: 	Reflexiones sobre la vida apostólica</p>
              <p>1992: 	Reflexiones de esperanza</p>     
              <p>1998: 	Diálogos entre Juan Pablo II y Fidel Castro </p>    
              <p>2003: 	Educar: exigencia y pasión </p>    
              <p>2004: 	Ponerse la patria al hombro</p>    
              <p>2005: 	La nación por construir</p>
              <p>2006:	Corrupción y pecado</p>
              <p>2006: 	Sobre la acusación de sí mismo</p>     
              <p>2007: 	El verdadero poder es el servicio</p>    
              <p>2012: 	Mente abierta, corazón creyente </p>   
              <p><strong>DURANTE SU PONTIFICADO</strong></p> 
              <p>2013: 	Encíclica Lumen fidei (La luz de la fe)</p>  
              <p>2013: 	Exhortación apostólica Evangelii gaudium (Alegría evangelio) </p>      
              <p>2015: 	Carta encíclica Laudato si’ (medio ambiente y cambio climático.</p>
              
              </div>

              <div className="page">
                <h2>Capítulo 7:Máximas Deportivas</h2>
                <p>MAXIMAS DEPORTIVAS
                Para los amantes del fútbol y la copa mundial, les dio sus “máximas” sobre la corona de laurel en el deporte, así como también hizo referencia a Cristo, al Evangelio y al Deporte. 
                ¿Qué hace un jugador cuando se le llama para formar parte de un equipo? Tiene que entrenarse y entrenarse mucho. Así es nuestra vida de discípulos del Señor. Estos son los entrenamientos para seguir a Jesús: la oración, los sacramentos y la ayuda a los demás, el servicio a los demás. 
                ¡Sean protagonistas! ¡Jueguen para adelante! ¡Pateen adelante! ¡Construyan un mundo mejor! ¡Un mundo de hermanos, un mundo de justicia, de amor, paz, fraternidad, solidaridad! ¡Juéguenla adelante siempre! 
                Cuando «se suda la camiseta», tratando de vivir como cristianos, experimentamos algo grande: nunca estamos solos, formamos parte de una familia de hermanos que recorren el mismo camino.
                Respetar al compañero de equipo y al adversario, en el campo y en la vida para que nadie se sienta excluido. 
                Les pido que recen por mí, para que también yo, en el «campo» en el que Dios me puso, pueda jugar un partido honrado y valiente para el bien de todos nosotros. 
                Si en un estadio en una noche oscura, una persona enciende una luz, se vislumbra apenas; pero si los más de setenta mil espectadores encienden cada uno la propia luz, el estadio se ilumina. Hagamos que nuestra vida sea una luz de Cristo. 
                Solamente una selección nacional puede levantar la copa, pero todos son vencedores, si fortalecen los lazos que los unen. 
                Son muchos los valores fomentados por el fútbol que se revelan en todos los aspectos de la existencia, concretamente en la construcción de la paz, ustedes son referencia para tantos jóvenes y modelo de valores encarnados en la vida. Yo tengo confianza en todo el bien que podrán hacer entre la muchachada. 
                Y si cometen un error en la vida, si se pegan un resbalón, si hacen algo que está mal, no tengan miedo. 
                Jesús, mira lo que hice. Siempre hablen con Jesús, en las buenas y en las malas. 
                A todas las organizaciones que trabajan en el campo del deporte, las federaciones internacionales y nacionales, las asociaciones deportivas laicas y eclesiales, prestar la debida atención e invertir 
                .</p>

                <p>los recursos necesarios para la formación profesional, humana y espiritual de los entrenadores. 
                Toda disciplina deportiva tiene un valor no solo físico y social, sino también moral. 
                Antes de ser campeones, sed hombres con virtudes y defectos, con el corazón y las ideas, con aspiraciones y problemas. 
                “Dilettante”, amateur. Es verdad que la organización nacional e internacional profesionaliza el deporte, y debe ser así, pero esta dimensión profesional nunca debe dejar aparte la vocación inicial de un deportista o de un equipo: ser amateur.  
                En la vida es necesario luchar, “entrenarse”, esforzarse para obtener resultados importantes. Podemos ver en ello una metáfora de la vida. 
                El espíritu deportivo ofrece así la imagen de que los sacrificios son necesarios para forjar las virtudes que construyen el carácter de una persona. 
                El secreto de la victoria en la cancha, como en vida, es el de saber respetar el propio compañero de equipo como al adversario. ¡Nadie vence solo ni en la cancha ni en la vida! 
                El verdadero deporte favorece la construcción de un mundo más fraterno y solidario, contribuyendo a la superación de situaciones de injusticia y de un malestar humano y social. 
                En el juego, hay la camaradería. Si a un partido le falta esto pierde fuerza, aunque el equipo gane. No hay lugar para el individualismo, sino que todo es coordinación del equipo. 
                Que la sociedad deportiva sea siempre una casa abierta, donde se pueda experimentar la fraternidad y la armonía entre las personas. 
                .</p>

                <p>Sed hombres tanto en el deporte como en la vida. Hombres, portadores de humanidad. “No seáis solo personajes, sed hombres.
                Si somos individualistas en la vida, ignoramos a las personas que nos rodean, toda la sociedad termina perjudicada. 
                Vosotros sois un ejemplo, un punto de referencia. El bien que hacéis es impresionante. Con vuestra conducta, con vuestro juego, con vuestros valores hacéis bien. La gente os mira. Aprovechadlo y sembrad el bien. 
                Por los entrenamientos no se debe descuidar el estudio, la amistad, el servicio a los pobres, la Misa, la catequesis. Se ha perdido la escala de valores.  
                “Dilettante” Un deportista, aun siendo profesional, cuando cultiva esta dimensión de 'disfrutar', hace bien a la sociedad, construye el bien común a partir de los valores de la gratuidad, de la camaradería, de la belleza. 
                Entrenemos para “estar en forma”, para afrontar sin miedo todas las situaciones de la vida, dando testimonio de nuestra fe. Ustedes son los atletas de Cristo. 
                En esta delicada fase de la vida la responsabilidad de un entrenador, es el privilegio de pasar muchas horas a la semana con los jóvenes, y de tener una gran influencia sobre ellos con su comportamiento y su personalidad.  
                El entrenador “puede hacer una contribución muy valiosa para crear un clima de solidaridad y de inclusión con los jóvenes marginados logrando encontrar modos y medios adecuados para acercarse también a ellos en la práctica deportiva y en las experiencias sociales”. 
                .</p>
                      
                <p>El entrenador debe “ser ejemplo de integridad, de coherencia, de justo juicio, de imparcialidad, pero también de alegría por vivir, de paciencia, de capacidad de estima, de benevolencia hacia los demás y ¡especialmente hacia los más desaventajados! 
                Si el entrenador tiene equilibrio humano y espiritual sabrá también preservar los valores auténticos del deporte y su naturaleza fundamental de juego y de actividad social, impidiendo que se distorsione bajo la presión de muchos intereses, sobre todo económicos, que hoy son más invasivos. 
                El entrenador puede ser un válido formador de jóvenes, junto a los padres, a los profesores, a los sacerdotes, a los catequistas”. Por ello, deben recibir “una sólida formación. 
                El entrenador deportivo “puede convertirse para muchos chicos y jóvenes en uno de estos buenos educadores, siendo importante para el desarrollo de una personalidad madura, armónica y completa. 
                El fútbol no es solo una forma de entretenimiento, sino también un instrumento para comunicar valores de la persona humana y ayudar a construir una sociedad mejor”. 
                El fútbol tiene momentos dulces y amargos. Por eso igual que en el deporte, en la vida lo más importante no siempre es ganar sino reponerse de los fracasos.  
                El deporte es importante, pero debe ser auténtico deporte. Promuevan esta actitud de «aficionados» que elimina definitivamente el peligro de la discriminación. Cuando los equipos van por este camino, el estadio se enriquece humanamente, desaparece la violencia y vuelven a verse a las familias en las tribunas. 
                </p>    

                <p>El deporte es un instrumento para comunicar los valores que promueven el bien de la persona humana y ayuda a construir una sociedad pacífica y fraterna. 
                En el juego, se encuentra la belleza, la gratuidad y el compañerismo. Si a un partido le falta esto, pierde fuerza, aunque se gane”. 
                Las competencias futbolísticas deben ser consideradas más por aquello que son: un juego y al mismo tiempo una ocasión de diálogo, de comprensión, de enriquecimiento humano recíproco. 
                El fútbol puede y debe ser una escuela para la formación de una “cultura del encuentro”, que conduzca a la armonía y a la paz entre los pueblos” 
                El fútbol se ha convertido en un negocio, y por ello exhortó a trabajar para que no se pierda el carácter deportivo. 
                El patrimonio moral y deportivo está simbólicamente manifestado por la frase latina, tomada de Sallustio: 
                Vivir el deporte como un don de Dios, es una ocasión para hacer fructificar el talento, pero como responsabilidad.  
                Las tres lecciones de la práctica deportiva y esenciales a favor de la causa de la paz: la necesidad de entrenarse, el juego limpio y el respeto entre los adversarios. 
                En realidad, el verdadero deporte favorece la construcción de un mundo más fraterno y solidario, contribuyendo a superar situaciones de injusticia y dificultad humana y social. 
                ¡Jesús nos ofrece algo más grande que la Copa del Mundo! la posibilidad de una vida fecunda y feliz, y un futuro con él que no tendrá fin, la vida eterna.
                Jesús nos pide que le sigamos toda la vida, nos pide que seamos sus discípulos, que «juguemos en su equipo».
                </p>

                <p>Gracias a Dios tenemos bellos ejemplos de hombres y mujeres deportistas, también de grandes campeones, que no han dejado jamás de vivir la fe y el servicio al prójimo.  
                La Biblia nos enseña que la persona humana es un todo, espíritu y cuerpo. Por esto los animo a cultivar siempre, junto a la actividad deportiva y competitiva, también la dimensión religiosa y espiritual.  
                San Pablo, en sus cartas, invita a correr como los atletas para ganar la corona de laurel que no se marchita. 
                Para vencer es necesario superar el individualismo, el egoísmo, todas las formas de racismo, de intolerancia y de instrumentalización del ser humano. Por lo tanto, ser “individualista” en el fútbol representa un obstáculo para el éxito del equipo. 
                La meta en cualquier campeonato es ganar. El trofeo es sinónimo de victoria, pero Francisco recuerda que el cristiano puede ganar algo más importante. 
                Nunca es fácil aceptar la derrota, sobre todo, cuando el juego no ha sido justo. Pero la clave es, según Francisco, jugar un partido limpio. 
                El “Fair Play”, es necesario en el fútbol, enseña a respetar al adversario. 
                Pensemos en la lealtad, en la perseverancia, en la amistad, en compartir, en la solidaridad. 
                Para un aficionado al fútbol un buen puesto en el estadio no tiene precio. Para los cristianos no hay partidos gratis. 
                Toda disciplina deportiva tiene un propio valor, no solo físico y social, sino también moral.
                Dios le envía un rayo de sol y una sonrisa de amor para que salga adelante. Él está seguro que pronto va a salir de estas tormentosas penas, solo desea que no le falle a él y que nunca se olvide de él. Él mejor que nadie sabe lo que es la paciencia y le pide que tenga mucha paciencia y tranquilidad, que mire a un niño que aprende a caminar, se cae y vuelve a caer, una y otra vez, y sin embargo sigue ensayando, mejorando, hasta que un día camina sin caerse. Qué no podrá lograr Usted como persona adulta si tuviera la paciencia del niño y su concentración para sobreponerse a tantas caídas.
                Recuerde que el mejor predicador, es Dios y el corazón; el mejor maestro es Dios y el tiempo; el mejor libro es Dios y el mundo; sus mejores amigos seguimos siendo nosotros. Sin fe, se puede perder el juego cuando ya está casi ganado.
                </p>
              </div>

              <div className="page">
                <p>EL PAPA FRANCISCO Y LOS ENTRENADORES
                En el Seminario Internacional de estudio “Entrenadores: educadores de personas” organizado por el departamento de “Iglesia y Deporte”, el Papa Francisco dirigió un mensaje al mundo del deporte, a quienes dio las pautas que deben seguir para promover entre los jóvenes los valores cristianos. 
                SOBRE LA MUERTE DE MARADONA 
                El Papa Francisco ha recordado "con afecto" y oración a su compatriota, el exfutbolista argentino y leyenda del futbol Diego Armando Maradona, quien murió el 25 de noviembre del 2020 en su domicilio de Argentina, a los 60 años después de sufrir una descompensación y posterior cardiorrespiratorio en su domicilio, en un hecho que enluta y conmueve el deporte mundial.
                El Pontífice argentino, que ama el futbol y es fanático desde su niñez del club San Lorenzo de Almagro de Buenos Aires, admiraba las hazañas del fantasioso jugador, al que conoció y recibió dos veces en el Vaticano. Se ha reunido en varias ocasiones con la estrella argentina. 
                En septiembre de 2014 Bergoglio le recibió en su residencia privada del Vaticano, la Casa Santa Marta, para hablar de las iniciativas y proyectos educativos de la fundación pontificia "Scolas Ocurrentes". 
                En abril del 2015 volvió al Vaticano para reunirse con el Papa latinoamericano, con el que habló sobre la organización de un nuevo partido por la paz en Roma.
                Además, el "Pibe de Oro" participó en dos de los "Partidos de la Paz" de fútbol impulsados por el Papa.
                La sintonía entre ambos era conocida y nada más conocerse la elección de Francisco en marzo de 2013 como primer Papa latinoamericano de la historia, Maradona declaró: "El Dios del fútbol es argentino, y ahora también el Papa".
                El exfutbolista siempre se definió un "hincha de Francisco" y confió en él hasta en los momentos más difíciles, como cuando tuvo que volver de Emiratos Árabes a Argentina en junio de 2015 para acompañar a su padre, Don Diego, en estado crítico y que falleció días después a los 87 años. "Confío en Dios y en el Papa, y pido que recen por mi viejo", afirmó al llegar a su país. "El primer fan de Francisco soy yo (...) Quiero dar las gracias a Francisco por todo el afecto que me transmite", comentó.
                A los micrófonos de los periodistas, Maradona aseguró entonces que entre ellos dos "el verdadero campeón" era el Pontífice y confesó que lograba acercarse de nuevo a la iglesia por la atención de Francisco hacia los pobres.
                El máximo representante de la iglesia católica “Papa Francisco”, le hizo llegar a la familia del ‘Pelusa’ un rosario bendecido. La entrega fue hecha por representantes diplomáticos a Claudia Villafañe, ex esposa de Diego Maradona y madre de sus hijas Dalma y Gianinna Maradona.
                RESPUESTA AL CAMBIO CLIMÁTICO 
                El Papa Francisco dijo que la pandemia de covid-19 podría ser una «respuesta» de la naturaleza al cambio climático. Además, mencionó que está superando su bronquitis y rezando aún más desde su residencia en el Vaticano durante la pandemia de coronavirus.
                «Estoy viviendo esto como un momento de gran incertidumbre», dijo Francisco al periodista británico Austen Ivereigh en una amplia entrevista por correo electrónico, publicada el miércoles simultáneamente en las revistas The Tablet y Commonweal.
                El Papa dijo que va a confesarse todos los martes para pedir perdón por su propio egoísmo. «Me encargo de todo allí», dijo. 
                Francisco además indicó que las personas sin hogar deben ser puestas en cuarentena en hoteles y no en estacionamientos. «Este es el momento de ver a los pobres», a quienes la sociedad a menudo trata como «animales rescatados», dijo.
                Francisco dijo que la pandemia es una de las «respuestas de la naturaleza» a los seres humanos que ignoran la crisis ecológica.
                “No respondimos a las catástrofes parciales. ¿Quién habla ahora de los incendios en Australia, o recuerda que hace 18 meses un barco podía cruzar el Polo Norte porque los glaciares se habían derretido? ¿Quién habla ahora de las inundaciones? “No sé si se trata de la venganza de la naturaleza, pero ciertamente son las respuestas de la naturaleza”.
                El Papa advirtió contra el surgimiento de políticos populistas que, según él, están dando discursos que recuerdan a Hitler en 1933 y otros que se centran únicamente en la economía. 
                «Estoy preocupado por la hipocresía de ciertas personalidades políticas que hablan de enfrentar la crisis, del problema del hambre en el mundo, pero que mientras tanto fabrican armas». 
                «Hoy creo que tenemos que reducir nuestra tasa de producción y consumo y aprender a comprender y contemplar el mundo natural», dijo. 
                El Papa alentó a las personas confinadas a buscar formas creativas de estar en casa. «Cuídense para el futuro que vendrá», dijo Francisco.
                </p>

                    </div>

                    <div className="page">
                      <h2>Capítulo 8:La Iglesia Católica y el COVID</h2>
                      <p>LA IGLESIA CATÓLICA Y EL COVID19 
                José Luis Meza: En términos generales, la iglesia ha tenido que repensarse en casi todas sus vertientes. En los ritos, por ejemplo. Recordemos esa imagen impactante de la bendición Urbi et Orbi del Papa Francisco con la Plaza de San Pedro vacía. Eso fue algo nunca visto. 
                Sin embargo, muchas personas -los medios hablaron de 1.500 millones de personas- estuvieron conectadas a través de la televisión y las redes sociales. Entonces, la pandemia ha afectado la vida de la Iglesia, pero ésta ha sabido aprovechar los medios de comunicación para hacer su labor.
                Pensemos en la misa dominical. Al inicio de la pandemia, en nuestro país se promovieron unas medidas. Éstas llevaron a que en el templo no se pudiera dar la paz de mano, ni beso, sino una venia; había que recibir la comunión en la palma de la mano y guardar un metro de distancia entre las personas. Todo esto era un poco extraño, pero había que hacerlo.
                En esta Semana Santa nos conectaremos de forma virtual o participaremos de las celebraciones en televisión y, por tanto, tendremos que resignificar los gestos que ocurren en sus ritos. 
                No habrá contacto físico, pero estaremos conectados de otra forma. También tendremos la oportunidad de compartir momentos espirituales con las personas con las que vivimos. 
                Recordemos que la familia es la iglesia doméstica. Yo creo que la pandemia ha afectado la Iglesia, pero también nos ha llevado a repensarnos, a imaginar nuevas formas, nuevas ritualidades, nuevos gestos.
                PJ: 	¿Qué reflexiones teológicas surgen a partir de esta situación?
                JLM: La teología ha jugado parte en las actuales circunstancias. La teología ha dicho una palabra, pero valdría la pena preguntarse ¿Qué tipo de palabra? He leído algunas reflexiones teológicas que se han quedado en una visión apocalíptica. Algunas sacan a relucir textos del Antiguo o del Nuevo Testamento para afirmar que esto es una señal de Dios, que es un castigo divino, que los días de la humanidad están contados, etc. Lamento este tipo de reflexiones. 
                En cambio, aplaudo aquellas que nos invitan a pensar en una creación que está interrelacionada. Somos seres que estamos conectados con todos y con todo, con nuestra familia, con los que hacen parte de mi círculo vital, con la gente de mi país y con el planeta mismo. 
                Lo que yo haga o deje de hacer va a afectar a todos, a la naturaleza. Esto explicaría por qué el Covid-19 se ha expandido por todo el mundo.
                Otras reflexiones que me han gustado son aquellas que despiertan en el ser humano la pregunta: ¿Qué puedo hacer yo frente a lo que está pasando? Hemos visto gestos de una generosidad enorme, de los trabajadores de la salud, de los ciudadanos de a pie y de algunos empresarios. 
                Eso demuestra cómo esta situación puede revelar nuestra grandeza. 
                Eso no significa que no haya otros tratando de salvar su propio pellejo y estén pensando en su propio bienestar.
                PJ: 	¿Sería correcto comparar esta pandemia con las plagas u otros hechos que menciona la Biblia?
                JLM: Algo que ocurre en el ser humano frente a situaciones es pensar en el fin del mundo y ver si alguien lo predijo. Por ejemplo, está agotado el libro de la psíquica Silvia Browne sobre el fin de los días. También algunos han recordado las profecías de Nostradamus. 
                Otros han sacado versículos descontextualizados de la biblia como Lucas 21:11 o Mateo 24: 36 o cualquier otro, para justificar lo que está pasando. Nos encanta predecir el fin del mundo y decir “yo tenía la razón y no me pusieron cuidado”. 
                Este tipo de pensamientos generan zozobra, miedo, pánico. Estos pensamientos apocalípticos nos llevan a una cierta pasividad porque sentimos que ya no hay nada que hacer. 
                También exacerba la xenofobia, el rechazo, la exclusión y la sospecha hacia los otros.
                PJ: 	¿Cuál sería la visión más acertada?
                JLM: No debemos entender el virus como un castigo divino, como algunos andan diciendo. Se trata de una oportunidad para pensar cómo estamos viviendo nuestra vida, cómo estamos tratando a los otros y al planeta.
                Muchas reflexiones acertadas son posibles: en torno al daño del planeta, la manera como lo hemos convertido en un depósito de basura, como dice el Papa. 
                Otra reflexión que está por hacer es si la economía de mercado en la cual estamos enfrascados ha sido un fracaso. Otra idea que me parece importante: lo que realmente necesitamos para vivir. 
                Estos días hemos vivido sin usar el carro. También hemos tenido tiempo para hablar con nuestra familia, para saludar a familiares y amigos con los cuales hacía tiempo no nos hablábamos, para cuidar a nuestros padres y mayores. 
                Espero que no nos suceda que cuando termine la pandemia volvamos a ser los mismos de antes. 
                Que volvamos a no preocuparnos por nada ni por nadie. Si esto ocurriera, no aprendimos la lección.
                PJ: 	¿Cómo puede afectar el no poder asistir a los rituales de Semana Santa?
                JLM: La pandemia va a afectar los rituales a los cuales estamos acostumbrados. Como lo religioso está conectado con otros ámbitos, otros sectores también se van a ver afectados. Para nadie es desconocido que la Semana Santa mueve muchos renglones de la economía, por ejemplo, Popayán. Allá habrá una afectación muy grande.  
                Sin embargo, esta semana será una oportunidad para no quedarse en las formas. 
                No tendremos la posibilidad de juntarnos masivamente, pero sí tendremos la posibilidad de recordar el verdadero significado de cada celebración. 
                Frente a los mismos textos de la palabra, las liturgias, las reflexiones, tendremos momentos íntimos para saborear de otra manera lo que significa creer en la vida, pasión, muerte y resurrección de Jesús.
                PJ: 	¿Qué mensaje enviar a las personas que extrañarán los rituales?
                JLM: José María Castillo, teólogo jesuita español, tiene una reflexión a partir de la pregunta: ¿qué es más importante, la religión o el evangelio? Podría reformularla de otra manera: ¿qué es más importante, celebrar las exterioridades religiosas o vivir internamente el mensaje del evangelio? La respuesta es lo segundo. 
                Las expresiones religiosas son formas para celebrar la fe que vivo. Por eso, lo más importante es la fe que profeso con mi vida. Yo puedo ir a misa todos los domingos, escuchar la palabra y comulgar sin que nada en mí se transforme. 
                Sigo siendo el mismo trásfuga que maltrata a su pareja, que violenta a sus hijos, que roba la empresa en la que trabaja y que le echa el carro encima a los peatones. 
                Entonces, no pasa nada en mí, pero me siento bien porque voy a misa. Esa religiosidad realmente está lejos del evangelio. 
                Lo importante es vivirlo, sentir la buena nueva que nos invita a amar, a servir, a perdonar, a solidarizarme con los otros.
                Esta semana santa va a ser diferente pero no debería serlo solo por lo nuevo en el culto o en las celebraciones. Podrían ser celebraciones presididas por el arzobispo. pero si no acontece nada en nosotros no sirve de mucho.
                PJ: 	Con las imágenes de una recuperación de la naturaleza, ¿qué reflexión se puede hacer del cuidado de la casa común de la que habla la encíclica Laudato Sí?
                JLM: La propuesta que hace el Papa Francisco es la de apostarle a una ecología integral. Si es integral, no se queda con el problema medioambiental, sino que nos lleva a revisar cómo estamos gestionando nuestra economía, nuestra política, nuestra sociedad, nuestra educación. Por eso, entre otras cosas, tenemos que revisar qué tipo de profesional estamos formando en la universidad. Además, hay que prestarle atención a las prácticas que tenemos, en pequeño y en grande, en todos los ámbitos, esas prácticas que están haciendo que el planeta vaya de mal en peor. 
                La ecología integral interpela nuestra espiritualidad. De hecho, la relación ser humano-mundo nos permite crecer espiritualmente. Es decir, yo no puedo decir que soy un ser espiritual si tengo prácticas contaminantes y de deterioro del planeta. 
                Sin duda, estamos viviendo un momento inédito que nos exige pensar en lo que somos y lo que estamos haciendo. De esto dependerá nuestro futuro.
                </p>
                    </div>

                    <div className="page">
                      <h2>Capítulo 9:Indulgencia por COVID</h2>
                      <p>INDULGENCIA POR COVID19 
                Por vez primera en la historia milenaria de la Iglesia Católica, el Papa reza este viernes 27 de marzo del 2020 en solitario ante la inmensa plaza de San Pedro vacía y da la bendición y la indulgencia plenaria al mundo por la pandemia de coronavirus que lo azota. 
                Se trata de un rito inédito durante el cual Francisco dará la bendición “Urbi et Orbi” (a la ciudad y al mundo) a todos los fieles, retransmitido por televisión, internet y radio a las 18:00 hora de Roma, 17:00 GMT (12:00 de Ecuador). 
                La bendición ha permitido a los más de 1 300 millones de católicos obtener la indulgencia plenaria, es decir, el perdón de sus pecados, en un momento tan difícil, con medidas de confinamiento que afectan a más de 3 000 millones de personas. “Presidiré un momento de oración en el atrio de la basílica de San Pedro. 
                CON LA PLAZA VACÍA. Desde ahora, invito a todos a participar espiritualmente a través de los medios de comunicación. Escucharemos la Palabra de Dios, elevaremos nuestra súplica, adoraremos al Santísimo Sacramento, con el cual al término daré la bendición Urbi et Orbi y a la cual se añadirá la posibilidad de recibir la indulgencia plenaria”, anunció el mismo Papa Francisco hace varios días. 
                La imagen del jefe de la Iglesia Católica que reza solo ante la inmensa explanada por el fin de la guerra contra un enemigo invisible que ha causado 25.000 muertes hasta ahora, resulta casi cinematográfica. 
                Ante el dramático momento que vive la humanidad, el Papa Francisco decidió dar una bendición extraordinaria, la Urbi et Orbi, la misma que los pontífices suelen impartir sólo el 25 de diciembre y el Domingo de Pascua, fechas en que se recuerda el nacimiento y la muerte de Jesús. 
                UN EVENTO EXTRAORDINARIO. “Se trata de un evento extraordinario presidido por el Papa, en un momento particular, cuando el mundo cae de rodillas por la pandemia. Un momento de gracia extraordinaria que da la oportunidad de vivir este tiempo de sufrimiento y miedo con fe y esperanza”, explicó en una nota el Vaticano. 
                Desde que se desató la epidemia de coronavirus en Europa, que golpea con particular fuerza a Italia y España, el Papa Francisco se ha pronunciado en varias oportunidades, recordando en particular a los médicos y enfermeras, en la primera línea de la lucha, e instando a los sacerdotes a acompañar a los enfermos y moribundos.
                El pasado 25 de marzo participó en una oración ecuménica mundial con todos los cristianos del mundo, para rezar el 'Padre Nuestro', la oración que Jesús nos enseñó “, dijo, en un vídeo transmitido desde la biblioteca del palacio apostólico del Vaticano. 
                La bendición Papal desde el atrio de San Pedro será particularmente seguida en América Latina, el continente donde reside el mayor número de católicos y tierra del pontífice Francisco, nacido en Argentina. Las diócesis de toda la región se han movilizado para invitar a los fieles a la oración. 
                El Papa argentino suele mencionar cada mañana la pandemia del coronavirus antes de celebrar la misa matutina privada que desde la crisis es transmitida en directo desde la pequeña capilla de su residencia en la Casa Santa Marta, donde vive dentro del Vaticano. En una alusión al importante papel de la Iglesia Católica durante las pestes que azotaron a Europa en el pasado, el Papa salió el pasado 15 de marzo del Vaticano para rezar ante el crucifijo de la iglesia romana de San Marcello, que fue sacado en 1922 en procesión por los barrios de Roma para invocar el fin de la peste que la asolaba, por lo que se considera "milagroso". 
                El crucifijo ha sido trasladado a la plaza de San Pedro para la bendición de este viernes. Francisco, que ha tenido que limitar sus actos y agenda para evitar eventuales contagios, se prepara a celebrar la primera Semana Santa de la era moderna sin fieles ni procesiones.
                .</p>
                    </div>

                    <div className="page">
                      <h2>Capítulo 10:El Fútbol en el Vaticano</h2>
                      <p>EL FÚTBOL EN EL VATICANO
                El primer partido de fútbol disputado en el Vaticano tuvo lugar un lejano 1947 con la disputa de un cuadrangular entre trabajadores de la Santa Sede. 
                La final enfrentó a los trabajadores de las Villas pontífices y los de la Fábrica de San Pedro. El partido tuvo que ser suspendido debido a una fuerte riña entre jugadores y público, y como castigo se autoimpuso la prohibición del fútbol “competitivo” en tierras Papales, limitándose a simples pachangas entre oficinas para evitar repetir los hechos de 1947.
                CAMPIONATO DELLA CITTÀ DEL VATICANO. 
                En 1972 el fútbol “competitivo” en el Vaticano volvió con la creación de la Coppa Amicizia, que posteriormente cambiaría su formato y nombre por el de Campionato della Città del Vaticano. Sus clubes, presididos todos ellos por el Papa de Roma, están formados exclusivamente por trabajadores del Vaticano y familiares directos que representan a varios departamentos del Estado.
                PRIMER CLUB DE FÚTBOL DEL VATICANO
                Es el SS Hermes Musei Vaticani, fue fundado previamente a la constitución de la liga y estaba formado por los custodios, restauradores y conserjes de los Museos Vaticanos, cuyo nombre proviene de la copia de la estatua de Praxíteles que representa a Hermes, colocada en el Cortile Ottagono del Museo Pio-Clementino. 
                Posteriormente, se formaron otros equipos: 
                1934. El FC Guardia Suiza, 1934
                1065. Inicialmente SS Hermes, fue el primer club de la liga vaticana fundado en 1965.
                1968. El equipo de la Gendarmería.
                1969. Los equipos de la Fabbrica di San Pietro (los Galletti), el Ariete A.P.S.A. (Amministrazione Patrimonio Sede Apostólica) y el Hércules Biblioteca, que compitieron en el Torneo Hermes, un embrión de la futura Coppa Amicizia. 
                </p>

                <p>Siete equipos compitieron durante la primera temporada, los empleados de L’Osservatore Romano, el periódico del Vaticano, se adjudicaron el primer campeonato. 
                La liga actual se fundó como Coppa Amicizia, posteriormente rebautizada como Campionato della Citta Vaticano, por Sergio Valci, que fue presidente de la FA y empleado de la sanidad vaticana hasta su muerte en 2012.
                1985. Se creó una copa secundaria conocida como la Coppa ACDV, la misma que en el año de 1994, pasó a llamarse Coppa Sergio Valci. 
                2007. El Fortitudo, formado por empleados de varios departamentos) y la Vatican City Rappresentativa OPBG del Hospital Pediátrico Bambino Gesú. 
                2007 Empezó la Supercopa Vaticana y en ella se enfrentan el ganador del Campeonato della Citta Vaticano y el ganador de la Coppa ACDV. 
                2019 2020. Los últimos clubes que disputaron el campeonato de la temporada 2019-2020 son el Musei Vaticani FC (inicialmente SS Hermes, primer club de la liga vaticana fundado en 1965), el FC Guardia (Guardia Suiza, 1934), el Dir Tel Vatican Team (Telecomunicaciones Vaticanas), la Pontifica Universita Lateranense, el Archivio Segreto, el Dirseco, el Fortitudo 2007 (formado por empleados de varios departamentos) y la Vatican City Rappresentativa OPBG (del Hospital Pediátrico Bambino Gesú). 
                Otros clubes históricos son el Santos FC, la Associazione SS Pietro e Paolo (ganador de 4 ligas), Virtus Vigilanza (ganador de 2 ligas), San Pietro Team, L’Ariete de APSA, L’Osservatore Romano (ganador de 3 ligas), Poste Vaticane (ganador de 2 ligas), Servizi Tecnici, Governatorato, L’Hercules Vaticana, Malepeggio Edilizia, Tipografía Osservatore Romano, Servizi Economici y Radio Vaticana, Telefoni 
                </p>
                        
                <p>SCV, A.S. Cirioni, Galácticos Musei Vaticani y CIE Telemática entre otros.
                Los encuentros de este peculiar torneo amateur se disputan actualmente en el complejo de la Associazione Sportivo La Salle, en el oeste de Roma, aunque históricamente el campo principal fue el Cardinale Francis Joseph Spellman, mucho más grande con capacidad para poco más de 500 espectadores y con vistas espectaculares a la cúpula de San Pedro. Partidos y entrenamientos tienen lugar fuera del horario laboral, mientras que los días de partido son los lunes y los martes. 
                Los uniformes de cada equipo son donados ocasionalmente por organizaciones y benefactores, mientras que el gobierno del Vaticano cubre el déficit económico de los clubes. 
                El Campionato della Città del Vaticano se disputa entre los meses de octubre y mayo de cada año, con una pausa de dos meses en diciembre y enero.
                LA SELECCIÓN ABSOLUTA DEL VATICANO
                La Selezione di Calcio della Città del Vaticano es el equipo de fútbol que representa a la Ciudad del Vaticano bajo el control de la Asociación Deportiva Amateur del Vaticano, con sede en el Cortile di San Damaso del Vaticano. Su actual presidente es DOMÉNICO RUGGERIO, mientras que el italiano Gianfranco Guadagnoli es el actual entrenador tanto de la selección masculina como femenina. 
                2010 el seleccionador nacional del Vaticano fue el prestigioso exfutbolista y entrenador GIOVANNI TRAPATTONI. Su primer partido en el santo banquillo tuvo lugar el 23 de octubre de 2010, cuando la Ciudad del Vaticano se enfrentó a un equipo compuesto por policías financieros italianos. “Cuando me retire, me gustaría ser entrenador del Vaticano” aseguró la leyenda del AC Milan, y así fue. 
                </p>       

                <p>Hay que remontarse hasta el año 1985 para rememorar el debut oficial de la selección masculina, que acabó con una victoria por 3-0 contra un conjunto formado por periodistas austriacos.
                En 2018, nació su homónima femenina. La actual plantilla de jugadores que conforman la selección de la Ciudad del Vaticano está formada en su totalidad por empleados y familiares de estos: policías, trabajadores de correos, funcionarios del gobierno y miembros de la Guardia Suiza Pontificia, el ejército de facto del Vaticano, encargado de proteger al Papa. Dado que la mayoría de los ciudadanos del Vaticano son miembros de la Guardia Suiza, no es posible reunirlos en gran número durante mucho tiempo, por lo que la selección juega muy pocos partidos.
                Hasta día de hoy la selección del Vaticano a lo largo de su historia ha disputado más de 20 partidos, solamente ganando al SV Vollmond suizo el 3 de febrero de 2006 por 5 a 1, y contra el conjunto alemán Lutherstadt Wittenberg un 17 de junio de 2015 por un gol a cero. Su rivalidad histórica más destacada ha sido la que ha mantenido a lo largo de los años con el principado de Mónaco, con el que ha cosechado un empate y tres derrotas en 2002, 2011, 2013 y 2014 respectivamente. 
                En 1994 consiguió un meritorio empate contra los suplentes de la selección absoluta de San Marino. Sus dos mayores derrotas tuvieron lugar ante la selección nacional Palestina y el Borussia Mönchengladbach, con resultados de 9-1 y 0-8 respectivamente. Sus jugadores históricos son Antonino Gart, Pablo Enrique Amaro y Marcello Rosati, todos ellos con 5 partidos disputados. 
                En abril de 2019 se anunció que el equipo había firmado el primer patrocinador de su historia, Poderi di San Pietro, una bodega familiar de Milán. El acuerdo se alcanzó tras asegurarse de que la organización cumplía los estrictos criterios éticos establecidos por el equipo. Anteriormente, la Asociación fue contactada por una organización de apuestas deportivas que ofrecía un patrocinio muy importante, pero fue rechazada por no ajustarse a esas normas éticas. 
                Desde 2017 la marca Sportika tiene el santo honor de vestir a sus jugadores de color amarillo y blanco. 
                </p>             
                    </div>

                    <div className="page">
                      <h2>Capítulo 11:El Fútbol es Sagrado</h2>
                      <p>Con la Clericus cup, el fútbol es sagrado. ¿Usted le tiene fe al María Mater Ecclesiae? ¿Es simpatizante, hincha o barra brava de éste equipo? ¿Conoce su historia, la superstición de cada jugador, sus cábalas? ¿Piensa que la Clericus Cup será más trascendente que la Jules Rimet? 
                Alfredo Ves Losada escribió una nota sumamente interesante en torno al fútbol, al Vaticano y el carisma de sus motivaciones. Ese artículo me llevó a escribir éste que seguramente llevará a un poeta, escritor o periodista a escribir otro. 
                Un rosario de palabras jadeantes, votos y sortilegios entre arco y arco, entre el punto del penal y el silbato divino. Ante un tiro libre, ¿usted es capaz de rezar un Ave María?
                Pues bien, para muchos la Clericus Cup es llamada en estos días la Champions League de la Santa Sede. Todo nació, según cuenta la leyenda, de la cabeza (no del cabezazo) del cardenal Bertone, Tarsicio. Ningún parentesco con nuestro amado y admirado Bertoni, Daniel. 
                Este cardenal convenció a Benedicto XVI llamado por las malas lenguas “el Beckenbauer de la Iglesia”- para organizar un torneo de fútbol. Euforia y esoterismo. Se habló de la vidriera, de sponsor, de evangelización, de fieles, de la actualización. Oficios y comunión de santos. 
                Creo que también de lo ventajoso para luchar contra el aborto, los homosexuales y los anarquistas. 
                Gracias a Dios tuvo el visto bueno de su Santidad. Ergo, el cardenal convocó a dieciséis institutos romanos de formación diocesana. Y proliferaron equipos de fútbol con los seminaristas. 
                El torneo se puso en marcha con jugadores de más de cincuenta nacionalidades. Un milagro: genuflexión y desplazamientos.
                El Banco del Espíritu Santo aparentemente no intervino en ninguna publicidad, pero colaboró con su mirada celestial. Una de las canchas auxiliares al Oratorio de San Pedro formará parte de la efemeridografía. Otro equipo: el Colegio Tiberino que intentó pasar a cuarto de final en el Grupo A.
                Los nombres de los seleccionados son infernales, zigzagueantes: Pontificio Seminario Gallito, North American, Pontificio Seminario Romano Maggiore, Universidad Lateranense, Redemptoris Mater… este último un equipo con letanías. 
                Un hallazgo bíblico, un emblema de la globalización. 
                También participa un equipo cuyo nombre nos produce escalofrío: Legionarios de Cristo. 
                Conservadores en el juego, dicen. Cuatro, cuatro, dos, dicen. Sin pecado concebido, dicen.
                Hay banco de suplentes, entrenador, director técnico. Los seminaristas de Antioquia, los nigerianos y los colombianos parecen que dan que hablar. 
                En el campo Cardinali Spellman - una leyenda como el Maracaná - es la cancha principal del Oratorio de San Pedro. Al entrar casi todos se persignan, otros besan el césped, ingresan por lo general con el pie derecho. Entran corajudamente. 
                De afuera se escuchan los gritos de aliento, las hinchadas no tiran papelitos, pero despliegan rezos, miran al cielo y entonan cánticos que no se parecen a los gregorianos. Códigos. Se escucha: “tocando de primera”, “distribuyan la pelota”, “vayan por las puntas”, “se marca a presión”. 
                En el Colegio Marista se hizo una especie de concentración con un almuerzo balanceado: pavo. El cocinero fue el padre Ignacio, Ignatius si usted conoce algo de latín. Hay sobrenombres, motes. Todo con beatitud. 
                Algunos, devotos de la Virgen de Guadalupe, hacen sus pedidos. Mexicanos, qué duda cabe.
                UN GOL. El jugador levanta el puño derecho. Estatura canónica. Maradona, susurran. Admite, el goleador mira y admite. Pero hay más. Va hasta la platea y lo grita. Las matracas y los redoblantes hacen lo suyo. Está filmado: matracas y redoblantes. 
                Describo, cuento aquello que leí y pude ver. Poco, poco. Y la gente corea, se abraza, se besa, tocan el cielo con las manos. No hay insultos, no hay laicos ni ateos ni desvergonzados. Reina la pulcritud, la pureza y el balón tiene algo espiritual, algo mágico. Impoluto, angelical, asexuado. 
                Ninguna relación con el Mundial de Fútbol Gay que se hizo en Buenos Aires. Acá no hay maricas ni travestis ni onanistas. Ni monaguillos ni prostitutas. (Estoy seguro que ninguno de ellos vio Sin techo ni ley de Agnés Varda ni Nadie sabe de Hirokazu Koreeda. Tal vez me equivoque, pero no creo, no creo.)
                Hay tarjetas amarillas, no por el color de la bandera del Vaticano. Crearon una tarjeta azul, una tarjeta intermedia. 
                Hay spray, ídolos, ritos. También algunos periodistas, devotos, moralizantes. 
                No hay denuncias de proxenetas, aunque el nombre de Marcial Maciel da vueltas en el campo de juego y sus alrededores. Silencio de monasterio. 
                Los jugadores son, además, alumnos destacados. Estudian filosofía, teología, bioética. Algunas camisetas llevan el auspicio de Lotto en el pecho. 
                LA COPA. Tiene forma de sombrero como los que lucían los seminaristas hasta los 90, con dos botines al pie. 
                OBEDIENCIA DEBIDA. Al finalizar el encuentro se siente el olor a transpiración, no a santidad. No se sabe por qué, pero muchos seminaristas brasileños no fueron convocados. En algunos el resentimiento se hizo ver. Culpas, algunos golpes beneméritos. Confesionario y a verlo todo detrás del alambrado. De Darwin no se habla. Ni de Galileo.
                Hay fotos en los colegios de los muchachos. Alguien dice: “yo no estoy para hacer banco”. 
                Aunque parezca mentira algunos les agrada la cumbia villera. Citan a Messi y a Carlitos Tévez. 
                Saben que mañana les espera los abdominales, los piques, las carreras cortas, la elongación. Las duchas son como las de “la Roma”. 
                Los espera la misa, la música y el reposo. Se juegan dos tiempos de treinta minutos cada uno. Afuera, en los jardines, se escuchan los grillos. Moralejas eclesiásticas. “Que Dios te bendiga”, acotan al retirarse. 
                El encargado del bufet les pregunta sobre el resultado, cómo jugaron, cómo están. En el bufet hay un bello crucifijo, grande, detrás de la caja, arriba del mueble de las gaseosas. Sutilezas, panoplias, platerías.
                Felizmente, desde el día en que nací, soy de Independiente, de los Diablos Rojos. Como toda mi familia: padres, tíos, hermanos, primos. 
                En la cancha aparece un “fans” disfrazado de diablo y en la popular una bandera lleva con claridad un número amenazante: 666. 
                Una vez -hace años- pisé ese césped, caminé lo místico. Un proceso de levitación. 
                No hay iglesia que nos ampare, me digo. Tal vez de allí el agnosticismo; de esas banderas rojas, de esa gente voluptuosa, de esos seres indolentes (como yo) que se emocionan en ese templo pagano, ateo, que sólo tienen fe en Lucifer. El de la visera, el de la Cordero, el de la calle Bocchini.
                </p>
                    </div>

                    <div className="page">
                      <h2>Capítulo 12:Mundial de Fútbol Pontificio</h2>
                      <p>MUNDIAL DE FÚTBOL PONTIFICIO 
                La Clericus Cup fue ideada, nada menos, que, por el cardenal, secretario de Estado Vaticano y actual camarlengo, TARCISIO BERTONE, un reconocido amante del deporte rey que incluso como obispo de Génova llegó a comentar por radio partidos de la liga italiana.
                El Mundial de Fútbol Pontificio es organizado por el Centro Deportivo de Futbol Italiano, con el patrocinio de la Conferencia Episcopal Italiana, el Pontificio Consejo para los Laicos y el Pontificio Consejo de la Cultura. 
                Un torneo que se disputa en el oratorio, bajo la cúpula de San Pedro, cerca del Vaticano. Participan 382 jugadores de 67 países, en 16 equipos formados por sacerdotes y seminaristas que estudian en Roma. 
                Una de las características es el “tercer tiempo” se gane o se pierda, al final del partido los equipos rezan juntos. Los Jugadores son representantes de los cinco continentes
                El Papa Francisco fue nombrado el capitán de todos. Por eso los equipos llevan en sus camisetas la frase "El Papa Francisco es mi capitán". El pontífice argentino envió un mensaje de salutación a los participantes: "Les agradezco que me hayan nombrado capitán y, como tal, los exhorto a no cerrarse en la defensa, sino en atacar y jugar en equipo nuestro partido, que es el del Evangelio". 
                Por ello, el lema y la consigna de la Clericus Cup es “juguemos al ataque el partido del evangelio”.
                El torneo adquiere particular significación pues se juega en el bicentenario del nacimiento de San Juan Bosco, definido por padre Alessio Albertini como "un gran santo educador que hizo del "juego" el terreno fecundo para conquistar las almas".  (ANSA)
                </p>
                    </div>

                          <div className="page">
                      <h2>Capítulo 13:Así es el Fútbol en el Vaticano</h2>
                      <p>ASÍ ES EL FÚTBOL EN EL VATICANO
                El pequeño país de El Vaticano no solo cuenta con una selección nacional, sino también con una liga local bien constituida. Este pequeño estado con poco más de 900 habitantes guarda no solo un gran legado religioso e histórico, sino también que en los últimos años ha comenzado a dar qué hablar por su interés por el fútbol. 
                Uno de los grandes precursores del fútbol en El Vaticano fue el recordado Karol Wojtyla. La leyenda cuenta que inició su pontificado, como Juan Pablo II, la mañana del 22 de octubre de 1978 para evitar que coincidiera con un partido entre la Roma y el Bolonia. 
                El llamado ‘Papa Viajero’ fue portero en su juventud y socio del Barcelona, por lo que el balompié fue uno de sus grandes intereses. Y si bien el fútbol ganó mucho espacio con Juan Pablo II, lo perdió durante el Papado de Benedicto XVI, quien lo relegó a un segundo plano.
                La llegada del Papa Francisco volvió a poner de moda el fútbol en El Vaticano. Hay que recordar que es un conocido hincha del San Lorenzo de argentina y ha recibido a más de un equipo profesional.
                EL CAMPEONATO. Llamado Liga ACDV, comenzó a disputarse en 2007. Todos los partidos de la ‘Clericus Cup’, se disputan en el estadio Pio XII que tiene una capacidad para cerca de 2 mil espectadores.
                Hay que resaltar, que la selección de El Vaticano no forma parte de la FIFA y es uno de los combinados que integran la NF-Board, la asociación internacional de equipos de fútbol amateur comunal y provincial. 
                En los últimos meses se extendió el rumor de que participaría en la fase de clasificación de la Eurocopa por invitación del presidente de la UEFA, Michael Platini, lo cual no sucedió; pero eso no quita el sueño de este pequeño país de competir en un futuro con las grandes selecciones de Europa.
                Hasta la fecha ha disputado encuentros amistosos ante equipos como San Marino y Mónaco, con este último registra un empate a cero.
                LAS CANCHAS. Son realmente espectaculares. No hay pasto, sino césped sintético. En el lugar se respira pura tranquilidad. De fondo se ve la Cúpula de San Pedro. Es muy difícil no sentir unas terribles ganas de ponerse los cortos. “¿Sabes lo que es jugar en un lugar así?  -Explica Santiago- Es un privilegio”.
                El equipo más ganador es Mártires de Norte América. “Es difícil armar el equipo. Algunos sacerdotes son grandes, no están para correr. Y otros equipos tienen un promedio de edad de 20 años. Yo enfrento a pibes que vuelan, y hacen la diferencia”. 
                Sólo pueden jugar curas o seminaristas, aunque DT puede ser cualquiera. Este año se incluyó LA TARJETA AZUL: CINCO MINUTOS DE EXPULSIÓN PARA EL QUE BLASFEMA. También se reza antes y después de cada partido. “Se juega fuerte, queréis ganar y a veces te enojas un poco, pero normal. Es raro que haya algún lesionado”, dice el padre.
                PADRE GIOVANI TRAPATTONI. Ex seleccionador de Italia y amigo íntimo del cardenal, fue uno de los primeros entrenadores de la selección vaticana e impulsó fuertemente el desarrollo del fútbol competitivo dentro de la Santa Sede. 
                PADRE TARCISIO BERTONE. Es el segundo hombre con más poder en el Vaticano, es el Secretario de Estado de la Santa Sede. Le conocen como “El señor de los Anillos, justamente porque él ya les puso el anillo Papal a Benedicto XVI y, a nuestro Papa Francisco. 
                Hay mil historias sobre este hombre de la fe, pero en estas líneas sólo interesa su pasión por el fútbol: fanático de la Juventus y de la redonda de cuero (hasta llegó a comentar los partidos del Genoa y la Sampdoria para una radio), soñó con tener una selección del Vaticano. Un creyente de Dios y de la pelota. 
                Así le dio inicio a la Clericus Cup, el campeonato oficial de curas y seminaristas, un torneo que se juega a metros de la Capilla Sixtina, una competencia pensada para ser la base de ese futuro seleccionado amarillo y blanco.
                En un momento, Bertone llegó a decir que “si pusiéramos a todos los estudiantes brasileños de nuestras universidades pontificias, tendríamos un equipo magnífico”. 
                Su fanatismo por el fútbol llegó a tal punto que una anécdota de la Copa del Mundo de Italia 90 lo pinta de cuerpo entero: selección por selección se dedicó a relevar el origen de todos los jugadores y descubrió que cuarenta y dos (42) de ellos habían tenido algún pasado futbolístico en un oratorio o en un centro salesiano de su país.
                PADRE SANTIAGO CAUCINO.  Es uno de los pocos que conoce a fondo la Clericus: jugó las siete ediciones que se han disputado. Nació en Pompeya, un porteño hincha de River que hoy pisa los 40 años y que vive en el Vaticano desde el 2001.
                Él siempre defendió los colores del equipo de Sedes Sapientiae (Sede de la Sabiduría). “Siempre jugué de cinco, un volante de marca, aguerrido. A veces me ponen de dos. Jugar al fútbol, para mí, es como una bendición, qué sé yo, siempre me gustó. 
                Y la Clericus Cup es fantástica porque te permite competir en un ambiente de paz, de buena onda, jugar te genera alegría, el que es futbolero sabe de lo que hablo”, cuenta con pasión.
                PADRE ALESSIO ALBERTINI. Asesor eclesiástico del Centro Deportivo Italiano (CDI) que acoge la Clericus Cup, el torneo de fútbol de los seminaristas y religiosos que estudian o residen en la ciudad eterna. Albertini asesora espiritualmente el torneo y además hace de puente entre el CDI, la Conferencia Episcopal Italiana y la Ciudad del Vaticano.
                Albertini aseguró que esta manifestación deportiva también hace parte de la formación integral de los sacerdotes y seminaristas que probando la alegría del deporte la pueden compartir con los jóvenes. Una evangelización práctica y divertida a través del fútbol. 
                “El deporte debe volver a ser una fiesta” dijo. Además, considera que “pocas experiencias como el deporte saben unir tanta diversidad”. 
                «Queremos decir a los seminaristas, a los sacerdotes a través de este torneo: llévate este tesoro y ahora compártelo con los demás» 
                «La Clericus Cup nace con el deseo de animar y promover la actividad deportiva de las personas que debido a su ministerio se preparan a vivir en medio a los jóvenes para los cuales el deporte tiene una gran importancia. 
                No se puede olvidar que, en estos tiempos de crisis educativa, el mundo del deporte acoge tantos jóvenes. 
                El deporte es una bonita ocasión para acercarse y hacer crecer a las nuevas generaciones. Queremos decir a los seminaristas, a los sacerdotes a través de este torneo: llévate este tesoro que han experimentado en la cancha lleno de amistad, lealtad, respeto hacia los demás, alegría, fiesta…y ahora compártelo con los demás».
                «El deporte se presenta como un grande baúl de valores. En esta perspectiva, me gusta pensar a la parábola del “tesoro en el campo”. 
                Por su capacidad de involucrar, apasionar y traer al encuentro, el deporte es un verdadero laboratorio para aprender a perseverar, aceptando también los propios límites, considerando que la victoria no lo es todo. 
                Es también el encuentro e integración de historias, culturas y esperanzas diversas. Creo que pocas experiencias como el deporte saben unir tanta diversidad. 
                El deporte exalta la belleza humana, más allá de la curiosidad de que jueguen sacerdotes, donde está el hombre, la Iglesia no puede sustraerse a hacer presencia».
                «El modelo deportivo que hoy parece tener mayor acogida, mediado por el deporte de vértice y narrado por los medios de comunicación, es el que celebra con estreches la victoria del individuo, la consecuencia es el menosprecio hacia los demás. 
                Esta visión corre el riesgo de celebrar exclusivamente la victoria, sobre todo aquella a cualquier precio y encontrando siempre en la derrota una razón de frustración y rabia. 
                El deporte en cambio, debe volver a ser una fiesta. Celebrar que has tenido la posibilidad de participar; porque te han ofrecido una amistad inesperada; y finalmente porque un cuerpo que se mueve es la celebración de la vida. Como dice Jesús en el Evangelio: he venido para que tengan vida y la tengan en abundancia».
                MONSEÑOR CLEMENS. Citando al Papa aseguró que en el deporte hay tres valores que son importantes en el trabajo de equipo: la belleza, la gratuidad y la camaradería. Desde ahí se “construyen valores comunes, el trabajo en equipo es un excelente ejercicio para aprender cómo hacerlo”, indicó.
                MONSEÑOR MELCHOR SÁNCHEZ. Secretario del Consejo Pontificio para la Cultura, explica en un comunicado: "La Clericus Cup debe valorar la importancia del juego real, eliminado las razones competitivas se relacionan con el mercado. 
                Los jugadores están llamados a ser pastores y maestros. Y los educadores deportivos son a menudo con figuras clave en el crecimiento de la juventud más que padres y profesores". También subrayó la importancia del oratorio, una de las piedras angulares de la misión de la Iglesia y las parroquias. 
                El objetivo, según monseñor Sánchez, es cambiar la lógica del deporte como canal de éxito y sobresalir sobre los demás. 
                Por el contrario, es ver el deporte como un medio para estar en comunidad y celebrar el “estar juntos”. 
                El objetivo de este torneo es utilizar el deporte como una herramienta en aras del desarrollo social e inculcar en las parroquias, iglesias y oratorios la disciplina deportiva.
                </p>
                    </div>

                    <div className="page">
                      <h2>Capítulo 14:Algo más de la CLERICUS CUP</h2>
                      <p>ALGO MÁS DE LA CLERICUS CUP 
                En la XII Edición de la Clericus Cup, torneo de fútbol promovido por el Centro Deportivo Italiano (CSI), participan sacerdotes y seminaristas de 70 países diferentes. En la mañana del 23 de febrero, arranca la Liga de fútbol del Vaticano con “370 jugadores”. Esto lo explica el organizador del torneo y responsable de comunicación del Centro Deportivo Italiano Felice Alborghetti.
                El torneo este año cuenta con una novedad, “la presencia de un sacerdote para arbitrar este año los partidos” en los que jugarán 16 equipos formados por seminaristas, sacerdotes y universitarios provenientes de 70 países diferentes.
                Este torneo que se celebra anualmente, fue fundado en 2007 y desde entonces Radio Vaticana Italia lo retransmite desde sus micrófonos. Este año, la emisora pontificia tiene como intención proponer una especie de "todo el minuto a minuto de fútbol” de esta Clericus Cup. 
                GIANCARLO LA VELLA, director del programa deportivo “Non solo” de RVI asegura en unas declaraciones que la Clericus Cup “siempre han contado las historias de los participantes” y desde este año también se enfocarán “en la historia de los seminarios a los que pertenecen los jugadores".
                </p>
                    </div>

                          <div className="page">
                      <h2>Capítulo 15:La CLERICUS CUP en Capilla</h2>
                      <p>LA CLERICUS CUP EN CAPILLA
                JOSÉ MANUEL LLAMAS. Es sacerdote malagueño, estudia patrología en Roma y como miembro del equipo de fútbol del Colegio español participa en la Clericus Cup, indica que en, el deporte es fútbol y los equipos pertenecen a los colegios pontificios de la Ciudad Eterna, Roma. 
                Este campeonato de sacerdotes y seminaristas, "Es como la Champions League, salvando las distancias”, comparte las reglas del fútbol reglamentario, pero tiene alguna que otra peculiaridad, como la tarjeta azul, "si a alguno se le ocurre acordarse de algún familiar, estás 7 minutos sin jugar". 
                Se juegan dos tiempos de 30 minutos cada uno y cada equipo puede realizar cinco cambios en todo el partido.
                JUAN GABRIEL “YO DIGO” Es un cura futbolero, fans de Racing, es fantástico, conoce el campeonato del Vaticano. 
                Los curas somos personas normales y el fútbol es parte de uno. Yo nunca dejé de jugar, ahora estoy en el equipo de veteranos de Racing, con el Chelo Delgado, Fleita, Basualdo, Matute Morales, amigos que me hicieron un lugarcito. Cuando hice el seminario había dos canchas espectaculares y jugábamos hasta tres veces por semana. 
                Y en la tribuna hago trabajo de cura: me piden por bautismos, matrimonios, ayudo a alguno que anda mal con las drogas. 
                Tengo una gran relación con Francisco porque fue mi obispo y él quiere curas más humanos, mezclados con el pueblo y sus pasiones. Y el fútbol es un deporte bárbaro, es un cable a tierra, es formativo porque trabajas en equipo, luchas por el prójimo y hay reglas que se deben cumplir. 
                Es un momento para disfrutar y compartir. Es genial.
                </p>
                    </div>

                                  <div className="page">
                      <h2>Capítulo 16:TÍTULOS EN LA “CLERICUS CUP”</h2>
                      <p>TITULOS EN LA “CLERICUS CUP”
                  COLEGIO URBANO
            CAMPEON:		2014, 2015, 2017, 2019
            SUBCAMPEON: 		2016, 2018
            4to. LUGAR: 		2009, 2013
                REDEMPTORIS MATER
            CAMPEON: 		2007, 2009, 2010
            SUBCAMPEON: 		2008, 2014, 2015
            3er LUGAR:		2013
            4to. LUGAR: 		2017
                COLEGIO P. DE AMÉRICA DEL NORTE
            CAMPEON: 		2012, 2013, 2018
            SUBCAMPEON: 		2019
            3er LUGAR:		2009, 2010
            4to. LUGAR: 		2008, 2011, 2019
                MATER ECCLESIAE
            CAMPEON: 		2008, 2016
            SUBCAMPEON: 		2013
            3er LUGAR:		2007, 2009, 2017
            4to. LUGAR: 		2012
                UNIVERSIDAD PONTIFICIA GREGORIANA
            CAMPEON: 		2011
            SUBCAMPEON: 		2012, 2017
            3er LUGAR:		2015, 2016, 2018
                PONTIFICIA UNIVERSIDAD LATERANENSE
            SUBCAMPEON: 		2007
                ANGELICUM
            SUBCAMPEON: 		2011
                SEDES SAPIENTIAS
            SUBCAMPEON: 		2019
            3er LUGAR:		2011, 2012
            4to. LUGAR:		2007, 2014, 2015, 2018
                UCRO
            3er LUGAR:		2008
                COLEGIO BRASILEÑO
            3er LUGAR:		2010
                INSTITUTO TEOLÓGICO DE SAN PEDRO
            3er LUGAR:		2014
                  GUANELLIANI
            3er LUGAR:		2019
            4to. LUGAR:		2010
                PIO LATINO
            4to. LUGAR: 		2016
            CAMPEONES - VICECAMPEONES - 3RO Y 4TO.
            2007
            CAMPEON:	Redemptoris Mater
            VICECAMPEON:	Pontificia U. La-Teranense
            3er LUGAR: 		Mater Ecclesiae
            4to. LUGAR: 		Sedes Sapientias 
            2008
            CAMPEON: 		Mater Ecclesiae
            VICECAMPEON:	Redemptoris Mater
            3er LUGAR:		Ucro
            4to. LUGAR:		Colegio P. de América del Norte 
            2009
            CAMPEON: 		Redemptoris Mater
            VICECAMPEON:	Colegio P. de América del Norte
            3er LUGAR:		Mater 	Ecclesiae
            4to. LUGAR:		Colegio Urbano 
            2010
            CAMPEON: 		Redemptoris Mater
            VICECAMPEON:	Colegio P. de América del Norte
            3er LUGAR:		Colegio brasileño
            4to. LUGAR:		Guanelliani 
            2011
            CAMPEON: 		Universidad P. Gregoriana
            VICECAMPEON:	Angelicum
            3er LUGAR:		Sedes Sapientias

            4to. LUGAR:		Colegio P. de América del Norte 
            2012
            CAMPEON: 		Colegio P. de América del Norte
            VICECAMPEON:	Universidad P. Gregoriana
            3er LUGAR:		Sedes Sapientias
            4to. LUGAR:		Mater Ecclesiae 
            2013
            CAMPEON: 		Colegio P. de América del Norte
            VICECAMPEON:	Mater Ecclesiae
            3er LUGAR:		Redemptoris Mater
            4to. LUGAR:		Colegio Urbano 
            2014
            CAMPEON: 		Colegio Urbano
            VICECAMPEON:	Redemptoris Mater
            3er LUGAR:		Instituto Teológico de San Pedro
            4to. LUGAR: 		Sedes Sapientias 
            2015
            CAMPEON: 		Colegio Urbano
            VICECAMPEON:	Redemptoris Mater
            3er LUGAR:		Universidad P. Gregoriana
            4to. LUGAR: 		Sedes Sapientias 
            2016
            CAMPEON: 		Mater Ecclesiae
            VICECAMPEON:	Colegio Urbano
            3er LUGAR:		Universidad P. Gregoriana
            4to. LUGAR: 		Pio latino 
            2017
            CAMPEON: 		Colegio Urbano
            VICECAMPEON:	Universidad P. Gregoriana
            3er LUGAR:		Mater Ecclesiae
            4to. LUGAR: 		Redemptoris Mater 
            2018
            CAMPEON: 		Colegio P. de América del Norte
            VICECAMPEON:	Colegio Urbano
            3er LUGAR:		Universidad P. Gregoriana
            4to. LUGAR: 		Sedes Sapientias 
            2019
            CAMPEON:  		Colegio Urbano
            VICECAMPEON:	Sedes Sapientias
            3er LUGAR:		Guanelliani
            4to. LUGAR: 		Colegio P. de América del Norte.
            CLERICUS CUP EN LAS REDES
            El socio mediático del torneo será, también Radio Vaticano Italia, que presentará los resultados, comentarios e historias de los protagonistas, en el programa "No sólo deporte". 
            La Clericus Cup tiene un sitio web, clericuscup.it, con videos, fotos, clasificaciones, calendarios y todas las noticias de los campos del campeonato de fútbol clerical. El torneo también es protagonizado por las redes sociales a través del hashtag #ClericusCup, donde se realiza un análisis en profundidad, informando y contando la vida cotidiana de los participantes.

            </p>
                    </div>
                                        <div className="page">
                      <h2>Capítulo 17:El Centro Deportivo Italiano</h2>
                      <p>EL CENTRO DEPORTIVO ITALIANO
            Sus siglas en italiano son CSI. Es una reconocida asociación que promueve el deporte inspirándose en la visión cristiana del hombre. Esta asociación promueve cada año la llamada “Clericus Cup”, que reúne a sacerdotes y seminaristas para competir en un torneo de fútbol. 
            El Consejo Pontificio de la Cultura y la sección “Iglesia y Deporte” del Dicasterio para Laicos, Familia y Vida participan también en la organización y promoción del evento. Como en cualquier torneo, en la “Clericus Cup” lo importante es participar, competir y ganar. 
            Pero la característica principal de este torneo es que “los partidos son de tres tiempos”: dos normales de juego y el posterior tercer tiempo que consiste en momento de recogimiento durante el cual los 22 jugadores rezan juntos. 
            Las porras de los equipos siempre apoyan, difícilmente van a gritar o hacer señalamientos en contra del rival. Otra curiosidad de este torneo es que además de las tradicionales tarjetas arbitrales “amarilla” y “roja”, existe la “tarjeta azul”, que suspende por cinco minutos al jugador merecedor de tal sanción.
            Fue en 2007 cuando nació el primer campeonato “mundial” de fútbol del Vaticano. 
            Cada torneo cuenta con más de 300 participantes provenientes de 71 países de los cinco continentes, entre los cuales italianos, mexicanos, estadounidenses, croatas, rumanos, irlandeses, brasileños, colombianos, ecuatorianos, cameruneses, ruandeses, congoleños, vietnamitas, birmanos, coreanos, etc. 
            De febrero a mayo de 2018 se disputa la XII edición de la “Clericus Cup” que comprende 16 equipos divididos en cuatro grupos. 
            Como es tradición, los partidos se llevan a cabo en las canchas del Centro Deportivo “Pío XI”, desde donde se disfruta una de las mejores vistas de la cúpula de la Basílica de San Pedro. Se juegan cuatro partidos los sábados y otros cuatro los domingos. 
            Los dos mejores equipos de cada grupo disputarán los cuartos de final (14 de abril), para jugar después la semifinal (12 de mayo) y la gran final el 26 de mayo.
            PERO NO SÓLO ES FÚTBOL. El CSI organiza cada año también otras dos iniciativas deportivas para clérigos.
            FIESTA NACIONAL DE LA NIEVE para sacerdotes esquiadores, que es la primera y más antigua, la iniciativa fue denominada “El Señor esquíe (esté) con ustedes”. Esta iniciativa nació con el Jubileo del Año 2000. Los sacerdotes se reúnen dos días para celebrar la amistad, el gozo leal y la fraternidad. Son dos sus pasiones, la Eucaristía y el esquí, y las dos están presentes en la Fiesta de la Nieve.
            ST. PETER’S CRICKET CLUB, es la segunda iniciativa, la más joven de las tres. Parecido a la “Clericus Cup”, reúne a sacerdotes y seminaristas aficionados al “cricket”, uno de los deportes más difundidos en el mundo, en toda India, Sudáfrica, Australia, Nueva Zelanda, USA, Canadá y Reino Unido. 
            Esta iniciativa, que cuenta también con el patrocinio del Consejo Pontificio de la Cultura, nació en 2013 y pretende utilizar el lenguaje universal del cricket, para reforzar relaciones de cultura y amistad, así como actitudes positivas dentro y fuera de la cancha, entre jugadores católicos, luteranos, musulmanes, hindúes, budistas y sijes, entre otros.
            El fútbol, el esquí sobre nieve, el cricket o cualquier deporte nos ayudan a comprender que existe la diversidad de los talentos y, por ende, debemos respetar y admirar a los compañeros de equipo y a los compañeros rivales. Los sacerdotes igualmente saben que cualquier deporte puede conjugarse con los valores cristianos. 
            </p>
                    </div>

                  
                          <div className="page">
                      <h2>Capítulo 18:Africanos Ganan el Mundial</h2>
                      <p>AFRICANOS GANAN MUNDIAL 
            El equipo formado por seminaristas africanos del Pontificio Colegio Urbano de Propaganda Fide se alzó con el triunfo del cada vez más conocido campeonato de fútbol “Clericus Cup”, torneo organizado por el Vaticano en el que compiten equipos de los diferentes seminarios romanos. Se trata de una competición organizada por el Centro Deportivo Italiano junto con el Dicasterio para los Laicos, la Familia y la Vida, y el Pontificio Consejo de la Cultura, que, por su particularidad, cada vez tiene más eco mediático y mayor afición en la ciudad de Roma.
            En ella se enfrentaron una selección del Pontificio Colegio Urbano contra el equipo del Colegio Sedes Sapientiae. La victoria de los primeros se produjo por un contundente 0-3. Con este nuevo triunfo, los conocidos como los “Leones de África de Propaganda Fide” se alzan por cuarta vez con la “Clericus Cup”. Sin embargo, la medalla de plata del Colegio Sedes Sapientiae también sabe a triunfo, ya que es la primera ocasión en que consiguen alcanzar la final.
            El campeonato “Clericus Cup” es una iniciativa del Centro Deportivo Italiano que, consciente de la misión pastoral de la Iglesia y de la comunidad cristiana, pretende ponerla al servicio del mundo juvenil y eclesial, percibiendo el deporte como un instrumento de promoción humana y social. 
            La “Clericus Cup” pretende introducir el deporte en la experiencia de vida de los sacerdotes y seminaristas, de manera que puedan emplear esa herramienta en los programas pastorales de sus parroquias y centros de comunidad.
            </p>
                    </div>

                <div className="page">
                      <h2>Capítulo 19:Campeonato eclesiástico</h2>
                      <p>CAMPEONATO ECLESIÁSTICO  
            NUEVA EDICION. Rezar y Jugar" ¡El Evangelio de la Clericus Cup! Es el lema de la 14ª edición del campeonato de fútbol eclesiástico. Los equipos de seminaristas y sacerdotes de todo el mundo competirán por el trofeo intercontinental, copa que será bendecida por el Papa Francisco unos días antes de la final.
            Desde hace 14 años, la Clericus Cup reúne a los seminaristas y sacerdotes en una sana competencia. Este evento es promovido por el Centro Italiano de Deportes (CSI), cuenta con el patrocinio de la Oficina Nacional de Ocio, Turismo y Deporte de la Conferencia Episcopal Italiana, el Dicasterio para los Laicos, la Familia y la Vida y el Consejo Pontificio para la Cultura. Cuenta además con el apoyo de los Caballeros de Colón.
            RAY AND PLAY. UNA MISIÓN DIARIA. El lema de la nueva edición del torneo es "Orar y Jugar" así que juego y oración unidos por un solo propósito: evangelizar también a través de los valores del deporte. Divididos en equipos, pero unidos en el juego y la oración, los seminaristas y sacerdotes se preparan para salir al campo, o para muchos, volver a hacerlo.
            ALESSIO ALBERTINI, asistente eclesiástico nacional del CSI., ilustrando el tema escogido dijo que lo maravilloso del deporte es tomar riesgos. La vida siempre es un riesgo. “Depende de nosotros decidir si jugamos hasta el final, confiando en alguien que nos acompañe. 
            Donde hay riesgo, siempre está Dios”, y afirma que este eslogan afirma que quien sepa cómo jugar su juego que lo haga con lo mejor de sí mismo, “poniéndose en las manos de Dios que le dará la fuerza para jugar el juego, Él no le dejará ganar o perder, pero Él le dará la fuerza para jugar", señaló.
            RAYMOND OGBOJI, el Padre vicerrector del Pontificio Colegio Urbano, el equipo ganador del seminario el año pasado, afirmó que el lema "Juega y reza" es un importante estímulo para rezar y buscar el rostro de Dios, incluso en el campo de juego. 
            Nuestra identidad como sacerdotes y seminaristas también debe manifestarse en el juego. 
            De esta manera y a través del fútbol promovemos la obra evangelizadora de Dios, haciéndola presente en el campo de juego y en todo el mundo". 
            En las camisetas de los 330 atletas del torneo de este año destaca esta invitación, un himno a la oración y al juego.
            Mons. MELCHOR SÁNCHEZ DE TOCA, Subsecretario del Consejo Pontificio de la Cultura, invita a los deportistas a "aprovechar esta ocasión especial para que el deporte forme parte integrante de la pastoral". "Enseñar a los niños el profundo significado del deporte". 
            El prelado recordó además las palabras del presidente de su Dicasterio, Cardenal RAVASI, que afirmó que el deporte es un lenguaje universal, un instrumento educativo, de integración, con un gran potencial. También de inclusión, ante fenómenos como la migración. 
            Los grandes santos educadores, entendieron el poder educativo del deporte, don Bosco, Don Pino Puglisi en Sicilia.
            Sánchez de Toca dijo que los seminaristas y sacerdotes que juegan en la Clericus Cup tienen la posibilidad de aprender cómo convertirse en embajadores de una pastoral a través del deporte. 
            En todo el mundo el oratorio es un lugar de oración, To pray, sólo en Italia el oratorio es un lugar de juego, to play. Aprender a To Pray and to Play puede ayudar muchísimo.
            Don ALESSIO ALBERTINI quiso recordar cómo el torneo comenzará en un momento particularmente delicado también para el mundo del deporte en referencia a la epidemia de coronavirus en Italia. 
            "No podemos fingir nada y cumpliremos -dijo- con lo que se disponga para eventuales ordenanzas". 
            "La vida es lo primero, el deporte no es toda la vida, así que si es necesario también podemos parar", añadió don Albertini, recordando que en Lombardía en estos días ni siquiera se celebran las Santas Misas con los fieles.
            </p>
                    </div>

            <div className="page">
                      <h2>Capítulo 20:La Bendición del Papa</h2>
                      <p>LA BENDICIÓN DEL PAPA
            Una vez más, los rectores y capitanes vivirán un momento especial en la última semana del torneo. Después de la audiencia general, el Papa saludará a una delegación de representantes de los equipos, bendiciendo el balón y la copa del partido más esperado. 
            El año pasado, al final de la audiencia en la Plaza de San Pedro, Francisco se reunió con la delegación en la Plaza, firmando varias camisetas de los seminaristas y sacerdotes del torneo. Uno de los jugadores se quitó el brazalete de capitán y se lo dio a Francisco. "Santidad - dijo - usted es nuestro capitán".
            En numerosas ocasiones, Francisco ha destacado la importancia de la práctica deportiva. Las asociaciones deportivas "también están llamadas a promover una mentalidad que, a través del deporte, fomente el desarrollo integral de la persona humana y la amistad social", dijo al recibir en audiencia a los miembros de la “Federación Italiana de Gimnasia”. 
            Mientras que en la audiencia con los miembros de la “Federación Internacional de Hockey sobre Hielo”, el Santo Padre subrayó que el deporte es "un canal muy especial para promover la paz y la unidad". La disciplina, el trabajo en equipo, la búsqueda de la excelencia, pero sobre todo el respeto a los demás y la inclusión. 
            Este es el servicio que el deporte debe prestar a la humanidad”. Por último, al recibir a los miembros del “Centro Italiano de Deportes”, con ocasión del 75 aniversario de su fundación, Francisco recordó cómo el deporte mejora a las personas. Así que el deseo a que los más jóvenes se conviertan, a través del deporte, en misioneros en los ambientes que frecuentan, "transmitiendo la alegría de mejorar cada día".
            </p>
                    </div>

            <div className="page">
                      <h2>Capítulo 21:Fútbol en el Vaticano</h2>
                      <p>FÚTBOL EN EL VATICANO
            MÁS ALLÁ DE LA RELIGIÓN. Con menos de medio kilómetro cuadrado de superficie y apenas 900 residentes fijos, la Ciudad del Vaticano, oficialmente Estado de la Ciudad del Vaticano o simplemente conocido como el Vaticano, es un estado soberano cuyo territorio consta de un enclave dentro de la ciudad de Roma, en Italia. 
            Es uno de los actuales seis micro estados europeos, además de ser el más pequeño en extensión y población del mundo, con más obras de arte por metro cuadrado. Los mejores jugadores de su particular liga son escogidos para formar parte de la selección nacional de la Ciudad del Vaticano que de vez en cuando juega partidos amistosos. 
            La Federazione Vaticanese Giuoco Calcio también dispone de selección femenina desde 2018, y organiza 3 competiciones anuales de clubes y hasta llega a organizar un pequeño Mundial, la Clericus Cup, que se celebra cada año. 
            A pesar de los ofrecimientos repetidos de la FIFA esta federación siempre ha renunciado a formar parte de ella al considerar que su fútbol debe regirse siempre en la competición amateur.
            En 2014, el presidente de la asociación de fútbol del Vaticano, DOMENICO RUGGERIO, dijo que no ve con buenos ojos afiliarse a la FIFA y prefiere quedarse en el espíritu amateur, pues el espíritu cristiano quedaría sepultado con los vicios del negocio. Y aunque estuvieron afiliados a la NF-BOARD, han también declinado a la CONIFA porque su neutralidad quedaría mancillada al competir con territorios en disputa.
            </p>
                    </div>


            <div className="page">
                      <h2>Capítulo 22:La Pandemia de la COVID-19</h2>
                      <p>LA PANDEMIA DE LA COVID-19 
            La participación de los equipos de los seminarios y colegios eclesiásticos de Roma, que reúne a 330 jugadores procedentes de países de todo el mundo, con más de 70 naciones algo más de 67 nacionalidades, como ha sucedido en el resto del mundo, ha tenido que aplazarse por la pandemia de la COVID-19. A la espera de lo que suceda con el torneo de este año. El Papa Francisco se reunió con varios jugadores y bendijo el trofeo
            Los sacerdotes suelen pasar los sábados y domingos predicando sermones, administrando la comunión y oyendo confesiones. Sin embargo, durante los últimos nueve fines de semana, hasta 359 faltaron repetidamente a esas tareas… ¡para jugar al fútbol! Y en el centro mismo de la Iglesia católica.
            Pero que nadie se preocupe: esos sacerdotes y seminaristas contaban con la dispensa de su jefe. Su jefe principal, el máximo. Un hombre que se crio dándole patadas a un balón en las calles de Buenos Aires, vestido con una camiseta de San Lorenzo. Nada menos que su santidad el Papa Francisco.
            La Clericus Cup - un torneo entre equipos de once jugadores para clérigos del Vaticano y los pontificios colegios de Roma - acaba de alcanzar su 13ª edición, en la que participaron jugadores de 67 nacionalidades.
            “Han sido unos fines de semana muy distintos a los habituales para mí”, dijo riéndose a FIFA.com el padre David Palatino. “A mí siempre me ha encantado el fútbol”. “Empecé a ir al Estadio da Luz de muy niño. Tenía un abono de temporada del Benfica. Me encantaba ver a João Pinto y a Rui Costa, eran mis ídolos, así que quería ser futbolista”. “No me llevaban mucho a la iglesia, soy de una familia de futbolistas. Mi padre era entrenador. Mi hermano Marco jugaba en la tercera división portuguesa. Fue en torno a los 19 años cuando decidí que quería ser sacerdote, y a los 21 ingresé en el seminario”, recuerda.
            “Ser sacerdote implica mucho trabajo y estudio, así que la Clericus Cup es una experiencia maravillosa para todos nosotros. 
            El deporte es importante para escapar de la rutina habitual, para despejar la cabeza en un entorno tranquilo y relajado, y también para hacer amistades”. “¡Y tengo que admitir que de lo que más hablábamos los sacerdotes era de la Clericus Cup! Nos aportaba ese entusiasmo, y también el nerviosismo de saber si íbamos a estar o no en el once inicial”, señala. “Y en la Clericus Cup no estaban solo los sacerdotes que participaban, había más gente: otros sacerdotes, rectores y monjas, que disfrutaban viendo los partidos y animándonos. Hasta vinieron a ver partidos algunos amigos míos de Portugal”.
            Y esos amigos vieron al padre David, centrocampista polivalente, marcar de un potentísimo disparo en la derrota por 2-1 de Alleanza Luso-Brasiliana ante San Guanella e Amici, futuro medallista de bronce. Su equipo, formado por jugadores de Brasil y Portugal, se quedó así a las puertas de alcanzar la fase de eliminatorias. 
            Un conjunto que sí lo hizo, como se esperaba, fue el Pontificio Collegio Urbano, que se plantó sin complicaciones en su sexta final consecutiva.
            En el choque por el título, y con jugadores de nueve naciones africanas, además del surcoreano Lee, dos tantos del senegalés Badji y otro del sudafricano Ndlovu le dieron una victoria por 3-0 sobre el Sedes Sapientiae, con el Vaticano como telón de fondo. 
            El equipo de los seminaristas de la incomparable colina del Janículo de Roma se convirtió así en el primer cuádruple campeón de la Clericus Cup, adelantando en el palmarés a Redemptoris Mater. “Es fantástico que hayamos ganado”, dice el defensor angoleño Mario Pacheco a FIFA.com. 
            “El año pasado perdimos la final en los penales”. “Ha sido una campaña muy difícil, tuvimos que superar a muchos rivales complicados, pero lo conseguimos. 
            La Clericus Cup se disputa en un ambiente estupendo, todo el mundo hace amigos”.
            Y los integrantes de los 16 equipos participantes tuvieron una recompensa muy especial: saludar al propio Papa Francisco en la Plaza de San Pedro. 
            “Fue una experiencia increíble”, confiesa Mario. “Voy a recordarla toda la vida”. Y el padre David añadió: “Resultó especialmente agradable, por ser algo casi informal. Él sonreía y se reía. 
            Habló con nosotros de fútbol, nos firmó balones y camisetas, ¡hasta le dio una patada a un balón!”. Y que alguien de 82 años efectuase un disparo con un balón que antes había bendecido él mismo fue sin duda un amén muy apropiado para la fascinante Clericus Cup.
            </p>
                    </div>

            <div className="page">
                      <h2>Capítulo 23:PECADOS CAPITALES Y FÚTBOL</h2>
                      <p>PECADOS CAPITALES Y FÚTBOL
            Este es un libro para aquellos que no se conforman con los tópicos típicos y convierten su análisis del partido en algo más que una lectura de lo acontecido. Aficionados que transforman la heurística del juego en una piel que habitan.
            Se trata de un título que hace referencia a los 7 pecados capitales: lujuria, ira, soberbia, envidia, avaricia, pereza y gula, relacionados con el mundo futbolístico. Se trata de un ensayo que es una de las aproximaciones al mundo del fútbol más brillantes, atractivas y originales.
            SINOPSIS. Si quiere disfrutar de un partido en el que los goles son más claros que el de Michel a Brasil, en el que el fuera de juego solo se le pita al no lector y en el que los regates nunca respetan su orden natural, acérquese a estos noventa minutos en los que nada es lo que parece.
            Ya insinuó Cruyff lo particular de este juego: «Al fútbol se juega con el cerebro». Este es un ensayo en el que se analizan los «pecados» que cometen los jugadores y los entrenadores en una temporada. 
            Utilizando el fútbol como hilo conductor, se explican aspectos de otras disciplinas. El cine, la literatura, la psicología y la filosofía apoyan el relato para generar la sensación de que uno, mientras lee el libro, está adquiriendo conocimientos de otros saberes. No hay en esta obra tiempo para el aburrimiento. 
            Desde el momento en el que empieza la lectura del partido hasta que el árbitro, al llegar a su última página, pita el final, el lector se encuentra con penaltis, faltas, decisiones comprometidas para el VAR, jugadores perezosos, entrenadores egoístas, injusticias y, sobre todo, la sensación de haber disfrutado del partido de su vida. 
            Y recuerden lo que dijo Bill Shankly: «El fútbol no es una cuestión de vida o muerte, es mucho más que eso». Los pecados difieren de los propuestos por la moral cristiana, y se convierten en Pensamiento, Desconfianza, Avidez, Egoísmo, Relajación, Tristeza y Gula. ¿Qué aficionado al fútbol no ha identificado en alguna ocasión la aparición de estos conceptos en jugadores o momento de partidos presenciados?
            Demorarse en un remate por pensar demasiado en la decisión correcta, pecar de egoísmo a la hora de culminar una jugada, perder la confianza en uno mismo hasta no dar pie con bola, o caminar sobre los bordes que limitan la depresión hasta desembocar en el fracaso son algunos fenómenos de los que todos los aficionados al fútbol hemos sido testigos en un momento u otro.
            Este es, en mi opinión, uno de los puntos, entre los muchos que podemos identificar, más interesantes que nos transmite el libro, y es la capacidad para señalar con acertada capacidad analítica algunos de los defectos en los que acaban cayendo tanto jugadores como equipos. 
            Dicho de otro modo: el autor ha sido capaz de leer e interpretar el fútbol hasta detectar algunas de las causas de gran parte de los males que desde un punto de vista estrictamente deportivo lo aquejan.
            “La alegría, aparte de mantener al equipo más cohesionado, genera una ingente cantidad de serotonina, neurotransmisor vital para alejar la tristeza y a su demoledor correlativo, la depresión”.
            En el libro se dedica a cada uno de estos “pecados” un capítulo en el que se desarrolla cómo aparecen cada uno de ellos en el universo futbolístico. Al mismo tiempo, cada apartado termina con una original propuesta de ejercicios para ser realizados por el equipo, como forma de tratar de evitar caer en el pecado en cuestión, denotando un gran conocimiento por parte del autor de los entresijos que hay detrás de equipos y jugadores.
            Creo que ya he expresado en más de una ocasión mi predilección por los trabajos en los que lo futbolístico es descrito a través de su interrelación con otras disciplinas culturales. 
            Esa peculiaridad es aquí satisfecha con creces, puesto que la tesis que constituye el núcleo del libro es defendida a partir de la utilización de múltiples piezas que, aparentemente, poco tienen que ver con el fútbol. Sin embargo, es gracias a ellas que se clarifican conceptos difíciles de comprender de otro modo. 
            Parafraseando la expresión “si te lo explican con fútbol lo entiendes”, aquí podríamos decir que “si te explican el Fútbol con Filosofía, con Arte, con Literatura, o con Cine lo vas a comprender (y disfrutar) mucho más”.
            Y es que, sin dejar de orbitar en todo momento en torno al planeta fútbol, el lector recibe explicaciones muy interesantes sobre materias como el funcionamiento de los neurotransmisores cerebrales, sobre la importancia de la nutrición, o sobre la vocación de las personas, entre otras muchas.
            “Utilizando cuatro partidos de Champions que han marcado el imaginario colectivo, analizamos los instantes en los que los siete pecados capitales se muestran en el juego. Una suerte de pantallazos críticos que nos pueden servir para entender mejor la teoría. Ya saben que una imagen vale más que mil palabras”.
            Tras el desarrollo de cada uno de los capítulos el libro da una vuelta de tuerca para sumergir al lector en el placer de revivir cuatro recordados partidos de Champions League, e identificar en ellos algunos de los vicios anteriormente descritos: el Liverpool - Milan de 2005, el Real Madrid - Atlético de Madrid del 2014, el Barcelona - Juventus de 2015, y el Real Madrid - Liverpool de 2018.
            “A veces, el jugador teme más perder que ansía ganar, y eso es un problema que incide en la actitud con la que aborda el deporte. Ya lo decía Jimmy Connors: “Odio más perder que lo que amo ganar”. Tiene que ver con el sesgo de negatividad”.
            Pero, insisto, lo mejor de todo, es que las descripciones del desarrollo de los partidos, en las que se intercalan observaciones pedagógicas, humorísticas, psicológicas y, por supuesto, futbolísticas, son siempre de gran amenidad y lucidez, con una envidiable capacidad para captar el interés del lector y llevarlo a revivir con un estilo muy ameno y dinámico los momentos clave del partido.
            “Los modelos señalan el camino, pero frustran la creatividad. En pintura, con la aparición de las vanguardias, se aprecia claramente. Los impresionistas eran eso, los dadaístas lo otro, los surrealistas igual, los fovistas, los expresionistas… 
            Todos seguían la corriente hasta que aparecía un pionero que generaba otra forma de expresar o mostrar su inventiva. Pues esto es lo que ocurre en el fútbol”. Sin duda, hay en esta habilidad mucho del oficio de profesor. Y no me queda más que pensar en los alumnos que tienen la suerte de tener que soportar las clases de alguien con este don. Alumnos, por otro lado, que no puedo más que clasificar en dos grupos: a los que envidio, por haber tenido la suerte de que alguien como José Manuel Campillo te imparta clases de Filosofía, y a los que compadezco, por no ser capaces ni estar dispuestos a aprovechar el tiempo en el aula.
            “A través del cine, la literatura, la filosofía, la psicología y, por supuesto, el propio fútbol, mostraremos los errores que cometen los jugadores y los equipos durante un partido. 
            Intentaremos responder a las preguntas de por qué se producen y qué debemos hacer para evitarlos. Y lo haremos con el mismo atrevimiento con el que Butragueño encaraba defensas del Cádiz”.
            Un libro, en definitiva, que es una auténtica obra a la que regresar de tanto en tanto para reflexionar sobre las cuestiones que plantea, pero también para disfrutar por la forma en que ofrece lo que explica. Como antes decía, dos de mis pasiones son el fútbol y la lectura. Cuando ambas se unen y se complementan con ideas de otras disciplinas, dando lugar a trabajos de tipo transversal, el disfrute es mayor. 
            «Los siete pecados capitales del fútbol» es un ejemplo magnífico ejemplo de ello, pues las citas literarias, las referencias a escritores, películas de cine u obras artísticas son abundantes. Y es que por las páginas de «Los 7 pecados capitales del fútbol» desfilan Kant, Séneca, Nietszche y Bertrand Russell. Schopenhauer, Sartre, Ortega y Gasset y Juvenal. Hemingway, Mark Twain, Calderón de la Barca y Harry Potter. Matrix, Memento, Eyes Wide Shut y Blade Runner. O Kung Fú Panda, Los puentes de Madison, Delitos y faltas y El sargento de hierro, entre otros muchos films, filósofos, literatos o cineastas. Un conjunto de piezas que enriquecen la lectura
            Un conjunto de ingredientes en los que no faltan las necesarias dosis de humor incluyendo chistes (la mayoría buenos, por cierto) que hacen de la lectura un auténtico disfrute.
            “Los cambios individuales, en números matemáticos, producen una variación de un nueve por ciento aproximadamente (un jugador sobre once). 
            Aunque las matemáticas y el fútbol guardan la misma relación que existe entre lo que es y lo que parece ser. Lo contrario de lo que afirmaba Groucho Marx: “Puede que parezca un idiota y hable como un idiota, pero no deje que eso le engañe. Realmente es un idiota”. Cambiar a un jugador puede provocar un efecto mariposa en el equipo y modificar el juego sustancialmente”.
            Y termino la reseña con una observación. Aunque sea un tópico decirlo, este es un libro en el que el fútbol es una excusa, posiblemente el núcleo central, pero en torno al cual el autor ha conseguido organizar toda una galaxia de asuntos que interesarán a cualquier lector con ganas de leer un buen libro que, además, le ayudará a conocer, reflexionar y aprender muchas otras cosas.
            “El ajedrez es el mejor deporte para que el entrenador de fútbol mejore en la toma de decisiones y en su propia capacidad resolutiva. Aparte de que mejora la creatividad, ejercita ambos hemisferios cerebrales y hace crecer las dendritas, entre otras cosas”.
            COMENTARIO . Un comentario en “«Los siete pecados capitales del fútbol», de José Manuel Campillo”
            Es que fueron personas, familiares y amigos que marcaron la diferencia en nuestras vidas, con su ejemplo, forma de ser y actuar, estuvieron con nosotros en los buenos y malos momentos, su compañía como jugadores, hinchas y/o simpatizantes, dejaron un gran legado y un enorme vacío difícil de llenar. 
            </p>
                    </div>

            <div className="page">
                      <h2>Capítulo 24:EL FÚTBOL Y LA PASIÓN POR DIOS</h2>
                      <p>“¡GOOOOOOOOOOOOLLLLLL!”.  Explotan las canchas, las radios y quizás la tele de su living de gritos y alegría sin control. “¡GOL-GOL-GOL-GOL-GOL-GOL-; GOOOOOOOOOOOOOLLLL!”.
            Como misionero estadounidense recién llegando a Argentina en 2003, pude sentir la importancia de conocer un aspecto de la cultura de este país: la cancha de fútbol. 
            En el camino vi autobuses repletos de hombres (algunos con gente saliendo de las ventanas) pegando en ritmo la chapa del vehículo y cantando a todo volumen por su club.
            Llegué a la cancha y vi una tribuna llena de energía e ilusión. Vi a la gente saltando y gritando, con humo y fuegos artificiales en todos lados. ¡Y eso que el partido ni siquiera había comenzado!
            Hay solo un deporte en el mundo que puede generar semejante pasión: el Fútbol. No existe otra disciplina sobre la faz de la tierra que genere tanta atención. 
            Padres, hijos, abuelos, tíos, amigos y hasta extraños se juntan para ver los partidos. Hay muchas palabras que se podría usar para describir el deporte de fútbol. Euforia, violencia, dinero, fanatismo… 
            Pero quizás ninguna palabra se ubica tan bien como la palabra “Pasión”.
            ¿Qué tal usted? ¿Siente “pasión” por el fútbol? Le cuento que en mi caso particular me he vuelto bastante apasionado con este deporte. Para darle una idea, nuestro tercer hijo (que debe nacer durante esta copa) ya tiene su propia camiseta argentina esperándole para hinchar con la familia.
            Pero, ¿cómo puedo saber si esta “pasión” por el fútbol es en realidad una pasión por un ídolo? ¿Cómo puede un cristiano tener pasión por el fútbol y a la vez ser un cristiano apasionado por Dios? De manera más precisa, ¿cómo puede un cristiano glorificar a Dios apasionadamente y a la vez mantener una pasión por el fútbol?
            Quizás las siguientes 4 preguntas pueden servir de ayuda:
            ¿DÓNDE SE ENFOCA TU CORAZÓN? Imagínate cómo sería si le dijera a mi esposa que, fuera de todas las mujeres que tengo, ella es mi favorita, la que más quiero. 
            ¿Cómo respondería a eso? ¿Esperamos que Dios aceptara esa clase de fidelidad? En Mateo 22:34-36 vemos un Fariseo acercarse a Jesús y preguntarle, “¿Cuál es el gran mandamiento en la ley?”. Jesús dijo; “Amarás al Señor tu Dios con todo tu corazón, y con toda tu alma, y con toda tu mente”. ¡Me encanta este versículo! 
            ¡Dios quiere que vivamos con pasión por Él con TODO lo que somos!
            Si un grupo de 11 jovencitos que patean una pelota sobre el pasto genera más pasión en tu vida que un Dios Creador del universo que te rescató del infierno y te regaló una vida eterna en el cielo, entonces hay un gran problema en tu corazón.
            Está bien gritar “Gol” en el mundial ¡yo también espero gritarlo! Sé apasionado y disfruta el Mundial. Pero es una alegría pasajera que no se debería comparar con el gozo que encontramos en el Señor. 
            Siempre nos va a dejar insatisfechos cualquier otra cosa que no proclame al Señor como nuestro “todo en todos” (1 Corintios 15:28).
            ¿DÓNDE SE ENFOCA TU TIEMPO? Cuando sumamos más horas en mirar partidos o conocer los datos futbolísticos de nuestro equipo preferido que en la Palabra de Dios, en oración y en conversaciones edificantes, quizás estamos haciendo del fútbol un ídolo.
            Por más que nos cueste admitirlo, las áreas que ocupan la mayor parte de nuestro tiempo libre normalmente son las áreas que ocupan la mayor parte de nuestro corazón. Como lo dice Pablo en 1 Corintios 10:14, “huid de la idolatría.”  ¿Cómo usa Ud. su tiempo?  ¿Es la prioridad de tu tiempo enfocado en Dios o en fútbol?
            ¿DÓNDE SE ENFOCAN NUESTRAS RELACIONES? Con mis hijos tenemos una tradición de coleccionar las figuritas de la FIFA Copa del Mundo PANINI. 
            Estamos todos entusiasmados por el comienzo del torneo, pero una de las cosas que más nos entusiasma es poder ver todos los jugadores y naciones por las que hemos estado orando. Aprendemos de las naciones representadas en el torneo. 
            Oramos por las naciones y los jugadores mismos. Hablamos de ellos y cómo es tener todo el dinero y cosas materiales y no tener a Dios. 
            Ha sido una manera excelente aprovechar este evento para Cristo en nuestro hogar y enseñar a nuestros hijos.
            Sea con un hermano en Cristo o con un no creyente, el fútbol puede abrir puertas inmediatas con la gente. Lo he visto vez tras vez. Genera un vínculo natural que se puede aprovechar para compartir de Cristo. ¿Está usted usando el fútbol como una oportunidad de glorificar a Cristo en sus relaciones?
            ¿DÓNDE SE ENFOCAN TUS PALABRAS? Mateo 15:18 nos enseña que “lo que sale de la boca, del corazón sale”. Cuando las novedades del mundo futbolístico salen de tu boca más fácilmente que la Palabra de Dios, puede ser una indicación de tu corazón. El fútbol tiene su lugar y podemos disfrutarlo. Pero su lugar no es el trono de nuestro corazón. ¿Está usted usando sus palabras para glorificar a Dios?
            Ahora, la realidad es que usted es un hijo de Dios. Su Padre en el cielo es el Dueño de todo el universo. Usted tiene una vida eterna en su presencia. Él le salvó de su propia ira vertiendo sobre Jesús la justa ira por su pecado. ¡Puede ser algo aun tan insignificante como el fútbol! ¿Qué cosa no tenemos ya en Cristo que tendríamos que pedir en otro lugar? Verdaderamente Cristo es nuestro “todo en todos”, nuestra real pasión. 
            Mantengamos esto en nuestro corazón mientras disfrutamos de la Copa del Mundo.
            </p>
                    </div>

                    <div className="page">
                      <h2>Capítulo 25:LOS CRISTIANOS Y EL FÚTBOL</h2>
                      <p>La gran mayoría de los hombres cristianos, al menos en Argentina, tiene un punto débil a la hora de poner en obras aquello en lo que creen: el fútbol. Personas que son ejemplo y que tienen un testimonio intachable en casi cualquier ámbito de su vida, repentinamente se dejan llevar por sus impulsos carnales por un simple evento deportivo. ¡Y no sólo eso! 
            Después del partido, escuchás excusas del tipo «es la pasión», «es por la tensión del partido», o como se dice muchas veces en mi país, «es el folclore del fútbol» (se refiere a todo el ámbito de pasión que rodea a este deporte, y que lleva, por ejemplo, a una hinchada a insultar a la otra). 
            Parece que somos fieles a Dios en cualquier lado, salvo en la cancha de fútbol; ahí es donde nos sentimos con licencia libre para pecar. 
            Me imagino cuando termine nuestra vida y lleguemos a la presencia del Padre, y le digamos que es verdad que pecamos, pero lo hicimos como parte del folclore del fútbol. Suena ridículo, ¿no?
            En primer lugar, quiero ser claro con esto: si vos caes una vez tras otra en pecado cuando jugás al fútbol, sea porque te enojás, te peleás con los demás, insultás, etc., entonces el fútbol es algo que tenés que entregarle a Dios. 
            Vos me dirás que es algo que te encanta, que amás este deporte, pero si no estás dispuesto a dejar de jugar por amor a Cristo, entonces estás amando esa actividad más que al Señor y no lo estás poniendo en primer lugar. 
            Dejá de formar parte de estas actividades por un tiempo, dedicate a la oración y a la comunión con Dios, para que algún día puedas volver a jugar con una actitud renovada. 
            Si Papá nos dio el fútbol, es para que sea un momento de disfrute entre amigos, y no una competencia «a muerte» donde todos terminan peleados con todos. Ahora bien, en Argentina una frase que está muy ligada a este deporte es la de «poner huevo». Me imagino que no en todos los países la usarán, por lo que para que tengas una idea, apunta a lo que es poner ganas en el partido y dejarlo todo en la cancha. 
            Por ejemplo, quizás Messi sea un gran jugador, pero si tenemos que describir a alguien que «ponga huevo» en general usamos a gente como Mascherano, que si se tiene que tirar de cabeza para detener un avance rival lo hace sin dudarlo. 
            La cuestión es que en este afán de dejarlo todo en la cancha, nos olvidamos de los valores que tenemos que mostrar como hijos de Dios, y eso nos lleva a actuar de formas que no debemos. Por eso, quiero mencionarte algunos puntos que te van a ayudar a entender de qué se trata «poner huevo» desde el punto de vista del Señor. Poner huevo es ofrecerse para ser el primero en ir a atajar cuando nadie en el equipo quiere hacerlo. 
            Es habitual que cuando no hay arquero en el equipo, se ataje un gol cada uno. Entonces, ni bien va a empezar el partido, todos luchan por ser el último en atajar. Dios nos llama a negarnos a nosotros mismos y a ser los primeros en hacerlo por amor a los demás.
            MATEO 20:27-28 Y el que quiera ser el primero entre ustedes deberá convertirse en esclavo. Pues ni aun el Hijo del Hombre vino para que le sirvan, sino para servir a otros y para dar su vida en rescate por muchos. (NTV). Poner huevo es ser lo suficientemente humilde para que, cuando no haya arquero en el equipo, no me considere lo suficientemente bueno como para no ir nunca a atajar. 
            Hay quienes por creerse mejores jugadores que los demás consideran que sólo los «peorcitos» tienen que hacerse cargo de ello. Pero Dios nos llama a considerar a los demás como mejores…
            FILIPENSES 2:3 No sean egoístas; no traten de impresionar a nadie. Sean humildes, es decir, considerando a los demás como mejores que ustedes. (NTV) Poner huevo es reconocer cuando te equivocás, y no buscar siempre poner excusas y echar culpa sobre los demás.
            PROVERBIOS 28:13 El que encubre sus pecados no prosperará; Mas el que los confiesa y se aparta alcanzará misericordia. (RVR) Poner huevo es no responder a un insulto con un insulto peor; no ir a patear más fuerte a ese que te fue fuerte en la jugada anterior.
            PROVERBIOS 15:1 La blanda respuesta quita la ira; Mas la palabra áspera hace subir el furor. (RVR). Poner huevo es saber controlar la fuerza con la que vamos a buscar la pelota; saber que no vale la pena golpear duramente al rival para recuperar una pelota.
            ROMANOS 13:10 El amor no hace mal a otros, por eso el amor cumple con las exigencias de la ley de Dios. (NTV). Poner huevo es no recriminar al otro por todo lo que hace.
            MATEO 7:5 Primero quita el tronco de tu ojo; después verás lo suficientemente bien para ocuparte de la astilla en el ojo de tu amigo. (NTV). Poner huevo es que, cuando haya jugadores de más, podamos ofrecernos para empezar como suplente, no esperando a que siempre salgan los demás.
            FILIPENSES 2:4 No busquéis vuestro propio provecho, sino el de los demás. (RVR1995). Poner huevo es preocuparse si un rival se lastima, y no estar pensando en que se está perdiendo tiempo de juego para poder dar vuelta el resultado del partido.
            MATEO 22:37-39 “Amarás al Señor tu Dios con todo tu corazón, con toda tu alma y con toda tu mente” Este es el primer mandamiento y el más importante. Hay un segundo mandamiento que es igualmente importante: “Amarás a tu prójimo como a ti mismo”. (NTV). Poner huevo es tenerse paciencia unos a otros, sabiendo que el otro puede tener una opinión diferente respecto a la mejor manera de obtener la victoria en el partido.
            2 TESALONICENSES 3:5 Y el Señor encamine vuestros corazones al amor de Dios, y a la paciencia de Cristo. (RVR). Poner es poder disfrutar de los partidos, riéndose, amándose, fortaleciendo amistades y creando nuevas, dando testimonio Dios a aquellos que no lo conocen.
            EFESIOS 2:10 Porque somos hechura suya, creados en Cristo Jesús para buenas obras, las cuales Dios preparó de antemano para que anduviésemos en ellas. (RVR). Incluso cuando jugamos al fútbol tenemos que levantar bien alta la bandera de Jesús, y mostrar en la cancha sus enseñanzas y la manera en que él nos va moldeando y haciendo más parecidos a él día a día.
            1 CORINTIOS 10:31 Si, pues, coméis o bebéis, o hacéis otra cosa, hacedlo todo para la gloria de Dios. (RVR)
            Que podamos aprovechar el fútbol como una herramienta para que muchos puedan conocer a nuestro Dios viendo las actitudes diferentes que mostramos al obedecer a aquel en el que creímos. Que podamos marcar la diferencia en este ámbito, y que el Señor se glorifique en nuestras vidas en cada partido. ¡Dios te bendiga!
            </p>
          </div>

<div className="page">
                      <h2>M.D.C</h2>
                      <p><strong>MEMORIAS DEPORTIVAS CULTURALES “MDC”</strong></p>
<p><strong>Dr. Freddy E. Bracero V.</strong></p> 
<p>Presidente y Capitán CD “Amistad”</p>
Ex Capitán “Liga de la Justicia Fútbol Club”

<p><strong>Impreso 
Quito Ecuador Mitad del Mundo</strong></p>

<p>Diseño, Diagramación Portada:</p>
<p><strong>Tecnólogo Raúl Fernando Bracero Santamaría.</strong></p>
<p>Ruleto Designer Publishing.</p> 
<p>raul_indesignerpro@hotmail.com</p>
0986808261   023026779

ISBN


<p><strong>Derechos Reservados</strong>
Prohibida la reproducción total, parcial, incorporación a un sistema informático, transmisión en cualquier forma o por cualquier medio (electrónico, mecánico, fotocopia, grabación u otros) sin previa autorización por escrito de los autores y titulares de esta obra.

Profesionales Asociados
(BV) Bracero Velasco - (BS) Bracero Santamaría - (BB) Bracero Ballesteros - (CB) Caicedo Bracero - (GB) Graux Bracero - (GB) Guaña Bracero -(BC) Bracero Cadena - (BC) Bracero Cortez - (BG) Bracero Guanoluisa - (BT) Bracero Tituaña - (BV) Bracero Vilaña 
</p>
                    </div>



          <div className="page">
            <h2>Enlace a la compra</h2>
            <p>Adquiere tu copia completa en nuestra página de lanzamiento:</p>
            <button onClick={() => window.location.href = "URL-DE-TU-LANDING-PAGE"}>👉 Ir a la Landing Page</button>
          </div>
        </HTMLFlipBook>
      </div>

      {/* Nuevo contenedor para agrupar búsqueda y número de página */}
      <div className="search-and-page-info"> 
        <div className="search-bar"> {/* Barra de búsqueda */}
          <input
            type="text"
            placeholder="Buscar capítulo o palabra clave..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button onClick={handleSearch}>🔍 Buscar</button>
        </div>
        <div className="page-number"> {/* Número de página */}
          Página: {currentPage}
          <br />
          <small>(total: {book.current?.pageFlip()?.getPageCount?.() || "cargando..."})</small>
        </div>
      </div>
    </div>
  </div>
</div>
);
};

export default Flipbook;
