$(document).ready(function (){
    $(document).on('click','.btn-patients',function (){
        $check_expended = $(this).attr("aria-expanded");
        debugger;
        if($check_expended == 'true'){
            $(this).parent().removeClass('bg-transparent').addClass('active_menu');
            $(this).removeClass('unactive_menu');
            $(this).find('i').addClass('fa-chevron-up').removeClass('fa-chevron-down');
        }else{
            $(this).parent().removeClass('active_menu').addClass(['bg-transparent','iso-color-blur-dark']);
            $(this).addClass('unactive_menu');
            $(this).find('i').addClass('fa-chevron-down').removeClass('fa-chevron-up');
        }

    })

    new Swiper(".swiper-question-answer", {
        slidesPerView: 1,
        spaceBetween: 8,
        pagination: {
            el: ".swiper-pagination-question-answer",
            paginationClickable: true,
        },
    });

    new Swiper(".swiper-articles", {
        slidesPerView: 1,
        spaceBetween: 8,
        pagination: {
            el: ".swiper-pagination-article",
            paginationClickable: true,
        },
    });

    new Swiper(".swiper-comments-users", {
        slidesPerView: "auto",
        spaceBetween: 16,
    });


    new Swiper(".swiper-medicines", {
        slidesPerView: "auto",
        spaceBetween: 16,
        pagination: {
            el: ".swiper-pagination-medicines",
            paginationClickable: true,
        },
    });

    new Swiper(".swiper-certificates", {
        slidesPerView: 0,
        centeredSlides: true,
        spaceBetween: 30,
        grabCursor: true,
        pagination: {
            el: ".swiper-pagination-certificates",
            clickable: true,
        },
    });

});