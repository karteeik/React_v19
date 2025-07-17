import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";

function App() {
  return (
    <center id="todo-container">
      <AppName />
      <AddTodo />
      <div class="container text-center">
        <div class="row item-container">
          <div class="col-6">Go to College</div>
          <div class="col-4">17/07/2025</div>
          <div class="col-2">
            <button type="button" class="btn btn-danger buttons">
              Delete
            </button>
          </div>
        </div>
      </div>
      <div class="container text-center">
        <div class="row item-container">
          <div class="col-6">Go to Work</div>
          <div class="col-4">17/07/2025</div>
          <div class="col-2">
            <button type="button" class="btn btn-danger buttons">
              Delete
            </button>
          </div>
        </div>
      </div>
    </center>
  );
}

export default App;
