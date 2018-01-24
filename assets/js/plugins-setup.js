(function($) {
    'use strict';

    $(function() {

        var iOS = (navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false),
            Android = (navigator.userAgent.match(/(Android)/g) ? true : false),
            BlackBerry = (navigator.userAgent.match(/(BlackBerry)/g) ? true : false),
            Windows = (navigator.userAgent.match(/(IEMobile)/g) ? true : false),
            isTouchDevice = 'ontouchstart' in document.documentElement,
            isIE = /*@cc_on!@*/ false || !!document.documentMode, // At least IE6
            isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0,
            // At least Safari 3+: "[object HTMLElementConstructor]"
            isFirefox = typeof InstallTrigger !== 'undefined'; // Firefox 1.0+


        /*
         * ===================================
         * STELLAR - PARALLAX PLUGIN
         * ===================================
         * */
        function bgStellar() {
            var stellarImg = $('.bg-img').find('img');
            //parallax background is turned off iOS, Android, BlackBerry, Windows Phone and for Firefox and Safari the plugin doesn't work properly
            if (iOS || Android || BlackBerry || Windows || isFirefox || isSafari) {
                stellarImg.attr("data-stellar-ratio", 1);
            } else {
                $.stellar({
                    horizontalScrolling: false,
                    responsive: true,
                    hideDistantElements: false,
                    verticalOffset: 0,
                    horizontalOffset: 0
                });
            }
        }
        bgStellar();
        $(window).load(bgStellar);
        // $(window).on('scroll', bgStellar);


        /*
         * ===================================
         * Revolution slider
         * ===================================
         * */
        function rSlider() {
            $('html').removeClass('hideOveflow');
            $('.tp-banner').revolution({
                delay: 11000,
                startheight: 700,
                startwidth: 1170,
                hideThumbs: 10,
                navigationType: "none",
                navigationStyle: "preview4",
                touchenabled: "on",
                onHoverStop: "on",
                keyboardNavigation: "on",
                lazyLoad: "on",
                shadow: 0,
                fullWidth: "on",
                fullScreen: "off",
                spinner: "spinner4",
                autoHeight: "off",
                forceFullWidth: "on",
                hideArrowsOnMobile: "on"
            });
        }

        setTimeout(rSlider, 1351);

        $(window).on('resize', rSlider);


        /*
         * ===================================
         * WOW animations
         * ===================================
         * */
        var wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 100,
            mobile: false,
            live: true
        });
        wow.init();

        /*
         * ===================================
         * Animations
         * ===================================
         * */
        $(window).scroll(function() {
            $('.animation').each(function() {
                var imagePos = $(this).offset().top,
                    topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow + 400) {
                    $(this).addClass("slideUp");
                }
            });
        });


        /*
         * ===================================
         * Dialog Effects
         * ===================================
         * */

        (function() {
            [].slice.call(document.querySelectorAll('[data-dialog]')).forEach(function(trigger) {
                var dlg = new DialogFx(document.getElementById(trigger.getAttribute('data-dialog')));
                trigger.addEventListener('click', dlg.toggle.bind(dlg));
            });
        })();

        /* if dialog window opened, navbar will be hidden */
        var navbar = $('.navbar'),
            html = $("html");
        $('.btn.trigger').on('click', function() {
            navbar.addClass('navbar-hide');
            $('html').addClass('hideOveflow');
        });

        $('.btn.action').on('click', function() {
            navbar.removeClass('navbar-hide');
            $('html').removeClass('hideOveflow');
        });

        $('.dialog__overlay').on('click', function() {
            navbar.removeClass('navbar-hide');
            $('html').removeClass('hideOveflow');
        });


        /*
         * ===================================
         * One Page Navigation
         * ===================================
         * */
        $('#nav').onePageNav({
            currentClass: 'active',
            changeHash: false,
            scrollSpeed: 1100,
            scrollThreshold: 0.5,
            easing: 'easeInOutCubic'
        });


        /*
         * ===================================
         * Modal Effects
         * ===================================
         * */

        $('.md-trigger').modalEffects({
            overlaySelector: '.md-overlay',
            closeSelector: '.md-close',
            classAddAfterOpen: 'md-show',
            modalAttr: 'data-modal',
            perspectiveClass: 'md-perspective',
            perspectiveSetClass: 'md-setperspective'
        });

        $(document).on('click', '.md-trigger', function(event) {
            navbar.addClass('navbar-hide');
            $('html').addClass('hideOveflow');
        });
        $(document).on('click', '.md-close', function(event) {
            navbar.removeClass('navbar-hide');
            $('html').removeClass('hideOveflow');
        });


        /*
         * ===================================
         * Owl Carousel
         * ===================================
         * */

        //Skills slider
        $("#skillsSlider").owlCarousel({
            autoPlay: 4500, //Set AutoPlay to 3 seconds
            lazyLoad: true,
            items: 4
        });

        //Our team slider
        $("#teamSlider").owlCarousel({
            autoPlay: false,
            lazyLoad: true,
            items: 4,
            stopOnHover: true,
            itemsDesktop: [1200, 3],
            itemsDesktopSmall: [992, 2],
            itemsTablet: [768, 2],
            itemsMobile: [650, 1]
        });

        //Testimonials SLider
        $("#testimonialsSlider").owlCarousel({
            lazyLoad: true,
            autoPlay: false,
            items: 2,
            itemsDesktop: [1200, 2],
            itemsDesktopSmall: [992, 1],
            itemsTablet: [768, 1],
            itemsMobile: [480, 1]
        });

        //Latest tweets
        $("#twitterSlider").owlCarousel({
            autoPlay: 5000,
            lazyLoad: true,
            items: 1,
            stopOnHover: true,
            itemsDesktop: [1920, 1],
            itemsDesktopSmall: [992, 1],
            itemsTablet: [768, 1],
            itemsMobile: [480, 1]
        });


        /*
         * ===================================
         * Knobs - the our skills
         * ===================================
         * */

        $(".lbKnob").knob({
            min: 0,
            fgColor: "#26C6DA", // SET YOUR COLOR
            max: 100,
            step: 5,
            angleOffset: 0,
            angleArc: 360,
            stopper: true,
            readOnly: true,
            cursor: false,
            lineCap: 'none',
            thickness: '0.03',
            width: 150,
            height: 150,
            displayInput: true,
            displayPrevious: true,
            inputColor: '#999999',
            font: 'Lato',
            fontWeight: 'normal',
            bgColor: '#ddd',
            draw: function() {
                if (this.$.data('skin') === 'tron') {
                    var a = this.angle(this.cv), // Angle
                        sa = this.startAngle, // Previous start angle
                        sat = this.startAngle, // Start angle
                        ea, // Previous end angle
                        eat = sat + a, // End angle
                        r = 1;
                    this.g.lineWidth = this.lineWidth;
                    this.o.cursor && (sat = eat - 0.3) && (eat = eat + 0.3);
                    if (this.o.displayPrevious) {
                        ea = this.startAngle + this.angle(this.v);
                        this.o.cursor && (sa = ea - 0.3) && (ea = ea + 0.3);
                        this.g.beginPath();
                        this.g.strokeStyle = this.pColor;
                        this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sa, ea, false);
                        this.g.stroke();
                    }
                    this.g.beginPath();
                    this.g.strokeStyle = r ? this.o.fgColor : this.fgColor;
                    this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sat, eat, false);
                    this.g.stroke();
                    this.g.lineWidth = 2;
                    this.g.beginPath();
                    this.g.strokeStyle = this.o.fgColor;
                    this.g.arc(this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
                    this.g.stroke();
                    return false;
                }
            }
        });
    });

})(jQuery);
