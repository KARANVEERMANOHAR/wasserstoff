import React, { useState } from 'react';
import './navbar.css';

function Navbar() {
  const [activeTab, setActiveTab] = useState('Overview');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <p>Wasseerstoff</p>
      </div>
      <div className="navbar-search">
        <input type="text" placeholder="Search" />
      </div>
      <div className="navbar-tabs">
        <a
          className={activeTab === 'Statistics' ? 'active' : ''}
          onClick={() => handleTabClick('Statistics')}
        >
          Statistics
        </a>
        <a
          className={activeTab === 'Overview' ? 'active' : ''}
          onClick={() => handleTabClick('Overview')}
        >
          Overview
        </a>
        <a
          className={activeTab === 'Dashboard' ? 'active' : ''}
          onClick={() => handleTabClick('Dashboard')}
        >
          Dashboard
        </a>
        <a
          className={activeTab === 'Analytics' ? 'active' : ''}
          onClick={() => handleTabClick('Analytics')}
        >
          Analytics
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
