import { useCallback, useState } from "react";
import { Button } from "./Button";

export const UseCallBack = () => {
  const [count, setCount] = useState(0);

//   const increment = () => {
//     console.log('increment');
//     setCount((prev) => prev + 1);
//   };

    const increment = useCallback(() => {
        console.log('increment');
        // setCount((prev) => prev + 1);
        setCount(count + 1);
    }, []);

//   const decrement = () => {
//     console.log('decrement');
//     setCount((prev) => prev - 1);
//   };

    const decrement = useCallback(() => {
        console.log('decrement');
        setCount((prev) => prev - 1);
    }, []);

  return (
    <>
      <h1>{count}</h1>
      <Button onClick={increment}>Increment</Button>
      <Button onClick={decrement}>Decrement</Button>
    </>
  );
};
