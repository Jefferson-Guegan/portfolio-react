import React from 'react';
import logo from "../media/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark sticky-top">
        <div className="container">

            <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo"/></a>
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <FontAwesomeIcon icon={faBars} style={{color:"#fd3f92"}}/>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                
                <ul className="navbar-nav ms-auto">
                    
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Acceuil <span className="sr-only">(current)</span></a>
                    </li>
                    
                    <li className="nav-item">
                        <a className="nav-link" href="#aboutSection">Bio</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="#technoSection">Technos</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="#experienceSection">Expérience</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="#portfolioSection">Portfolio</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="#contactSection">Contact</a>
                    </li>

                </ul>
            </div>
        </div>
    </nav>
    );
};

export default Navbar;