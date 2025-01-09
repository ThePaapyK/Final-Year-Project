import React, { useState, useEffect } from 'react';
import { Navigate, Route } from 'react-router-dom';
import axios from 'axios';

const PrivateRoute = ({ element: Component, ...rest }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const checkSession = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/auth/check_session', { withCredentials: true });
        setIsAuthenticated(response.data.authenticated);
      } catch (error) {
        setIsAuthenticated(false);
      }
    };

    checkSession();
  }, []);

  if (isAuthenticated === null) {
    return <div>Loading...</div>; // Or any loading spinner
  }

  return (
      isAuthenticated ? <Component {...rest} /> : <Navigate to="/login" />
  );
};

export default PrivateRoute;

