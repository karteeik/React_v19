import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems }) => {
  return (
    <div>
        {
          todoItems.map((item, index) => (
            <TodoItem
              key={index}
              todoName={item.todoName}
              todoDate={item.todoDate}
            />
          ))
        }
    </div>
  );
};

export default TodoItems;
