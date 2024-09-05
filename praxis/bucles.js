// Los bucles sirve o se usan generalmente para recorer arryas

// let tecnologias = ['html','css','javascript', 'react']

// for( tecnologia of tecnologias){
//     console.log(tecnologia)
// }

// let texto = ''

// for (let index = 0; index < tecnologias.length; index++) {
// texto += tecnologias[index]
// if (index < tecnologias.length -1) {
//     texto += ', '
// }
//     seleccionable.textContent = texto

// }

// Recorrer  objetos

// const alumno = {
//     nombre: 'Ricardo',
//     edad: 25,
//     tecnologias: ['html', 'JS']
// }

// for (const clave in  alumno){
//     console.log(alumno[clave])
// }

// let numeros = [1,2,3,4,5]

//  numeros.forEach(numero => {
//      console.log(numero)
//  })

// let edad = 0

// while (edad < 18 ){
//     console.log(`Tienes ${edad} años y aun eres peque`)
//     // hay que cerrar la condicion ↓↓
//     edad ++
// }

// console.log(`Tienes ${edad} años y ya eres mayor de edad`)

// let  edad = 0

// do{
//     {console.log(`Tienes ${edad} años y aun eres peque`)
//     // hay que cerrar la condicion ↓↓
//     edad ++
// }

// }while (edad < 18)

// console.log(`Tienes ${edad} años y ya eres mayor de edad`)

let edad = 0;

while (edad < 30) {
  console.log(edad);
  edad++;
  if (edad == 25) break;
}

console.log(`saliste del bucle tienes ${edad} años`);
