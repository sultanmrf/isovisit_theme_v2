$(document).ready(function (){


    /* swiper main page */
    new Swiper(".swiper-question-answer", {
        slidesPerView: 1,
        spaceBetween: 8,
        pagination: {
            el: ".swiper-pagination-question-answer",
            clickable: true,
        },
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

    if (window.matchMedia("(min-width: 992px)").matches) {
        new Swiper(".swiper-doctors,.swiper-specialty,.swiper-services,.swiper-comments-users", {
            slidesPerView: "auto",
            spaceBetween: 16,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });

        new Swiper(".swiper-question-answer", {
            slidesPerView: 4,
            spaceBetween: 16,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });

        new Swiper(".swiper-articles", {
            slidesPerView: 3,
            spaceBetween: 16,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });

        new Swiper(".swiper-medicines", {
            slidesPerView:"auto",
            spaceBetween: 16,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });


        $('.svg-doctors').attr('viewBox','-20 0 500 397');
        $('.svg-articles').attr('viewBox','25 0 450 400');
        $('.svg-comment-users').attr('viewBox','-20 15 500 400');
        $('.svg-medicines').attr('viewBox','0 100 500 317');

    } else if(window.matchMedia("(min-width: 576px) and (max-width: 992px)").matches){
        new Swiper(".swiper-comments-users,.swiper-doctors,.swiper-specialty,.swiper-services", {
            slidesPerView: "auto",
            spaceBetween: 16,
        });
        new Swiper(".swiper-question-answer", {
            slidesPerView: 1,
            spaceBetween: 16,
            pagination: {
                el: ".swiper-pagination-question-answer",
                clickable: true,
            },
        });

        new Swiper(".swiper-articles", {
            slidesPerView: 2,
            spaceBetween: 16,
            pagination: {
                el: ".swiper-pagination-article",
                clickable: true,
            },
        });


        $('.svg-doctors').attr('viewBox','-20 18 500 397');
        $('.svg-articles').attr('viewBox','-50 134 500 400');
        $('.svg-comment-users').attr('viewBox','-20 15 500 400');
        $('.svg-medicines').attr('viewBox','-40 163 550 317');

    }else if (window.matchMedia("(max-width: 576px)").matches){
        new Swiper(".swiper-articles", {
            slidesPerView: 1,
            spaceBetween: 16,
            pagination: {
                el: ".swiper-pagination-article",
                clickable: true,
            },
        });
        new Swiper(".swiper-comments-users,.swiper-doctors,.swiper-specialty,.swiper-services", {
            slidesPerView: "auto",
            spaceBetween: 16,
        });
        new Swiper(".swiper-question-answer", {
            slidesPerView: 1,
            spaceBetween: 16,
            pagination: {
                el: ".swiper-pagination-question-answer",
                clickable: true,
            },
        });


        $('.svg-doctors').attr('viewBox','-20 18 500 397');
        $('.svg-articles').attr('viewBox','-50 134 500 400');
        $('.svg-comment-users').attr('viewBox','-20 15 500 400');
        $('.svg-medicines').attr('viewBox','-40 163 550 317');
    }

    // function mediaScreenSwiper(size_media,...classes,{slidesPerView,spaceBetween}){
    //     if (window.matchMedia(size_media).matches){
    //         new Swiper(classes, {
    //             slidesPerView: 1,
    //             spaceBetween: 16,
    //             pagination: {
    //                 el: ".swiper-pagination-question-answer",
    //                 clickable: true,
    //             },
    //         });
    //     }
    // }


});
