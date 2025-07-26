import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./App.module.css";
import { InputBox } from "./Components/InputBox";
import { Buttons } from "./Components/Buttons";

function App() {
  return (
    <>
      <center>
        <h1>Calculator Using React</h1>
        <div className={styles.container}>
           <InputBox />
           <Buttons></Buttons>
        </div>
      </center>
    </>
  );
}

export default App;
