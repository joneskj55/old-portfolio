//Created by kevinjones on 12/15/16.//

"use strict";
$(document).ready(function () {

//---SMOOTH SCROLLING FROM VIEWPORT TO TARGET--//
    $("a[href^='#']").click(function (event) {
        event.preventDefault();
        $("html,body").animate({
            scrollTop: $(this.hash).offset().top - 50
        }, 900);
    });

//-------DATE & TIME----------//
    var currentTime = new Date();
    var year = currentTime.getFullYear();

//-------PROJECTS------------//
    var projectData = [{
        title: "Ajax Blog",
        date: "2016",
        description: "Blog using ajax and allowing users to add and delete blog posts",
        image: "<img id='blog-photo' src='img/blog.png' height='70%' width='70%' class='center-block'/>"
        // site: [] --ADD SITE LATER WHEN GITHUB PAGES IS COMPLETE
    }, {
        title: "Calculator",
        date: "2016",
        description: "JS Calculator",
        image: "<img id='calc-photo' src='img/calculator.png' height='40%' width='40%' class='center-block'/>"
        // site: [] --ADD SITE LATER WHEN GITHUB PAGES IS COMPLETE
    }, {
        title: "Simple Simon",
        date: "2016",
        description: "Classic Simple Simon memory game",
        image: "<img id='simon-photo' src='img/simon.png' height='70%' width='70%' class='center-block'/>"
        // site: [] --ADD SITE LATER WHEN GITHUB PAGES IS COMPLETE
    }, {
        title: "Weather Map",
        date: "2016",
        description: "3-day forecast weather map",
        image: "<img id='weather-photo' src='img/weather.png' height='70%' width='70%' class='center-block'/>"
        // site: [] --ADD SITE LATER WHEN GITHUB PAGES IS COMPLETE
    }];
    console.log(projectData);

//--------LOOP THROUGH PROJECTS TO DISPLAY THEM----//
    var data = [];
    projectData.forEach(function (value) {
        data += "<div id='my-portfolio'>"
            + "<div class='col-lg-3'>"
            + "<h3 id='project-title' class='text-center'>" + value.title + "</h3>"
            // + "<p id='project-date' class='text-center'>" + value.date + "</p>"
            + "<img id='project-image'>" + value.image
            + "<h4 id='project-description' class='text-center'>" + value.description + "</h4>"
            + "</div>"
            + "</div>";
        $("#my-portfolio").html(data);
    });
});