/* 
El provedor principal de servicios de telefonia movil en la ciudad esta introduciendo una oferta promocional basada tanto
en el monto de recarga realizado por sus clientes como en la duracion de su suscripcion en la compañia con la compañia.
Para ser elegible para la promocion, los clientes  deben recargar un minimo de $20 y un maximo de $80 y haber estado suscritos durante
al menos un año.

En ls promocion SuperSaver, los clientes pueden disfrutar de un monto de recarga duplicado si su recarga es inferior a $38 
y han estado afiliados al servicio por tres años o menos.

Por otro lado, la promocion MegaRecharge está dirigida a los clientes que han estado suscritos por mas de tres años, ofreciendoles un 
monto, de recarga triplicado independientemente del monto recargado.

Tu tarea es desarrollar un programa que tome como entrada el nombre el cliente, el monto de la recarga y la duración de su suscripcion,
y determine si la promocion les aplica y calcule el monto total de recarga incuyendo la promocion.
*/

const prompt = require('prompt-sync')()

const MIN_RECHARGE = 20
const MAX_RECHARGE = 80 
const MIN_YEARS_ACTIVE = 1 

const MAX_YEARS_FOR_SS = 3
const MAX_RECHARGE_FOR_SS = 38
const SS_MULTIPLIER = 2

const MEGA_PROMO_MIN_YEARS = 3
const MEGA_PROMO_MULTIPLIER = 3


function calcRecharge(RECHARGE, YEARS_ACTIVE){
    if(YEARS_ACTIVE < MIN_YEARS_ACTIVE) return RECHARGE

    let multiplier = 1

    if(RECHARGE > MIN_RECHARGE){
    if(YEARS_ACTIVE >= MEGA_PROMO_MIN_YEARS){
        multiplier = MEGA_PROMO_MULTIPLIER
    }
    
} else if (
    RECHARGE >= MIN_RECHARGE &&
    RECHARGE <= MAX_RECHARGE 
){
    multiplier = SS_MULTIPLIER
}


return RECHARGE * multiplier
}

function main(){
    const NAME = prompt('Name:')
    const RECHARGE = parseInt(prompt('Recharge amount:'))
    const YEARS_ACTIVE = parseInt(prompt('Years active:'))

    const RECHARGE_TOTAL = calcRecharge(RECHARGE, YEARS_ACTIVE)
    const promo = RECHARGE_TOTAL - RECHARGE

    console.log(`THANKS ${NAME}!
        RECHARGE: $${RECHARGE_TOTAL}
        PROMO: $${promo}
        
        `)
    }
main()