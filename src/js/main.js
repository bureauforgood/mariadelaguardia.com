var jquery = require('jquery'),
    aminsition = require('animsition');

(function($) {

    $('.js-link--nav').on('click', function(e){
        e.preventDefault();
        var target = this.hash;
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000);
    });

})(jquery)

