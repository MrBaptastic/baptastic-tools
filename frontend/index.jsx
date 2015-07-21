/** @jsx React.DOM */

'use strict'

require('./node_modules/foundation-sites/scss/foundation.scss')

var React = require('react')

window.jQuery = require('jquery');

var Character = require('./character')

React.render(<Character />, document.getElementById('content'))

