/*
Solicite al usuario su edad, conviertalo en numero y clasifiquelo segun:

0-2 baby
3-13 child
14-17 teenager
18-29 young adult 
30-60 adult
60+ elderly

Si la edad es menor a 5 "The institution does not support your age, please try again"
*/

const prompt = require('prompt-sync')()

const age = parseInt(prompt('age:'))

switch(true){
    case (age <= 0):
        console.log('please enter a valid age')
        break    
    case (age >= 1 && age <= 2):
        console.log('baby')
        break
    case (age >= 3 && age <=13):
        console.log('child')
        break
    case (age >= 14 && age <= 17):
        console.log('teenager')
        break
    case (age >= 18 && age <= 29):
        console.log('young adult')
        break
    case (age >= 30 && age <=60):
         console.log('adult')
          break   
    case (age > 60):
          console.log('elderly')
          break   
}
if(age <= 5 && age >=1){
 console.log("The institution does not support your age, please try again")}


 switch(true){
    case (age <= 0):
        console.log('please enter a valid age')
        break    
    case (age <= 2):
        console.log('baby')
        break
    default:
        console.log('elderly')
        break
 }


