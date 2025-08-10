const Sidebar = () => (
  <div className="sidebar p-3 d-flex flex-column justify-content-between h-100">
    <div>
      <div className="d-flex align-items-center mb-4">
        <span className="fs-5 fw-semibold">LEXICON</span>
      </div>

      <ul className="list-unstyled small">
        <li className="mb-3 d-flex align-items-center">
          <i className="bi bi-grid-3x3-gap me-2"></i> Dashboard
        </li>
        <li className="mb-3 d-flex align-items-center">
          <i className="bi bi-people me-2"></i> Users
        </li>
        <li className="mb-3 d-flex align-items-center fw-semibold">
          <i className="bi bi-list-check me-2"></i> Tasks
        </li>
        <li className="d-flex align-items-center">
          <i className="bi bi-gear me-2"></i> Settings
        </li>
      </ul>
    </div>

    <div className="small">
      <div className="text-muted">Username</div>
      <button className="btn btn-link p-0 small"><i className="bi bi-box-arrow-right me-1"></i>Logout</button>
    </div>
  </div>
);
export default Sidebar;
