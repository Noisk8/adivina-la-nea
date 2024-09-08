// importamos las ciudades desde el archivo ciudades.js
import { V1, V2, V4, V3, V5, V6, V7, V8} from "./ciudades.js";

// seleccionamos todos los enlaces de la página
let enlaces = document.querySelectorAll("a");
// seleccionamos los elementos del DOM donde se mostrará el contenido
let tituloElemento = document.getElementById("titulo");
let subtituloElemento = document.getElementById("subtitulo");
let parrafoElemento = document.getElementById("parrafo");
let precioElemento = document.getElementById("Precio");
let enlaceElemento = document.getElementById("enlace");

// agregar evento click a cada enlace
enlaces.forEach(function (enlace) {
  enlace.addEventListener("click", function () {
    // REMOVER ACTIVO de todos los enlaces
    enlaces.forEach(function (enlace) {
      enlace.classList.remove("active");
    });
    // AGREGAR ACTIVO al enlace actual
    this.classList.add("active");

    // obtenemos el contenido de la ciudad seleccionada
    let contenido = obtenerContenido(this.textContent);
    // actualizamos el contenido del DOM con los datos de la ciudad
    tituloElemento.innerHTML = contenido.titulo;
    subtituloElemento.innerHTML = contenido.subtitulo;
    parrafoElemento.innerHTML = contenido.parrafo;
    precioElemento.innerHTML = contenido.precio;
    enlaceElemento.innerHTML = contenido.enlace;
  });
});

// función para obtener el contenido de la ciudad seleccionada
function obtenerContenido(enlace) {
  let contenido = {
    V1: V1,
    V2: V2,
    V4: V4,
    V3: V3,
    V5: V5,
    V6: V6,
    V7: V7,
    V8: V8,
  
  };
  return contenido[enlace];
}

// función para mostrar el contenido de la ciudad seleccionada (no se utiliza)
function mostrarContenido(contenido) {
  tituloElemento.innerHTML = contenido.titulo;
  subtituloElemento.innerHTML = contenido.subtitulo;
  parrafoElemento.innerHTML = contenido.parrafo;
  precioElemento.classList.add("ticket");
}


let enlacesTarjetas = document.querySelectorAll(".tarjeta a");

// agregar evento click a cada enlace de las tarjetas
enlacesTarjetas.forEach(function (enlace) {
    enlace.addEventListener("click", function () {
        // REMOVER ACTIVO de todos los enlaces
        enlacesTarjetas.forEach(function (enlace) {
            enlace.classList.remove("active");
        });
        // AGREGAR ACTIVO al enlace actual
        this.classList.add("active");

        // obtenemos el contenido de la ciudad seleccionada
        let contenido = obtenerContenido(this.textContent);
        // actualizamos el contenido del DOM con los datos de la ciudad
        tituloElemento.innerHTML = contenido.titulo;
        subtituloElemento.innerHTML = contenido.subtitulo;
        parrafoElemento.innerHTML = contenido.parrafo;
        precioElemento.innerHTML = contenido.precio;
    });
});