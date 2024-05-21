import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, useParams } from 'react-router-dom'; // Import useParams directly
import ForumTopic from './ForumTopic';

// Mock useParams to return a specific id
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn() // Mock useParams as a jest function
}));

describe('ForumTopic component', () => {
  afterEach(() => {
    jest.clearAllMocks(); // Ensure mocks are cleared after each test
  });

  test('renders loading state initially', () => {
    useParams.mockReturnValue({ id: '123' }); // Mock the return value of useParams
    render(
      <MemoryRouter initialEntries={['/forum/123']}>
        <Route path="/forum/:id">
          <ForumTopic />
        </Route>
      </MemoryRouter>
    );

    expect(screen.getByText('Loading topic...')).toBeInTheDocument();
  });

  test('renders topic details after fetching data', async () => {
    useParams.mockReturnValue({ id: '123' }); // Mock the return value of useParams
    render(
      <MemoryRouter initialEntries={['/forum/123']}>
        <Route path="/forum/:id">
          <ForumTopic />
        </Route>
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText('Sample Topic Title')).toBeInTheDocument();
      expect(screen.getByText('This is the sample content of the forum topic fetched by ID.')).toBeInTheDocument();
      expect(screen.getByText('Posted by: John Doe')).toBeInTheDocument();
    });
  });

  test('renders formatted date correctly', async () => {
    useParams.mockReturnValue({ id: '123' }); // Mock the return value of useParams
    render(
      <MemoryRouter initialEntries={['/forum/123']}>
        <Route path="/forum/:id">
          <ForumTopic />
        </Route>
      </MemoryRouter>
    );

    await waitFor(() => {
      const date = new Date().toLocaleDateString();
      expect(screen.getByText(`Date: ${date}`)).toBeInTheDocument();
    });
  });

  test('renders like and comment buttons', async () => {
    useParams.mockReturnValue({ id: '123' }); // Mock the return value of useParams
    render(
      <MemoryRouter initialEntries={['/forum/123']}>
        <Route path="/forum/:id">
          <ForumTopic />
        </Route>
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText('Like')).toBeInTheDocument();
      expect(screen.getByText('Comment')).toBeInTheDocument();
    });
  });
});
