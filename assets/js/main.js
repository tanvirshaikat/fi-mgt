// Auto HOver

$('ul.nav li.dropdown').hover(function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});

$( document ).ready(function() {

    "use strict";
    var VerticalSlider = /** @class */ (function () {
    function VerticalSlider(selector) {
    $("#Vslider", selector).tinycarousel({
    axis: "y",
    infinite: true
    });
    }
    return VerticalSlider;
    }());
    new VerticalSlider();
    
      $(".activities-slider").owlCarousel({
        items: 8,
        loop: true,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: false,
        rewind: true,
        autoplay: false,
        margin: 12,
        nav: true,
        dots:false,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        responsiveClass:true,
        responsive:{
            0:{
                items:3,
                nav:true
            },
            746:{
                items:5,
                nav:true
            },
            1310:{
                items:6,
                nav:true
            },
            1510:{
                items:8,
                nav:true,
            }
        }
      });

      $(".slider2").owlCarousel({
        items: 1,
        loop: true,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        rewind: true,
        autoplay: true,
        margin: 12,
        nav: false,
        dots:true,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut'
      });

      $(".galleryslider").owlCarousel({
        items: 3,
        loop: true,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        rewind: true,
        autoplay: false,
        margin: 10,
        nav: true,
        dots:true
      });

    });

    $(".galleryslider").on('mousewheel', '.owl-stage', function (e) {
        if (e.deltaY>0) {
            $(".galleryslider").trigger('next.owl');
        } else {
            $(".galleryslider").trigger('prev.owl');
        }
        e.preventDefault();
    });



    // fancybox
    $(document).ready(function() {
        $(".fancybox").fancybox({
            'showNavArrows': true,
            'titleShow':  true
        });
    });



    // Filter Category
    $("#app-flters li").click(function() {
        $("#app-flters li").removeClass('filter-active');
        $(this).addClass('filter-active');

        var selectedFilter = $(this).data("filter");
        $("#app-wrapper").fadeTo(100, 0);

        $(".app-item").fadeOut().css('transform', 'scale(0)');

        setTimeout(function() {
            $(selectedFilter).fadeIn(100).css('transform', 'scale(1)');
            $("#app-wrapper").fadeTo(300, 1);
        }, 300);
    });



