import React, { createContext, useContext, useState, useEffect } from 'react';

// Create a new context for user data
const UserContext = createContext();

// Custom hook to access the user context
export const useUser = () => useContext(UserContext);

// UserProvider component to provide user data to its children
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const userData = localStorage.getItem('user');
    return userData ? JSON.parse(userData) : {}; // Initialize with localStorage data if available
  });

  // Function to update user data
  const updateUser = (email, role) => {
    setUser({ email, role });
  };

  // Function to clear user data (logout)
  const logout = () => {
    setUser({ email: null, role: null }); // Set role and email to null
  };

  useEffect(() => {
    // Save user data to localStorage whenever it changes
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  return (
    <UserContext.Provider value={{ user, updateUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};
