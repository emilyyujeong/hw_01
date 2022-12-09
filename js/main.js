$(function () {

    $('.mainSlide').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        pauseOnFocus: false,
    });



    $('.main_pro_slide').slick({
        arrows: false,

        slidesToShow: 3,
    });


    $('.mainProduct .arrows .prev').on('click', function () {
        $('.main_pro_slide').slick('slickPrev')
    })

    $('.mainProduct .arrows .next').on('click', function () {
        $('.main_pro_slide').slick('slickNext')
    })


    var barWidth = $('.bar').width();
    console.log(barWidth)

    $('.main_pro_slide').on('init afterChange', function (e, s, c) {
        var bb = barWidth / s.slideCount;
        $('.bar span').css({ width: bb })
        $('.bar span').css({ width: bb * (c + 1) });


    });



});

