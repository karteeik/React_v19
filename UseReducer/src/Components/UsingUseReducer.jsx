// useReducer() hook
/*
    A state manager for complex or connected pieces of state.
    It’s like a switchboard: (state, action) → newState.

    syntax - const [state, dispatch] = useReducer(reducer, initialArg, init?);

    state – your current data

    action – a plain object describing what happened (usually { type, payload })

    dispatch(action) function – send action to the reducer 

    reducer(state, action) – a pure function that takes the current state and an action as arguments, and return new state
*/

import { useReducer } from "react";
// console.log(useReducer);

export const UsingUseReducer = () => {
  const reducer = (state, action) => {
    // console.log(state, action);

    if(action.type == "increment"){
        return state + 1;
    }
    if(action.type == "decrement"){
        return state - 1;
    }
    if(action.type == "reset"){
        return state = 0;
    }

    // switch (action.type) {
    //   case "increment":
    //     return state + 1;
    //   case "decrement":
    //     return state - 1;
    //   case "reset":
    //     return 0;
    //   default:
    //     return state;
    // }

    // any one use 
  };
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <h1>Count (useReducer) is : {count}</h1>
      {/* dispatch function is send argument as action to the reducer */}
      <button onClick={() => dispatch({ type: "increment" })}>increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </>
  );
};
