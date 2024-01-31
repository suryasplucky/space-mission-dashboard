import React, { useEffect, useState } from "react";
import "../CSS/Header.css";

const Header = () => {
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const banner = document.getElementById("banner");
      if (banner && window.scrollY > 86) {
        banner.classList.add("shrink");
      } else if (banner) {
        banner.classList.remove("shrink");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = () => {
    setShowLogoutConfirm(true);
  };

  const handleLogoutConfirmation = (confirmed) => {
    setShowLogoutConfirm(false);
    if (confirmed) {
      window.location.href = "/";
    }
  };

  return (
    <div>
      <nav
        className="navbar navbar-expand-md navbar-dark fixed-top"
        id="banner"
      >
        <div className="container">
          <a className="navbar-brand" href="/">
          <img style={{ width: '143px', height: '82px', borderRadius:'17px' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxvW6mhPdXrKwsKDzuKlV6stG-l2rU1c6cYT4pBse1JgyABgpaYGAmaagC-sAGjcuz1K0&usqp=CAU" alt="NASA Icon" />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbardrop"
                  data-toggle="dropdown"
                >
                  Dropdown link
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="/">
                    Link 1
                  </a>
                  <a className="dropdown-item" href="/">
                    Link 2
                  </a>
                  <a className="dropdown-item" href="/">
                    Link 3
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">
                <i className="fas fa-bell"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                <i className="fas fa-user"></i>
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fas fa-sign-out-alt"></i>
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/" onClick={handleLogout}>
                  Logout
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>

      {showLogoutConfirm && (
        <div className="modal" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Logout Confirmation</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={() => handleLogoutConfirmation(false)}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">Are you sure you want to logout?</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                  onClick={() => handleLogoutConfirmation(false)}
                >
                  No
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => handleLogoutConfirmation(true)}
                >
                  Yes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="banner"></div>
    </div>
  );
};

export default Header;
