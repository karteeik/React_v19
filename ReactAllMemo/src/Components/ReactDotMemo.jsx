import { useMemo, useState } from "react";
import { MemoChild } from "./MemoChild";

export const ReactDotMemo = () => {
  const [count, setCount] = useState(0);

  // const myData = {
  //   name: "kartik",
  //   age: 20,
  // }

  // instead of these

  const myData = useMemo(() => {
    return {
      name: "kartik",
      age: 20,
    };
  }, []);

  return (
    <>
      <h1>Start With : {count}</h1>
      <button onClick={() => setCount(count + 1)}>Let's Go</button>
      <MemoChild data={myData} />
    </>
  );
};
