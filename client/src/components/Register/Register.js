import React, { useState } from 'react';
import './Register.css'; // Assuming CSS module is located in the same directory

function Register() {
    // State variables to store username, email, and password
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Function to handle form submission
    const handleRegister = (e) => {
        e.preventDefault();
        // Handle registration logic here (e.g., API call, validation)
        // For now, just log the data to console
        console.log("Registration attempted with", username, email, password);
    };

    return (
        <div className="register">
            <h2>Register</h2>
            {/* Form to register user */}
            <form onSubmit={handleRegister}>
                <label>
                    Username:
                    {/* Input field for username */}
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </label>
                <label>
                    Email:
                    {/* Input field for email */}
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label>
                    Password:
                    {/* Input field for password */}
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                {/* Submit button */}
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;
