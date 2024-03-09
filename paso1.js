export function newArrayRamdons() {
  const n = 5;

  const array1 = new Array(n).fill(0);
  const array2 = new Array(n).fill(0);
  const array3 = new Array(n).fill(0);

  for (let i1 = 0; i1 < array1.length; i1++) {
    array1[i1] = Math.round(Math.random());
  }

  console.log(array1);

  for (let i2 = 0; i2 < array2.length; i2++) {
    array2[i2] = Math.round(Math.random());
  }

  console.log(array2);

  for (let i3 = 0; i3 < array3.length; i3++) {
    array3[i3] = Math.round(Math.random());
  }

  console.log(array3);
}
// Sin intervalos

newArrayRamdons();

for()
// Con intervalos

// setInterval(newArrayRamdons, 1000);
