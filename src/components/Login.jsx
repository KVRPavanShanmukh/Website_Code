import '../components/Login.css'
import { useNavigate } from 'react-router-dom';
import '../components/Register'

import React, { useState } from 'react';

const App = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    // State to manage the menu icon's visual toggle
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    /**
     * Toggles the state of the menu icon.
     * This function is responsible for visually transforming the hamburger icon.
     */
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        // In a real application, you would also toggle the visibility of an actual navigation menu here.
    };

    /**
     * Handles the form submission for login.
     * Prevents default form submission and performs basic validation.
     * Simulates a login attempt and sets an appropriate message.
     * @param {Object} e - The event object from the form submission.
     */
    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(''); // Clear previous messages

        // Basic validation
        if (!username || !password) {
            setMessage('Please enter both username and password.');
            return;
        }

        // Simulate a login attempt
        // In a real app, you would make an API call to authenticate the user
        if (username === 'user' && password === 'pass') {
            setMessage('Login successful!');
            // In a real app, you'd redirect or set a user session here
            // window.location.href = '/dashboard';
        } else {
            setMessage('Invalid username or password.');
        }
    };
    const handleRegisterClick = () => {
    navigate('/register'); // This is the line of code!
  };

    return (
        <div className="login-container">
            <style>

            </style>

            <div className="login-box">
                {/* Menu Icon (Hamburger) */}
                <div
                    className={`login-hamburger-container ${isMenuOpen ? 'login-change' : ''}`} /* Renamed for consistency */
                    onClick={toggleMenu}
                >
                    <div className="login-bar1"></div> {/* Renamed for consistency */}
                    <div className="login-bar2"></div> {/* Renamed for consistency */}
                    <div className="login-bar3"></div> {/* Renamed for consistency */}
                </div>

                <h2 className="login-heading">Login</h2> {/* Added login-heading class */}
                <form onSubmit={handleSubmit} style={{ width: '100%' }}> {/* Form takes full width */}
                    <div className="login-input-group"> {/* Renamed for consistency */}
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="login-input-group"> {/* Renamed for consistency */}
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    {message && (
                        <p className={`login-message ${message.includes('successful') ? 'login-success' : 'login-error'}`}> {/* Renamed for consistency */}
                            {message}
                        </p>
                    )}

                    <div className="login-button-group"> 
                        <button type="submit" className="login-button">LOGIN</button>
                        <button type="button" className="login-reg-button" onClick={handleRegisterClick}>REGISTER</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default App;
