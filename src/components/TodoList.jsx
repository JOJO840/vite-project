import TodoRow from "./TodoRow.jsx";

const TodoList = ({ todos = [] }) => {
  if (todos.length === 0) {
    return <p className="text-body-secondary text-center py-4">No tasks yet.</p>;
  }
  return (
    <ul className="list-group">
      {todos.map((t) => (
        <TodoRow key={t.id} todo={t} />
      ))}
    </ul>
  );
};
export default TodoList;
