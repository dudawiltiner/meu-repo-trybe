let states = [
    'Acre',
    'Alagoas',
    'Amapá',
    'Amazonas',
    'Bahia',
    'Ceará',
    'Distrito Federal',
    'Espírito Santo',
    'Goías',
    'Maranhão',
    'Mato Grosso',
    'Mato Grosso do Sul',
    'Minas Gerais',
    'Pará',
    'Paraíba',
    'Paraná',
    'Pernambuco',
    'Piauí',
    'Rio de Janeiro',
    'Rio Grande do Norte',
    'Rio Grande do Sul',
    'Rondônia',
    'Roraíma' ,
    'Santa Catarina',
    'São Paulo',
    'Sergipe',
    'Tocantins',
  ]

let select = document.querySelector('select');
  
for(let index = 0; index < states.length; index++){
    let option = document.createElement('option');
    option.innerHTML = states[index];
    option.value = states[index];
    select.appendChild(option);
}


let buttonSalvar = document.querySelector('#salvar');

buttonSalvar.addEventListener('click', function(event){
    
    // event.preventDefault();
    let div = document.createElement('div');
    document.body.appendChild(div);
    let input = document.querySelectorAll('input');
    let  h2 = document.createElement('h2');
    h2.innerHTML = 'Consolidado das Informações';
    div.appendChild(h2);

    for(let index = 0; index < input.length; index++){
        if(index == 5){
            let select = document.querySelector('select');
            let p = document.createElement('p');
            if(select.options[select.selectedIndex].value == null){
                break
            }
            p.innerHTML = select.options[select.selectedIndex].value;
            div.appendChild(p);
        }
        else if(index == 6){
            let moradia = document.querySelector('input[name="moradia"]:checked');
            let p = document.createElement('p');
            if(moradia.value == null){
                break
            }
            p.innerHTML = moradia.value;
            div.appendChild(p);
        }
        else{
            if(index == 7){
                let text = document.querySelector('textarea');
                let p = document.createElement('p');
                if(text.value == ''){
                    break
                }
                p.innerHTML = text.value;
                div.appendChild(p);
            }
            else if(index == 9){
                if(validarData(input[index].value) == false){
                    break;
                }
            }
            let p = document.createElement('p');
            if(input[index].value == ''){
                break
            }
            p.innerHTML = input[index].value;
            div.appendChild(p);
        }
    }
})



let buttonLimpar = document.querySelector('#limpar');

buttonLimpar.addEventListener('click', function(){
    let div = document.querySelector('div');
    let text = document.querySelector('textarea');
    if(div == null){
        alert('Não há nenhuma informação salva para limpar!');
    }
    else{
        div.remove();
        text.value = '';
        let input = document.querySelectorAll('input');
        for(let index = 0; index < input.length; index++){   
            input[index].value = '';  
        }
    } 
}) 

//crio um função que valida da data
function validarData(data){
    
    let valido = false; 
    // Aqui eu separo os valores do dia, mes, ano com o split e valida se tem o / / / formato pedido no requisito
    let dia = data.split("/")[0];
    let mes = data.split("/")[1];
    let ano = data.split("/")[2];

    // aqui, para não ter que construir IF's e ELSE's para validar se a data deve estar dentro dos intervalos do requisito 2 (os intervalos que uma data padrão deve ser). Validamos isso com uma função do javascript new Data();
    let MyData = new Date(ano, mes - 1, dia); // objetos de data
    console.log(dia.length);
    if(dia.length !== 2 || mes.length !== 2 || ano.length !== 4){
        alert("Data no formato errado.")
    }
    else if((MyData.getMonth() + 1 != mes) || (MyData.getDate() != dia) ||(MyData.getFullYear() != ano)){
        alert("Valores inválidos para o dia, mês ou ano. Por favor corrija.");
    }
    else{
        valido = true;
    }

    return valido;
} 

