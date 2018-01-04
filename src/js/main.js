var $ = require('jquery')(window);
    global.jQuery = require("jquery");
var aminsition = require('animsition');
    // Rellax = require('rellax');
    // parollerJs = require('paroller.js');

jQuery(document).ready(function($) {

    // smooth scroll homepage nav
    $('.js-link--nav').on('click', function(e){
        e.preventDefault();
        var target = this.hash;
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000);
    });

    $('.animsition').animsition({
        inClass: 'fade-in-up-sm',
        outClass: 'fade-out-down-sm',
        inDuration: 600,
        outDuration: 600,
        linkElement: '.animsition-link',
        // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
        loading: true,
        loadingParentElement: 'html', //animsition wrapper element
        loadingClass: 'animsition-loading',
        // loadingInner: '', // e.g '<img src="loading.svg" />'
        // timeout: false,
        // timeoutCountdown: 5000,
        onLoadEvent: true,
        browser: [ 'animation-duration', '-webkit-animation-duration'],
        // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
        // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
        overlay : false,
        // overlayClass : 'animsition-overlay-slide',
        // overlayParentElement : 'body',
        // transition: function(url){ window.location.href = url; }
    });


    // var rellax = new Rellax('.rellax', {
    //     // speed: -2,
    //     center: true,
    //     round: true,
    // });

    // $('.project__image.project__image--single').each( function() {
    //     var img = $(this).children();
    //     var imgHeight = img.height();
    //     console.log(imgHeight);
    //     img.parent().height(imgHeight);
    //     img.css('marginTop', - imgHeight / 2);
    // });

    //$(window).paroller();

    function scrollAction () {
        $('.will-fade-in').each(function(i) {
            var topOfItem = $(this).offset().top - 100,
                bottomOfItem = $(this).offset().top + 100 + $(this).outerHeight(),
                windowoff = $(window).scrollTop(),
                windowOffset = $(window).scrollTop() + $(window).height();
            if ((windowOffset > topOfItem && windowoff < topOfItem) || (windowOffset > bottomOfItem && windowoff < bottomOfItem) || topOfItem < windowoff && bottomOfItem > windowOffset) {
                $(this).css({
                    'opacity': 1,
                    'transform': 'translate3d(0,0,0)'
                });
            } else {
                $(this).attr('style', '');
            }
        });
    }

    scrollAction();

    $(window).scroll(scrollAction);
});


