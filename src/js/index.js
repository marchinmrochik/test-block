import $ from 'jquery';
window.$ = window.jQuery = $;
import 'slick-carousel';

$( document ).ready(function() {
    const tabLink = $('.tab__link'), tabContent = $('.tab__content');

    tabLink.on('click', function (e) {
        e.preventDefault();
        const _this = $(this);
        const idContent = _this.attr('href');
        if(!_this.hasClass('.tab__link_active')) {
            tabLink.removeClass('tab__link_active');
            _this.addClass('tab__link_active');
            tabContent.hide();
            $(idContent).show();
        }
    });

    $('.slider.slider_room').slick({

    })
});
