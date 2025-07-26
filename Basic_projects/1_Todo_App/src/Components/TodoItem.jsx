const TodoItem = ({ todoName, todoDate }) => {
  // You're passing todoName and todoDate as props to TodoItem.
  // These values come directly from the parent.
  return (
    <div className="container text-center">
      <div className="row item-container">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger buttons">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
  
export default TodoItem;
