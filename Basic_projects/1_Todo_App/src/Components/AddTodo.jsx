function AddTodo() {
  return (
    <div className="container text-center">
      <div className="row item-container">
        <div className="col-6">
          <input type="text" placeholder="Enter Todo Here..."></input>
        </div>
        <div className="col-4">
          <input type="datetime-local" name="" id="" />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success buttons">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
