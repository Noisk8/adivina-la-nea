const fecha = new Date();

console.log(fecha);

// fecha en especifico forma ISO

const fechas = new Date("2023-02-02");

// SOLO QUIERO TRAER EL AÑO

const fecha2 = new Date();

fecha2.setFullYear(2023);

//como es un metodo se ponen () para que se ejecute
console.log(fecha2.getFullYear());

// para mostrar un mes en texto

let meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

let visaje =
  fecha2.getDay() + " " + meses[fecha2.getMonth()] + " " + fecha2.getFullYear();

console.log(visaje);

// set
