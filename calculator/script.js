function agregar(valor){
    document.getElementById('pantalla').value += valor;
}

function calcular(){
    let resultado = eval(document.getElementById('pantalla').value);
    document.getElementById('pantalla').value = resultado;
}

function borrar(){
    document.getElementById('pantalla').value = '';
}   