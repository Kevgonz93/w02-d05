// PASO 2

// export function newOrigin() {
const array1 = [0, 0, 0, 0, 0];
const array2 = [0, 0, 0, 0, 0];
const array3 = [1, 1, 1, 0, 0];

let search = [];

for (let i1 = 0; i1 < array1.length; i1++) {
  if (array1[i1] === 1) {
    search = ['array1 '] + [i1];
    break;
  } else {
    for (let i2 = 0; i2 < array2.length; i2++) {
      if (array2[i2] === 1) {
        search = ['array2 '] + [i2];
        break;
      }
    }
   else {    for (let i3 = 0; i3 < array3.length; i3++) {
      if (array3[i3] === 1) {
       search = ['array3 '] + [i3];
       break;
      }
    }
  }
}}

console.log(search);
