let readlineSync = require('readline-sync');
var IPOdate = new Date();
IPOdate.setTime(Date.parse("Aug 9, 1995"));
IPOdate = readlineSync.question("Digite a data do Evento: ");
console.log (IPOdate)
