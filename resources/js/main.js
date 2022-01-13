$(document).ready(function () {
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
    var navLogo = $('nav .logo');
    var point = $('.overview');
    var pageTop = point.offset().top;

    $(window).resize(function () {
        pageTop = point.offset().top;
    });

    $(window).scroll(function () {
        var scrolled = $(window).scrollTop() >= pageTop;
        nav.toggleClass('down', scrolled);
        navLogo.toggleClass('down-logo', scrolled);
        // $(navLogo).attr('src', 'resources/img/logo-dark.png');
    });

});