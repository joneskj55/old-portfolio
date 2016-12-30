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
});