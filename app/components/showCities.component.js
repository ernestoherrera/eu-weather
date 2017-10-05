angular.module('app')
    .component('showcities', {
        templateUrl: 'app/templates/show-cities.html',
        bindings: {
            city: '@'
        },
        controller: 'showCitiesController'
    })
    .controller('showCitiesController', function ($scope) {
        this.cities = [
            { 'key': '2643741', 'value': 'London', 'dataAsOf': new Date(), 'temp': 0, 'wind': { 'speed': 0, 'deg': 0 } },
            { 'key': '2759794', 'value': 'Amsterdam', 'dataAsOf': new Date(), 'temp': 0, 'wind': { 'speed': 0, 'deg': 0 } },
            { 'key': '6359304', 'value': 'Madrid', 'dataAsOf': new Date(), 'temp': 0, 'wind': { 'speed': 0, 'deg': 0 } },
            { 'key': '2950159', 'value': 'Berlin', 'dataAsOf': new Date(), 'temp': 0, 'wind': { 'speed': 0, 'deg': 0 } },
            { 'key': '756135', 'value': 'Warsaw', 'dataAsOf': new Date(), 'temp': 0, 'wind': { 'speed': 0, 'deg': 0 } }
        ];

        $scope.city = this.cities[0];
        $scope.cities = this.cities;
    })