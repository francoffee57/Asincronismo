// Un callback es una funcion que le dice a otra funcion 
// " hey vete a trabajar y llamame cuando termines, estare esperando en la playa tomando piña colada" 😂


//Ejemplo de una pequeña calculadora.
const sum =(num1, num2)=>{
    return num1 + num2
}
const res = (num1, num2)=>{
    return num1 - num2
}
const mul = (num1, num2)=>{
    return num1 * num2
}
const div = (num1, num2)=>{
    return num1 / num2
}


const calc = (num1, num2, callback) => {
    return callback(num1, num2)
}

console.log(calc(3,5,div))

const date = (callback) =>{
    console.log(new Date)
    let date = new Date
    setTimeout(()=> callback(date),3000)
}

const printDate = (dateNow) => {
    console.log('- '+dateNow)
}
date(printDate)