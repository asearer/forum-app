// Import necessary dependencies from the React library
import React, { useState, useEffect } from 'react';

// Import CSS file for styling
import './NewsList.css';

// Mock data to simulate fetched data from an API
const mockNews = [
    { id: 1, title: "New Study Reveals the Benefits of Coffee", content: "A recent study shows that drinking coffee can have health benefits...", date: "2024-04-30" },
    { id: 2, title: "Tech Giants Lead the Way in Green Energy", content: "Leading tech companies are now transitioning to 100% renewable energy sources...", date: "2024-04-29" },
    { id: 3, title: "Global Markets Rally on Economic Optimism", content: "Markets around the world rallied today amid optimism about economic growth...", date: "2024-04-28" }
];

// Functional component NewsList
function NewsList() {
    // State to store news items
    const [newsItems, setNewsItems] = useState([]);

    // Effect to simulate fetching data from an API
    useEffect(() => {
        // Simulate an API call with setTimeout
        setTimeout(() => {
            // Set the news items after a delay
            setNewsItems(mockNews);
        }, 1000); // Delay of 1000ms (1 second)
    }, []); // Empty dependency array to execute only once when component mounts

    // JSX returned by the component
    return (
        <div className="news-list">
            <h2>Latest News</h2>
            {/* Conditional rendering based on whether newsItems have been fetched */}
            {newsItems.length > 0 ? (
                // If newsItems array is not empty, render the list of news items
                <ul>
                    {/* Map through newsItems array and render each news item */}
                    {newsItems.map(news => (
                        // Each news item is represented as a list item with a unique key
                        <li key={news.id}>
                            {/* Display news title */}
                            <h3>{news.title}</h3>
                            {/* Display news content */}
                            <p>{news.content}</p>
                            {/* Display news publication date */}
                            <p className="news-date">Published on: {news.date}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                // If newsItems array is empty, display a loading message
                <p>Loading news...</p>
            )}
        </div>
    );
}

// Export the NewsList component as the default export
export default NewsList;
