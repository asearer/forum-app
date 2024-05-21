// Import necessary modules from React
import React, { useState, useEffect } from 'react';

// Import CSS file for styling (ensure path is correct)
import './ThreadList.css';

// Mock data to simulate fetched data from an API
const mockThreads = [
    { id: 1, title: "What's your favorite programming language?", author: "Alice", createdAt: "2023-05-01T12:34:56Z" },
    { id: 2, title: "Introduction to React Hooks", author: "Bob", createdAt: "2023-05-02T08:30:00Z" },
    { id: 3, title: "Node.js Performance Tips", author: "Charlie", createdAt: "2023-05-03T15:45:23Z" }
];

// ThreadList component
function ThreadList() {
    // Define state for threads using useState hook
    const [threads, setThreads] = useState([]);

    // useEffect hook to simulate fetching data from an API
    useEffect(() => {
        // Simulate an API call with setTimeout
        setTimeout(() => {
            // Set the threads state with mock data after 1 second
            setThreads(mockThreads);
        }, 1000); // 1000ms = 1 second
    }, []); // Empty dependency array ensures useEffect runs only once after initial render

    // JSX to render the ThreadList component
    return (
        <div className="thread-list">
            {/* Heading for the thread list */}
            <h2>Forum Threads</h2>
            {/* Conditional rendering based on the length of the threads array */}
            {threads.length > 0 ? (
                // Render the list of threads if there are threads available
                <ul>
                    {/* Map over each thread to render individual thread items */}
                    {threads.map(thread => (
                        // Each thread item has a unique key based on thread id
                        <li key={thread.id}>
                            {/* Display thread title */}
                            <h3>{thread.title}</h3>
                            {/* Display thread author and creation date */}
                            <p>Posted by {thread.author} on {new Date(thread.createdAt).toLocaleDateString()}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                // Render a loading message if threads are still being fetched
                <p>Loading threads...</p>
            )}
        </div>
    );
}

// Export the ThreadList component as default
export default ThreadList;
