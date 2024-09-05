const api_ky = process.env.API_KEY;


let urlBase = 'https://api.openweathermap.org/data/2.5/weather';
let api_key = config.API_KEY;
let difKelvin = 273.15;

document.getElementById('botonBusqueda').addEventListener('click', () => {
    const ciudad = document.getElementById('ciudadEntrada').value;
    if (ciudad) {
        fetchDatosClima(ciudad);
    }
});

function fetchDatosClima(ciudad) {
    fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
        .then(response => response.json())
        .then(data => mostrarDatosClima(data));
}

function mostrarDatosClima(data) {
    const divDatosClima = document.getElementById('datosClima');
    divDatosClima.innerHTML = '';

    const ciudadNombre = data.name;
    const temperatura = data.main.temp;
    const descripcion = data.weather[0].descripcion;

    const ciudadTitulo = document.createElement('h2');
    ciudadTitulo.textContent = ciudadNombre;

    const temperaturaInfo = document.createElement('p');
    temperaturaInfo.textContent = `La temperatura es: ${temperatura - difKelvin}°C`;

    const descripcionInfo = document.createElement('p');
    descripcionInfo.textContent = `La descripción: ${descripcion}`;

    divDatosClima.appendChild(ciudadTitulo);
    divDatosClima.appendChild(temperaturaInfo);
    divDatosClima.appendChild(descripcionInfo);
}