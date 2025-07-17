function AddTodo() {
  return (
    <div class="container text-center">
      <div class="row item-container">
        <div class="col-6">
          <input type="text" placeholder="Enter Todo Here..."></input>
        </div>
        <div class="col-4">
          <input type="datetime-local" name="" id="" />
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-success buttons">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;