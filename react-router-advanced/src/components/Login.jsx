import React from 'react'
import { useNavigate } from 'react-router-dom'

function Login({ setIsAuthenticated }) {
    const navigate = useNavigate();

    const generateId = () => {
        return 'user-' + Date.now() + Math.floor(Math.random() * 1000);
    }

    const handleLogin = () => {
        setIsAuthenticated(true);
        const userId = generateId();
        navigate(`/profile/${userId}`);

    };
  return (
    <div>
        <h2>Login Page</h2>
        <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login