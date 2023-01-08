import { Square } from "nonogram-solver/Model";
import { FunctionComponent } from "react";
import { Boolsquare } from "./BoolSquare";
import "./square.css";


type boardMatrixProps = {
  grid: Square[][];
  setValue: (row: number, col: number, value: number) => void;
};

export const BoardMatrix: FunctionComponent<boardMatrixProps> = ({
  grid,
  setValue,
}) => {
  return (
    <div>
      <ul className="grid-dd" key={"board_grid"}>
        {grid.map((row: Square[], i) => (
          <ul key={i}>
            {row.map((val: Square, j) => (
              <li key={`${i},${j}`}>
                <Boolsquare
                  key={`Board:${i},${j}`}
                  value={grid[i][j].value}
                  setValue={(val) => setValue(i, j, val)}
                ></Boolsquare>
              </li>
            ))}
          </ul>
        ))}
      </ul>
    </div>
  );
};
