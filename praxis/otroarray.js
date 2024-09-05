const frutas = ["Manzana", "Pera", "Naranja", "Manzana", "Pera"];

const respuesta = frutas.filter((x) => x === "Manzana");

console.log(respuesta);

const perros = [
  { nombre: "Pedro", apellido: "Gomez" },
  { nombre: "Manuel", apellido: "Perez" },
  { nombre: "Lucia", apellido: "Henao" },
  { nombre: "Rodrigo", apellido: "Henao" },
  { nombre: "Camilo", apellido: "Perez" },
];

const respuesta2 = perros.filter((x) => x.apellido === "Henao");

for (let index = 0; index < respuesta2.length; index++) {
  const element = respuesta2[index];
  console.log(element.nombre);
}

const frutal = ["Manzana", "Manzana", "Manzana"];

const resultado = frutal.map((x) => {
  if (x == "Manzana") return "Naranja";
});

console.log(resultado);

const aparato = frutal.fill("Naranja", 1);

console.log(aparato);

const frutero = ["Manzana", "Manzana", "Manzana"];

document.getElementById("barbara").innerHTML = frutero.join(", fruta:");

// Concat en string

const exotico = ["kush", "Candy", "Corinto"];

console.log(frutero.concat(exotico));

// sort

// si son letras lo va ordenar bien, pero si son numero
//ordena por el primer caracter alfanumerico

const nomames = [1, 2, 3, 4, 5, 6];

// para que funcione correctamente el orden con numeros le pasamos una funcion (x,y)
/*
La parte (x, y) => x - y es una función de comparación que determina el orden de clasificación. Toma dos elementos (x e y) del array y los compara.

    Si x - y es negativo, x debe ir antes que y (orden ascendente).
    Si x - y es positivo, x debe ir después de y (orden descendente).
    Si x - y es cero, el orden permanece sin cambios.

*/
console.log(nomames.sort((x, y) => x - y));

// Ordenar objetos

const autos = [
  { auto: "dodoria", año: 2020 },
  { auto: "pokemon", año: 2320 },
  { auto: "sangria", año: 2020 },
  { auto: "fapoer", año: 2020 },
];

// ordenar por año de menor a mayor

console.log(autos.sort((x, y) => x.año - y.año));

// no declarar los array como const porqué no se ueden redeclarar

let unacosa = [1, 2, 3, 4, 5];

unacosa = [7, 8, 9];

console.log(unacosa);
