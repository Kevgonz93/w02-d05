import { newArrayRamdons } from "./paso1";

const n = 5;

// Crear un array con n valores 0
const array1 = new Array(n).fill(0);
const array2 = new Array(n).fill(0);
const array3 = new Array(n).fill(0);

// Asignar aleatoriamente 0 o 1 
for (let i = 0; i < array1.length; i++) {
  array1[i] = Math.round(Math.random());
}

for (let i = 0; i < array2.length; i++) {
  array2[i] = Math.round(Math.random());
}

for (let i = 0; i < array3.length; i++) {
  array3[i] = Math.round(Math.random());
}

// Paso1
/*
console.log(array1);
console.log(array2);
console.log(array3);
*/
// Paso2
array1[2] = 1;
array1[3] = 1;
array2[2] = 1;
array2[3] = 1;
array3[0] = 1;
array3[1] = 1;

newArrayRamdons()
/*
