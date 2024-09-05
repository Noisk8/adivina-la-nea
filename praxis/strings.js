// para saltear  un ' let's

let string = " lest's do it";

// comillas

let comilla = "el parcero dice: 'que chimba js'";

// \n es un sato de linea
let saltoDeLinea = "esto esta rriba \n esto esta abajo";

// \b back space borra un esacio

// \t es un tabulador

// contar letras

let contadorLetras = "Murciélago";

console.log(contadorLetras.length);

// slice (comienzo, final ) | substring

let texto = "Educación";

let resultado = texto.slice(4, 7);

console.log(resultado);

// reemplazar texto

let texto1 = "La educación es muy importatnte en colombia";

const esultado = texto1.replace("colombia", "el mundo");

console.log(esultado);

const texto2 = "La educación es muy importante en colombia";

const enzo = texto2.toLocaleUpperCase();

console.log(enzo);

const pailas = texto1.concat(texto2);

console.log(pailas);

// borrar espacios adelate y atras

const texto3 =
  "            La educación es muy importante en colombia           ";

const lacal = texto3.trim();

console.log(lacal);

// inicio  trimStart() | final trimEnd()

//  split

const texto5 = "ste texto te lo manndo.  Este textono esmenjor.   mejoras ";

const refafi = texto.split(". ");

console.log(refafi);

// separar uno al lado del otro

// si el split esta vacio separa por letra
const texto6 = "separame";

const yaper = texto6.split("");

console.log(yaper);
