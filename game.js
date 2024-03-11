const topWall = ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'];
const newArray1 = newArrayRamdons(10);
const newArray2 = newArrayRamdons(10);
const newArray3 = newArrayRamdons(10);
const newArray4 = newArrayRamdons(10);
const newArray5 = newArrayRamdons(10);
const bottomWall = topWall;

const gameArray = [
  topWall,
  newArray1,
  newArray2,
  newArray3,
  newArray4,
  newArray5,
  bottomWall,
];

export function newArrayRamdons(n) {
  const array = [];

  const valor1 = Math.random() < 0.5 ? '🔥' : '🏳️';
  const valor2 = valor1 === '🏳️' ? '🔥' : '🏳️';

  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      array.push(valor1);
    } else {
      array.push(valor2);
    }
  }

  return array;
}

export function livingHood(array, x, y) {
  let live = 0;
  if (array[x - 1][y - 1] === '🔥') {
    live += 1;
  }

  if (array[x][y - 1] === '🔥') {
    live += 1;
  }

  if (array[x - 1][y] === '🔥') {
    live += 1;
  }

  if (array[x + 1][y + 1] === '🔥') {
    live += 1;
  }

  if (array[x + 1][y] === '🔥') {
    live += 1;
  }

  if (array[x][y + 1] === '🔥') {
    live += 1;
  }

  if (array[x - 1][y + 1] === '🔥') {
    live += 1;
  }

  if (array[x + 1][y - 1] === '🔥') {
    live += 1;
  }

  return live;
}

export function newStep(array) {
  const fakeArray = JSON.parse(JSON.stringify(array));
  for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 10; j++) {
      if (array[i][j] === '🔥') {
        const count = livingHood(array, i, j);
        if (count < 2 || count > 3) {
          fakeArray[i][j] = '🏳️';
        } else {
          fakeArray[i][j] = '🔥';
        }
      }

      if (array[i][j] === '🏳️') {
        const count = livingHood(array, i, j);
        if (count === 3) {
          fakeArray[i][j] = '🔥';
        } else {
          fakeArray[i][j] = '🏳️';
        }
      }
    }
  }

  array = JSON.parse(JSON.stringify(fakeArray));

  return array;
}

export function lifesGame() {
  console.log(newStep(gameArray));
}

lifesGame();
