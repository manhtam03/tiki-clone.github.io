$(document).ready(function(){
    $('.sp-main-more').hide();
    $('.span-sp-main-btn').click(function(){
        $('.span-sp-main-btn').hide();
        $('.sp-main-more').fadeIn();
        con = document.querySelector('.container');
        con.style.height = '4900px';
    });
})

