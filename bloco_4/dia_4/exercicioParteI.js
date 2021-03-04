let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  };

  let info_2 = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: 'Sim'
  };


  info['recorrente'] = 'Sim';

  console.log("Bem-vinda, " + info.personagem);
  console.log(info);
  
for (let keys in info){
console.log(keys);
}

console.log("");
for (let keys in info){
    console.log(info[keys]);
}
console.log("");
for (let keys in info){
    if(keys != "recorrente"){
        console.log(info[keys] + " e " + info_2[keys]);
    }
    else if(info[keys] == 'Sim' || info_2[keys] == 'Sim'){
        console.log("Ambos recorrentes");
    }
    else if (info[keys] == 'Não' || info_2[keys] == 'Não'){
        console.log("Ambos não recorrentes");
    }
    else{
        console.log("Pelo menos um não recorrentes");
    }
}

