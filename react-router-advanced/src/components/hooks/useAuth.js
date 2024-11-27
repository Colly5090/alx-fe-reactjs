import React, { useState, useEffect } from 'react'

function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.isAuthenticated) {
      setIsAuthenticated(true);
    }
  },[])
  return (
    isAuthenticated
  )
}

export default useAuth