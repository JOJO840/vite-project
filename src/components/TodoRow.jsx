const TodoRow = ({ todo }) => (
  <li className="list-group-item d-flex align-items-center">
    {/* Uncontrolled checkbox — just visual for now */}
    <input
      className="form-check-input me-2"
      type="checkbox"
      defaultChecked={todo.completed}
      readOnly
      aria-label="completed"
    />
    <span
      className={`flex-grow-1 ${
        todo.completed ? "text-decoration-line-through text-body-secondary" : ""
      }`}
    >
      {todo.text}
    </span>
    <button className="btn btn-outline-danger btn-sm" disabled title="Delete (later)">
      <i className="bi bi-trash"></i>
    </button>
  </li>
);
export default TodoRow;
