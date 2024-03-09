const array1 = [0, 0, 0, 1, 1];
const array2 = [0, 0, 0, 1, 1];
const array3 = [0, 0, 0, 1, 1];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

const newArray1 = shuffleArray(array1);
const newArray2 = shuffleArray(array2);
const newArray3 = shuffleArray(array3);

console.log(newArray1);
console.log(newArray2);
console.log(newArray3);

array1[1] = 1;
// Console.log(newArray2);
// console.log(newArray3);

