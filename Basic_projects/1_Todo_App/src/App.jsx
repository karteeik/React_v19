import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";
import Styles from "./App.module.css";

function App() {
  const todoItems = [
    {
      todoName: "Buy Milk",
      todoDate: "24/11/25",
    },
    {
      todoName: "Complete Project",
      todoDate: "12/10/25",
    },
    {
      todoName: "Buy Snake",
      todoDate: "02/10/25",
    },
    {
      todoName: "Change Cover",
      todoDate: "14/02/25",
    },
  ];

  return (
    <center id={Styles["todo-container"]}>
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems} />
    </center>
  );
}

export default App;
