(function ($) {
	"use strict";

    jQuery(document).ready(function($){

        $(".homepage-slider").owlCarousel({
            items:1,
            loop:true,
            nav:true,
            dots:false,
            navText: ["<i class='fa fa-long-arrow-left'>","<i class='fa fa-long-arrow-right'>"],
            autoplay:true,
        });

        $(".homepage-slider").on("translate.owl.carousel", function() {
            $(".homepage-slider h2").removeClass("animated fadeInUp").css("opacity", "0");
            $(".homepage-slider .slide-video").removeClass("animated zoomIn").css("opacity", "0");
            $(".homepage-slider .boxed-btn").removeClass("animated fadeInLeft").css("opacity", "0");
        });

        $(".homepage-slider").on("translated.owl.carousel", function() {
            $(".homepage-slider h2").addClass("animated fadeInUp").css("opacity", "1");
            $(".homepage-slider .slide-video").addClass("animated zoomIn").css("opacity", "1");
            $(".homepage-slider .boxed-btn").addClass("animated fadeInLeft").css("opacity", "1");
        });
        
        $(".slide-video").modalVideo();
        $('.slide-video').on('click', function(){
            return false;
        });

        $(".team-list").owlCarousel({
            margin:30,
            loop:true,
            nav:false,
            dots:true,
            autoplay:true,
            responsive:{
                    0:{
                        items:1,
                    },
                    600:{
                        items:2,
                    },
                    1000:{
                        items:3,
                    }
                }
        });

        $(".testimonial-list").owlCarousel({
            margin:30,
            loop:true,
            nav:false,
            dots:true,
            autoplay:true,

            responsive:{
                    0:{
                        items:1,
                    },
                    600:{
                        items:2,
                    },
                    1000:{
                        items:3,
                    }
                }
        });

        $(".brand-list").owlCarousel({
            margin:30,
            loop:true,
            nav:false,
            dots:false,
            autoplay:true,

            responsive:{
                    0:{
                        items:1,
                    },
                    600:{
                        items:3,
                    },
                    1000:{
                        items:5,
                    }
                }
        });

        
        $("#webdesign-bar").circleProgress({
            value: 0.90,
            size: 270,
            startAngle: -Math.PI / 6 * 3,
            emptyFill: '#fff',
            fill: '#0ABAC0',
            thickness: 3,
        }).on('circle-animation-progress', function(event, progress) {
          $(this).find('.count-number').html(Math.round(90 * progress) + '<i>%</i>');
        });

        $("#grphicdesign-bar").circleProgress({
            value: 0.95,
            size: 270,
            startAngle: -Math.PI / 9 * 2,
            emptyFill: '#fff',
            fill: '#0ABAC0',
            thickness: 3,
        }).on('circle-animation-progress', function(event, progress) {
          $(this).find('.count-number').html(Math.round(95 * progress) + '<i>%</i>');
        });

        $("#digital-marketing-bar").circleProgress({
            value: 0.84,
            size: 270,
            startAngle: -Math.PI / 6 * 3,
            emptyFill: '#fff',
            fill: '#0ABAC0',
            thickness: 3,
        }).on('circle-animation-progress', function(event, progress) {
          $(this).find('.count-number').html(Math.round(84 * progress) + '<i>%</i>');
        });

        $('.portfolio-filter li').on('click',function(){
            $('.portfolio-filter li').removeClass('active');
            $(this).addClass('active');

            var filterValue = $(this).attr('data-filter');
            $(".portfolio-list").isotope({
             filter: filterValue,
            masonry: {
                columnWidth: '.col-md-3',
                horizontalOrder: false,
            }
        });

        });

        $(".portfolio-list").isotope({
            layoutMode: 'masonry',
            masonry: {
                columnWidth: '.col-md-3',
                horizontalOrder: false,
            }
        });

        $('#menu').slicknav({
            label:'',
            prependTo:'.mobile-menu',
            allowParentLinks: true,
        });

    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	