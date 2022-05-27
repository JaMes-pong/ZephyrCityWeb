import React from "react";
import { Link } from "react-router-dom";
import sliderImage1 from "../images/slider_image1.png";
import sliderImage2 from "../images/slider_image2.png";
import sliderImage3 from "../images/slider_image3.png";
import sliderImage4 from "../images/slider_image4.png";

function homepage() {
    return (
        <div>
            <div id="carousel1" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carousel1" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carousel1" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carousel1" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carousel1" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={sliderImage1} className="d-block w-100" alt="..."/>
                            <div className="carousel-caption d-none d-sm-block">
                                <h2>Greeting From</h2>
                                <h1>Zephyr City</h1>
                            </div>
                    </div>
                    <div className="carousel-item">
                        <img src={sliderImage2} className="d-block w-100" alt="..."/>
                            <div className="carousel-caption d-none d-sm-block">
                                <h2>A Minecraft City With</h2>
                                <h1>Greatest Detail</h1>
                            </div>
                    </div>
                    <div className="carousel-item">
                        <img src={sliderImage3} className="d-block w-100" alt="..."/>
                            <div className="carousel-caption d-none d-sm-block">
                                <h2>Ethereal, Verdant And Picturesque</h2>
                                <h1>Scenery</h1>
                            </div>
                    </div>
                    <div className="carousel-item">
                        <img src={sliderImage4} className="d-block w-100" alt="..."/>
                            <div className="carousel-caption d-none d-sm-block">
                                <h2>Come And Enjoy Your Jounery In</h2>
                                <h1>Zephyr City</h1>
                            </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carousel1" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carousel1" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default homepage;