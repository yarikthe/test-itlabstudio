import React from 'react';
import { Nav, Navbar} from "react-bootstrap";

const NavbarCustom = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow">
            <a className="navbar-brand d-flex" href="#">
                <img src={`${process.env.PUBLIC_URL}/logo.svg`} alt="logo" className="logo" width="50" height="50"/>
                <span className="align-items-center m-auto">Dental "Teeth"</span>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ml-auto">
                    <a className="nav-item nav-link active link" href="#home">Home <span className="sr-only">(current)</span></a>
                    <a className="nav-item nav-link link" href="#about">About</a>
                    <a className="nav-item nav-link link" href="#service">Service</a>
                    <a className="nav-item nav-link link" href="#contact">Contact</a>
                </div>
            </div>
        </nav>
    );
}

export default NavbarCustom;
