import React from "react";
{
  /* eslint-disable*/
}
function DarkNavbar() {
  return (
    <nav class="navbar navbar-dark navbar-expand-lg bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          Product Reviews
        </a>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            {/* ----------------------- */}
            {/* Communications Section  */}
            {/* ----------------------- */}
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Communications
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            {/* ----------------------- */}
            {/* Inventory Section  */}
            {/* ----------------------- */}
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Inventory
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Inventory Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another Inventory action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>

            {/* ----------------------- */}
            {/* Lab Section  */}
            {/* ----------------------- */}
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Lab
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Lab Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another Lab action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>

            {/* ----------------------- */}
            {/* Reviews / Awards Section  */}
            {/* ----------------------- */}
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Reviews/Awards
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Reviews Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another Award action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>

            {/* ----------------------- */}
            {/* Admin Section  */}
            {/* ----------------------- */}
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Admin
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Admin Action
                  </a>
                </li>

                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>

            {/* ----------------------- */}
            {/* Prototype Section  */}
            {/* ----------------------- */}
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Prototype
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Prototype Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another Inventory action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default DarkNavbar;
