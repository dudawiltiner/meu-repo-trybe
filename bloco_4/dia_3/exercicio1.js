let n = Math.round(Math.random()*6); // qualquer n entre 0 e 6
let string= "";


console.log( "O n sorteado:"+ n);

if(n > 1){
    for(let index = 0; index < n; index +=1){
        string += "*";
    }

    for(let index = 0; index < n; index +=1){
        console.log(string);
    }
        
}

else{
    console.log("n não pode ser 0 e nem 1");
}
