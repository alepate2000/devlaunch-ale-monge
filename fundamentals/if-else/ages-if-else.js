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

if (age <= 0)
    console.log('Please enter a valid age')
 else if(age <= 2){console.log('baby')}
 else if(age <=13){console.log('child')} 
 else if(age <= 17){console.log('teenager')}
 else if(age <= 29){console.log('young adult')}
 else if(age <=60){console.log('adult')}
 else{console.log('elderly')}

 if(age <=5 && age > 0){
    console.log("The institution does not support your age, please try again")}




