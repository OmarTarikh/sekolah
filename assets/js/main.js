$(document).ready(function(){
    
    $('#slider-hero').owlCarousel({
        loop: true,
        nav: true,
        items: 1,
        navText: [
            "<i class='fas fa-angle-left'><i>",
            "<i class='fas fa-angle-right'><i>"
        ],
        navContainer: "#slider-hero-nav",
    });

    $('#tenaga-pendidik-slider').owlCarousel({
        loop: true,
        nav: true,
        items: 5,
        dots: false,
        margin: 30,
        navText: [
            "<i class='fas fa-angle-left'><i>",
            "<i class='fas fa-angle-right'><i>"
        ],
        navContainer: "#slider-tools-1",
    });

    $('#alumni-slider').owlCarousel({
        loop: true,
        nav: true,
        items: 2,
        dots: false,
        margin: 30,
        navText: [
            "<i class='fas fa-angle-left'><i>",
            "<i class='fas fa-angle-right'><i>"
        ],
        navContainer: "#slider-tools-2",
    });

    $('#galeri-slider').owlCarousel({
        loop: true,
        nav: true,
        items: 3,
        dots: false,
        margin: 30,
        navText: [
            "<i class='fas fa-angle-left'><i>",
            "<i class='fas fa-angle-right'><i>"
        ],
        navContainer: "#slider-tools-3",
    });

    $('#galeri-slider-2').owlCarousel({
        loop: true,
        nav: true,
        items: 3,
        dots: false,
        margin: 30,
        navText: [
            "<i class='fas fa-angle-left'><i>",
            "<i class='fas fa-angle-right'><i>"
        ],
        navContainer: "#slider-tools-4",
    });

    $('#galeri-slider-3').owlCarousel({
        loop: true,
        nav: true,
        items: 2,
        dots: false,
        margin: 40,
        navText: [
            "<i class='fas fa-angle-left'><i>",
            "<i class='fas fa-angle-right'><i>"
        ],
        navContainer: "#slider-tools-5",
    });
});
