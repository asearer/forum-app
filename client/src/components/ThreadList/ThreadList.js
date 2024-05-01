import React, { useState, useEffect } from 'react';
import './ThreadList.css';  // Ensure this path is correct

// Mock data to simulate fetched data
const mockThreads = [
    { id: 1, title: "What's your favorite programming language?", author: "Alice", createdAt: "2023-05-01T12:34:56Z" },
    { id: 2, title: "Introduction to React Hooks", author: "Bob", createdAt: "2023-05-02T08:30:00Z" },
    { id: 3, title: "Node.js Performance Tips", author: "Charlie", createdAt: "2023-05-03T15:45:23Z" }
];

function ThreadList() {
    const [threads, setThreads] = useState([]);

    useEffect(() => {
        // Simulate an API call
        setTimeout(() => {
            setThreads(mockThreads);
        }, 1000);
    }, []);

    return (
        <div className="thread-list">
            <h2>Forum Threads</h2>
            {threads.length > 0 ? (
                <ul>
                    {threads.map(thread => (
                        <li key={thread.id}>
                            <h3>{thread.title}</h3>
                            <p>Posted by {thread.author} on {new Date(thread.createdAt).toLocaleDateString()}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Loading threads...</p>
            )}
        </div>
    );
}

export default ThreadList;


