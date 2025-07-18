function App() {
  // Conditional Rendering in React means showing or hiding UI elements based on certain conditions — like if, else, true/false, loading, etc.

  // Uses
  // Show loading spinners, Show error messages, Show login form or user dashboard, Show/hide buttons, text, or UI elements

  let age = 15;

  // let canWatch = "Eligible";
  // if(age < 18) canWatch = "Not Eligible";

  function Buttonn() {
    if (age < 18) return "Eligible";
    return "Not Eligible";
  }

  // if (age < 18) {
  //   return (
  //     <>
  //       <h1>Using if-else</h1>
  //       <button>You are not eligible to vote</button>
  //     </>
  //   );
  // }

  {
    // Using Ternary Operator - uses when short-hand logic
    // return (
    //   <>
    //     <button>{age > 18 ? "Eligible" : "Not Eligible"}</button>
    //   </>
    // );

    // Using own variable - uses when one statement
    // return (
    //   <>
    //     <button>{canWatch}</button>
    //   </>
    // );

    // Using Function - uses when more complex logic
    return (
      <>
        <button> {Buttonn()} </button>
      </>
    );
  }

  return (
    <>
      <button>You are eligible to vote</button>
    </>
  );
}

export default App;
