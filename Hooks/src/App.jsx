// import { useState } from "react";
import "./App.css";
// import State from "../Components/State";
// import StateChallenge from "../Components/Statechallenge";
// import DerivedState from "../Components/DerivedState";

// import InputComponent from "../Components/InputComponent";
// import DisplayComponent from "../Components/DisplayComponent";

// import ToggleSwitch from "../Project/ToggleSwitch";
// import "../Project/ToggleSwitch.css";

import UseStatechallenge from "../Components/useStatechallenge";

// function App() {
//   return (
//     <>
//       {/* <State />
//       <StateChallenge />
//       <DerivedState /> */}
//     </>
//   );
// }

// function App() {
//   const [inputValue, setInputValue] = useState("");

//   return (
//     <>
//       <InputComponent inputValue={inputValue} setInputValue={setInputValue}/>
//       <DisplayComponent inputValue={inputValue}/>
//     </>
//   );
// }

// Project use

const App = () => {
  return (
    <>
      {/* <ToggleSwitch /> */}
      <UseStatechallenge/>
    </>
  );
};

export default App;
