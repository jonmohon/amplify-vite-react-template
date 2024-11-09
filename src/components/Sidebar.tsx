import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // Add custom styles here

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <h2>Nexvato Admin</h2>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/settings">Settings</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/reports">Reports</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
