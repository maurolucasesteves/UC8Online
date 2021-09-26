let readlineSync = require('readline-sync');
var nomeEvento;
var dataEvento = new Date();
const dataAtual = new Date();
var listadePartipantes;
var dataNasc;

nomeEvento = readlineSync.question("Digite o nome do Evento: ");
dataNasc = readlineSync.question("Digite sua data de nascimento: ");
/* Define a data com os valores separados */
let dataAtual = new Date(dataString[2], dataString[1]-1, dataString[0]);
console.log( dataAtual.toLocaleDateString("pt-BR") );
console.log (dataEvento)
dataEvento.setTime(Date.parse("Aug 9, 1995")); //Entender Melhor
dataEvento = readlineSync.question("Digite a data do Evento: ");
console.log (dataEvento)




if(dataEvento > dataAtual)
{
    // condição verdadeira    
    //date.parse (data) = readlineSync.question("Digite a data do Evento: ");
    console.log("Cadastro, Permitido!");
}
else
{
    // condição falsa
    console.log ("Não cadastrar, data anterior a data atual!") + dataAtual;
       
}

