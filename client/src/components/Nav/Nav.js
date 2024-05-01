import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css'; // Ensure the path is correct based on your project structure

function Nav() {
    return (
        <nav>
            <NavLink to="/" className={({ isActive }) => isActive ? "App-link active" : "App-link"}>Home</NavLink>
            <NavLink to="/login" className={({ isActive }) => isActive ? "App-link active" : "App-link"}>Login</NavLink>
            <NavLink to="/register" className={({ isActive }) => isActive ? "App-link active" : "App-link"}>Register</NavLink>
        </nav>
    );
}

export default Nav;

