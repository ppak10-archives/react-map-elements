/**
 * index.js
 * Entry file for development environment
 */

// Node Modules
import React from 'react';
import {render} from 'react-dom';

// Styles
import './main.css';
import '../src/stylesheets/main.less';

// Components
import {DevApp} from './components/DevApp';

render(<DevApp />, document.getElementById('root'));
