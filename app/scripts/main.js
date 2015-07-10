/*global require*/
'use strict';

require.config({
    shim: {},
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/lodash/dist/lodash',
        app: '/app'
    }
});

require([
    'backbone', 'app'
], function(Backbone, App) {
    Backbone.history.start();
    App.initialize();
});
