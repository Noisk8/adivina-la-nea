// son un tipo especial de objeto que nos permite realizar tareas asincronas y luego manejar los resultados 
// pueden ser exitosas o fallar 
// permiten majear una secuenscialdad de acciones 

let promesa = new Promise((response, reject) => {
let resp = 'Esta es la respuesta del servicio'
    response('Salio todo bien')
    reject ('Fallo')
})


promesa.then(res => {

    console.log(res)
}).catch(error=>{
    console.error(error)
})
