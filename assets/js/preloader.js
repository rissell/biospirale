(function($) {
    'use strict';

    //set these values as soon as possible
    $('#preloader').css({
        'max-width': window.screen.width,
        'max-height': window.screen.height
    });

    $(window).load(function() {
        //start always from the top
        $('html, body').animate({
            scrollTop: 0
        }, 0);

        //show welcome message
        $(".spinner").fadeOut(250);
        $("h1.welcome").delay(250).fadeIn().find("span").addClass("text-primary");

        //hide preloader and show main wrap
        setTimeout(function() {
            $("h1.welcome").fadeOut(150);
            $("html").removeClass('hideOveflow');
            $("#preloader").fadeOut(250);
            $("#page-wrap").css('visibility', 'visible');
        }, 1350);
    });

})(jQuery);
