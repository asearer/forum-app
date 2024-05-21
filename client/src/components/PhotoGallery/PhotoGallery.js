import React, { useState, useEffect } from 'react';
import './PhotoGallery.css';  // Make sure to create and link the CSS file for styling

// Mock data to simulate fetched images
const mockImages = [
    { id: 1, src: 'https://shashankskills.academy/upload/courses/coding/coding_advanced2.webp', alt: 'Placeholder Image 1' },
    { id: 2, src: 'https://qph.cf2.quoracdn.net/main-qimg-5deec5975a15e8d5b7f56254303a5a0b-pjlq', alt: 'Placeholder Image 2' },
    { id: 3, src: 'https://kernixwebdesign.com/wp-content/uploads/2022/05/learn-javascript.jpg', alt: 'Placeholder Image 3' },
    { id: 4, src: 'https://thinkpalm.com/wp-content/uploads/2023/11/images_02.jpg', alt: 'Placeholder Image 4' }
];

function PhotoGallery() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        // Simulate an API call
        setTimeout(() => {
            setImages(mockImages);
        }, 1000);
    }, []);

    return (
        <div className="photo-gallery">
            <h2>Photo Gallery</h2>
            <div className="gallery-grid">
                {images.length > 0 ? (
                    images.map(image => (
                        <div key={image.id} className="gallery-item">
                            <img src={image.src} alt={image.alt} />
                        </div>
                    ))
                ) : (
                    <p>Loading images...</p>
                )}
            </div>
        </div>
    );
}

export default PhotoGallery;
