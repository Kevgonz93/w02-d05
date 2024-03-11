import { newArrayRamdons } from './paso1.js';
// PASO 2

export function newOrigin() {
  const n = 5;

  const array1 = new Array(n).fill(0);
  const array2 = new Array(n).fill(0);
  const array3 = new Array(n).fill(0);

  const search = [];

  for (let i1 = 0; i1 < array1.length; i1++) {
    if (array1[i1] === 1) {
      search.push([['array1'], [i1]]);
    }
  }

  for (let i2 = 0; i2 < array2.length; i2++) {
    if (array2[i2] === 1) {
      search.push([['array2'], [i2]]);
    }
  }

  for (let i3 = 0; i3 < array3.length; i3++) {
    if (array3[i3] === 1) {
      search.push([['array3'], [i3]]);
    }
  }

  console.log(search);
}

newOrigin();
