import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For better assertions
import Home from './Home'; // Path to the Home component

describe('Home Component', () => {
  // Test case 1: Rendering the component without crashing
  test('renders without crashing', () => {
    render(<Home />);
  });

  // Test case 2: Verifying static text content
  test('renders the welcome message and description', () => {
    render(<Home />);
    // Check for the heading
    expect(screen.getByText('Welcome to the Forum')).toBeInTheDocument();
    // Check for the paragraph
    expect(screen.getByText('This is the homepage of the forum app. Here you can see the latest threads and updates.')).toBeInTheDocument();
  });

  // Test case 3: Verifying the rendering of child components
  test('renders ThreadList, NewsList, and PhotoGallery components', () => {
    render(<Home />);
    // Check if ThreadList is rendered
    expect(screen.getByText('ThreadList')).toBeInTheDocument(); // Adjust this selector based on actual content inside ThreadList
    // Check if NewsList is rendered
    expect(screen.getByText('NewsList')).toBeInTheDocument(); // Adjust this selector based on actual content inside NewsList
    // Check if PhotoGallery is rendered
    expect(screen.getByText('PhotoGallery')).toBeInTheDocument(); // Adjust this selector based on actual content inside PhotoGallery
  });
});
