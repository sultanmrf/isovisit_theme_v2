$(document).ready(function (){

    lightbox.option({
        'positionFromTop': 250
    })

    $(".doctor-rating").starRating({
        readOnly: true,
        emptyColor:'#ffc107',
        starSize: 25
    });

    new ClipboardJS('.btn-copy-link');

    initGalleryDoctorSwiper();

    $(document).off('click','.love');
    $(document).on('click','.love',function (){
        let val_aria_expanded = $(this).attr('aria-expanded');
        let counter_live = $(this).find('~ span').text();
        if(val_aria_expanded == 'true'){
            $(this).attr('src','./images/icons/love.png').addClass('love-disabled').removeClass('love-active');
            $(this).attr('aria-expanded','false');

            $(this).find('~ span').text(--counter_live);
        }else {
            $(this).attr('src','./images/icons/love-active.png').addClass('love-active').removeClass('love-disabled');
            $(this).attr('aria-expanded','true');
            $(this).find('~ span').text(++counter_live);
        }
    });

    $(document).off('click','.more-comment');
    $(document).on('click','.more-comment',function (){
        $(".section-comments-users > .row").append('<div class="col-12">\n' +
            '                    <div class="card p-2 bg-light border-radius">\n' +
            '                        <div class="card-header border-0 p-0 bg-transparent fw-normal text-center">\n' +
            '                            <figure class="figure d-flex align-items-center">\n' +
            '                                <img src="./images/doc3.jpg" class="figure-img m-0 rounded-circle img-md" alt="...">\n' +
            '                                <figcaption class="figure-caption fw-normal d-flex flex-column iso-font-md-em iso-color-dark mx-2">\n' +
            '                                    <span class="iso-font-sm-em text-start">محمد رضا فنودی</span>\n' +
            '                                    <div class="row gx-2 iso-font-xs-em mt-1 fw-normal">\n' +
            '                                        <span class="col text-nowrap border-radius alert-secondary">کاربر مهمان</span>\n' +
            '                                        <span class="col">1400/11/15</span>\n' +
            '                                    </div>\n' +
            '                                </figcaption>\n' +
            '                            </figure>\n' +
            '                            <div class="line-muted-dashed"></div>\n' +
            '                        </div>\n' +
            '                        <div class="card-body pt-0 mt-2 px-1">\n' +
            '                            <div class="card-text iso-font-md-em fw-normal">\n' +
            '                                <p>من برای حملات پنیک که بعد از کرونا دچار شدم مشاوره میخواستم کدوم یکی رو باید انتخاب کنم برای مشاوره ؟ کرونام خوب شده وای حملات پنیک بهم دست میده  </p>\n' +
            '                            </div>\n' +
            '                        </div>\n' +
            '                        <div class="card-footer bg-transparent border-0 p-0">\n' +
            '                            <div class="row d-flex justify-content-between">\n' +
            '                                <div class="col-6 d-flex align-items-center">\n' +
            '                                    <img src="./images/icons/love.png" class="love pointer-event" role="button" aria-expanded="false" alt="پسندیدم">\n' +
            '                                    <span class="mx-2">3</span>\n' +
            '                                </div>\n' +
            '                                <div class="col-6">\n' +
            '                                    <button class="btn w-100 border-radius text-light iso-font-md-em iso-bg-blur-dark active-btn">پاسخ</button>\n' +
            '                                </div>\n' +
            '                            </div>\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                </div>');
        $(this).addClass('d-none').removeClass('d-flex');
    });

    $(document).off('click','.btn-question');
    $(document).on('click','.btn-question',function (){
        let val_aria_expanded = $(this).attr("aria-expanded");
        if(val_aria_expanded == 'true'){
            $(this).find('i').addClass('rotate-180deg').removeClass('rotate-0deg');
        }else{
            $(this).find('i').addClass('rotate-0deg').removeClass('rotate-180deg');
        }
    })

    /*نمایش ادرس دکتر در نقشه گوگل*/
    show_map('contact__map',36.312416, 59.553421)

    if(check_size_media(false,768)){
        $(".section-get-advice").removeClass(['position-sticky', 'top-0']);
        $(".section-data-profile-doctor").after($(".section-get-advice"));
    }

});
