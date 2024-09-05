// una funcion que se pasa a otra  funcion para poder usarala adentro 


function mostrarConsola(num){
    console.log(num)
}

function calcular (num1, num2, callback){
    let suma = num1 + num2
    callback(suma)
}


calcular(1,3,mostrarConsola)