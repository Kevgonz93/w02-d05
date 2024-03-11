import { newArrayRamdons } from './game.js';

const topWall = ['🥸', '🥸', '🥸', '🥸', '🥸', '🥸', '🥸', '🥸', '🥸', '🥸'];
const newArray1 = newArrayRamdons(10);
const newArray2 = newArrayRamdons(10);
const newArray3 = newArrayRamdons(10);
const newArray4 = newArrayRamdons(10);
const newArray5 = newArrayRamdons(10);
const bottomWall = topWall;

export const gameArray = [
  topWall,
  newArray1,
  newArray2,
  newArray3,
  newArray4,
  newArray5,
  bottomWall,
];

export function arrayLength(array) {
  const x = array;
  let i = 0;
  // eslint-disable-next-line no-unused-vars
  for (const item of x) {
    i++;
  }

  return i;
}

console.log(arrayLength(newArray1));

export function arrayJoin(array, separator = ',') {
  let newString = '';
  if (arrayLength(array) === 1) {
    return newString + array[0];
  }

  for (let i = 0; i < array.length - 1; i++) {
    newString = newString + array[i] + separator;
  }

  return newString + array[array.length - 1];
}

arrayJoin(gameArray, ' ');
