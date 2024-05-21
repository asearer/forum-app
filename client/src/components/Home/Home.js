// Import the necessary libraries and components
import React from 'react'; // Import React library
import './Home.css'; // Import the CSS file for styling this component
import ThreadList from '../ThreadList/ThreadList'; // Import the ThreadList component
import NewsList from '../NewsList/NewsList'; // Import the NewsList component
import PhotoGallery from '../PhotoGallery/PhotoGallery'; // Import the PhotoGallery component

// Define the Home component
function Home() {
    return (
        <div className="home"> {/* Main container with class 'home' for styling */}
            <h1>Welcome to the Forum</h1> {/* Main heading of the homepage */}
            <p>This is the homepage of the forum app. Here you can see the latest threads and updates.</p> {/* Description paragraph */}
            
            <div className="lists-container"> {/* Container for the lists */}
                <ThreadList /> {/* Component displaying the list of threads */}
                <NewsList /> {/* Component displaying the list of news items */}
            </div>
            
            <PhotoGallery /> {/* Component displaying the photo gallery */}
        </div>
    );
}

// Export the Home component as the default export
export default Home;






