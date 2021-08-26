const somethingWillHapped = ()=>{
    //Creamos una promesa que retornara resolve (si se cumple) y reject (si no se cumple)
    return new Promise((resolve, reject)=>{
        if(true){
            resolve('La promesa se cumplio :D')
        }
        else{
            reject('Mierda :P')
        }
    })
}

const somethingWillHapped2 =()=>{
    return new Promise((resolve, reject)=>{
            setTimeout(()=> {
                if(false){
                    resolve('Promesa cumplidaaa ;)')
                }else{
                    reject("PTM :'(")
                }
            },2000)
        })
}

somethingWillHapped()
    .then(response => console.log(response)) //Si la promesa se cumple. (Puede haber más de una. Solo pon otro .then)
    .then(()=> console.log('(Fin de la primera promesa)'))
    .catch(error => console.error(error)) //Si no se cumple


somethingWillHapped2()
    .then(response => console.log(response)) 
    .catch(error => console.error(error))