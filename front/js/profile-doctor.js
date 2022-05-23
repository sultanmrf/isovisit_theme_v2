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
            '                        <div class="card-header border-0 p-0 bg-transparent iso-font-md fw-normal text-center">\n' +
            '                            <figure class="figure d-flex align-items-center">\n' +
            '                                <img src="./images/doc3.jpg" class="figure-img m-0 rounded-circle img-md" alt="...">\n' +
            '                                <figcaption class="figure-caption fw-normal d-flex flex-column iso-font-md fw-normal iso-color-dark mx-2">\n' +
            '                                    <span class="iso-font-sm text-start">محمد رضا فنودی</span>\n' +
            '                                    <div class="row gx-2 iso-font-xxs mt-1 fw-normal">\n' +
            '                                        <span class="col text-nowrap border-radius alert-secondary">کاربر مهمان</span>\n' +
            '                                        <span class="col">1400/11/15</span>\n' +
            '                                    </div>\n' +
            '                                </figcaption>\n' +
            '                            </figure>\n' +
            '                            <hr class="line-muted-dashed"/>\n' +
            '                        </div>\n' +
            '                        <div class="card-body pt-0 px-1">\n' +
            '                            <div class="card-text iso-font-md fw-normal">\n' +
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
            '                                    <button class="btn w-100 border-radius text-light iso-bg-blur-dark">پاسخ</button>\n' +
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

    show_map('contact__map',36.312416, 59.553421)

    $(window).scroll(function (){
        function mediaScreenChangeTopOnTag(x) {
            if (x.matches) {
                if(window.scrollY > 2700){
                    $(".section-get-advice").css({top:'228px'});
                }else{
                    $(".section-get-advice").css({top:'169px'});
                }
            } else {
                if(window.scrollY > 3020){
                    $(".section-get-advice").css({top:'-188px'});
                }else{
                    $(".section-get-advice").css({top:'169px'});
                }
            }
        }
        let size_media = window.matchMedia("(min-width: 1400px)")
        mediaScreenChangeTopOnTag(size_media)
    });
});
