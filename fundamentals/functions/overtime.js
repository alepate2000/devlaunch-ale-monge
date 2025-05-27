/* 
En una empresa hay proceso donde cada trabajador debe registrar las horas de entrada y salida diariamente. De esta forma,
al final de cada dia, su empleador sabra cuanto tiene que pagarles por sus horas trabajadas. 
Pero si una persona trabajó más de ocho horas, se le debe pagar un costo extra por las horas adicionales, que es igual a 1.5 veces el 
monto de su tarifa por hora.Haz un programa que, recibiendo la tarifa por hora,  la hora de entrada y la hora de salida, imprima el 
monto total de dinero que ese empleado recibió ese dia.

Tarifa por hora: $10
Hora de entrada: 9:00
Hora de salida: 18:00

Resp: $95
*/

const prompt = require('prompt-sync')()

const WORK_DAY_HOURS = 8
const OVERTIME_MULTIPLIER = 1.5

function calcPayment(hourTarif, clockin, clockout){
    const [startHour] = clockin.split(':')
    const [endHour] = clockout.split(':')

    const workedHours = endHour - startHour 

    let salary = 0

    if(workedHours <= WORK_DAY_HOURS) {
        salary = hourTarif * workedHours
    } else {
        const extraHours = workedHours - WORK_DAY_HOURS
        salary = (hourTarif * WORK_DAY_HOURS) + ((extraHours * hourTarif) * OVERTIME_MULTIPLIER)

    }


return salary
}

function main(){
    const hourTarif = parseFloat(prompt('Hourly rate:'))
    const clockin = prompt('Clockin hour:')
    const clockout = prompt('Clockout hour:')

const salary = calcPayment(hourTarif, clockin, clockout)

console.log(`SALARY: $${salary}`)

}

main()