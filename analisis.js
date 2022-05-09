const salariosCol = colombia.map(persona => persona.salary);
const salariosSorted = salariosCol.sort((a,b) => a-b);
const meianaGeneralCol = calculoMediana(salariosSorted);

const sliceStart = (salariosSorted.length * 90)/100;
//Using Slice
//const array10Col = salariosSorted.slice(sliceStart, salariosSorted.length);
//Using Splice
const spliceEnd = salariosSorted.length - sliceStart;
const array10Col = salariosSorted.splice(sliceStart, spliceEnd);
const mediana10Col = calculoMediana(array10Col);
