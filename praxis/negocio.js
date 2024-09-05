const vendedor = {
  nombre: "pedro",
  apellido: "lopez",
  edad: 25,
  empresa: "Austos SA",
  hailidadesBlandas: ["carisma", "Punualidad"],
  vender: function () {
    return "Pedro vendio tres autos";
  },

  // this re refiere a algo es que está por fuera del scope ↓
  nombreCompleto: function () {
    return this.nombre + " " + this.apellido;
  },
};

console.log(vendedor.vender());
console.log(vendedor.nombreCompleto());
