(function () {
    'use strict';
    angular
        .module('app', [])
        .controller('Main', main);

    function main($rootScope, $http) {
        var vm = this;
        vm.food = 'pizza';
        vm.now = new Date();
        vm.getRandomHelloMessage = function () {

            $http({
                method: 'GET',
                url: 'http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b1b15e88fa797225412429c1c50c122a1'
            }).then(function successCallback(response) {
                vm.countryName = response[name];
                console.log(response);
            }, function errorCallback(response) {
                console.log('error');
                console.log(response);
            });

            console.log('food: ' + vm.food);
            console.log('clicked');
        }
    }
})()