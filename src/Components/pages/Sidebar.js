import React from 'react';
import '../CSS/Sidebar.css'

const Sidebar = () => {
  return (
    <div className="bg-light border-right" id="sidebar-wrapper">
      <div className="sidebar-heading">Menu</div>
      <div className="list-group list-group-flush">
        <a href="/dashboard" className="list-group-item list-group-item-action bg-light">
          Dashboard
        </a>
        <a href="/charts" className="list-group-item list-group-item-action bg-light">
          Charts
        </a>
        <a href="/barchart" className="list-group-item list-group-item-action bg-light">
          Bar Graph
        </a>
        <a href="/datacards" className="list-group-item list-group-item-action bg-light">
          Cards Graph
        </a>
        <a href="/" className="list-group-item list-group-item-action bg-light">
          Logout
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
