import React, { useEffect } from 'react';
import { useUser } from '../context/UserContext'; // Import the custom hook

const Dashboard = () => {
  const { user, isAuthenticated, login, logout } = useUser(); // Use the context

  useEffect(() => {
    if (!isAuthenticated) {
      // Logic to prompt user to log in
      // login({name: 'John Doe', role: 'Driver'}); // Example
    }
  }, [isAuthenticated]);

  return (
    <div>
      <h1>Welcome to the Dashboard, {isAuthenticated ? user.name : 'Guest'}</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
