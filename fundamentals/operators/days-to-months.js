/*
Escribe un programa en javascript que solicite al usuario ingresar el número de días y calcule el número eqiuivalente de meses 
y días restantes, considerando que un mes consta de 30 días.

Este programa utiliza el módulo prompt-sync para recibir interactivamente la entrada del usuario. Despue2s de calcular la cantidad de meses
y días restantes según la entrada, el programa muestra un mensaje al usuario indicando el quivalente de meses y dias restantes.

Como pista, puedes usar Match.floor(para redondear el resultado a un numero entero. 

Si el usuario ingresa 100, la salida sera: 100 days are 3 months and 10 days.
*/

const prompt = require('prompt-sync')()

const days = parseInt(prompt('Ingrese la cantidad de dias ->'))
const daysPerMonth = parseInt(30)
const extraDays = days % daysPerMonth

const month = Math.floor(days / daysPerMonth)

console.log(`${days} días son ${month} meses y ${extraDays} días`)
