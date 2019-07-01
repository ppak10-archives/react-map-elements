/**
 * proptypes.js
 * Proptypes for react components
 */

// Node Modules
import PropTypes from 'prop-types';

// Base
export const FUNC_PROPTYPE = PropTypes.func.isRequired;
export const NUMBER = PropTypes.number.isRequired;

// Specific PropTypes
export const COORDINATES = PropTypes.shape({
  lat: NUMBER,
  lng: NUMBER,
}).isRequired;
