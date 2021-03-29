const pessoaContratada = (nomeCompleto) => {
    nome_da_pessoa = nomeCompleto.split(' ').join('_').toLowerCase();
    return{
        nome : nomeCompleto,
        email: `${nome_da_pessoa}@trybe.com`
    }
}

const newEmployees = (func) => {
    const employees = {
      id1: func('Pedro Guerra'),// Nome:  -> Chame sua função passando o nome Pedro Guerra como parâmetro
      id2: func('Luiza Drumond'),// Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro
      id3: func('Carla Paiva')// Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro
    }
    return employees;
  };

console.log(newEmployees(pessoaContratada));