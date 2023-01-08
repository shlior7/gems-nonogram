import { FunctionComponent, useState } from "react";
import "./square.css";

type SquareProps = {
  onChange: (val: number) => void;
  MaxValue: number;
  isOkay: (ok: boolean) => void;
  inputValue: string;
};

export const Numbersquare: FunctionComponent<SquareProps> = ({
  onChange,
  isOkay,
  MaxValue,
  inputValue,
}) => {
  const validate = (val: string) => {
    if (val === "") {
      isOkay(true);
      return 0;
    }
    const value = parseInt(val);
    if (isNaN(value) || value > MaxValue) {
      isOkay(false);
      return -1;
    }
    isOkay(true);
    return value;
  };

  const [val, setVal] = useState(validate(inputValue));
  const handleChange = (value: string) => {
    const value_number = validate(value);
    setVal(value_number);
    onChange(value_number);
  };

  return (
    <input
      style={{
        backgroundColor: val === -1 ? "red" : "white",
      }}
      className="square"
      onChange={(e) => {
        handleChange(e.target.value);
      }}
      value={val ? val : ""}
    ></input>
  );
};
