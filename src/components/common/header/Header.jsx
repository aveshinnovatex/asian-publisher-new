import React from "react";
import "../../..//Style.css";
import "../../../bootstrap.min.css";
import AsianLogo from "../../../Images/AsianLogo.jpeg";

function Header() {
  return (
    <>
      <div className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
        <div className="container-fluid">
          <div className="col-lg-1" style={{ zIndex: 1 }}>
            <a className="navbar-brand" href="#" style={{ color: "#fff" }}>
              <img
                src={AsianLogo}
                style={{ height: "10vh", borderRadius: 10 }}
              />
            </a>
          </div>
          <div className="col-lg-11">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <center>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item" style={{ zIndex: 1 }}>
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="/"
                      style={{ color: "#fff", fontSize: 16, fontWeight: 600 }}
                    >
                      HOME
                    </a>
                  </li>
                  <li className="nav-item" style={{ zIndex: 1 }}>
                    <a
                      className="nav-link"
                      href="/about-us"
                      style={{
                        color: "#fff",
                        fontSize: 16,
                        fontWeight: 600,
                        marginLeft: 10,
                      }}
                    >
                      ABOUT US
                    </a>
                  </li>
                  <li className="nav-item" style={{ zIndex: 1 }}>
                    <a
                      className="nav-link"
                      href="#"
                      style={{
                        color: "#fff",
                        fontSize: 16,
                        fontWeight: 600,
                        marginLeft: 10,
                      }}
                    >
                      SHOP
                    </a>
                  </li>
                  <li className="nav-item" style={{ zIndex: 1 }}>
                    <a
                      className="nav-link"
                      href="#"
                      style={{
                        color: "#fff",
                        fontSize: 16,
                        fontWeight: 600,
                        marginLeft: 10,
                      }}
                    >
                      AUTHORS
                    </a>
                  </li>
                  <li className="nav-item" style={{ zIndex: 1 }}>
                    <a
                      className="nav-link"
                      href="#"
                      style={{
                        color: "#fff",
                        fontSize: 16,
                        fontWeight: 600,
                        marginLeft: 10,
                      }}
                    >
                      ORDER FORM
                    </a>
                  </li>
                  <li className="nav-item" style={{ zIndex: 1 }}>
                    <a
                      className="nav-link"
                      href="#"
                      style={{
                        color: "#fff",
                        fontSize: 16,
                        fontWeight: 600,
                        marginLeft: 10,
                      }}
                    >
                      BECOME AN AUTHOR
                    </a>
                  </li>
                  <li className="nav-item" style={{ zIndex: 1 }}>
                    <a
                      className="nav-link"
                      href="#"
                      style={{
                        color: "#fff",
                        fontSize: 16,
                        fontWeight: 600,
                        marginLeft: 10,
                      }}
                    >
                      OUR CATALOGUE
                    </a>
                  </li>
                  <li className="nav-item" style={{ zIndex: 1 }}>
                    <a
                      className="nav-link"
                      href="#"
                      style={{
                        color: "#fff",
                        fontSize: 16,
                        fontWeight: 600,
                        marginLeft: 10,
                      }}
                    >
                      CONTACT US
                    </a>
                  </li>
                  <li className="nav-item" style={{ zIndex: 1 }}>
                    <a
                      className="nav-link"
                      href="#"
                      style={{
                        color: "#fff",
                        fontSize: 16,
                        fontWeight: 600,
                        marginLeft: 10,
                      }}
                    >
                      LOGIN
                    </a>
                  </li>
                  <li className="nav-item" style={{ zIndex: 1 }}>
                    <a
                      className="nav-link"
                      href="#"
                      style={{
                        color: "#fff",
                        fontSize: 16,
                        fontWeight: 600,
                        marginLeft: 10,
                      }}
                    >
                      <i className="fa fa-search" />
                    </a>
                  </li>
                  <li className="nav-item" style={{ zIndex: 1 }}>
                    <a
                      className="nav-link"
                      href="#"
                      style={{
                        color: "#fff",
                        fontSize: 16,
                        fontWeight: 600,
                        marginLeft: 10,
                      }}
                    >
                      <i className="fa fa-shopping-cart" />
                    </a>
                  </li>
                  <li className="nav-item" style={{ zIndex: 1 }}>
                    <a
                      className="nav-link"
                      href="#"
                      style={{
                        color: "#fff",
                        fontSize: 16,
                        fontWeight: 600,
                        marginLeft: 10,
                      }}
                    >
                      <i className="fa fa-user" />
                    </a>
                  </li>
                </ul>
              </center>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
