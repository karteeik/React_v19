import { useRef } from "react";

export const Index = () => {
  //   console.log(useRef()); // it's return an object {current: undefined}

  // useRef is a React Hook that lets you persist a mutable value across renders without causing a re-render.

  // A DOM reference (to directly access/manipulate a DOM element).
  // A mutable variable that doesn’t re-render the component when updated.

  // Syntax - const myRef = useRef(initialValue);

  // Common use cases - DOM Elements Accessing, Storing Mutable Values Without Re-render

  const username = useRef(null);
  const password = useRef(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    //   In normal javaScript We catch the js element use DOM like this,

    // const username = document.getElementById("username");
    // //   console.log(username);
    // console.log(username.value);

    // const password = document.getElementById("password");
    // //   console.log(password);
    // console.log(password.value);

    // but this is not right in react js we use useRef
    console.log(username.current);
    console.log(password.current);
    console.log(username.current.value);
    console.log(password.current.value);
  };

  return (
    <>
      <h1>useRef Hook in React</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          id="username"
          placeholder="Enter username"
          ref={username}
        />
        <br />
        <input
          type="password"
          id="password"
          placeholder="Enter password"
          ref={password}
        />
        <br /> <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
