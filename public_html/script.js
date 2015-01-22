/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$("document").ready(function() {
    $("#title").css("background-color", "black");
    $('h4:first').css({"color": "white"});
    $('h1:first').css({"text-align": "center"});
    $('h1:first').css({"color": "white"});
    $('p').css({"color": "black"});
    $('#tags').css('width', '120px');
    $('#tags').css('height', '30px');
    $('#tags').css('padding-bottom', '5px');
    $('label').css('color', 'white');
    $('#tags').css('font-size', 'small');
    $('#tags').css('color', 'grey');
    $(".names").bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);
    $('#rick').css('width', '200');
    $('#rick').css('height', '100');
    $('#rick').css('position', 'left');
    $('#carl').css('width', '200');
    $('#carl').css('height', '100');
    $('#lori').css('width', '200');
    $('#lori').css('height', '100');
    $(".alive").css('border-color', 'black');
    $(".dead").css('border-color', 'black');
    $('#accordion').css('color', 'black');
    $('button').css('width', '50px');
    $('button').css('heigth', '50px');
    $('button').css('font-size', '10px');
    $('button').css('color', 'black');
    $('#accordion').accordion({header: "h5"});

});
//for 
$("document").ready(function() {
    $(".img-responsive").css("position", "center");
});
//for the search bar; tags for search bar
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
        "Season 4",
        "Season 5"
    ];
    $("#tags").autocomplete({
        source: availableTags

    });
});
$('#alive').bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);
function mouseOverMe() {
    $(".alive").html("<h6>Surviving</h6>");
    $(".alive").html("<h6>Surviving</h6>");
}
function mouseOutMe() {
    $(".alive").html("<h6>Rick Grimes</h6>");
    $(".alive").html("<h6>Carl Grimes</h6>");
}
//$('#dead').bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);
//function mouseOverMe() {
//    $(".dead").html("<h6>Dead</h6>");
//}
//function mouseOutMe() {
//    $(".dead").html("<h6>Lori Grimes</h6>");
//}
function hideTheImage(){
    $('#rick').hide('explode', {}, 2500);
}
function showTheImage(){
    $('#rick').show('fold', {}, 2500);
}
$("document").ready(function() {
  $('#hidePic').bind('click', hideTheImage);
  $('#showPic').bind('click', showTheImage);
});

