let status;

status= 'provao';

switch(status){

    case "Aprovado":
        console.log("Parabéns, você foi aprovado!")
        break;
    
    case "Lista":
        console.log("Você está na nossa lista de espera")
        break;

    case "Reprovado":
        console.log("Você foi reprovado")
        break;

    default:
        console.log("ERRO: Status não encontrado")
    
}
