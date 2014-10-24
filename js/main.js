$(function () {

    // Instant click
    InstantClick.init('mousedown');

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

        var navList = $('header nav ul');

        $('#slide nav').replaceWith( navList );

        // mobile nav
        $('nav').html('<a class="nav-link burger" href="#"><i class="fa fa-reorder"></i></a>');

        $('header').on('click','.burger',function() {
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

    } else {
        $('nav > ul').show();
    }

});

var _gas = _gas || [];
_gas.push(['_setAccount', 'UA-17599340-1']);
_gas.push(['_setDomainName', '.sanusart.com']);
_gas.push(['_trackPageview']);
_gas.push(['_gasTrackForms']);
_gas.push(['_gasTrackOutboundLinks']);
_gas.push(['_gasTrackMaxScroll']);
_gas.push(['_gasTrackDownloads']);
_gas.push(['_gasTrackYoutube', {force: true}]);
_gas.push(['_gasTrackVimeo', {force: true}]);
_gas.push(['_gasTrackMailto']);

(function () {
    var ga = document.createElement('script');
    ga.type = 'text/javascript';
    ga.async = true;
    ga.src = '//cdnjs.cloudflare.com/ajax/libs/gas/1.10.1/gas.min.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(ga, s);
})();

function isMobile() {
    return (Modernizr.mq('only all and (max-width: 600px)')) ? true : false;
}