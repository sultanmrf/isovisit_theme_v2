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

    var swiper = new Swiper(".iso-swiper-question-answer", {
        slidesPerView: 1,
        spaceBetween: 16,
        breakpoints: {
            "@0.00": {
                slidesPerView: 1,
                spaceBetween: 16,
            },
        },
    });

    var swiper1 = new Swiper(".iso-swiper-comments-users", {
        slidesPerView: "auto",
        spaceBetween: 16,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });


});