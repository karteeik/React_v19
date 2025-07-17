// import MyBtn component from MyBtn.jsx 

// only one component import
// import MyBtn from "./MyBtn";

// multiple component import then use {}
// import {MyBtn} from "./MyBtn";
// import {MyBtn1} from "./MyBtn";

// when Mixed component import then 
import {MyBtn} from "./MyBtn";
import MyBtn1 from "./MyBtn";

// dynamic component import
import Hello from "./DynamicComp";
import {Random} from "./DynamicComp";

function App() {
  // its functional component
  // it returns a JSX element
  return (
    <div>
      <h1>Hello, World!</h1>
      {/* use the MyBtn component */}
      <MyBtn></MyBtn>
      <MyBtn1></MyBtn1>
      <Hello></Hello>
      <Random></Random>
      <Random></Random>
      <Random></Random>
      <Random></Random>
      <Random></Random>
    </div>
  );
}

// export app component to main component
export default App;
