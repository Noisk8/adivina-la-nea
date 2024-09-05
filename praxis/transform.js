const temperatura = 76;

function transformarACelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}

// estos parentesis (tempratura) ejecuta la funcion

// si no tuviera el parentesis  pasa respuesta cóḿo función y no ejecuta la funcion

const respuesta = transformarACelsius(temperatura);

console.log(`  la teperatura en grados celsius `, parseInt(respuesta));
