import { useState } from "react";

const UseStateChallenge = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState(1);

  const handleIncrement = () => {
    setCount(count + inputValue);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - inputValue);
    }
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <>
      <h1>useState Challenge</h1>

      <div>
        <h2>
          Count : <span>{count}</span>
        </h2>

        <input
          type="number"
          value={inputValue}
          autoComplete="off"
          onChange={(e) => setInputValue(Number(e.target.value))}
        />
      </div>

      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

export default UseStateChallenge;
