//Created by kevinjones on 12/16/16.//

"use strict";

$(document).ready(function () {
    var blogPosts = $.get("data/blog.json");
    var posts = [];
    var newPosts = [];
    blogPosts.done(function (data) {

        data.forEach(function (value) {
            posts += "<div>"
                + "<h3 id='blog-title'>" + value.title + "</h3>"
                + "<p id='blog-content'>" + value.content + "</p>"
                + "<p id='blog-date'>" + value.date + "</p>"
//              + "<p id='blog-categories'>" + "Categories: " + value.categories.join(", ") + "</p>"
                + "<button id='remove-post' class='btn btn-xl del'>Delete Post</button>"
                + "</div>";
            $("#posts").html(posts);
            newPosts.push(value);
        });
        posts = [];
    });

    //------ADD POST FUNCTION--------//
    console.log(newPosts);

    $(".btn").click(function () {
        var newData = {
            title: $("#name").val(),
            content: $("#blog-title").val(),
            date: $("#post").val()

        };
        newPosts.push(newData);
        newPosts.forEach(function (element) {

            posts += "<div>"
                + "<h3 id='blog-title'>" + element.title + "</h3>"
                + "<p id='blog-content'>" + element.content + "</p>"
                + "<p id='blog-date'>" + element.date + "</p>"
                + "<button id='remove-post' class='btn btn-xl del'>Delete Post</button>"
                + "</div>";
            $("#posts").html(posts);
        });
        posts = [];
        clear();
    });

    //-------REMOVE POST FUNCTION--------//
    $("body").delegate(".del", "click", function () {
        $(this).parent().addClass("hidden");
    });

    //----------CLEAR INPUT FIELDS-------------//
    function clear() {
        $("#name").val("");
        $("#post").val("");
    }
});