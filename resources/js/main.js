$(document).ready(function () {

    // (Plugin) Typing effect
    new TypeIt("#intro > h1", {
        waitUntilVisible: true,
        speed: 70,
        cursor: false,
    }).go();

    // (Plugin) Fade effect
    $(window).fadeThis();

    // (Timer) Change - Review card
    var idx = 0;
    setInterval(time, 1500);

    function time() {
        var card = $('.card');
        card.removeClass('on');
        card.eq(idx).addClass('on');
        idx++;
        if (idx >= card.length) idx = 0;
    }

    // (Scroll) Change - nav
    var nav = $('nav');
    var point = $('.overview');
    var pageTop = point.offset().top;

    $(window).resize(function () {
        pageTop = point.offset().top;
    });

    $(window).scroll(function () {
        var scrolled = $(window).scrollTop() >= pageTop;
        nav.toggleClass('down', scrolled);
    });
});