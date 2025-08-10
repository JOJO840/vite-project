const TodoForm = ({ onAdd }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.elements.todo.value.trim();
    if (!value) return;
    onAdd(value);           
    e.target.reset();       
    e.target.elements.todo.focus();
  };

  return (
    <form className="mb-3" onSubmit={handleSubmit}>
      <div className="input-group">
        <input
          name="todo"
          className="form-control"
          placeholder="Add a new task... (not saved yet)"
        />
        <button className="btn btn-primary" type="submit">
          <i className="bi bi-plus-lg me-1"></i>Add
        </button>
      </div>
      <small className="text-body-secondary">

      </small>
    </form>
  );
};
export default TodoForm;
