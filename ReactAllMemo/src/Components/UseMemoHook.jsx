import { useMemo, useState } from "react";

export const UseMemoHook = () => {
  const [inputValue, setInputValue] = useState(0);

  function ExpensiveTask(inputValue) {
    console.log("Inside Function");

    for (let i = 1; i <= 1000000000; i++) {}
    return inputValue * 2;
  }

//   const ExpensiveValue = ExpensiveTask(inputValue);     //More Time waste in webpage
  const ExpensiveValue = useMemo(() => ExpensiveTask(inputValue),[inputValue])     // useMemo Hook

  return (
    <>
      <div>
        <input
          type="number"
          placeholder="Enter Number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>

      <h1>Double Value is : {ExpensiveValue}</h1>
    </>
  );
};

// inshort - React.memo() is for component blocked for re-rendering and useMemo() hook is for Perticuler Value not updated