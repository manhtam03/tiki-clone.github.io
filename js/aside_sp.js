$(document).ready(function(){
    $('.list-sp-expan').hide();
    $('.first-expan').fadeIn();
    $('.list-sp-head #ar1 i:first-child').click(function(){
        $('#expan1 ').hide();
        $('.list-sp-head #ar1 i:last-child').fadeIn();
        $('.list-sp-head #ar1 i:first-child').hide();
    });
    $('.list-sp-head #ar1 i:last-child').click(function(){
        $('#expan1 ').fadeIn();
        $('.list-sp-head #ar1 i:last-child').hide();
        $('.list-sp-head #ar1 i:first-child').fadeIn();
    });
    $('.list-sp-head #ar2 i:first-child').click(function(){
        $('#expan2').fadeIn();
        $('.list-sp-head #ar2 i:last-child').fadeIn();
        $('.list-sp-head #ar2 i:first-child').hide();
    });
    $('.list-sp-head #ar2 i:last-child').click(function(){
        $('#expan2').hide();
        $('.list-sp-head #ar2 i:last-child').hide();
        $('.list-sp-head #ar2 i:first-child').fadeIn();
    });
    $('.list-sp-head #ar3 i:first-child').click(function(){
        $('#expan3').fadeIn();
        $('.list-sp-head #ar3 i:last-child').fadeIn();
        $('.list-sp-head #ar3 i:first-child').hide();
    });
    $('.list-sp-head #ar3 i:last-child').click(function(){
        $('#expan3').hide();
        $('.list-sp-head #ar3 i:last-child').hide();
        $('.list-sp-head #ar3 i:first-child').fadeIn();
    });
    $('.list-sp-head #ar4 i:first-child').click(function(){
        $('#expan4').fadeIn();
        $('.list-sp-head #ar4 i:last-child').fadeIn();
        $('.list-sp-head #ar4 i:first-child').hide();
    });
    $('.list-sp-head #ar4 i:last-child').click(function(){
        $('#expan4').hide();
        $('.list-sp-head #ar4 i:last-child').hide();
        $('.list-sp-head #ar4 i:first-child').fadeIn();
    });
});