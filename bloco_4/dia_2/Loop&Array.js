let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = 0;

// Exercico 1

console.log(numbers);

// Exercico 2

for(let index=0; index < numbers.length; index++){
    resultado += numbers[index]
}

console.log(resultado);

// Exercico 3

for(let index=0; index < numbers.length; index++){
    resultado += numbers[index] 
}

let media = resultado / numbers.length;
console.log(media);

// Exercico 4

if(media>20){
    console.log("valor maior que 20");
}

else{
    console.log("valor menor ou igual a 20");
 }

// Exercico 5

let maior = 0;

for(let index=0; index < numbers.length; index++){

        if(numbers[index] > maior){
           maior = numbers[index];
        }
       
}

console.log(maior);

// Exercico 6

let res = 0;

for(let index=0; index < numbers.length; index++){

    if(numbers[index]%2 != 0){
       res += 1;
    }
}

console.log(res);

// Exercico 7

let menor = numbers[0];

for(let index=0; index < numbers.length; index++){

    if(numbers[index] < menor){
        menor = numbers[index];
    }     
}

console.log(menor);

// Exercico 8

let array = [];

for(let num = 1; num < 26; num++){
    array.push(num)
}

console.log(array);

// Exercico 9

for(let index = 0; index < array.length; index++){
    resultado = array[index] / 2;
    console.log(resultado);

}


// BÔNUS

// Crescente 

for (let i = 1; i < numbers.length; i++) {
    for (let j = 0; j < i; j++) {
      if (numbers[i] < numbers[j]) {
        let position = numbers[i];
  
        numbers[i] = numbers[j];
        numbers[j] = position;
      }
    }
  }

console.log(numbers);

// Decrescente

for (let i = 1; i < numbers.length; i++) {
    for (let j = 0; j < i; j++) {
      if (numbers[i] > numbers[j]) {
        let position = numbers[i];
  
        numbers[i] = numbers[j];
        numbers[j] = position;
      }
    }
  }

console.log(numbers);

// Multiplicação -- Seguintes

numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let array_final = [];

for(let index = 0; index < numbers.length; index++){

    if (index == (numbers.length-1)){
        array_final.push(numbers[index]*2);
    }
    else{
        array_final.push(numbers[index]*numbers[index+1]);
    }
}

console.log(array_final);