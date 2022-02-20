$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scroll >500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    //slid up code
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

    //toggle menu
    $('span').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn span').toggleClass("open");

    });

    //typing animation script
    var typed = new Typed(".typing",{
        strings: ["Student", "Developer", "Entrepreneur", "Philanthropist"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-2",{
        strings: ["Student", "Developer", "Entrepreneur", "Philanthropist"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    //owl carousel scriptt
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

