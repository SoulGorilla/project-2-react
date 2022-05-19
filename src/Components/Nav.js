import { BrowserRouter as Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg  navbar-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Currency
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/about">Currency</Link>
              </li>
              <li class="nav-item">
                <Link to="/this">About</Link>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  List of Supported Currencies
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="#">
                      USD
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Russian Rubles
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Euro's
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <button class="btn btn-outline-success" type="link">
              <Link className="crncy" to="/about">
                Currency
              </Link>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
