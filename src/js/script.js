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
        $('#slide nav').replaceWith(navList);

        // mobile nav
        $('header nav').html('<a class="nav-link burger" href="#"><i class="fa fa-reorder"></i></a>');

        $('header').on('click', '.burger', function (ev) {
            ev.preventDefault();
            ev.stopImmediatePropagation();
            $('#slide').animate({
                left: '0px'
            }, 'fast');
            $('body').animate({
                marginLeft: '200px'
            }, 'fast');
        });
        $('#slide').on('click', '.close', function () {
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

    if ($('body').hasClass('page--portfolio')) {

        var repoMap;
        var count = 0;

        $.get('https://api.github.com/users/sanusart/repos', function (res) {
            repoMap = res.map(function (obj) {
                return {
                    "name": obj.name,
                    "description": obj.description,
                    "html_url": obj.html_url,
                    "forks": obj.forks,
                    "stars": obj.stargazers_count,
                    "isFork": obj.fork
                };
            }).sort(function (a, b) {
                return b.stars - a.stars;
            }).forEach(function (repo) {
                if (!repo.isFork) {
                    $('.page--portfolio').find('div#repos > p b').text(count += 1);
                    $('#repos').append('<p><a class="post-list-item" href="' + repo.html_url + '"><i class="fa fa-angle-right"></i> <span> ' + repo.name + '</span><cite>' + repo.description + '</cite><tags><i class="fa fa-star"></i> ' + repo.stars + ' | <i class="fa fa-code-fork"></i> ' + repo.forks + '</tags></a></p>');
                }
            });
        });
    }
});

function isMobile() {
    return (Modernizr.mq('only all and (max-width: 600px)')) ? true : false;
}