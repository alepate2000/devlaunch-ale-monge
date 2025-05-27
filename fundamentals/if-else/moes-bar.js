/* 
Entrada de fecha de nacimiento: (YYYY/MM/DD)
Calculo de edad:
Verificación de edad: verificar si es mayor de edad
*/

const prompt = require('prompt-sync')()

const birthDate = prompt('Digite su fecha de nacimiento (YY/MM/DD)')
const today = new Date()
const birthday = new Date(birthDate)

const age = today.getFullYear() - birthday.getFullYear()

const birthdayPassed = today.getMonth() > birthday.getMonth() ||
(today.getMonth() === birthday)

if (birthdayPassed){
    age--
}

console.log(birthday)
console.log(today)
console.log(age)

