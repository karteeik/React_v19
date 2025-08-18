import { useState } from "react";
import { useEffect } from "react";

const UseEffectEx2 = () => {
  // step 3 - when Updation(State Value Update) then render function
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Component is Mounted");
  }, []);

  useEffect(() => {
    console.log("Count is : ", count);

    document.title = `Count : ${count}`;
  }, [count]);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Start</button>
    </>
  );
};

export default UseEffectEx2;
