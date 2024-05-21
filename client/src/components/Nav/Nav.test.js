import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom'; // Using BrowserRouter for testing
import Nav from './Nav';

describe('Nav component', () => {
    test('renders navigation links correctly', () => {
        render(
            <Router>
                <Nav />
            </Router>
        );

        // Ensure Home, Login, and Register links are rendered
        expect(screen.getByText('Home')).toBeInTheDocument();
        expect(screen.getByText('Login')).toBeInTheDocument();
        expect(screen.getByText('Register')).toBeInTheDocument();
    });

    test('activates the "Home" link correctly', () => {
        render(
            <Router>
                <Nav />
            </Router>
        );

        // Ensure "Home" link is active by default
        const homeLink = screen.getByText('Home');
        expect(homeLink).toHaveClass('active');

        // Ensure "Login" and "Register" links are not active
        const loginLink = screen.getByText('Login');
        const registerLink = screen.getByText('Register');
        expect(loginLink).not.toHaveClass('active');
        expect(registerLink).not.toHaveClass('active');
    });

    // Similarly, you can write tests to check the activation of other links based on the current route.
});
