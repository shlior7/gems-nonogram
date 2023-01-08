import { fromJS } from "immutable";

function randomChoice(choices) {
  return choices[Math.floor(Math.random() * choices.length)];
}

export function range(n) {
  return Array.from(Array(n).keys());
}


function makeCountObject(max = 10) {
  const countObj = [] as number[];
  for (let i = 0; i < max; i += 1) countObj.push(0);
  return countObj;
}

export function makeBoard(puzzle: number[][]) {
  // create initial count object to keep track of conflicts per number value
  const rows = Array.from(Array(9).keys()).map(() => makeCountObject());
  const columns = Array.from(Array(9).keys()).map(() => makeCountObject());
  const squares = Array.from(Array(9).keys()).map(() => makeCountObject());
  const result = puzzle.map((row, i) => (
    row.map((cell, j) => {
      if (cell) {
        rows[i][cell] += 1;
        columns[j][cell] += 1;
        squares[((Math.floor(i / 3)) * 3) + Math.floor(j / 3)][cell] += 1;
      }
      return {
        value: puzzle[i][j] > 0 ? puzzle[i][j] : null,
        prefilled: !!puzzle[i][j],
      };
    })
  ));
  return fromJS({ puzzle: result, selected: false, choices: { rows, columns, squares } });
}
