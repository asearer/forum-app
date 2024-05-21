import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Login from './Login'; // Adjust the path as needed

// Mock console.log to suppress output during tests
console.log = jest.fn();

describe('Login Component', () => {
    test('should render the login form', () => {
        render(<Login />);
        expect(screen.getByText('Login')).toBeInTheDocument();
        expect(screen.getByLabelText('Username:')).toBeInTheDocument();
        expect(screen.getByLabelText('Password:')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
    });

    test('should handle username input change', () => {
        render(<Login />);
        const usernameInput = screen.getByLabelText('Username:');
        fireEvent.change(usernameInput, { target: { value: 'user' } });
        expect(usernameInput.value).toBe('user');
    });

    test('should handle password input change', () => {
        render(<Login />);
        const passwordInput = screen.getByLabelText('Password:');
        fireEvent.change(passwordInput, { target: { value: 'password' } });
        expect(passwordInput.value).toBe('password');
    });

    test('should display success message on valid login', () => {
        render(<Login />);
        const usernameInput = screen.getByLabelText('Username:');
        const passwordInput = screen.getByLabelText('Password:');
        const loginButton = screen.getByRole('button', { name: /login/i });

        fireEvent.change(usernameInput, { target: { value: 'user' } });
        fireEvent.change(passwordInput, { target: { value: 'password' } });
        fireEvent.click(loginButton);

        expect(screen.getByText('Login successful!')).toBeInTheDocument();
    });

    test('should display error message on invalid login', () => {
        render(<Login />);
        const usernameInput = screen.getByLabelText('Username:');
        const passwordInput = screen.getByLabelText('Password:');
        const loginButton = screen.getByRole('button', { name: /login/i });

        fireEvent.change(usernameInput, { target: { value: 'wronguser' } });
        fireEvent.change(passwordInput, { target: { value: 'wrongpassword' } });
        fireEvent.click(loginButton);

        expect(screen.getByText('Invalid username or password')).toBeInTheDocument();
    });
});


