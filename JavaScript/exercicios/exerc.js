//fizzbuss
//Divisivel por 3 =>'Fizz',
//Divisivel por 5 => 'Buzz',
//divisivel por 3 e 5 = 'fizzbuzz",
// se não for um numero => 'não e um numero,
// não for divisivel nem por 3 e nem por 5 => Entrada



let resultado = fizzBuzz(37);
console.log(resultado)


function fizzBuzz(entrada){
    if (typeof entrada != 'number') 
        return 'não e um numero';
    if ((entrada % 3 === 0) && (entrada % 5 === 0) )
      return "Fizzbuzz";
    if (entrada % 3 === 0)
    return "fizz";
    if (entrada % 5 === 0)
    return "buzz";


return entrada;

}


//reverse y string

let novaString = "";

function stringReversa(str){
   for(let i = str.length - 1; i >= 0 ; i--){
    novaString += str[i];
   }
   console.log(novaString);
}
 let resultadoString = stringReversa("Ola Gama Academy")

 //Converter Celsiu em Fahrenheit

 function convertFahrenheit(value){
    return value *1.8 + 32 

 }
 let result = convertFahrenheit(6);
 console.log("o valor em Fahrenheit e:" + result);