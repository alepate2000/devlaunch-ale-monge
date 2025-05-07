/*
Escriba un programa que examine las preferencias culinarias de 3 personas.
Maria Pepe y Malvern. EL programa analiza 3 condiciones.
Comparte Maria la misma comida favorita que tanto Pepe como Malvern?
La comida favorita de MAria coincide ya sea con la de Pepe o Malvern?
La preferencia de MAria es diferente tanto de la de Pepe como la de Malvern?

Does Maria share the same favorite food as both Pepe and Malvern?: false
Does Maria's favorite food match either Pepe's or Malvern's? : false
Does Maria's preference differ from both Pepe's and Malvern's? : True
*/

const prompt = require('prompt-sync')()

const MariaFood = prompt('Maria:')
const PepeFood = prompt('Pepe:')
const MalvernFood = prompt('Malvern:')

const isMariaFavoriteFoodSameAsPePe = MariaFood === PepeFood
const isMariaFavoriteFoodSameAsMalvern = MariaFood === MalvernFood

const allMatch = isMariaFavoriteFoodSameAsPePe && isMariaFavoriteFoodSameAsPePe
const someMatch = isMariaFavoriteFoodSameAsPePe || isMariaFavoriteFoodSameAsMalvern
const noMatch = !isMariaFavoriteFoodSameAsPePe && !isMariaFavoriteFoodSameAsMalvern

console.log(`
    ${isMariaFavoriteFoodSameAsMalvern}\n
    ${isMariaFavoriteFoodSameAsPePe}
`)