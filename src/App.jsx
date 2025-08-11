import Sidebar from "./components/Sidebar.jsx";
import TodoApp from "./components/TodoApp.jsx";
import "./index.css";

const App = () => (
  <div className="bg-light min-vh-100 py-4">
    <div className="container-fluid">
      <div className="row g-4">
        <div className="col-12 col-md-3 col-lg-2">
          <Sidebar />
        </div>
        <div className="col-12 col-md-9 col-lg-10">
          <div className="card shadow-sm">
            <div className="card-body">
              <TodoApp />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default App;
