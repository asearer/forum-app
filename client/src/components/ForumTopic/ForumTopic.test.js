import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import ForumTopic from './ForumTopic';

// Mock useParams to return a specific id
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({ id: '123' })
}));

describe('ForumTopic component', () => {
  test('renders loading state initially', () => {
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
