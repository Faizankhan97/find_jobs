import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Logo from "./assets/png/logo.png";
import User from "./assets/png/user.png";
import Search from "./assets/png/search_gray.png";

function Header() {
  return (
    <Navbar>
      <div className="container-fluid">
        <div className="d-flex">
          <Navbar.Brand href="#">
            <img src={Logo} alt="" />
            Find Jobs
          </Navbar.Brand>
          <Nav className="">
            <Nav.Link href="#">Top Companies</Nav.Link>
            <Nav.Link href="#">Job Tracker</Nav.Link>
            <Nav.Link href="#">My Calendar</Nav.Link>
            <Nav.Link href="#">Notifications</Nav.Link>
          </Nav>
        </div>
        <div className="user-det">
          <div className="search">
            <img src={Search} alt="" />
            <input type="text" placeholder="search" />
          </div>
          <button className="resume_builder">
            Resume Builder
          </button>
          <img src={User} className="user" alt="" />
        </div>
      </div>
    </Navbar>
  );
}

export default Header;
