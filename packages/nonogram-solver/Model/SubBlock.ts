import { Orientation } from "../types";
import { Square } from "./Square";

export class SubBlock {
  length: number;
  block: Square[];
  orient: Orientation;

  constructor(orient: Orientation) {
    this.length = 0;
    this.block = [];
    this.orient = orient;
  }
  IsSubBlockClosed() {
    let isIt = this.block.every((square) =>
      square
        .myOrientedBlocks(this.orient)
        .every((block) => block.logical_length === this.length)
    );

    this.block.map((s) => console.log(s, s.myOrientedBlocks(this.orient)));
    console.log(this, isIt, "SubClosed");
    return isIt;
  }
  IsSquaresLoyal() {
    return (
      this.block.some((square) => square.IsLoyalSquare(this.orient)) &&
      this.block.length !== 0
    );
  }
  push(square: Square) {
    if (
      this.block.find((s) => square.row === s.row && square.col === s.col) ===
      undefined
    ) {
      this.block.push(square);
      this.length++;
    }
  }
  unshift(square: Square) {
    this.block.unshift(square);
    this.length++;
  }
  clear() {
    this.block = [];
    this.length = 0;
  }
  GetActualStartAndEnd() {
    let start, end;
    if (this.length === 0) {
      return { start: Number.MAX_SAFE_INTEGER, end: -Number.MAX_SAFE_INTEGER };
    }
    if (this.orient === Orientation.row) {
      start = this.block[0].col;
      end = this.block[this.block.length - 1].col;
    } else {
      start = this.block[0].row;
      end = this.block[this.block.length - 1].row;
    }
    return { start: start, end: end };
  }
}
