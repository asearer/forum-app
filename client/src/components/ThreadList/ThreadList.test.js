import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import ThreadList from './ThreadList';

// Mock data to simulate fetched data from an API
const mockThreads = [
    { id: 1, title: "What's your favorite programming language?", author: "Alice", createdAt: "2023-05-01T12:34:56Z" },
    { id: 2, title: "Introduction to React Hooks", author: "Bob", createdAt: "2023-05-02T08:30:00Z" },
    { id: 3, title: "Node.js Performance Tips", author: "Charlie", createdAt: "2023-05-03T15:45:23Z" }
];

describe('ThreadList', () => {
    test('renders loading message initially', () => {
        render(<ThreadList />);
        expect(screen.getByText('Loading threads...')).toBeInTheDocument();
    });

    test('renders list of threads after data fetching', async () => {
        render(<ThreadList />);
        // Wait for the loading message to disappear and threads to be rendered
        await waitFor(() => {
            mockThreads.forEach(thread => {
                expect(screen.getByText(thread.title)).toBeInTheDocument();
                expect(screen.getByText(`Posted by ${thread.author} on ${new Date(thread.createdAt).toLocaleDateString()}`)).toBeInTheDocument();
            });
        });
    });
});
