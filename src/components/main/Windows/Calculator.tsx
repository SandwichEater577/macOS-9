import { useState } from "react";

export default function Calculator() {
  const [display, setDisplay] = useState("0");
  const [equation, setEquation] = useState("");
  const [prevValue, setPrevValue] = useState<number | null>(null);
  const [operator, setOperator] = useState<string | null>(null);
  const [waiting, setWaiting] = useState(false);

  const handleDigit = (digit: string) => {
    if (waiting) {
      setDisplay(digit);
      setWaiting(false);
    } else {
      setDisplay(display === "0" ? digit : display + digit);
    }
  };

  const handleDot = () => {
    if (waiting) {
      setDisplay("0.");
      setWaiting(false);
    } else if (!display.includes(".")) {
      setDisplay(display + ".");
    }
  };

  const handleOp = (operation: string) => {
    const val = parseFloat(display);
    setEquation(`${display} ${operation}`);
    setPrevValue(val);
    setOperator(operation);
    setWaiting(true);
  };

  const handleEquals = () => {
    if (prevValue !== null && operator) {
      const val = parseFloat(display);
      let result = 0;
      if (operator === "+") result = prevValue + val;
      if (operator === "-") result = prevValue - val;
      if (operator === "*") result = prevValue * val;
      if (operator === "/") result = prevValue / val;

      setDisplay(String(result));
      setPrevValue(result);
      setOperator(null);
      setEquation("");
      setWaiting(true);
    }
  };

  const handleClear = () => {
    setDisplay("0");
    setPrevValue(null);
    setOperator(null);
    setEquation("");
    setWaiting(false);
  };

  const btnClass =
    "flex items-center justify-center border-2 border-black bg-stone-200 shadow-[inset_1.5px_1.5px_0px_#fff,inset_-1.5px_-1.5px_0px_#888] active:shadow-[inset_1.5px_1.5px_0px_#888,inset_-1.5px_-1.5px_0px_#fff] text-sm font-bold font-mono";

  return (
    <div
      className="flex flex-col w-full h-full p-2 select-none gap-2"
      style={{
        backgroundColor: "#e5e5e5",
        backgroundImage: "radial-gradient(#999 1px, transparent 1px)",
        backgroundSize: "3px 3px",
      }}
    >
      <div className="bg-white border-2 border-black h-10 flex flex-col items-end justify-center px-2 text-lg font-bold font-mono shadow-[inset_2px_2px_0px_#888] mb-1">
        <span className="text-[10px] text-gray-500 h-3 leading-none">
          {equation}
        </span>
        <span>{display}</span>
      </div>

      <div className="grid grid-cols-4 grid-rows-5 gap-1.5 flex-1">
        <button onClick={handleClear} className={btnClass}>
          C
        </button>
        <button onClick={handleEquals} className={btnClass}>
          =
        </button>
        <button onClick={() => handleOp("/")} className={btnClass}>
          /
        </button>
        <button onClick={() => handleOp("*")} className={btnClass}>
          *
        </button>

        <button onClick={() => handleDigit("7")} className={btnClass}>
          7
        </button>
        <button onClick={() => handleDigit("8")} className={btnClass}>
          8
        </button>
        <button onClick={() => handleDigit("9")} className={btnClass}>
          9
        </button>
        <button onClick={() => handleOp("-")} className={btnClass}>
          -
        </button>

        <button onClick={() => handleDigit("4")} className={btnClass}>
          4
        </button>
        <button onClick={() => handleDigit("5")} className={btnClass}>
          5
        </button>
        <button onClick={() => handleDigit("6")} className={btnClass}>
          6
        </button>
        <button onClick={() => handleOp("+")} className={btnClass}>
          +
        </button>

        <button onClick={() => handleDigit("1")} className={btnClass}>
          1
        </button>
        <button onClick={() => handleDigit("2")} className={btnClass}>
          2
        </button>
        <button onClick={() => handleDigit("3")} className={btnClass}>
          3
        </button>
        <button onClick={handleEquals} className={`${btnClass} row-span-2`}>
          =
        </button>

        <button
          onClick={() => handleDigit("0")}
          className={`${btnClass} col-span-2`}
        >
          0
        </button>
        <button onClick={handleDot} className={btnClass}>
          .
        </button>
      </div>
    </div>
  );
}
