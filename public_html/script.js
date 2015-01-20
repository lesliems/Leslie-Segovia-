/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$("document").ready(function() {
    $("#title").css("background-color", "black");
    $('h4:first').css({"color": "white"});
    $('p:first').css({"text-align": "left"});
    $('input').css('width', '150px');
    $('input').css('height', '30px');
    $('input').css('padding-bottom', '5px');
    $('input').css('color', 'grey');
    $('input').css('font-size', 'small');
});
//for the jumbotron
$("document").ready(function() {
    //$("..jumbrotron").css('background-image', "src");
//    $(".jumbotron").css('background-image', "url(http://www.walkingdeadcast.com/wp-content/uploads/2015/01/SEASON-4-COMPLETE-CAST-POSTER-The-Walking-Dead-the-walking-dead-35777405-2528-670.png)");
//    $(".jumbotron").css("text-align", "center");
//    $(".jumbotron").css("color", "white");
});
//for 
$("document").ready(function() {
    $(".img-responsive").css("position", "center");
});

$("document").ready(function() {
//    $(".ui-widget").css("color", "grey");
});

$(function() {
    var availableTags = [
        "All About Me",
        "Bootstrap",
        "CSS",
        "HTML",
        "JavaScript",
        "Melon js",
        "Characters",
        "Season 1",
        "Season 2",
        "Season 3",
        "Season 4"
    ];
    $("#tags").autocomplete({
        source: availableTags
    });
});
