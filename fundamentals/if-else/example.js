
const prompt = require('prompt-sync')()

console.log(
`
    BANCO DEVLIVE
    1.Depositar 
    2.Revisar cuentas
    3.Pagar tarjetas
    \n 
    `
)
const option = parseInt(prompt(
    'Digite una opción:'
))
switch (option) {
    case 1: 
    console.log('Depositando...')
    break;
    case 2: 
    console.log('Revisando...')
    break
    case 3: 
    console.log('Pagando...')
    break;
    default:
        console.log('opción invalida')
        break;
}