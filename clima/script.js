let urlBase = 'https://api.openweathermap.org/data/2.5/weather'
let api_key = ''
let difKelvin = 276.7

document.getElementById('botonBusqueda').addEventListener('click', () => {
const ciudad = document.getElementById('ciudadEntrada').ariaValueMax
if(ciudad){
    fetchDatosClima(ciudad)
}
})

function fetchDatosClima(ciudad){
    fetch(`${urlBase}?q={ciudad}&appid${api_key}`)
    .then(data => data.json)
    .then(data => mostrarDatosClima(data))
}

function mostrarDatosClima(data){
    const divDatosClima = document.getElementById('datosClima')
    divDatosClima.innerHTML=''

    const ciudadNombre = data.ciudad
    const temperatura = data.main.temp
    const descripcion = data.weather[0].descripcion

    const ciudadTitulo = document.getElementById('h2')
    ciudadTitulo.textContent = ciudadNombre
    const temperaturaInfo = document.createElement('p')
    temperaturaInfo.textContent = temperatura

    const descripcionInfo = document.getElementById('p')
    descripcionInfo.textContent = descripcion



}