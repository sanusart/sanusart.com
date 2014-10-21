$(function () {

    // Instant click
    InstantClick.init('mousedown');

    $('code').each(function (i, block) {
        hljs.highlightBlock(block);
    });

    $('body').on('click', '.totop', function(e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $(e.currentTarget.hash).offset().top
        }, 1000);
    });

    // mobile nav
    $('nav ul').addClass('mobile');
    $('nav ul.mobile').prepend('<li><a class="nav-link burger" href="#"><i class="fa fa-reorder"></i></a></li>');
    $('nav ul.mobile li a:not(.burger)').hide();

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

(function() {
    var ga = document.createElement('script');
    ga.type = 'text/javascript';
    ga.async = true;
    ga.src = '//cdnjs.cloudflare.com/ajax/libs/gas/1.10.1/gas.min.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(ga, s);
})();