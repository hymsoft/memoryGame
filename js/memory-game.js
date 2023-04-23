// Variables y constantes globales del juego
const selecciones = [
  "números",
  "números romanos",
  "animales",
  "letras",
  "frutas y verduras",
];

const juego = {
  tipo: "",
};

//Elementos del DOM
const juegoRapidoBtn = document.getElementById("juego-rapido");
const homeBtn = document.getElementById("home__btn");
const windowHome = document.getElementById("menu");
const windowSeleccion = document.getElementById("selection__main-container");

//Clicks
juegoRapidoBtn.addEventListener("click", () => {
  mostrarVentana(windowHome, windowSeleccion, "flex");
  armarMenuSelecciones();
});
homeBtn.addEventListener("click", () => {
  vaciarSelecciones();
  mostrarVentana(windowSeleccion, windowHome, "grid");
});

function armarMenuSelecciones() {
  const selectionContainer = document.getElementById("selection__container");

  for (let i = 0; i < selecciones.length; i++) {
    const seleccion = selecciones[i];

    const boton = document.createElement("button");
    boton.classList.add("large-btn", "blue");
    boton.dataset.index = i;
    boton.textContent = seleccion;

    boton.addEventListener("click", () => cerrarVentanas());

    selectionContainer.appendChild(boton);
  }
}

function vaciarSelecciones() {
  // Eliminar los botones del contenedor
  const contenedor = document.getElementById("selection__container");
  while (contenedor.firstChild) {
    contenedor.removeChild(contenedor.firstChild);
  }
}

function cerrarVentanas() {
  const boton = event.target;
  const indice = boton.dataset.index;
  console.log(`Se hizo clic en el botón ${indice}: ${boton.textContent}`);
  // Aquí puedes agregar el código para cerrar las ventanas
}

/**
 * Muestra una ventana y oculta otra.
 *
 * @param {HTMLElement} ocultar - El elemento HTML que se ocultará.
 * @param {HTMLElement} mostrar - El elemento HTML que se mostrará.
 * @param {HTMLElement} tipo - Tipo de display que se aplicara a la ventana que se muestra.
 * @returns {void}
 */
function mostrarVentana(ocultar, mostrar, tipo) {
  // Oculta el elemento HTML especificado por el parámetro ocultar
  ocultar.style.display = "none";
  // Muestra el elemento HTML especificado por el parámetro mostrar
  mostrar.style.display = tipo;
}

//Funcion que oculta todas las ventanas
function ocultarVentanas() {
  windowSeleccion.style.display = "none";
}

// ocultarVentanas();
juegoRapidoBtn.click();
