/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$("document").ready(function() {
    $("#title").css("background-color", "black");
    $('h4:first').css({"color": "white"});
    $('p:first').css({"text-align": "center"});
    $('input').css('width', '120px');
    $('input').css('height', '30px');
    $('input').css('padding-bottom', '5px');
    $('input').css('color', 'grey');
    $('input').css('font-size', 'small');
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
function mouseOver() {
    $("h1").html("MouseOn");
    $("p").html("Rick Grimes");
    $("#second").hmtl("still alive");
}
function mouseOff(){
    $('.2').css('visibility', 'hidden');
    $('.1').css('visibility', 'visible');
    $("#second").html("Rick grimes");
}