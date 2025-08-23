import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CardContext } from "../Context/CardContext"; // adjust path if needed

const Navbar = () => {
  const { state } = useContext(CardContext);

  const HighToLow = () => {
    console.log("Sorting High to Low");
    // Add your sorting logic here (pass callback via props ideally)
  };

  const LowToHigh = () => {
    console.log("Sorting Low to High");
    // Add your sorting logic here
  };

  const searchByName = (e) => {
    e.preventDefault();
    const searchValue = document.getElementById("sName").value;
    console.log("Searching:", searchValue);
    // Add your search logic here
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark fw-bold"
      style={{
        backgroundImage:
          "linear-gradient(57deg,rgba(235, 54, 204, 1) 0%, rgba(250, 107, 75, 1) 51%)",
      }}
    >
      <div className="container-fluid">
        <div className="container_logo px-5"></div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* Left side nav */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <button
                type="button"
                className="nav-link btn btn-outline-light text-dark fw-bold"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Add Products
              </button>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="filterDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fa-solid fa-filter"></i>
              </a>
              <ul
                className="dropdown-menu bg-dark text-white"
                aria-labelledby="filterDropdown"
              >
                <li>
                  <button
                    className="dropdown-item bg-dark text-white"
                    onClick={HighToLow}
                  >
                    High to low
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item bg-dark text-white"
                    onClick={LowToHigh}
                  >
                    Low to high
                  </button>
                </li>
              </ul>
            </li>
          </ul>

          {/* Right side actions */}
          <div className="d-flex">
            {/* Search */}
            <form className="d-flex" onSubmit={searchByName}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                id="sName"
              />
              <button className="btn btn-outline-success" type="submit">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>

            {/* Profile & Register */}
            <button
              className="btn btn-outline-light text-dark mx-2"
              type="button"
            >
              <i className="fa-solid fa-circle-user"></i>
            </button>
            <button
              className="btn btn-outline-light text-dark mx-2"
              type="button"
            >
              <i className="fa-solid fa-registered"></i>
            </button>

            {/* Cart with live count */}
            <Link
              className="btn btn-outline-light text-dark mx-3 position-relative"
              to="/cart"
            >
              <i className="fa-solid fa-cart-plus"></i>
              {state.cart.length > 0 && (
                <span className="badge bg-danger position-absolute top-0 start-100 translate-middle rounded-pill">
                  {state.cart.length}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
