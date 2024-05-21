import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Register from './Register';

describe('Register Component', () => {
  // Rendering Test
  test('renders Register component', () => {
    render(<Register />);
    const registerElement = screen.getByText(/register/i);
    expect(registerElement).toBeInTheDocument();
  });

  // Form Input Test
  test('updates state on input change', () => {
    render(<Register />);
    const usernameInput = screen.getByLabelText(/username/i);
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);

    fireEvent.change(usernameInput, { target: { value: 'testUser' } });
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'testPassword' } });

    expect(usernameInput.value).toBe('testUser');
    expect(emailInput.value).toBe('test@example.com');
    expect(passwordInput.value).toBe('testPassword');
  });

  // Form Submission Test
  test('submits form with correct data', () => {
    render(<Register />);
    const usernameInput = screen.getByLabelText(/username/i);
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const registerButton = screen.getByRole('button', { name: /register/i });

    fireEvent.change(usernameInput, { target: { value: 'testUser' } });
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'testPassword' } });
    fireEvent.click(registerButton);

    expect(console.log).toHaveBeenCalledWith('Registration attempted with', 'testUser', 'test@example.com', 'testPassword');
  });

  // Validation Test (if applicable)
  // Write tests to check if form validation works as expected

  // Props Test (if applicable)
  // Write tests to check component behavior with different props
});
