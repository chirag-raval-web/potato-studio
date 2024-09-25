import React from "react";
import Contact from "../button";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Items, { RepNavBtn, NavLogo } from "./NavItems";

const Navbar = () => {
  const location = useLocation();
  return (
    <>
      {/* <!-- -------------nav-bar-start ---------------------------------------------------------------------------------> */}
      <nav className="navbar navbar-expand-lg sticky-top bg-body-tertiary p-0 d-flex justify-content-lg-between">
        <div className="container-fluid  custom-nav p-4 ">
          <Link className="navbar-brand ms-xxl-5" to="/">
            <NavLogo width={126} height={52} />
          </Link>
          <RepNavBtn />
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav nav-items mx-auto mb-4 mb-lg-4">
              <Items
                itemName="Home"
                isActive={
                  location.pathname === "/home" ||
                  location.pathname === "/" ||
                  location.pathname === ""
                }
                to="/"
              />
              <Items
                itemName="Services"
                isActive={location.pathname === "/services"}
                to="/services"
              />
              <Items
                itemName="Work"
                isActive={location.pathname === "/work"}
                to="/work"
              />
              <Items
                itemName="About us"
                isActive={location.pathname === "/about"}
                to="/about"
              />
              <Items
                itemName="Blog"
                isActive={location.pathname === "/blog"}
                to="/blog"
              />
              <Items
                itemName="Career"
                isActive={location.pathname === "/career"}
                to="/career"
              />
            </ul>
            <Contact />
          </div>
        </div>
      </nav>
      {/* <!-- --------------------------offcanvas --> */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <NavLogo width={110} height={45} />
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div className="container">
            <div className="row float-start">
              <ul className="navbar-nav  mx-auto mb-4 mb-lg-4">
               
                <Items
                  itemName="Home"
                  isActive={location.pathname === "/home"}
                  to="/home"
                />
                <Items
                  itemName="Services"
                  isActive={location.pathname === "/services"}
                  to="/services"
                />
                <Items
                  itemName="Work"
                  isActive={location.pathname === "/work"}
                  to="/work"
                />
                <Items
                  itemName="About us"
                  isActive={location.pathname === "/about"}
                  to="/about"
                />
                <Items
                  itemName="Blog"
                  isActive={location.pathname === "/blog"}
                  to="/blog"
                />
                <Items
                  itemName="Career"
                  isActive={location.pathname === "/career"}
                  to="/career"
                />
              </ul>
              <Contact />
            </div>
          </div>
        </div>
      </div>
      {/* <!-- -------------nav-bar-end --------------------------------------------------------------------------------- --> */}
    </>
  );
};

export default Navbar;
