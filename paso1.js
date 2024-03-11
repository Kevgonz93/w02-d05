export function newArrayRamdons() {
  const n = 5;

  const array1 = new Array(n).fill(0);
  const array2 = new Array(n).fill(0);
  const array3 = new Array(n).fill(0);

  const lastarray = [array1, array2, array3];

  for (let i1 = 0; i1 < array1.length; i1++) {
    array1[i1] = Math.round(Math.random());
  }

  for (let i2 = 0; i2 < array2.length; i2++) {
    array2[i2] = Math.round(Math.random());
  }

  for (let i3 = 0; i3 < array3.length; i3++) {
    array3[i3] = Math.round(Math.random());
  }

  return lastarray;
}

  const resolve = newArrayRamdons();
  const result1 = resolve[0];
  const result2 = resolve[1];
  const result3 = resolve[2];
  const search = [];

  for (let i1 = 0; i1 < result1.length; i1++) {
    if (result1[i1] === 1) {
      search.push([1, i1]);
    }
  }

  for (let i2 = 0; i2 < result2.length; i2++) {
    if (result2[i2] === 1) {
      search.push([2, i2]);
    }
  }

  for (let i3 = 0; i3 < result3.length; i3++) {
    if (result3[i3] === 1) {
      search.push([3, i3]);
    }
  }

  console.log(search);
  return search;
}

export function liveCondition() {
  const lastarray = newArrayRamdons();
  const live = isLive();
  let nliving = 0;
  for (let i = 0; i < live.length; i++) {
    const row = live[i][0];
    const column = live[i][1];
    if (lastarray[row - 1][column - 1] === 1) {
      nliving++;
      if (lastarray[row - 1][column] === 1) {
        nliving++;
      }
    }

    if (lastarray[row - 1][column + 1] === 1) {
      nliving++;
    }

    if (lastarray[row][column - 1] === 1) {
      nliving++;
    }

    if (lastarray[row][column + 1] === 1) {
      nliving++;
    }

    if (lastarray[row + 1][column - 1] === 1) {
      nliving++;
    }

    if (lastarray[row + 1][column] === 1) {
      nliving++;
    }

    if (lastarray[row + 1][column + 1] === 1) {
      nliving++;
    }
  }

  if (nliving < 2 || nliving > 3) {
    lastarray[row][column] = 0;
  }

  if (nliving === 2 || nliving === 3) {
    lastarray[row][column] = 1;
  }

  console.log(nliving);
}

// Con intervalos

// setInterval(newArrayRamdons, 1000);}
