const TodoApp = () => {
  const todos = [
    { id: 1, title: "Task 1", desc: "Description for Task 1", completed: false, due: "2025-08-14" }
  ];

  return (
    <>
      {/* Header row: Title + Search */}
      <div className="d-flex align-items-center mb-3">
        <h2 className="h4 mb-0">Tasks</h2>
        <div className="ms-auto" style={{ maxWidth: 360 }}>
          <div className="input-group">
            <input className="form-control" placeholder="Search tasks..." />
            <span className="input-group-text"><i className="bi bi-search"></i></span>
          </div>
        </div>
      </div>

      {/* Form box */}
      <div className="border rounded-2 p-3 mb-3 bg-white">
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input className="form-control" placeholder="Task title" />
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea className="form-control" rows="3" placeholder="Describe the task..."></textarea>
        </div>

        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label">Due Date</label>
            <input type="date" className="form-control" />
          </div>
          <div className="col-md-6">
            <label className="form-label">Assign to (optional)</label>
            <div className="input-group">
              <select className="form-select">
                <option value="">— Select person (optional) —</option>
                <option>Alice</option>
                <option>Bob</option>
              </select>
              <span className="input-group-text"><i className="bi bi-person"></i></span>
            </div>
          </div>
        </div>

        <div className="mt-3">
          <label className="form-label">Attachments</label>
          <input type="file" className="form-control" multiple />
        </div>

        <div className="mt-3">
          <label className="form-label">Notes</label>
          <textarea className="form-control" rows="2" placeholder="Optional notes..."></textarea>
        </div>

        <div className="text-end mt-3">
          <button className="btn btn-primary">+ Add Todo</button>
        </div>
      </div>

      {/* Todos box */}
      <div className="border rounded-2 p-3 bg-white">
        <div className="d-flex align-items-center mb-2">
          <h3 className="h6 mb-0">Todos</h3>
          <div className="ms-auto d-flex gap-2">
            <button className="btn btn-outline-secondary btn-sm" title="Settings" disabled>
              <i className="bi bi-gear"></i>
            </button>
            <button className="btn btn-outline-secondary btn-sm" title="More" disabled>
              <i className="bi bi-three-dots"></i>
            </button>
          </div>
        </div>

        <ul className="list-group">
          {todos.map(t => (
            <li key={t.id} className="list-group-item">
              <div className="d-flex align-items-start">
                <div className="form-check me-2 mt-1">
                  <input className="form-check-input" type="checkbox" defaultChecked={t.completed} readOnly />
                </div>
                <div className="flex-grow-1">
                  <div className="fw-semibold">{t.title}</div>
                  <div className="small text-muted">{t.desc}</div>
                  <div className="small text-muted mt-1">Due {t.due}</div>
                </div>
                <div className="ms-2">
                  <button className="btn btn-outline-secondary btn-sm me-1" disabled>
                    <i className="bi bi-paperclip"></i> attachment
                  </button>
                  <button className="btn btn-outline-danger btn-sm" disabled>
                    <i className="bi bi-trash"></i>
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default TodoApp;
