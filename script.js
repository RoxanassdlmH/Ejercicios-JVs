//Arreglo de numeros del 1 al 49
const ejercicio1 = [3, 100, 85, 64, 46, 39, 40, 30, 20, 24, 25, 6, 10, 
    54, 82, 71, 67, 77, 17, 29,19, 88, 456, 13, 23, 24];


function es_primo(numero){
if(numero == 2){
return(console.log(numero + ' es primo'));
}else{
for(let i = 2; i < numero; i++){
if(numero % i == 0){
return;}
}
return(console.log(numero + ' es primo'));
}

}

ejercicio1.forEach(es_primo);

