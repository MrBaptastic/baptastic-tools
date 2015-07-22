/** @jsx React.DOM */

'use strict'

require('../../node_modules/foundation-sites/scss/foundation.scss')

window.jQuery = require('jquery');

var React = require('react');

var Character = require('./framework/character/character')

React.render(<Character />, document.getElementById('content'))

