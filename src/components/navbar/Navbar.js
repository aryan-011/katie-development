import React from "react";
import "./Navbar.css";
import "../../fonts/Nunito/Nunito-VariableFont_wght.ttf"
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-custom">
        <div className="container-fluid">
              <ul className="nav-item">
                <NavLink className="katie nav-link" aria-current="page"  to="/">
                  KATIE
                </NavLink>
              </ul>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

              <li className="nav-item ">
                <NavLink className="nav-link" aria-current="page" to="/brands">
                  Brands
                </NavLink>
              </li>

              <li className="nav-item ">
                <NavLink className="nav-link" to="/waitlist">
                  Join the Waitlist
                </NavLink>
              </li>
            </ul>

          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
