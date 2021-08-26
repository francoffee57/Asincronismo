// Async hace que nuestro codigo se comporte como sincrono

//promesa
const somethingWillHapped = ()=>{
    return new Promise((resolve, reject)=>{
        (true)
            ? resolve('La promesa se cumplio :D')
            : reject('Mierda :P')
    })
}


//Llamandola desde async
const doSomethingAsync = async () =>{
    //Esperamos a que se resuelva la funcion somethingWillHapped() (nuesta promesa)
    const something = await somethingWillHapped()
    console.log(something + ' --1')
}


//Llamando la promesa agregando thy(then) y el catch
const doSomethingAsync2 = async () => {
    //Si se cumplen la promesa
    try{
        const something = await somethingWillHapped()
        console.log(something + ' --2')
    } //Si NO se cumple la promesa
    catch (error){
        console.error(error)
    }
}

doSomethingAsync()
doSomethingAsync2()