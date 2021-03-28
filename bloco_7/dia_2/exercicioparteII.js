const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  const newObject = (object, key, value) =>  {
    object[key] = value;
    return object;
}

console.log(newObject(lesson2, 'turno', 'manhã'));

const keysObject = (object) =>  {
    const keys = Object.keys(object);
    return keys;
}

console.log(keysObject(lesson1));

const objectLength = (object) =>  {
    const length = Object.keys(object).length;
    return length;
}

console.log(objectLength(lesson1));


const valuesObject = (object) =>  {
    const values = Object.values(object);
    return values;
}

console.log(valuesObject(lesson3));


const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);


const totalAulas = (object) =>  {
    const totalAulas = object.lesson1.numeroEstudantes + object.lesson2.numeroEstudantes + object.lesson3.numeroEstudantes;
    return totalAulas;
}
console.log(totalAulas(allLessons));

const valueByNumber = (object, number) =>  {
    const value = Object.values(object)[number];
    return value;
}

console.log(valueByNumber(lesson1, 2));

const foundChaveValor = (object, chave, valor) =>  {
    const entries = Object.entries(object);
    let validar = false;
    for(index in entries){
        if(entries[index][0] == chave && entries[index][1] == valor){
            validar = true;
        }
        else{       
        }
    }
    return validar
}

console.log(foundChaveValor(lesson3, 'turno', 'noite'));