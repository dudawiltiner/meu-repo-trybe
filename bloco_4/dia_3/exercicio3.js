let n = Math.round(Math.random()*6); // qualquer n entre 0 e 6
let string= "";
let x = 0;

console.log( "O n sorteado:"+ n);

if(n > 1){
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

