function App() {
  const handleClick = () => {
    alert("Button is Clicked!");
  };

  const greetUser = (name) => {
    alert(`Hello ${name}`);
  };

  const handleChange = (e) => {
    // console.log(e);
    console.log("Input Value : ", e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent Page Load
    console.log("Form submitted !");
  };

  return (
    <>
      {/* Handling events in React is similar to handling DOM events in plain JavaScript
        syntax - In HTML - <button onclick="doSomething()">Click Me</button> ( Use camelCase (onClick, onChange, onSubmit, etc.))
               - In React - <button onClick={doSomething}>Click Me</button> (Pass a function reference, not a string or function call.)
      */}

      {/* 
| Type        | Example Events         | Common Usage                    |
| ----------- | ---------------------- | ------------------------------- |
| Mouse       | onClick, onMouseEnter  | Buttons, hovers, menus          |
| Keyboard    | onKeyDown, onKeyUp     | Forms, accessibility, games     |
| Form        | onChange, onSubmit     | Form inputs, checkboxes, radios |
| Focus       | onFocus, onBlur        | Input validation, accessibility |
| Touch/Other | onTouchStart, onScroll | Mobile apps, scroll containers  |

      */}

      {/* Simple Click Event */}
      <button onClick={handleClick}>Click Me</button>

      {/* Passing Arguments to Event Handlers jsx, Copy, Edit */}
      <button onClick={() => greetUser("kartik")}>Click Again</button>

      {/* Handling Input (onChange) */}
      <input type="text" onChange={handleChange} placeholder="onChange Event" />

      {/* Handling Submit (onSubmit) */}
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
