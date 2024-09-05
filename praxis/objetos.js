let auto = {
  marca: "FIAT",
  modelo: "uno",
  peso: 550,
  color: "rojo",
};

let auto2 = {
  marca: "MAZDA",
  modelo: "g-34",
  peso: 880,
  color: "azul",
};

console.log(
  "El color del auto 1  es:",
  auto.color,
  "El peso del auto 1 es:",
  auto.peso,
  "La marca del auto 1 es:",
  auto.marca,
  "El modelo del auto 1 es:",
  auto.modelo
);

// Cambiando  datos de objetos

auto.color = "verde";

console.log(
  "El color del auto 2  es:",
  auto2.color,
  "El peso del auto 2 es:",
  auto2.peso,
  "La marca del auto 2 es:",
  auto2.marca,
  "El modelo del auto 2 es:",
  auto2.modelo
);

// otra forma de acceder a la clave
console.log(auto["marca"]);

console.log(auto.color);
