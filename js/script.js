$(document).ready(function () {
    $('#mycarousel').carousel({ interval: 2000 });
    $('#carouselButton').click(function () {
        if ($('#carouselButton').children('span').hasClass('fa-pause')) {
            $('#mycarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
        }
        else if ($('#carouselButton').children('span').hasClass('fa-play')) {
            $('#mycarousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
        }
    });
});
// modal using jquery

$("#e1").click(function(){
$("#reserveTable").modal('show');
});


$("#e2").click(function(){
$("#reserveTable").modal('hide');
});
        // login model //

$(".clicklogin").click(function(){ 
    // this is remainig @11-06-2022 22:44
$("#loginModal").modal('show');
});


$("#logincancelb1").click(function(){
    $("#loginModal").modal('hide');
});


$("#loginclose").click(function(){
    $("#loginModal").modal('hide');
});