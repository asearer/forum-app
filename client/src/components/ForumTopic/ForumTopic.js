import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ForumTopic.css'; // Ensure this path is correct for CSS styling

function ForumTopic() {
    const { id } = useParams();
    const [topic, setTopic] = useState(null);

    useEffect(() => {
        // Simulate fetching data for the topic based on `id`
        const fetchTopic = async () => {
            // Simulated fetched data based on `id`
            const fetchedTopic = {
                id: id,
                title: "Sample Topic Title",
                content: "This is the sample content of the forum topic fetched by ID.",
                author: "John Doe",
                createdAt: new Date().toISOString()
            };
            setTopic(fetchedTopic);
        };

        fetchTopic();
    }, [id]);

    if (!topic) {
        return <div>Loading topic...</div>;
    }

    return (
        <div className="forum-topic">
            <h2>{topic.title}</h2>
            <p className="forum-content">{topic.content}</p>
            <div className="forum-footer">
                <span>Posted by: {topic.author}</span>
                <span> | </span>
                <span>Date: {new Date(topic.createdAt).toLocaleDateString()}</span>
            </div>
            <div className="forum-interactions">
                <button>Like</button>
                <button>Comment</button>
            </div>
        </div>
    );
}

export default ForumTopic;

