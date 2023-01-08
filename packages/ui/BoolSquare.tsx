import { FunctionComponent, useState } from "react";
import "./square.css";

type BoolSquareProps = {
  value: number;
  setValue: (val: number) => void;
};

export const Boolsquare: FunctionComponent<BoolSquareProps> = ({
  value,
  setValue,
}) => {
  const [innerValue, setInnerValue] = useState(value);

  const getGradientColor = (value: number) => {
    let color = "white";

    return color;
  };
  const getColor = (value: number) => {
    let color = "";
    switch (value) {
      case 0:
        color = "white";
        break;
      case 1:
        color = "black";
        break;
    }
    return color;
  };
  const [color, setColor] = useState(getColor(value));
  const handleClick = () => {
    setInnerValue(innerValue ? 0 : 1);
    setValue(innerValue);
  };
  const handleDoubleClick = () => {
    setInnerValue(-1);
    setValue(innerValue);
  };
  
  return (
    <input
      className="bool-square"
      style={{
        backgroundColor: getColor(value),
      }}
      defaultValue={value === -1 ? "X" : ""}
      disabled
      // onClick={handleClick}
      //onDoubleClick={handleDoubleClick}
    ></input>
  );
};
