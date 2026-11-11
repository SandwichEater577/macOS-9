import { useState } from "react";

export default function Calculator() {
  const [display, setDisplay] = useState("0");
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operator, setOperator] = useState<string | null>(null);
  const [isWaitingForOperand, setIsWaitingForOperand] = useState(false);

  const calculate = (
    firstOperand: number,
    secondOperand: number,
    operation: string,
  ) => {
    let result = 0;
    if (operation === "+") result = firstOperand + secondOperand;
    if (operation === "-") result = firstOperand - secondOperand;
    if (operation === "*") result = firstOperand * secondOperand;
    if (operation === "/") {
      result = secondOperand === 0 ? NaN : firstOperand / secondOperand;
    }
    return result;
  };

  const formatResult = (value: number) =>
    Number.isFinite(value) ? String(parseFloat(value.toFixed(10))) : "Error";

  const handleDigit = (digit: string) => {
    if (isWaitingForOperand || display === "Error") {
      setDisplay(digit);
      setIsWaitingForOperand(false);
    } else {
      setDisplay(display === "0" ? digit : display + digit);
    }
  };

  const handleDecimalPoint = () => {
    if (isWaitingForOperand || display === "Error") {
      setDisplay("0.");
      setIsWaitingForOperand(false);
    } else if (!display.includes(".")) {
      setDisplay(display + ".");
    }
  };

  const handleOperator = (nextOperator: string) => {
    if (display === "Error") return;
    const currentValue = parseFloat(display);

    if (isWaitingForOperand && operator) {
      setOperator(nextOperator);
      return;
    }

    if (previousValue !== null && operator) {
      const result = calculate(previousValue, currentValue, operator);
      setDisplay(formatResult(result));
      setPreviousValue(Number.isFinite(result) ? result : null);

      if (!Number.isFinite(result)) {
        setOperator(null);
        setIsWaitingForOperand(true);
        return;
      }
    } else {
      setPreviousValue(currentValue);
    }

    setOperator(nextOperator);
    setIsWaitingForOperand(true);
  };

  const handleEquals = () => {
    if (previousValue === null || !operator || isWaitingForOperand) return;

    const result = calculate(previousValue, parseFloat(display), operator);
    setDisplay(formatResult(result));
    setPreviousValue(null);
    setOperator(null);
    setIsWaitingForOperand(true);
  };

  const handleClear = () => {
    setDisplay("0");
    setPreviousValue(null);
    setOperator(null);
    setIsWaitingForOperand(false);
  };

  const buttonClass =
    "flex items-center justify-center border-2 border-black bg-stone-200 text-sm font-bold font-mono";

  return (
    <div
      className="flex flex-col w-full h-full p-2 select-none gap-2"
      style={{
        backgroundColor: "#e5e5e5",
        backgroundImage: "radial-gradient(#999 1px, transparent 1px)",
        backgroundSize: "3px 3px",
      }}
    >
      <div className="bg-white border-2 border-black h-10 flex flex-col items-end justify-center px-2 text-lg font-bold font-mono mb-1">
        <span>{display}</span>
      </div>

      <div className="grid grid-cols-4 grid-rows-5 gap-1.5 flex-1">
        <button onClick={handleClear} className={`${buttonClass} col-span-2`}>
          C
        </button>
        <button onClick={() => handleOperator("/")} className={buttonClass}>
          /
        </button>
        <button onClick={() => handleOperator("*")} className={buttonClass}>
          *
        </button>

        <button onClick={() => handleDigit("7")} className={buttonClass}>
          7
        </button>
        <button onClick={() => handleDigit("8")} className={buttonClass}>
          8
        </button>
        <button onClick={() => handleDigit("9")} className={buttonClass}>
          9
        </button>
        <button onClick={() => handleOperator("-")} className={buttonClass}>
          -
        </button>

        <button onClick={() => handleDigit("4")} className={buttonClass}>
          4
        </button>
        <button onClick={() => handleDigit("5")} className={buttonClass}>
          5
        </button>
        <button onClick={() => handleDigit("6")} className={buttonClass}>
          6
        </button>
        <button onClick={() => handleOperator("+")} className={buttonClass}>
          +
        </button>

        <button onClick={() => handleDigit("1")} className={buttonClass}>
          1
        </button>
        <button onClick={() => handleDigit("2")} className={buttonClass}>
          2
        </button>
        <button onClick={() => handleDigit("3")} className={buttonClass}>
          3
        </button>
        <button onClick={handleEquals} className={`${buttonClass} row-span-2`}>
          =
        </button>

        <button
          onClick={() => handleDigit("0")}
          className={`${buttonClass} col-span-2`}
        >
          0
        </button>
        <button onClick={handleDecimalPoint} className={buttonClass}>
          .
        </button>
      </div>
    </div>
  );
}
