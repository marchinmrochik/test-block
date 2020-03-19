import $ from 'jquery';
window.$ = window.jQuery = $;
import 'slick-carousel';

$( document ).ready(function() {
    const tabLink = $('.tab__link'), tabContent = $('.tab__content'), sliderRoom = $('.slider_room'),
    currentSlideIndex = $('.slide_current'), numSlide = $('.slide_all');

    sliderRoom.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        if(!slick.$dots){
            return;
        }
        let i = (currentSlide ? currentSlide : 0) + 1;
        currentSlideIndex.text(`0${i}`);
        numSlide.text(`0${slick.$dots[0].children.length}`);
    });

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

    sliderRoom.slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        dots: true,
        swipe: false
    });

    $('.slider_preview').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
    });
});
