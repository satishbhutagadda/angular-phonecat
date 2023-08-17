'use strict';

// Define the `phonecatApp` module
angular.module('phonecatApp', [
  'ngAnimate',
  'ngRoute',
  'core',
  'phoneDetail',
  'phoneList'
]);

// angular.module("phonecatApp", [
//     'ngAnimate',
//     'ngRoute',
//     'core',
//     'phoneDetail',
//     'phoneList'
// ]);

// angular.module("phonecatApp").component("jsApp", {
//     template: "<p>Hello {{'AngularJS'}}</p>",
//     controller: function() {
//       console.log("jsApp component started");
//     }
// });