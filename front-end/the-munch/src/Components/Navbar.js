import React from 'react';
import "./Navbar.css";
import User from "./User"; // Import User component

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">The Munch</a> 
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/home">Restaurant</a> 
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/link">Menu</a>
              </li>
              <li className="nav-item">
                <span className="nav-link disabled" aria-disabled="true">Category</span> 
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            {/* User Icon & Profile */}
            <div className="user-cart-container">
              <User /> {/* User component */}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
