import '../components/Register.css'
import React, { useState } from 'react';

const App = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');

    /**
     * Handles the form submission for registration.
     * Prevents default form submission and performs basic validation.
     * Simulates a registration attempt and sets an appropriate message.
     * @param {Object} e - The event object from the form submission.
     */
    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(''); // Clear previous messages

        // Basic validation
        if (!username || !password || !confirmPassword) {
            setMessage('Please fill in all fields.'); 
            return;
        }

        if (password !== confirmPassword) {
            setMessage('Passwords do not match.'); // Passwords do not match.
            return;
        }
        console.log('Registering user:', { username, password });
        setMessage('Registration successful. Now you can place login.');
    };

    return (
        <div className='reg-body'>
        <div className="register-container">
            <div className="register-box">
                <h2>PLEASE REGISTER!!! </h2> {/* Register Here */}
                <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                    <div className="input-group">
                        <input
                            type="text"
                            placeholder="USERNAME" // Username
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <input
                            type="password"
                            placeholder="PASSWORD" // Password
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <input
                            type="password"
                            placeholder="CONFIRM PASSWORD" // Confirm Password
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>

                    {message && (
                        <p className={`message ${message.includes('SUCCESSFUL') ? 'success' : 'error'}`}>
                            {message}
                        </p>
                    )}

                    <button
                        type="submit"
                        className="register-button"
                    >
                        REGISTER HERE!
                    </button>
                </form>
            </div>
        </div>
        </div>
    );
};

export default App;
