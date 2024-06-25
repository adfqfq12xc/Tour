import "./navbar.scss";
import React, { useContext } from "react";
import Logo from "../../logo.png";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../usercontext";
export default function Navbar() {
  const {user}=useContext(UserContext)
  const navigat=useNavigate()
  return (
    <div className="navbar">
      <img src={Logo} alt="img" />

      <ul className="nav-links">
        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/About" className="nav-link">
            About
          </Link>
        </li>
        <li>
          <Link to="/" className="nav-link">
            Tours
          </Link>
        </li>
       { user ||
       <li>
          <Link to="/login" className="nav-link Login" element={<div></div>}>
            Login
          </Link>
        </li>
}
      { user &&
       <li>
          <Link to="/Add" className="nav-link Add" element={<div></div>}>
            Add
          </Link>
        </li>
       }

      </ul>
    </div>
  );
}
