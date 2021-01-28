import React from 'react';
import headerStyle from './header.module.css';
import {Button, Form, FormControl, Nav, Navbar, NavDropdown} from "react-bootstrap";
import NavbarCustom from "./navbar";
import Promo from "./promo";


const Header = () => {
  return (
      <header>
          <div id='home' className="container-fluid">
              <NavbarCustom />
              <Promo />
          </div>
      </header>
  );
}

export default Header;
