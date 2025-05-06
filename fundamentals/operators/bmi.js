/*
Escribe un programa sencillo que calcule y muestre el indice de masa corporal de un usuario.
El programa debe solicitar al usuario su nombre, altura en metros y peso en kilogramos, despues
debe calcular el bmc, el porgrama debe mostrar un mensaje al usuario que incluya su nombre y el 
valor de su indice de masa corporal.
Como se calcula = weight / height^2
*/

const prompt = require('prompt-sync')()

const name = prompt('Ingrese su nombre ->')
const heightMeters = parseFloat(prompt('Ingrese su altura en metros ->'))
const weight = parseFloat(prompt('Ingrese su peso en kilogramos ->'))

const indiceMasaCorporal = weight / (heightMeters**2)

const maxDecimals = 3

console.log(`
    ${name}\n
    Su indice de masa corporal es ${indiceMasaCorporal.toFixed(maxDecimals)}
    `
)