import {barcelona, roma, paris, londres} from './ciudades.js';

let enlaces = document.querySelectorAll('a')    
let tituloElemento = document.getElementById('titulo')
let subtituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')
let precioElemento = document.getElementById('Precio')

// agregar evento click 

enlaces.forEach( function(enlace){
    enlace.addEventListener('click', function(){
        // REMOVER ACTIVO 
        enlaces.forEach(function(enlace){
            enlace.classList.remove('active')
        });
        // AGREGAR ACTIVO 
        this.classList.add('active')


        let contenido = obtenerContenido(this.textContent)
         tituloElemento.innerHTML = contenido.titulo
         subtituloElemento.innerHTML = contenido.subtitulo
         parrafoElemento.innerHTML = contenido.parrafo
         precioElemento.innerHTML = contenido.precio

})


}) ;

function obtenerContenido(enlace){
    let contenido ={
        'Barcelona' : barcelona,
        'Roma' : roma,
        'Paris' : paris,
        'Londres' : londres
    }
    return contenido[enlace];
}

function mostrarContenido(contenido){
    tituloElemento.innerHTML = contenido.titulo
    subtituloElemento.innerHTML = contenido.subtitulo
    parrafoElemento.innerHTML = contenido.parrafo
    }
