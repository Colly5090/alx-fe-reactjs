import React, { useState } from 'react';

const RegistrationForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setErrors] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!username) {
            setErrors('Username is required!');
            return;
        }

        if (!email) {
            setErrors('Email is required!');
            return;
        }

        if (!password) {
            setErrors('Password is required!');
            return;
        }

        // Clear error and submit form
        setErrors('');
        console.log('Form Submitted:', { username, email, password });
        setUsername('');
        setEmail('');
        setPassword('');
    };

    return (
        <div>
            <h2>Register</h2>
            {error && <p className="error" style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input
                    id="username"
                    type="text"
                    value={username}
                    placeholder="Username"
                    name="username"
                    onChange={(e) => setUsername(e.target.value)}
                />

                <label htmlFor="email">Email Address</label>
                <input
                    id="email"
                    type="email"
                    value={email}
                    placeholder="Email Address"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    type="password"
                    value={password}
                    placeholder="Password"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default RegistrationForm;