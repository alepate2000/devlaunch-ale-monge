/*
El evento es parte de las eliminatorias sudamericanas para la copa del mundo. Es un partido celebrado el 22/11/23 a las
20:30, el equipo local Argentina se enfrentó al equipo visitante Brasil. El resultado final fue 1-0, indicando a Argentina como
el equipo ganador. 
*/

const eventName = 'Eliminatorias Sudamericanas' 

const day = 22
const month = 11
const year = 23

const date = `${day}/${month}/${year}`

const hour = 20
const minutes = 30
const time = `${hour}:${minutes}`

const localTeam = 'Argentina'
const awayTeam = 'Brasil' 
const matchTeams = `${localTeam}-${awayTeam}`

const localScore = 1
const awayScore = 0

const score = `${localScore}-${awayScore}`

console.log(eventName)
console.log(date)
console.log(time)
console.log(matchTeams)
console.log(score)