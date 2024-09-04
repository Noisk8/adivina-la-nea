//Esta accion se ejecuta cuando se toque el boton chequerra


// El juego selecciona un numero al azar para adivinar 
let numeroAzar = Math.floor(Math.random()*100) + 1



let numeroEntrada = document.getElementById("numeroEntrada")
let mensaje = document.getElementById("mensaje")
let intento = document.getElementById("intento")
let intentos = 0 

function chequearResultado(){

    intentos ++
    intento.textContent = intentos

    let numeroIngresado = parseInt(numeroEntrada.value)

    if (numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)){
        mensaje.textContent = "Por favor, ingresa un número entre 1 y 100."
        mensaje.style.color = 'black'
        return
    }

    if (numeroIngresado === numeroAzar){
        mensaje.textContent = "¡Felicidades! Adivinaste el número." 
        mensaje.style.color = 'green';
        numeroEntrada.disabled = true;
      
    } else {
        if (intentos === 4) {
          alert("¡Te quedan pocos intentos! ¡Esfuérzate más!");
        }
        else if (intentos === 10){
            alert("¡Sigue intentando, tu puedes!");
          }
    
  if (numeroIngresado < numeroAzar){
        mensaje.textContent = "El número ingresado es menor al número secreto.";
        mensaje.style.color = 'red';
       
    } else {
        mensaje.textContent = "El número ingresado es mayor al número secreto."
    }  } 

    // para reiniciar el valos del input despues de intentar 
    numeroEntrada.value = ''; 
}