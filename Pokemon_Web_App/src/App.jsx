import { Cards } from "../Components/Cards";
import { Header } from "../Components/header";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <Header inputValue={inputValue} setInputValue={setInputValue} />
      <Cards inputValue={inputValue} />
    </>
  );
}

export default App;
