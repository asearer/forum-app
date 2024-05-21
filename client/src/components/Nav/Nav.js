import React from 'react';
import { NavLink } from 'react-router-dom'; // Importing NavLink from react-router-dom
import './Nav.css'; // Importing styles from Nav.css, ensure the path is correct based on your project structure

function Nav() {
    return (
        <nav>
            {/* NavLink component for the Home page link */}
            <NavLink to="/" activeClassName="active" className="App-link">
                Home
            </NavLink>
            {/* NavLink component for the Login page link */}
            <NavLink to="/login" activeClassName="active" className="App-link">
                Login
            </NavLink>
            {/* NavLink component for the Register page link */}
            <NavLink to="/register" activeClassName="active" className="App-link">
                Register
            </NavLink>
        </nav>
    );
}

export default Nav;


