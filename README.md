# EU-Weather

The purpose of this repo is to show the weather for five european cities using angular 1.5
This is my first try at Angular 1.5

## Features
 1. Responsive design using Bootstrap
 2. When the site opens, it shows the city name, tempeture, and wind strength
 3. When clicking on a city tile, it will show an expanded weather forecast

## Get Started

All the scripts frameworks have been included as script tags, so there is no need to install anything. 
All you need is a local web server that serves the single page app (spa). You may use node's http-server click [here](https://www.npmjs.com/package/http-server) for instructions on how to install it.

## Known Issues

- It does not have test cases implemented.

## How was it put together?

The spa is using two components:

1. cityweather Component: This is the work horse of the site. It will display the initial tile by making an API call to[http://openweathermap.org/](http://openweathermap.org/current). This call uses JSONP to workaround the cross-site scripting call. The tempeture shown in Centigrades is the avearage from the min and max for the day. When clicked, it will make a second call to the api to get the forecast weather for the selected city and displays it. 

2. showCities Component: It contains an array of city objects which shows the city name, and city id. It will then loop through this array creating cityweather components on the main index page.
