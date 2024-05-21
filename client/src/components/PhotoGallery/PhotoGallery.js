import React, { useState, useEffect } from 'react';
import './PhotoGallery.css';  // Ensure the CSS file exists for styling

// Mock data to simulate fetched images
const mockImages = [
    { id: 1, src: 'https://shashankskills.academy/upload/courses/coding/coding_advanced2.webp', alt: 'Placeholder Image 1' },
    { id: 2, src: 'https://qph.cf2.quoracdn.net/main-qimg-5deec5975a15e8d5b7f56254303a5a0b-pjlq', alt: 'Placeholder Image 2' },
    { id: 3, src: 'https://kernixwebdesign.com/wp-content/uploads/2022/05/learn-javascript.jpg', alt: 'Placeholder Image 3' },
    { id: 4, src: 'https://thinkpalm.com/wp-content/uploads/2023/11/images_02.jpg', alt: 'Placeholder Image 4' }
];

function PhotoGallery() {
    // State to hold the images and loading status
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate an API call to fetch images
        const fetchImages = () => {
            // Simulate a delay of 1 second before setting images
            setTimeout(() => {
                setImages(mockImages); // Set fetched images
                setLoading(false); // Set loading to false after images are fetched
            }, 1000);
        };

        fetchImages(); // Call the fetchImages function

        // Cleanup function (if needed) for potential future enhancements or cleanup logic
        return () => {
            // Any necessary cleanup actions can be performed here
        };
    }, []); // Empty dependency array ensures the effect runs only once on component mount

    return (
        <div className="photo-gallery">
            <h2>Photo Gallery</h2>
            <div className="gallery-grid">
                {/* Conditional rendering based on loading state */}
                {loading ? (
                    <p>Loading images...</p>
                ) : (
                    // Map through images array and render each image
                    images.map(image => (
                        <div key={image.id} className="gallery-item">
                            <img src={image.src} alt={image.alt} />
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default PhotoGallery;
