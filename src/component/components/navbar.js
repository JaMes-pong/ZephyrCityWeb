import React from "react";
import { Link } from 'react-router-dom';
import logo from "../images/logo.png";

function navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light" id="navbar">
            <div class="container-fluid">
                <Link to="/" class="navbar-brand" id="logo"><img src={logo} alt="..." height={50} width={50}/></Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link to="/" class="nav-link">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/map" class="nav-link">Map</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/gallery" class="nav-link">Gallery</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/about" class="nav-link">About</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/joinus" class="nav-link">Join Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default navbar;