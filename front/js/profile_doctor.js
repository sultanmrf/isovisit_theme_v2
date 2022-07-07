$(document).ready(function (){
    /* section get advice start */
    $(".text-link").each(function (){
        if($(this).text().length > 28 ){
            $(this).find("~ span").addClass(['w-100','text-end','mt-1']);
            $(".section-get-advice .btn-group").append($(this).parents(".col-xxl-6"));
        }
    });
    /* section get advice start */

    lightbox.option({
        'positionFromTop': 250
    })

    $(".doctor-star-rating").starRating({
        readOnly: true,
        emptyColor:'#ffc107',
        starSize: 25
    });

    /* swiper slider doctors section video introduction doctor start*/
    initGalleryDoctorSwiper();
    /* swiper slider doctors section video introduction doctor end*/

    /*نمایش ادرس دکتر در نقشه گوگل*/
    show_map('contact__map',36.312416, 59.553421)

    /* edit location div section get advice in size mobile start */
    if(check_size_media(false,768)){
        $(".section-get-advice").removeClass(['position-sticky', 'top-0']);
        $(".section-data-profile-doctor").after($(".section-get-advice"));
    }
    /* edit location div section get advice in size mobile end */


    /* js section about doctors start */
    $(document).off('click','.more-info-doctors');
    $(document).on('click','.more-info-doctors',function (){
        let val_aria_expanded = $(this).attr('aria-expanded');
        if(val_aria_expanded == 'true'){
            $(this).attr('aria-expanded','false');
            $(".section-about-doctor .card-body").css('height','12.5em');
            $(this).find("span").text('نظرات بیشتر');
            $(this).find("i").removeClass('fa-chevron-up').addClass('fa-chevron-down');
        }else {
            $(this).attr('aria-expanded','true');
            $(".section-about-doctor .card-body").css('height','auto');
            $(this).find("span").text('بستن');
            $(this).find("i").removeClass('fa-chevron-down').addClass('fa-chevron-up');

        }
    });
    /* js section about doctors end */


});
