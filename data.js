//Separa os valores */
let dataString = "01/04/2012".split("/");

/* Define a data com os valores separados */
let data = new Date(dataString[2], dataString[1]-1, dataString[0]);

console.log( data.toString() );
console.log( data.toLocaleDateString("pt-BR") );

//******************

let readlineSync = require('readline-sync');
var nomePeca;
var pesoPeca;
var capacidade;

nomePeca = readlineSync.question("Digite o nome da Peça: ");
pesoPeca = readlineSync.question("Digite o peso da peça: ");
capacidade = readlineSync.question("Digite a capacidade da Peça: ");


if (pesoPeca > 100)
 {
 // condição verdadeira    
    if(capacidade > 10)
    {
        // condição verdadeira    
        console.log("Não cadastrar, capacidade máxima atingida!");
    }
    else
        if (nomePeca.length < 3) 
        {
            console.log("Não cadastrar, nome inválido!");
        }
        else
        {
            console.log("Peça cadastrada com sucesso!");
        }
    {
        // condição falsa
           
    }
}

else
{
    // condição falsa
    console.log("Não cadastrar, Peso Insuficiente!");
}



///**************



if(dataString > dataAtual)
{
    // condição verdadeira    
    date.parse (dataEvento) = readlineSync.question("Digite a data do Evento: ");
    console.log("Cadastro, Permitido!");
}
else
{
    // condição falsa
    console.log ("Não cadastrar, data anterior a data atual!") + dataAtual;
       
}

//console.log( data.toString() );
//console.log( data.toLocaleDateString("pt-BR") );


///*********


if (pesoPeca > 100)
 {
 // condição verdadeira    
    
}

else
{
    // condição falsa
    console.log("Não cadastrar, Peso Insuficiente!");
}

if (nomePeca.length < 3) 
        {
            console.log("Não cadastrar, nome inválido!");
        }
        else
        {
            console.log("Peça cadastrada com sucesso!");
        }