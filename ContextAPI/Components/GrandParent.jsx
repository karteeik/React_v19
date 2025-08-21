// ContextAPI - A way to pass data through the Components tree without having to pass props down manually at every level

import { createContext } from "react";

// step 1 - createContext - create context object
// step 2 - provider -  A component that provide the context value to its children
// step 3 - useContext - A hook that allows you to consume a context

export const NameContext = createContext();

export const NameProvider = ({ children }) => {
  const myName = "karteeikk";
  const myAge = 20;

  return (
    <NameContext.Provider value={{ myName, myAge }}>
      {children}
    </NameContext.Provider>
  );
};
/* createContext(defaultValue) → creates a Context object.

<Context.Provider value={...}> → places a value into the tree.

useContext(Context) → reads the nearest Provider’s value.

(Legacy) Context.Consumer → render-prop consumer (rarely used now).

The value read by useContext always comes from the nearest Provider above the component. If no Provider is found, you get the defaultValue you passed to createContext. */
