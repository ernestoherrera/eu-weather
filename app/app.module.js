(function () {
    'use strict';
    var app = angular.module('app', []);

    app.component('helloWorld', {
        template: '<citywheather-component></citywheather-component>'
    });
})();

function parseJsonp(object) {
    console.log('parseJsonp');
    console.log(object);
    return object;
}