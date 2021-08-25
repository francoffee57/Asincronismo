//para hacer esto intala npm y despues pon el siguiente comando:
//$ npm install xmlhttprequest --save


//la instanciamos:
let XMLHttprequest = require('xmlhttprequest').XMLHttpRequest

//Url de la api
const api = 'https://rickandmortyapi.com/api/character/';


//construir la peticion 
//  Esta funcion nos permite traer la información desde nuestra api y le vamos a pasar un callback y 
//  desencadenamos los llamados que necesitamos
function fetchData(url_api, callback){
    //Generamos la referencia al objeto que necesitamos
    let xhttp = new XMLHttprequest()

    //Hacer un llamado a una url:
    //  (que queremos hacer(traer esa información), la url, que se maneje de manera asincrona)
    xhttp.open('GET', url_api, true)

    //Escuchar lo que va a hacer esa conexión. Si este cambio sucede egecutamos una función
    xhttp.onreadystatechange = function(event){
        //Hacemos una validación (si el estado en el que esta es sadisfactorio) para saber si vamos a ejecutar el callback.
            //Tiene 5 estados: 
                // 0: inicializado
                // 1: Esta cargando
                // 2: Ya cargo
                // 3: Si hay alguna descarga o alguna información
                // 4: Se a completado
        if(xhttp.readyState === 4){
            //Ejecutamos una siguiente llamada que nos permite saber el estatus en el cual se encuentra 
                // 200: Todo esta bien
                // 400: No encontro algo
                // 500: Algo fallo
            if(xhttp.status === 200){
                //Ahora si regresamos el callbak
                //(El errar (en este caso no hay error por eso es null), el resultado(como es un JSON lo parseamos))
                callback(null, JSON.parse(xhttp.responseText))
            }
            else{
                //Mandamos un error porsi no funciona correctamente
                //Creamos el error:
                const error = new Error('Error ' + url_api)
                //Retornamos el error:
                return callback(error, null)
            }
        }
    }
    //Se envia la solicitud:
    xhttp.send()
}


//Llamamos a la api
// primero buscamos la lista de personajes
// pasamos la url y una funcion para volver a llamarla
fetchData(api, (error1, data1) => {
    // si error, matamos retornando un error
    if(error1) return console.error(error1)

    // luego buscamos en la api el id de Rick
    fetchData(api + data1.results[0].id, (error2, data2) => {
      // si error, matamos retornando un error
      if(error2) return console.error(error2)

      // por ultimo la consulta a la api que contiene su dimension
      fetchData(data2.origin.url, (error3, data3) => {
        // si error, matamos retornando un error
        if(error3) return console.error(error3)
        
        // mostramos los resultados :) 
        console.log(data1.info.count)
        console.log(data2.name)
        console.log(data3.dimension)
        
        // rutas de las peticiones en orden
        console.log(api)
        console.log(api + data1.results[0].id) 
        console.log(data2.origin.url)
      
      });
    });
  });