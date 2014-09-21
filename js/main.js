$(function () {

    // Instant click
    InstantClick.init('mousedown');

    $('code').each(function (i, block) {
        hljs.highlightBlock(block);
    });


});

