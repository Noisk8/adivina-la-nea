//     try{
// //LLMADO AL BACKEND 
// console.log('Llamado al backend')
// throw('Este cliente no está apto')
// console.log('Salio todo con exito')

//     }catch{
//         console.log('Algo fallo',error)

//         // TOMAMOS LOS ERRORES Y HACEMOS ALGO CORECTO 

//     }finally{
// //SE EJECUTA SIEMPRE PORQUÉ FALLE O NO FALLE
// console.log('Llamado al backend')


//     }


try {
    //LLMADO AL BACKEND 
    console.log('Llamado al backend')
    setTimeout(() => {
        console.log('El Backend no envio nada ')
        console.log('Cliente apto para la compra')

    }, 500);

} catch {
    console.log('Algo fallo', error)

    // TOMAMOS LOS ERRORES Y HACEMOS ALGO CORECTO 

} finally {
    //SE EJECUTA SIEMPRE PORQUÉ FALLE O NO FALLE
    console.log('Llamado al backend')

}