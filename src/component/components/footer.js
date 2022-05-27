import React from "react";
import { Link } from 'react-router-dom';

function footer() {
    return (
        <div className="footer-out">
            <div className="container">
                <div className="footer">
                    <div class="row">
                        <div class="col-sm-6">
                            <h1 className="logo1">mc_threebuilders_hk</h1>
                            <h1 className="logo">Zephyr City</h1>
                            <p>zephyrcity-project.netlify.app</p>
                        </div>
                        <div class="col-sm-6">
                            <h1>Find Us</h1>
                            <p>If you would like to know more about Zephyr City or our other projects, let's chat!</p>
                            <div class="card">
                                <div class="card-header">
                                    Find Us on:
                                </div>
                                <div class="card-body">
                                    <p>Instagram: <a href="https://www.instagram.com/mc_threebuilders_hk/" target="_blank">@mc_threebuilders_hk</a></p>
                                    {/* <p>gmail.com</p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <p id="last">Copyright 2022, The Zephyr City Project.<br/>All rights reserved.</p>
                </div>
            </div>
        </div>
    );
}

export default footer;