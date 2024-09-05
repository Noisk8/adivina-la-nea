// importamos las ciudades desde el archivo ciudades.js
import { barcelona, roma, paris, londres } from "./ciudades.js";

// seleccionamos todos los enlaces de la página
let enlaces = document.querySelectorAll("a");
// seleccionamos los elementos del DOM donde se mostrará el contenido
let tituloElemento = document.getElementById("titulo");
let subtituloElemento = document.getElementById("subtitulo");
let parrafoElemento = document.getElementById("parrafo");
let precioElemento = document.getElementById("Precio");

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
  });
});

// función para obtener el contenido de la ciudad seleccionada
function obtenerContenido(enlace) {
  let contenido = {
    Barcelona: barcelona,
    Roma: roma,
    Paris: paris,
    Londres: londres,
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