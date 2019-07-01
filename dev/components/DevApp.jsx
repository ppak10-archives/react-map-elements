/**
 * DevApp.jsx
 * React app to test out package within development environment
 */

// Node Modules
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// Components
import {Navigation} from './Navigation';

// Pages
import {MapPage} from '../pages/Map';
import {StaticPage} from '../pages/Static';

export const DevApp = () => (
  <Router>
    <Navigation />
    <div className="page">
      <Switch>
        <Route exact path="/" component={StaticPage} />
        <Route exact path="/places" component={MapPage} />
      </Switch>
    </div>
  </Router>
);
