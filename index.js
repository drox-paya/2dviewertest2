var {parseEvent, parseTicks} = require('@laihoe/demoparser2');

let event_json = parseEvent('testdemos/vitality-vs-mouz-m1-inferno.dem', "player_death", ["X", "Y"], ["total_rounds_played"]);
let ticks_json = parseTicks('testdemos/vitality-vs-mouz-m1-inferno.dem',["X", "Y"] [1000,1001]);
console.log(ticks_json);