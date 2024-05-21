import React from 'react';
import './Home.css';
import ThreadList from '../ThreadList/ThreadList';
import NewsList from '../NewsList/NewsList';
import PhotoGallery from '../PhotoGallery/PhotoGallery';

function Home() {
    return (
        <div className="home">
            <h1>Welcome to the Forum</h1>
            <p>This is the homepage of the forum app. Here you can see the latest threads and updates.</p>
            <div className="lists-container">
                <ThreadList />
                <NewsList />
            </div>
            <PhotoGallery />
        </div>
    );
}

export default Home;





