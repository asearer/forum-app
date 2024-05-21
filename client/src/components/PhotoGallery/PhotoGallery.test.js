import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import PhotoGallery from './PhotoGallery';

describe('PhotoGallery component', () => {
    it('renders loading message initially', () => {
        render(<PhotoGallery />);
        const loadingElement = screen.getByText(/loading images/i);
        expect(loadingElement).toBeInTheDocument();
    });

    it('renders images after loading', async () => {
        render(<PhotoGallery />);
        await waitFor(() => {
            const imageElements = screen.getAllByRole('img');
            expect(imageElements.length).toBeGreaterThan(0);
        });
    });

    it('renders correct number of images', async () => {
        render(<PhotoGallery />);
        await waitFor(() => {
            const imageElements = screen.getAllByRole('img');
            expect(imageElements.length).toBe(4); // Assuming 4 mock images
        });
    });

    it('renders images with correct alt text', async () => {
        render(<PhotoGallery />);
        await waitFor(() => {
            const imageElements = screen.getAllByRole('img');
            imageElements.forEach((img, index) => {
                expect(img).toHaveAttribute('alt', `Placeholder Image ${index + 1}`);
            });
        });
    });
});
