/* 
El Elite Fitness Center es un gimnasio ubicado en Palo Alto, California, que ofrece membresías por $150 al mes.
Opera de 6am a 10pm, emplea a 10 entrenadores certificados y cuaneta con comodidades como sauna, piscina y clases grupales.
*/

const gymName = 'Elite Fitness Center'
const gymType = 'Boutique'

const sector = 'Palo Alto'
const state = 'California'
const exactLocation = `${sector},${state}`

const currency = '$'
const price = '150'
const duration = 'mes'

const monthlyPrice = `${currency}${price}, al ${duration}` 

const openingTime = 6
const closingTime = 10
const timeFormatAm = 'am' 
const timeFormatPm = 'pm'

const schedule = `${openingTime}${timeFormatAm}-${closingTime}${timeFormatPm}`

const trainerNumber = 10 

const amenity1 = 'sauna' 
const amenity2 = 'piscina' 
const amenity3 = 'clases grupales' 

const comodities = `${amenity1},${amenity2},${amenity3}`

console.log(`
        Name: ${gymName}\n
        Gym type: ${gymType}\n
        Location: ${exactLocation}\n
        Price: ${monthlyPrice}\n
        Schedule: ${schedule}\n
        Trainers amount: ${trainerNumber}\n
        Comodities: ${comodities}
`)
