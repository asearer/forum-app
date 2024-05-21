// Importing necessary libraries and components
import React, { useEffect, useState } from 'react'; // React core library, useEffect for side effects, useState for state management
import { useParams } from 'react-router-dom'; // useParams hook to access the dynamic parameters in the URL
import './ForumTopic.css'; // Importing CSS for styling; ensure the path is correct based on your project structure

// Defining the ForumTopic functional component
function ForumTopic() {
    // useParams hook is used to access the dynamic parameter 'id' from the URL
    const { id } = useParams();

    // useState hook to manage the state of the 'topic'; initialized to null
    const [topic, setTopic] = useState(null);

    // useEffect hook to perform side effects in function components; fetches data when component mounts or 'id' changes
    useEffect(() => {
        // Defining an asynchronous function to simulate fetching topic data based on the 'id'
        const fetchTopic = async () => {
            // Simulated fetched data; in a real application, replace this with an actual API call
            const fetchedTopic = {
                id: id,
                title: "Sample Topic Title",
                content: "This is the sample content of the forum topic fetched by ID.",
                author: "John Doe",
                createdAt: new Date().toISOString() // Current date and time in ISO string format
            };
            // Updating the state with the fetched topic data
            setTopic(fetchedTopic);
        };

        // Calling the fetchTopic function to simulate data fetching
        fetchTopic();
    }, [id]); // Dependency array with 'id'; useEffect runs again if 'id' changes

    // Conditional rendering: if 'topic' is null, display a loading message
    if (!topic) {
        return <div>Loading topic...</div>;
    }

    // Main return block: renders the topic details once the data is available
    return (
        <div className="forum-topic">
            <h2>{topic.title}</h2> {/* Displaying the topic title */}
            <p className="forum-content">{topic.content}</p> {/* Displaying the topic content */}
            <div className="forum-footer">
                <span>Posted by: {topic.author}</span> {/* Displaying the author */}
                <span> | </span>
                <span>Date: {new Date(topic.createdAt).toLocaleDateString()}</span> {/* Displaying the formatted creation date */}
            </div>
            <div className="forum-interactions">
                <button>Like</button> {/* Like button */}
                <button>Comment</button> {/* Comment button */}
            </div>
        </div>
    );
}

// Exporting the ForumTopic component as the default export
export default ForumTopic;
