/*
El programa soolicita al usuario un número del 1 al 7 mediante prompt-sync.
Utiliza una declaración switch para mostrar el dia de la semana correspondiente o 'invalid day' Si el numero no es valido.
*/

const prompt= require('prompt-sync')()

const day = parseInt(prompt("day:"))

switch(day){
    case 1 :
        console.log('lunes')
        break
    case 2 :
        console.log('martes')
        break
    case 3 :
        console.log('miercoles')
        break
    case 4 :
        console.log('jueves')
        break
     case 5 :
        console.log('viernes')
            break
    case 6 :
        console.log('sabado')
            break
    case 7 :
        console.log('domingo')
            break
    default :
    console.log('digite un número valido')
}