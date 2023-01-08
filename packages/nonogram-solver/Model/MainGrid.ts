import { Orientation, SquareValue } from "../types";
import { BlockColumnList } from "./BlockColumnList";
import { BlockRowList } from "./BlockRowList";
import { Square } from "./Square";

export class MainGrid {
  cols_number: number;
  row_number: number;
  grid: Square[][];
  rows: BlockRowList[];
  cols: BlockColumnList[];

  constructor(left: number[][], up: number[][]) {
    this.grid = [];
    this.rows = [];
    this.cols = [];
    this.row_number = left.length;
    this.cols_number = up[0].length;

    for (let i = 0; i < this.row_number; i++) {
      this.rows.push(new BlockRowList(left, i, this.grid[i], Orientation.row));
      for (let j = 0; j < this.cols_number; j++) {
        if (!i) this.cols.push(new BlockColumnList(up, j, Orientation.col));
        this.grid.push([]);
        this.grid[i].push(new Square(i, j, this.rows[i], this.cols[j]));
        this.cols[j].squares.push(this.grid[i][j]);
        if (i === this.row_number - 1) this.cols[j].setBorder();
      }
      this.rows[i].setBorder();
    }
    try {
      this.solve();
    } catch (error) {
      console.error(error);
    }
  }

  ColorSquare(row: number, col: number) {
    this.grid[row][col].black();
  }
  
  goThrogh() {
    this.rows.forEach((row) => {
      row.goThrough();
    });
    this.cols.forEach((col) => {
      col.goThrough();
    });
  }

  solve() {
    let i = 0;
    while (
      i < 20 &&
      !this.grid.every((row) =>
        row.every((square) => square.value !== SquareValue.white)
      )
    ) {
      i++;
      this.goThrogh();
      console.log("******************************************", i);
    }
  }
}
