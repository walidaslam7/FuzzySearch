import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import { Link } from "react-router-dom";
import "../assets/NavMenu.css";

export const NavMenu = () => {
  return (
    <header>
      <Navbar
        className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3"
        container
        light >
        <NavbarBrand tag={Link} to="/">
          Fuzzy Search
        </NavbarBrand>
      </Navbar>
    </header>
  );
};