import React, { useEffect, useState } from 'react';
import GalleryImage1 from "../images/gallery_images/g_1.png";
import GalleryImage2 from "../images/gallery_images/g_2.png";
import GalleryImage3 from "../images/gallery_images/g_3.png";
import GalleryImage4 from "../images/gallery_images/g_4.png";
import GalleryImage5 from "../images/gallery_images/g_5.png";
import GalleryImage6 from "../images/gallery_images/g_6.png";

function Gallerypage() {

    const [images, setImages] = useState([{}]);
    const galleryImages = [
        {
            title: "Gallery Image 1",
            src: GalleryImage1,
            description: "Apartment: EIGHT SOUTH LANE"
        },
        {
            title: "Gallery Image 2",
            src: GalleryImage2,
            description: "Apartment: EIGHT SOUTH LANE - Night"
        },
        {
            title: "Gallery Image 3",
            src: GalleryImage3,
            description: "Apartment: Manoryz ONE & TWO"
        },
        {
            title: "Gallery Image 4",
            src: GalleryImage4,
            description: "Apartment: Manoryz ONE & TWO - Night"
        },
        {
            title: "Gallery Image 5",
            src: GalleryImage5,
            description: "Government Building - World Wide Building"
        },
        {
            title: "Gallery Image 6",
            src: GalleryImage6,
            description: "Government Building - World Wide Building - Night"
        }
    ];

    useEffect(() => {
        setImages(galleryImages);
    }, []);

    return (
        <div className="gallery">
            <div className="gallery-content">
                <div class="row">
                    <div class="col">
                        {images.map((image, index) => {
                        if (index % 2 === 0) {
                            return (
                                <div>
                                    <img src={image.src} class="img-fluid" alt="..."/>
                                    <h4>{image.description}</h4>
                                </div>
                            )
                        }
                        })}
                    </div>
                    <div class="col">
                        {images.map((image, index) => {
                        if (index % 2 != 0) {
                            return (
                                <div>
                                    <img src={image.src} class="img-fluid" alt="..."/>
                                    <h4>{image.description}</h4>
                                </div>
                            )
                        }
                        })}
                    </div>
                </div>                    
            </div>
        </div>
    );
}

export default Gallerypage;