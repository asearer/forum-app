import React, { useState } from 'react';
import './Login.css'; // Assuming CSS module is located in the same directory

function Login() {
    // State to manage the username and password inputs
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // State to manage the login message (success or error)
    const [message, setMessage] = useState('');

    /**
     * Mock login function to simulate backend authentication.
     * In a real application, this is replaced with an API call to the backend.
     * 
     * @param {string} username - The username input
     * @param {string} password - The password input
     * @returns {object} - An object containing success status and message
     */
    const mockLogin = (username, password) => {
        if (username === 'user' && password === 'password') {
            return { success: true, message: 'Login successful!' };
        } else {
            return { success: false, message: 'Invalid username or password' };
        }
    };

    /**
     * Handles the form submission for login.
     * Prevents the default form submission behavior, calls the mock login function,
     * and updates the message state based on the result.
     * 
     * @param {object} e - The event object
     */
    const handleLogin = (e) => {
        e.preventDefault(); // Prevent default form submission
        const result = mockLogin(username, password); // Call mock login function
        setMessage(result.message); // Update the message state with the result
    };

    return (
        <div className="login">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <label htmlFor="username">
                    Username:
                    <input
                        id="username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} // Update username state on input change
                    />
                </label>
                <label htmlFor="password">
                    Password:
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} // Update password state on input change
                    />
                </label>
                <button type="submit">Login</button>
            </form>
            {message && <p>{message}</p>} {/* Conditionally render the message if it exists */}
        </div>
    );
}

export default Login;

