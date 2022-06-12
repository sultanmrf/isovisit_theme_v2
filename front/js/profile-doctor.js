$(document).ready(function (){

    new ClipboardJS('.btn-copy-link');
    new Swiper(".swiper-gallery-doctor", {
        effect: "flip",
        grabCursor: true,
        pagination: {
            el: ".swiper-pagination",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

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



    // let $window = $(window);
    // $window.on('scroll', keep_tag_fixed_while_scrolling);
    //
    // function keep_tag_fixed_while_scrolling() {
    //     let tag_target = $("footer") ,
    //         size_scrolled = $window.scrollTop() ,
    //         offsetTop,
    //         val_check_size_media = check_size_media(768,1400);
    //
    //     console.log("offset_tag = "  + tag_target.offset().top,"scroll = " + size_scrolled)
    //
    //     if(val_check_size_media){
    //         offsetTop = tag_target.offset().top - 160;
    //         if (size_scrolled >= offsetTop) {
    //             $(".position-section-get-advice").css({top:-(size_scrolled - offsetTop - 135) + 'px'});
    //         }else{
    //             if(size_scrolled  < 10){
    //                 $(".position-section-get-advice").css({top:'10.5em'});
    //             }else{
    //                 $(".position-section-get-advice").css({top:'unset'});
    //             }
    //         }
    //     }else{
    //         offsetTop = tag_target.offset().top - 300;
    //         if (size_scrolled >= offsetTop) {
    //             $(".position-section-get-advice").css({top:-(size_scrolled - offsetTop - 349) + 'px'});
    //         }else{
    //             $(".position-section-get-advice").css({top:'10.5em'});
    //         }
    //     }
    // }
    //
    function check_size_media(min_width,max_width){
        return window.matchMedia("(min-width: " + min_width + "px) and (max-width: " +  max_width + "px)").matches;
    }


    if( window.matchMedia("(max-width: 768px)").matches){
        $(".section-get-advice").removeClass(['position-sticky', 'top-0']);
        $(".section-data-profile-doctor").after($(".section-get-advice"));
    }

});
