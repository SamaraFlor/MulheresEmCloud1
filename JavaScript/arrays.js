var carros = [ "HB20", "Sandero",
"Gol", "Onix" ];

//Para você acessar um elemento do Array referente ao número de índice. Esta
//declaração acessa o valor do primeiro elemento em carros:

var name = carros[0];

//A declaração abaixo, modifica o primeiro elemento, registro na matriz carros

carros[0] = "Voyage";

var carros = [ "HB20", "Sandero", "Gol", "Onix" ];
document.getElementById("demo").innerHTML = carros[0];



//Os Arrays usam números para controlar e acessar seus "elementos". Neste exemplo, a
//pessoa[0] retorna Ricardo:
var pessoa = [ "Ricardo", "Bontempo", 47 ];

//Por padrão, os objetos usam nomes para acessar seus "membros". Neste exemplo
//abaixo, pessoa.primeiroNome retorna Ricardo:
var pessoa = {primeiroNome:"Ricardo", lastName:"Bontempo", age:47};

//Como vimos anteriormente, as variáveis de JavaScript podem ser objetos. Os Arrays
//são tipos especiais de objetos. Por isso, você pode ter inúmeras variáveis de diferentes
//tipos no mesmo Array

myArray[0] = Date.now;
myArray[1] = myFunction;
myArray[2] = mycarros;

//As propriedades nos Arrays de JavaScript vem incorporadas nos métodos do Array :
var x = carros.length; // A propriedade length retorna o número de elementos
var y = carros.sort(); // O método sort() classifica os array

//A propriedade length no Array retorna o comprimento de um Array (o número de
//elementos do Array), ou se você preferir os registros

// Contexto abaixo mostra os registros atribuídos a matriz
var carros = ["Uno", "Gol", "Ka", "HB20"];
carros.length; // o length de carros é 4

//A forma mais fácil de adicionar um novo elemento em uma variável do tipo Array é
//usando o método push
var carros = ["Uno", "Gol", "Ka", "HB20"];
carros.push("sandero");
// acrescenta o novo elemento (Sandero) na variável carro

//Além disso, novos elementos também podem ser inseridos a um array usando a
//propriedade length, que vimos anteriormente
var carros = ["Uno", "Gol", "Ka", "HB20"];
carros[carros.length] = "Sandero";
// Adiciona o novo elemento (Limão) a frutas


//O problema é que o operador JavaScript typeof retorna o "objeto“, pois o Array é um
//objeto, Exemplo:

var carros = ["Uno", "Gol", "Ka", "HB20"];
typeof carros; // retorna o object

//Podemos desenvolver uma função simples, utilizando a própria função isArray()

function isArray(x) {
    return x.constructor.toString().indexOf("Array") > -1;
    }

//A função criada acima, sempre retorna verdadeiro se o argumento for um Array. Ou mais
//precisamente: ele retorna se o protótipo do objeto contiver a palavra "Array".
//O instanceof do operador retorna verdadeiro se um objeto for criado por um determinado
//construtor:

var carros = ["Uno", "Gol", "Ka", "HB20"];
carros instanceof Array
// retorna true

//Criando uma Desestruturação de Array Em JavaScript

var numeros = ["um", "dois", "tres"];
var [um, dois, tres] = numeros;
 console.log(um); // “um"
 console.log(dois); // “dois"
 console.log(tres); // “tres"

 //No exemplo acima criamos uma atribuição padrão de valores para o array

 //Criando uma Desestruturação de Array Em JavaScript
//No exemplo acima, criamos uma atribuição padrão de valores para o array.

var numeros = ["um", "dois", "tres"];
var [um, dois, tres] = numeros;
 console.log(um); // “um"
 console.log(dois); // “dois"
 console.log(tres)

//Criando uma Desestruturação de Array Em JavaScript
//No exemplo acima, criamos uma atribuição via desestruturação separadamente da
//declaração dela 