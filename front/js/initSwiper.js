function initSwiper(classes,slidesPerView = '',spaceBetween = 16,navigation = false,pagination = true,name_pagination = ''){
    new Swiper(classes, {
        slidesPerView: slidesPerView,
        spaceBetween: 16,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

        pagination: {
            el: ".swiper-pagination-question-answer",
            clickable: true,
        },
    });
}