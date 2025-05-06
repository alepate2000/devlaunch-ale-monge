/* 
Crea un programa en JavaSCript que calcule la factura total de una persona en un hotel, donde cada habitación tiene un 
precio de $100 por noche, aprovechando una oferta promocional que incluye un descuento del 5%.

EL programa debe solicitar al huésped el número de noches que pasó en el hotel para calcular la factura final. 

Si el usuario inhgresa que se quedo2 5 noches, la salida será: $475.00.
*/

const prompt = require('prompt-sync')()

const PRICE_PER_DAY = 100

const promoDiscount = 0.05

const days = parseInt(prompt('Cuantos dias desea quedarse?'))

const subtotal = PRICE_PER_DAY * days
const discount = subtotal * promoDiscount
const finalPrice = subtotal - discount

console.log(`
    Hotel Receipt 
    Nights: ${days}\n
    Payment:
     - Subtotal = $${subtotal}\n
     -Discount = $${discount}\n
     -Final Price = $${finalPrice}\n

`)