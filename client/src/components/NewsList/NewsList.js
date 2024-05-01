import React, { useState, useEffect } from 'react';
import './NewsList.css';  // Make sure to create and link the CSS file for styling

// Mock data to simulate fetched data from an API
const mockNews = [
    { id: 1, title: "New Study Reveals the Benefits of Coffee", content: "A recent study shows that drinking coffee can have health benefits...", date: "2024-04-30" },
    { id: 2, title: "Tech Giants Lead the Way in Green Energy", content: "Leading tech companies are now transitioning to 100% renewable energy sources...", date: "2024-04-29" },
    { id: 3, title: "Global Markets Rally on Economic Optimism", content: "Markets around the world rallied today amid optimism about economic growth...", date: "2024-04-28" }
];

function NewsList() {
    const [newsItems, setNewsItems] = useState([]);

    useEffect(() => {
        // Simulate an API call
        setTimeout(() => {
            setNewsItems(mockNews);
        }, 1000);
    }, []);

    return (
        <div className="news-list">
            <h2>Latest News</h2>
            {newsItems.length > 0 ? (
                <ul>
                    {newsItems.map(news => (
                        <li key={news.id}>
                            <h3>{news.title}</h3>
                            <p>{news.content}</p>
                            <p className="news-date">Published on: {news.date}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Loading news...</p>
            )}
        </div>
    );
}

export default NewsList;
