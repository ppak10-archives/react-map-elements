/**
 * Navigation.jsx
 * Navigation header component
 */

// Node Modules
import React from 'react';
import {Link} from 'react-router-dom';

export const Navigation = () => (
  <div className="navigation">
    <div className="logo">
      <span>react-map-elements</span>
    </div>
    <ul>
      <li>
        <Link to="/">Static</Link>
      </li>
      <li>
        <Link to="/places">Places Input</Link>
      </li>
    </ul>
  </div>
);
