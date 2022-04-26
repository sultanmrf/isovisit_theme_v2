$(document).ready(function (){
    $(document).on('click','.btn-patients',function (){
        let val_aria_expanded = $(this).attr("aria-expanded");
        if(val_aria_expanded == 'true'){
            $(this).parent().removeClass('bg-transparent').addClass('active_menu');
            $(this).removeClass('unactive_menu');
            $(this).find('i').addClass('fa-chevron-up').removeClass('fa-chevron-down');
        }else{
            $(this).parent().removeClass('active_menu').addClass(['bg-transparent','iso-color-blur-dark']);
            $(this).addClass('unactive_menu');
            $(this).find('i').addClass('fa-chevron-down').removeClass('fa-chevron-up');
        }
    })

    /* swiper main page */
    new Swiper(".swiper-question-answer", {
        slidesPerView: 1,
        spaceBetween: 8,
        pagination: {
            el: ".swiper-pagination-question-answer",
            clickable: true,
        },
    });

    new Swiper(".swiper-articles", {
        slidesPerView: 1,
        spaceBetween: 8,
        pagination: {
            el: ".swiper-pagination-article",
            clickable: true,
        },
    });

    new Swiper(".swiper-comments-users,.swiper-services,.swiper-doctors,.swiper-specialty", {
        slidesPerView: "auto",
        spaceBetween: 16,
    });


    new Swiper(".swiper-medicines", {
        slidesPerView:"auto",
        spaceBetween: 16,
        pagination: {
            el: ".swiper-pagination-medicines",
            clickable: true,
        },
    });

    new Swiper(".swiper-certificates", {
        slidesPerView:2,
        spaceBetween: 10,
        pagination: {
            el: ".swiper-pagination-certificates",
            clickable: true,
        },
    });


    /* section communication-iso */
    $(".communication-iso img").click(function (){
        let val_aria_expanded = $(this).attr('aria-expanded');
        if(val_aria_expanded == 'true'){
            $(".dropdown-menu-communication li").css('opacity','0');
            $(this).attr('aria-expanded','false');
            $(this).attr('src','./images/icons/icon-support-light.png')
                .addClass('rotate-0deg')
                .removeClass('rotate-180deg');

        }else{
            $(".dropdown-menu-communication li").css('opacity','1');
            $(this).attr('aria-expanded','true');
            $(this).attr('src','./images/icons/close.png')
                .addClass('rotate-180deg')
                .removeClass('rotate-0deg');
        }
    })

    /* section scroll top */

    $(window).scroll(function(){
        var scrolled_val = $(this).scrollTop();
        if(scrolled_val > 1500){
            $(".scroll-top").addClass('d-flex');
        }else{
            $(".scroll-top").removeClass('d-flex');
        }
    });

    $(document).on('click','.scroll-top',function (){
        $('html').animate({scrollTop : 0},200);
    });


});