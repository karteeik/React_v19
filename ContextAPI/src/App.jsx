// import { Index } from '../Components'
import { Child } from "../Components/Child";
import { NameProvider } from "../Components/GrandParent";
// import { Parent } from '../Components/Parent'
import { CustomHook } from "../Components/CustomHook";
import "./App.css";

function App() {
  return (
    <>
      {/* <Index /> */}
      <NameProvider>
        {/* <Parent/> */}
        <Child />
        <CustomHook />
      </NameProvider>
    </>
  );
}

export default App;
