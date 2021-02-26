let n = Math.round(Math.random()*10); // qualquer n entre 0 e 10
let string= "";
let x = 0;
let k = 1;

console.log( "O n sorteado:"+ n);

if(n > 1 && n%2 != 0){
    console.log( "Triângulo com n ímpar");
    x = Math.round((n-x)/2);
    for(let index = 0; index < Math.ceil(n/2); index +=1){
       
        string = "";
        
        for(let index = 0; index < x; index +=1){
            string += " ";
        
        }

        for(let index = 0; index < k; index +=1){
            string += "*";
            
            
        }

        console.log(string); 
        k += 2;   
        x -= 1;
    }
        
}

else if(n > 1 && n%2 == 0){
    console.log( "Triângulo com n par");
    for(let index = 0; index < n; index +=1){

        x += 1;
        string = "";
       
        for(let index = 0; index < (n - x); index +=1){
            string += " ";
        
        }

        for(let index = 0; index < x; index +=1){
            string += "*";
            
        }

        console.log(string);    
    }
    
}

else{
    console.log("n não pode ser 0 e nem 1");
}

