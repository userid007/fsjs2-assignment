import { useState } from "react";
import Wrapper from "./components/Wrapper";
import ButtonBox from "./components/ButtonBox";
import Screen from "./components/Screen";
import Button from "./components/Button";

const btnValues = [
  ["Clear", "Delete"],
  [7, 8, 9, "/"],
  [4, 5, 6, "*"],
  [1, 2, 3, "-"],
  [0, ".", "=", "+"],
];

const zeroDivisionError = "Can't divide with 0";

const math = (a, b, sign) => {
  switch (sign) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    default:
      break;
  }
};

function roundUpToDecimalPlaces(number, decimalPlaces) {
  const multiplier = 10 ** decimalPlaces;
  return Math.ceil(number * multiplier) / multiplier;
}

function App() {
  let [calc, setCalc] = useState({
    sign: "",
    num: 0,
    res: 0,
  });

  const numClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    if (calc.num.toString().length < 16) {
      setCalc({
        ...calc,
        num:
          calc.num.toString() % 1 === 0 && !calc.num.toString().includes(".")
            ? Number(calc.num + value)
            : Number(calc.num + value),
        res: !calc.sign ? 0 : calc.res,
      });
    }
  };

  const comaClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    setCalc({
      ...calc,
      num: !calc.num.toString().includes(".") ? calc.num + value : calc.num,
    });
  };

  const signClickHandler = (e) => {
    setCalc({
      ...calc,
      sign: e.target.innerHTML,
      res: !calc.num
        ? calc.res
        : !calc.res
        ? calc.num
        : roundUpToDecimalPlaces(
            math(Number(calc.res), Number(calc.num), calc.sign),
            5
          ),
      num: 0,
    });
  };

  const equalsClickHandler = () => {
    if (calc.sign && calc.num) {
      setCalc({
        ...calc,
        res:
          calc.num === 0 && calc.sign === "/"
            ? zeroDivisionError
            : roundUpToDecimalPlaces(
                math(Number(calc.res), Number(calc.num), calc.sign),
                5
              ),
        sign: "",
        num: 0,
      });
    }
  };

  const resetClickHandler = () => {
    setCalc({
      ...calc,
      sign: "",
      num: 0,
      res: 0,
    });
  };

  const deleteClickHandler = () => {
    if (calc.num) calc.num = Number(calc.num.toString().slice(0, -1));
    else Number(calc.res.toString().slice(0, -1));
    setCalc({
      ...calc,
    });
  };

  const buttonClickHandler = (e, btn) => {
    if (btn === "Clear" || calc.res === zeroDivisionError)
      return resetClickHandler();
    else if (btn === "Delete") return deleteClickHandler();
    else if (btn === "=") return equalsClickHandler();
    else if (btn === "/" || btn === "*" || btn === "-" || btn === "+")
      return signClickHandler(e);
    else if (btn === ".") return comaClickHandler(e);
    else return numClickHandler(e);
  };

  return (
    <div className="box-border container mx-auto flex justify-center items-center min-h-screen">
      <div className="my-4">
        {" "}
        <h1 className="text-4xl text-center mb-4">Calculator</h1>
        <Wrapper>
          <Screen value={calc.num ? calc.num : calc.res} />
          <ButtonBox>
            {btnValues.map((btn, i) => {
              return btn.map((btn, j) => {
                return (
                  <Button
                    key={i * 4 + j}
                    value={btn}
                    onClick={(e) => buttonClickHandler(e, btn)}
                  />
                );
              });
            })}
          </ButtonBox>
        </Wrapper>
      </div>
    </div>
  );
}

export default App;
