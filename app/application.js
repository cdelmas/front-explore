"use strict";

var $ = require('jquery');

var App = {
    init: function init() {
        console.log('App initialized.');
        $('body').append('App initialized');
    }
};

module.exports = App;