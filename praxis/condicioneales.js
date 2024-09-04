// Puede entarra este chico a libido

// let edadChico = 19

// if (edadChico >= 18){

//     console.log('Pede entrar a Libido')

// } else {
//     console.log('No puedes entrar a Libido')
// }

// esta se usa cuando hay muchas posibilidades

// let edadPersona = 18

// if (edadPersona >= 18 && edadPersona <= 60){
//     console.log('puede entarra a libido')
// }else if (edadPersona <=18){
//     console.log('no puede entrar a libidio, porque esres menor de edad')
// }else{
//     console.log('no puede entrar a libido por ser mayor de 60')
// }

let estiloDeMusica = "punk";

switch (estiloDeMusica) {
  case "punk":
    console.log("Te recomiendo disidencia");
    break;

  case "rock":
    console.log("Te recomiendo nirvana");
    break;

  case "bachata":
    console.log("Te recomiendo romero");
    break;

  default:
    "Motzart";
    break;
}

// break se usa para separar las condiciones, si necesito que se ejecuten  dos condiciones quito el break

// if

let edad = 18;
let nacionalidad = "cioranista";
let tienePassaporte = true;

if (edad >= 18) {
  console.log("Tienes edad para viajar");
  if (nacionalidad == "cioranista") {
    console.log("La documentación está en orden");
    if (tienePassaporte) {
      console.log("Puedes viajar");
    } else {
      console.log("No puedes viajar porque no tienes passaporte");
    }
  } else {
    console.log("No puedes viajar porque no eres cioranista");
  }
} else {
  console.log("No puedes viajar porque eres menor de edad");
}


// VERSION SENCILLA 


if(condicion){
código
}



// VERSION COMPLETA

if (condicion){
  codigo
} else{
  codigo
}



// VERSIÓN MULTIPLE

if (condicion){
  código
} else if(otracondición) {
  codigo
} else {
código
}






