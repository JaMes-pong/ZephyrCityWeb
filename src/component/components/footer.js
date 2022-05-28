import React from "react";
import { Link } from 'react-router-dom';

function footer() {
    return (
        <div className="footer-out">
            <div className="container">
                <div className="footer">
                    <h1 className="logo1">Building With Dream</h1>
                    <h4 className="logo">Zephyr City By mc_threebuilders_hk</h4>
                    <hr/>
                    <div className="contact-box">
                        <p>Contact Us At:<br/>Instagram: <span className="contact"><a href="https://www.instagram.com/mc_threebuilders_hk/" target="_blank">@mc_threebuilders_hk</a></span></p>
                    </div>
                    <hr/>
                    <p id="last">zephyrcity-project.netlify.app</p>
                    <p id="last">Copyright 2022, The Zephyr City Project. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
}

export default footer;
