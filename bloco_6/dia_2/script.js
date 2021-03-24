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
    
    //event.preventDefault();
    let div = document.createElement('div');
    div.className = "inform"
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
                alert('Formulário Incompleto');
                div.remove();
                break
            }
            p.innerHTML = select.options[select.selectedIndex].value;
            div.appendChild(p);
        }
        else if(index == 6){
            let moradia = document.querySelector('input[name="moradia"]:checked');
            let p = document.createElement('p');
            if(moradia == null){
                alert('Formulário Incompleto');
                div.remove();
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
                    alert('Formulário Incompleto');
                    div.remove();
                    break
                }
                p.innerHTML = text.value;
                div.appendChild(p);
            }
            else if(index == 9){
                if(input[index].value == false){
                    div.remove();
                    break;
                }
            }
            let p = document.createElement('p');
            if(input[index].value == ''){
                alert('Formulário Incompleto');
                div.remove();
                break
            }
            p.innerHTML = input[index].value;
            div.appendChild(p);
        }
    }
})



let buttonLimpar = document.querySelector('#limpar');

buttonLimpar.addEventListener('click', function(){
    let div = document.querySelector('.inform');
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
