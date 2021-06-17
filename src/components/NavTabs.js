import React from "react";
import { Link, useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function NavTabs() {

    const location = useLocation();

return (
        <Container>
    <ul className="nav nav-tabs bg-success text-light">
        <li variant="dark" className="nav-item">
            <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                Home
            </Link>
        </li>

        <li className="nav-item">
            <Link 
            to="/portfolio"
            className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>
                Portfolio
            </Link>
        </li>

        <li className="nav-item">
            <Link 
            to="/contact"
            className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
                Contact
            </Link>
        </li>

        <li className="nav-item">
            <Link 
            to="/resume"
            className={location.pathname === "/resume" ? "nav-link active" : "nav-link" }>
             Resume
            </Link>

            
        </li>

        
    </ul>
    </Container>
   
);
}

export default NavTabs