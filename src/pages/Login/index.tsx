import React from 'react'
import { useLocation } from 'wouter';

export const Login = () => {
  const [location, setLocation] = useLocation();

  const handleLogin = () => {
    // Perform login logic
    // ...

    // Navigate to another route
    setLocation('/review');
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};
