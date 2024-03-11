import { newArrayRamdons } from './paso1.js';
import { newOrigin } from './paso2.js';

// Export class gameoflife{

export class newsArr {
  constructor(array1, array2, array3) {
    this.array1 = array1;
    this.array2 = array2;
    this.array3 = array3;
  }

  static result = new Array(newArrayRamdons);

  get newsarrays() {
    return `
    ${this.array1}
    ${this.array2}
    ${this.array3}
`;
  }

console.log(newsArr.newsarrays);

}
