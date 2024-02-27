import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="header">
      <nav class="navbar navbar-expand-lg bg-dark navbar-dark ">
        <div class="container-fluid">
          <Link to="/" class="navbar-brand">
            Navbar
          </Link>
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
                <Link to="/" class="nav-link" aria-current="page">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/contact-us" class="nav-link">
                  Contact Us
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/faqs" class="nav-link">
                  FAQs
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/about-us" class="nav-link">
                  About Us
                </Link>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
