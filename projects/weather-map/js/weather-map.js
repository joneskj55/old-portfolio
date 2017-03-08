/**
 * Created by kevinjones on 12/19/16.
 */

"use strict";

$(document).ready(function () {
    function populateForecast(value) {
        var date = moment.unix(value.dt).format("dddd, MMM-DD-YYYY");

        return "<div id='every-box' class='col-md-4'>"
            + "<p id='date-time-group'>" + date + "</p>"
            + "<p id='temp'>" + Math.round(value.temp.max) + "&#176;/" + Math.round(value.temp.min)
            + "&#176;" + "</p>"
            + "<img class='center-block' src='http://openweathermap.org/img/w/"
            + value.weather[0].icon + ".png'>"
            + "<p id='conditions'>" + "<strong>Conditions:</strong> " + value.weather[0].description + "</p>"
            + "<p>" + "<strong>Humidity:</strong> " + value.humidity + "</p>"
            + "<p>" + "<strong>Wind:</strong> " + value.speed + "</p>"
            + "<p>" + "<strong>Pressure:</strong> " + value.pressure + "</p>"
            + "</div>";
    }

    var weatherSA = $.get("http://api.openweathermap.org/data/2.5/forecast/daily", {
        APPID: "a3159318f0653dffd3a9af1e9becee5e",
        q: "San Antonio, TX",
        units: "imperial",
        cnt: 3
    }); //HTTP

    weatherSA.done(function (data) {
        $("#sub-header").text(data.city.name);
        var userWeatherInfo = '';
        data.list.forEach(function (value) {
            userWeatherInfo += populateForecast(value);
            $("#cover-div").html(userWeatherInfo);
        });
    });

    //----------------------SET OUT MAP OPTIONS-------------------------//
    var myLatlng = new google.maps.LatLng(29.426549, -98.490018);
    var mapOptions = {
        zoom: 4,
        center: myLatlng
    };

    //--------------------------RENDER THE MAP--------------------------//
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

    //----------------------------MAP MARKER----------------------------//
    var marker = new google.maps.Marker({
        position: myLatlng,
        draggable: true
    });

    // To add the marker to the map, call setMap();
    marker.setMap(map);

    //-------------------MARKER RENDERS NEW INFO TO API----------------//
    var moveMarker = google.maps.event.addListener(marker, 'dragend', function (evt) {
        var latitude = evt.latLng.lat().toFixed(3);
        var longitude = evt.latLng.lng().toFixed(3);
        var userChoice = $.get("http://api.openweathermap.org/data/2.5/forecast/daily?lat=" + latitude + "&lon=" + longitude + "&cnt=3", {
            APPID: "a3159318f0653dffd3a9af1e9becee5e",
            units: "imperial"
        });

        userChoice.done(function (data) {
            $("#sub-header").text(data.city.name);
            var userWeatherInfo = '';
            data.list.forEach(function (value) {
                userWeatherInfo += populateForecast(value);
                $("#cover-div").html(userWeatherInfo);
            });
        });
    });
    map.setCenter(marker.position);
    marker.setMap(map);

    //----------------SEARCH BAR-------------------//
    //Autocomplete
    var autocomplete = new google.maps.places.Autocomplete(
        (document.getElementById("location")),
        {types: ["geocode"]});

    //----------------------------ADDITIONAL TODO TASKS----------------------------//

//        Extra Challenges:
//    2) Try creating an event to reflect the weather, in the background of the page, for the area we are currently searching.
//      -Hint: try using the conditions inside of data.list.weather[0].main this should give you conditions that you can trigger off of.
//    3) Allow the user to select the number of days they want to see a forecast for.
//      -Hint: this will require a second form input.
//    4) Try using GoogleMaps API to provide predictive text options in your search bar
//    5) Let the user drop multiple map markers with content tags to specify the weather data for the area where the map marker was dropped.

    //-------------------------LAT LONG INPUTS----------------------------------//
    //button feeds lat long info into API request...

//    $("#submit-btn").click(function () {
//        var latitude = $("#lat").val();
//        var longitude = $("#long").val();
//        console.log(latitude, longitude);
//        var userChoice = $.get("http://api.openweathermap.org/data/2.5/forecast/daily?lat=" + latitude + "&lon=" + longitude + "&cnt=3", {
//            APPID: "a3159318f0653dffd3a9af1e9becee5e",
//            units: "imperial"
//        });
//        var userWeatherInfo = [];
//
//        userChoice.done(function (data) {
//            $("#sub-header").text(data.city.name);
//            data.list.forEach(function (value) {
//
//                userWeatherInfo += "<div id='every-box' class='col-md-4'>"
//
//                        + "<p id='temp'>" + Math.round(value.temp.max) + "&#176;/" + Math.round(value.temp.min) + "&#176;" + "</p>"
//                        + "<img class='center-block' src='http://openweathermap.org/img/w/" + value.weather[0].icon + ".png'>"
//                        + "<p>" + "<strong>Conditions:</strong> " + value.weather[0].description + "</p>"
//                        + "<p>" + "<strong>Humidity:</strong> " + value.humidity + "</p>"
//                        + "<p>" + "<strong>Wind:</strong> " + value.speed + "</p>"
//                        + "<p>" + "<strong>Pressure:</strong> " + value.pressure + "</p>"
//                        + "</div>";
//                $("#cover-div").html(userWeatherInfo);
//            });
//            userWeatherInfo = [];
//        });
//    }); //<-------END GET LAT LONG-----------------------------------//
    //--------------CHANGE BACKGROUND--------------//
//        function weatherDisplay(weatherCondition) {
//            if (weatherCondition === "clear sky") {
//                $()
//                return "<p id='conditions'>" + "<strong>Conditions:</strong> " + value.weather[0].description + "</p>"
//            }
//        if ("#conditions".val() == "clear sky") {
//            $("body").css("background-color", "red");
//        }
});