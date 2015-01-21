/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$("document").ready(function() {
    $("#title").css("background-color", "black");
    $('h4:first').css({"color": "white"});
    $('p:first').css({"text-align": "center"});
    $('#tags').css('width', '120px');
    $('#tags').css('height', '30px');
    $('#tags').css('padding-bottom', '5px');
    $('label').css('color', 'white');
    $('#tags').css('font-size', 'small');
    $('#tags').css('color','grey' );
    $("h2").bind('mouseover', mouseOverMe).bind('mouseout', mouseOuteMe);
});
//for 
$("document").ready(function() {
    $(".img-responsive").css("position", "center");
});

//$("document").ready(function() {
//        $('.navbar-inverse').css('font-size', '36px');
//});


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
$('#names').bind(mouseover, mouseOverMe).bind('mouseout', mouseOutMe);
function mouseOverMe() {
    $("h2").html("Akljb");
    
}
function mouseOutMe(){
    $("h2").html("Rick Grimes");
}
$(function() {
    $( '#accordion > p' ).hide();
        $( '#accordion h3').click(function(){
           $(this).siblings('p:visible').slideUp('2000');
           $(this).next().animate({'height':'toggle'}, '2000', 'easeInOutExpo');
        });
  });
