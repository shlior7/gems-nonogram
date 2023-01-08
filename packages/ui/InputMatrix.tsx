import { FunctionComponent, useState } from "react";
import { Numbersquare } from "./NumberSquare";

type inputMatrixProps = {
  getGrid: (Matrix: number[][]) => void;
  isOkay: (ok: boolean) => void;
  grid: number[][];
  maxValue: number;
};

export const InputMatrix: FunctionComponent<inputMatrixProps> = ({
  getGrid,
  isOkay,
  grid,
  maxValue,
}) => {
  const [ numGrid ] = useState(grid);
  const [ okGrid ] = useState(
    Array.from({ length: grid.length }, () =>
      Array.from({ length: grid[0].length }, () => true)
    )
  );
  const handleOkayness = (ok: boolean, i: number, j: number) => {
    okGrid[i][j] = ok;
    if (okGrid.every((row) => row.every((bools) => bools))) isOkay(true);
    else isOkay(false);
  };
  const handlechange = async (val: number, i: number, j: number) => {
    numGrid[i][j] = val;
    getGrid(numGrid);
  };
  return (
    <div>
      <ul className="grid-dd" key={"input_grid"}>
        {grid.map((row: number[], i) => (
          <ul key={i}>
            {row.map((val: number, j) => (
              <li key={`${i},${j}`}>
                <Numbersquare
                  onChange={(val) => handlechange(val, i, j)}
                  MaxValue={maxValue}
                  isOkay={(ok) => handleOkayness(ok, i, j)}
                  inputValue={grid[i][j] ? grid[i][j].toString() : ""}
                ></Numbersquare>
              </li>
            ))}
          </ul>
        ))}
      </ul>
    </div>
  );
};
