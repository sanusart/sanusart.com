$(function(){
    $('nav ul li').hover(function(){
        $(this).find('ul').toggle();
    });

    InstantClick.init();

});
