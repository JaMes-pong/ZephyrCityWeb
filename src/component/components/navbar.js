import React from "react";
import { Link } from 'react-router-dom';

function navbar() {
    return (
        <nav class="navbar navbar-expand-sm navbar-light" id="navbar">
            <div class="mx-auto d-sm-flex d-block flex-sm-nowrap">
                {/*  */}
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample11" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse text-center" id="navbarsExample11">
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