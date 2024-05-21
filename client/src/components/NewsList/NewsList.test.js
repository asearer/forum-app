import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import NewsList from './NewsList';

// Mocking the useEffect hook to prevent real API calls
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useEffect: jest.fn(),
}));

describe('NewsList component', () => {
  // Reset the mocked useEffect before each test
  beforeEach(() => {
    React.useEffect.mockClear();
  });

  it('renders loading message initially', async () => {
    render(<NewsList />);
    // Since we're mocking the useEffect, the component will not render the news immediately,
    // so the loading message should be displayed initially
    expect(screen.getByText('Loading news...')).toBeInTheDocument();
  });

  it('renders news items after fetching data', async () => {
    // Mocking the data fetched from the API
    const mockNews = [
      { id: 1, title: "New Study Reveals the Benefits of Coffee", content: "A recent study shows that drinking coffee can have health benefits...", date: "2024-04-30" },
      { id: 2, title: "Tech Giants Lead the Way in Green Energy", content: "Leading tech companies are now transitioning to 100% renewable energy sources...", date: "2024-04-29" },
      { id: 3, title: "Global Markets Rally on Economic Optimism", content: "Markets around the world rallied today amid optimism about economic growth...", date: "2024-04-28" }
    ];

    // Mocking the useEffect hook to immediately call the provided callback function
    React.useEffect.mockImplementationOnce(f => f());

    render(<NewsList />);
    
    // After the useEffect callback is invoked, the news items should be rendered
    await waitFor(() => {
      expect(screen.getByText('Latest News')).toBeInTheDocument();
      mockNews.forEach(newsItem => {
        expect(screen.getByText(newsItem.title)).toBeInTheDocument();
        expect(screen.getByText(newsItem.content)).toBeInTheDocument();
        expect(screen.getByText(`Published on: ${newsItem.date}`)).toBeInTheDocument();
      });
    });
  });
});

