import './App.css';

function App() {
  return (
    <>
      {/* 🔹 NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">MyApp</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>

      {/* 🔹 MAIN LAYOUT */}
      <div className="container-fluid bg-danger">
        <div className="row min-vh-100">

          {/* 🔹 SIDEBAR */}
          <div className="col-12 col-md-3 col-lg-2 bg-light p-3">
            <h5>Sidebar</h5>
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link active" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Profile</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Settings</a>
              </li>
            </ul>
          </div>

          {/* 🔹 HOME / CONTENT SECTION */}
          <div className="col-12 col-md-9 col-lg-10 p-4">
            <h2>Home Section</h2>
            <p>Welcome to the dashboard</p>

            {/* 🔹 CARDS */}
            <div className="row">
              <div className="col-12 col-md-4 mb-3">
                <div className="card">
                  <div className="card-body">Card 1</div>
                </div>
              </div>

              <div className="col-12 col-md-4 mb-3">
                <div className="card">
                  <div className="card-body">Card 2</div>
                </div>
              </div>

              <div className="col-12 col-md-4 mb-3">
                <div className="card">
                  <div className="card-body">Card 3</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 🔹 FOOTER */}
      <footer className="bg-dark text-white text-center p-3">
        © 2026 MyApp. All rights reserved.
      </footer>
      </>
  );
}

export default App;
