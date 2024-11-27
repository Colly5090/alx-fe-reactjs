import React from 'react'
import { Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react';
import useAuth from './hooks/useAuth';

function PrivateRoute({ children }) {
    const isAuthenticated = useAuth();
    const [showMessage, setShowMessage] = useState(false);
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        if (!isAuthenticated && showMessage){
            const timer = setTimeout(() => {
                setRedirect(true);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [isAuthenticated, showMessage]);

    if (!isAuthenticated) {
        if (!showMessage) {
            setShowMessage(true);
        }
        if (redirect){
            return <Navigate to="/login" replace />
        }
        return (
            <div style={{ color: 'red', fontWeight: 'bold', margin: '1em 0' }}>Login first!</div>
        )
    }
    return children;
}

export default PrivateRoute