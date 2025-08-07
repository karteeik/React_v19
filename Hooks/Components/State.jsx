import { useState } from "react";

const Counter = () => {
  // What is State ?
  // In React.js, state refers to a built-in object that holds data or information about the component. This data will change in future, usually in response to user actions, network responses, or other events.
  // When the state changes, React re-renders the component to reflect the new state on the UI.

  //   console.log(useState());
  // [undefined, ƒ]

  //   useState Syntax - const [count, setCount] = useState(0);

  // useState(0) initializes the state with a value of 0.
  // count is the current value of the state.
  // setCount is the function used to update the state.

  /*
  Key Points About State
Each component can have its own independent state.
State is mutable (can be changed), unlike props which are read-only.
Updating state causes the component (and its children) to re-render.
State should be updated using the setState (class) or useState (functional) method, not changed directly.

why use state?
React is built to create interactive UIs, and state is what enables your app to react to user input, API calls, or internal events without needing to reload the page.
   */

  const [count, setCount] = useState(0);
  console.log(count);

  const handleCount = () => {
    setCount(() => count + 1);
  };

  return (
    <>
      <h1>Count is {count}</h1>

      {/* first way */}
      {/* <button onClick={() => setCount(count + 1)}>Start</button> */}

      {/* second way */}
      <button onClick={handleCount}>Start</button>
    </>
  );
};

export default Counter;
