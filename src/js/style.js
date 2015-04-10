$(function () {

    $('code').each(function (i, block) {
        hljs.highlightBlock(block);
    });

    $('body').on('click', '.totop', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $(e.currentTarget.hash).offset().top
        }, 1000);
    });

    if (isMobile() === true) {

        // Instant click
        InstantClick.init('touchstart');

        var navList = $('header nav ul');
        $('#slide nav').replaceWith( navList );

        // mobile nav
        $('header nav').html('<a class="nav-link burger" href="#"><i class="fa fa-reorder"></i></a>');

        $('header').on('click','.burger',function(ev) {
            ev.preventDefault();
            ev.stopImmediatePropagation();
            $('#slide').animate({
                left: '0px'
            }, 'fast');
            $('body').animate({
                marginLeft: '200px'
            }, 'fast');
        });
        $('#slide').on('click','.close',function() {
            $('#slide').animate({
                left: '-200px'
            }, 'fast');
            $('body').animate({
                marginLeft: '0'
            }, 'fast');
        });

        $('.page--home h1').html('<i class="fa bounce fa-chevron-down"></i>');

    } else {

        // Instant click
        //InstantClick.init('mousedown');

        $('nav > ul').show();
    }

    $('.hljs').wrap('<span class="code-block"></span>');

});

function isMobile() {
    return (Modernizr.mq('only all and (max-width: 600px)')) ? true : false;
}