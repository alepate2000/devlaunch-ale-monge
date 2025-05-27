/*
Escribe un programa simple en js que evalue el valor de una variable 'n'.
Verifiqui si la variable es un número negativo, positivo o cero y muestre el mensaje correspondiente dependiendo del 
resultado;

Si el número es mayor que 0, imprime 'positivo'
Si el número es menor que 0 imprime 'negativo'
Si el número es exactamente 0, imprime 'cero.

Si la variable no es un número, imprime 'Por favor, introduce un número'
*/

const prompt = require('prompt-sync')()

const n = parseInt(prompt('Digite el número:'))

if(n > 0){
    console.log('POSITIVO')}

else if(n < 0){
    console.log('NEGATIVO')
}
else if(n === 0){
    console.log('CERO')
}
else{
console.log('POR FAVOR INGRESE UN NÚMERO')}
