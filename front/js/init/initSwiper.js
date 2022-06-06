function initSwiper(target,count_slides_view = '',spaceBetween = 16,navigation = false,pagination = true,name_pagination = ''){
    let navigation_option = {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }

    let pagination_option = {
        el: name_pagination,
        clickable: true,
    }

    if(pagination === false)
        pagination_option = false;

    if(navigation === false)
        navigation_option = false;

    new Swiper(target, {
        slidesPerView: count_slides_view,
        spaceBetween: spaceBetween,
        navigation: navigation_option,
        pagination: pagination_option,
    });
}