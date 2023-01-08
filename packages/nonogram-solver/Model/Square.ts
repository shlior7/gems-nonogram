import { Orientation, SquareValue } from "../types";
import { Block } from "./Block";
import { BlockColumnList } from "./BlockColumnList";
import { BlockRowList } from "./BlockRowList";

export class Square {
  value: number;
  row: number;
  col: number;
  rowBlock: BlockRowList;
  colBlock: BlockColumnList;
  myBlocks: Block[];
  constructor(
    row: number,
    col: number,
    rowBlock: BlockRowList,
    colBlock: BlockColumnList
  ) {
    this.row = row;
    this.col = col;
    this.rowBlock = rowBlock;
    this.colBlock = colBlock;
    this.value = 0;
    this.myBlocks = [];
  }

  myOrientedBlocks(orient: Orientation) {
    return this.myBlocks.filter((block) => block.orient === orient);
  }
  IsLoyalSquare(orient: Orientation) {
    return this.myOrientedBlocks(orient).length === 1;
  }
  color(value: SquareValue) {
    this.value = value;
  }
  black() {
    this.value = SquareValue.black;
  }
  white() {
    this.value = SquareValue.white;
  }
  X() {
    this.value = SquareValue.X;
  }
}
