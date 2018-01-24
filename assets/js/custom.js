(function($) {
    'use strict';
    $(function() {
        var iOS = (navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false),
            Android = (navigator.userAgent.match(/(Android)/g) ? true : false),
            BlackBerry = (navigator.userAgent.match(/(BlackBerry)/g) ? true : false),
            Windows = (navigator.userAgent.match(/(IEMobile)/g) ? true : false),
            isTouchDevice = 'ontouchstart' in document.documentElement,

            navbar = $('#navbarSettings'),
            navbarIsFixed = navbar.hasClass('navbar-fixed-top'),
            topOffset,
            navToggle = $('.navbar-toggle'),
            navOpen = 'navbar-open';

        function custom(action) {

            /*  
             * ===================================
             * Back To Top
             * ===================================
             * */

            var offset = 220,
                duration = 500,
                backToTop = $('.back-to-top');
            $(window).scroll(function() {
                if ($(this).scrollTop() > offset) {
                    backToTop.fadeIn(duration);
                } else {
                    backToTop.fadeOut(duration);
                }
            });

            backToTop.on(action, function(event) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: 0
                }, duration);
                return false;
            });


            /*
             * ===================================
             * Smooth scroll - from href to id
             * ===================================
             * */

            // Must add the class 'scroll' to the link - <a href='#someID' class='scroll'>
            $('a.scroll').on(action, function() {
                if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    if (target.length) {
                        $('html,body').animate({
                            scrollTop: target.offset().top
                        }, 1000);
                        return false;
                    }
                }
            });


            /*
             * ===================================
             * Load latest news by AJAX
             * ===================================
             * */
            var news1, news2;

            $.get('assets/ajax/news/news1.html', function(data) {
                news1 = data;
            });
            $.get('assets/ajax/news/news2.html', function(data) {
                news2 = data;
            });

            //load latest news
            $('#loadNews').one(action, function() {
                $('#newsFeed').append(news1, news2);
                $('.box-load').addClass('animated').addClass('easeFade');
                $('.md-trigger').modalEffects();
                $('#removeAfterLoading').remove();
            });


            /*
             * ===================================
             * Show captcha after that page is loaded
             * ===================================
             * */

            $(window).load(function() {
                document.getElementById('vimage').src = 'assets/php/EasyForm/image.php?' + Math.random();
                return false;
            });


            /*---------------------------------
             * Transparent navigation 
            ---------------------------------*/

            if (isTouchDevice === true) {
                topOffset = 0;
            }
            if (isTouchDevice === false) {
                topOffset = 40;
            }

            $(window).scroll(function() {
                if ($(window).scrollTop() > topOffset) {
                    navbar.removeClass('navbar-height').css('box-shadow', '0 2px 5px rgba(0, 0, 0, 0.2)');
                } else {
                    navbar.addClass('navbar-height').css('box-shadow', 'none');
                }
            });

            $('.nav').find('.dropdown').on('click', function() {
                $('.navbar-collapse').removeClass('in');
            });

            //When you open the menu on mobile devices, the icon will be changed
            if (navToggle.hasClass(navOpen)) {
                $('.navbar-open').on(action, function() {
                    $(this).removeClass(navOpen);
                });
            } else {
                navToggle.on('click', function() {
                    navToggle.toggleClass(navOpen);
                });
            }

            $('.navbar-nav').find('.dropdown').on(action, function() {
                navToggle.removeClass(navOpen);
            });
        }

        //set 'touch' for touch devices
        if (isTouchDevice === true) {
            custom('touchstart');
        }

        //set action fot non-touch devices
        if (isTouchDevice === false) {
            custom('click');
        }
    });
})(jQuery);
