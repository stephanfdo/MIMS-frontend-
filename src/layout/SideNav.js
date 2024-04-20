import React from 'react';
import { useUser } from '../UserContext'; // Import the useUser hook
import "../App.css";

const SideNav = () => {
  const { user, logout } = useUser(); // Access the user object and logout function from the context

  return (
    <div className="side-nav-bar">
      <ul>
        {user.role === "admin" && (
          <>
            <li><a href="/user">Users</a></li>
            <li><a href="/Inventory">Inventory</a></li>
            <li><a href="/Item">Items</a></li>
            <li><a href="/Order">Orders</a></li>
            <li><a href="/Location">Location</a></li>
            <li><a href="/Supplier">Suppliers</a></li>
          </>
        )}
        {user.role === "user" && (
          <>
            <li><a href="/Inventory">Inventory</a></li>
            <li><a href="/Item">Items</a></li>
            <li><a href="/Order">Orders</a></li>
          </>
        )}
      </ul>
      {/* Logout button */}
      <ul><li onClick={logout} style={{ color: 'blue' }}><a href="/" style={{ color: 'blue' }}>Logout</a></li></ul>
      {/* Display user role and email */}
      <div className="user-info" style={{ color: 'green', marginTop: 'auto' }}>
        <p>Role: {user.role}</p>
        <p>Email: {user.email}</p>
      </div>
    </div>
  );
};

export default SideNav;
