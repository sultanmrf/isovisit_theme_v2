$(document).ready(function (){

    /* section navbar sidebar*/
    $(document).on('click','.btn-patients , .btn-doctors',function (){
        let val_aria_expanded = $(this).attr("aria-expanded");
        if(val_aria_expanded == 'true'){
            $(this).parent().removeClass('bg-transparent').addClass('active_menu');
            $(this).removeClass('unactive_menu').addClass('text-white');
            $(this).find('i').addClass('rotate-180deg').removeClass('rotate-0deg');
        }else{
            $(this).parent().removeClass('active_menu').addClass(['iso-color-blur-dark','bg-transparent']);
            $(this).removeClass('text-white');
            $(this).find('i').addClass('rotate-0deg').removeClass('rotate-180deg');
        }
    })

    /*section navbar top*/
    $(document).on('click','.link-patients',function (){
        let val_aria_expanded = $(this).attr("aria-expanded");
        if(val_aria_expanded == 'true'){
            $(this).parent().addClass('active_menu');
            $(this).addClass('text-light').removeClass('iso-color-dark');
            $(this).find('i').addClass('rotate-180deg').removeClass('rotate-0deg');
        }else{
            $(this).parent().removeClass('active_menu');
            $(this).removeClass('text-light').addClass('iso-color-dark');
            $(this).find('i').addClass('rotate-0deg').removeClass('rotate-180deg');
        }
    })
    $(".link-patients").focusout(function () {
        $(this).parent().removeClass('active_menu');
        $(this).removeClass('text-light').addClass('iso-color-dark');
        $(this).find('i').addClass('rotate-0deg').removeClass('rotate-180deg');
    })

    /* section communication-iso */
    $(".communication-iso > img").click(function (){
        let val_aria_expanded = $(this).attr('aria-expanded');
        if(val_aria_expanded == 'true'){
            $(".dropdown-menu-communication li").fadeOut('slow');
            $(this).attr('aria-expanded','false');
            $(this).attr('src','./images/icons/icon-support-light.png')
                .addClass('rotate-0deg')
                .removeClass('rotate-180deg');

        }else{
            $(".dropdown-menu-communication li").fadeIn('slow');
            $(this).attr('aria-expanded','true');
            $(this).attr('src','./images/icons/close.png')
                .addClass('rotate-180deg')
                .removeClass('rotate-0deg');
        }
    })

    let $window = $(window);
    $window.on('scroll', revealOnScroll);

    function revealOnScroll() {
        let scrolled = $window.scrollTop();
        if (scrolled  > 500) {
            $(".scroll-top").addClass('d-flex').removeClass('d-none');
        }else{
            $(".scroll-top").removeClass('d-flex').addClass('d-none');
        }
        // Animation is showing...
        $(".section-svg").each(function () {
            let $this = $(this);
            let offsetTop = $this.offset().top - 550;

            // show svg if scroll > offsetTop tag
            if (scrolled  > offsetTop) {
                $this.find('svg').show();
            }
        });
    }

    $(document).on('click','.scroll-top',function (){
        $('html').animate({scrollTop : 0},200);
    });

    /* section login */
    $(".box-verification-code input").keyup(function () {
        if ($(this).val() != "") {
            $(this).next('input').focus();
        }
    });

    /* function timer */
    let second = 60,
        minutes = 1,
        timer = setInterval(start_timer, 1000);
    clearTimeout(timer);
    function start_timer() {
        if(second === 0 && minutes === 0){
            $(".box-timer").text("ارسال مجدد کد")
                .addClass(['iso-bg-blur-dark','text-light'])
                .removeClass(['alert-primary','iso-text-dark']);
            clearTimeout(timer);
        }else{
            if(second === 0){
                minutes -= 1;
                second = 60;
            }
            second -= 1;
            let val_timer = ((second < 10 ? "0" + second : second) + " : " + ("0" + minutes));
            $(".box-timer").text(val_timer);
        }
    }

    /* js section question start */
    $(document).off('click','.btn-question');
    $(document).on('click','.btn-question',function (){
        let val_aria_expanded = $(this).attr("aria-expanded");
        if(val_aria_expanded == 'true'){
            $(this).find('i').addClass('rotate-180deg').removeClass('rotate-0deg');
        }else{
            $(this).find('i').addClass('rotate-0deg').removeClass('rotate-180deg');
        }
    })
    /* js section question start */

    $(document).on('click','.send',function (){
        $(".card-login").addClass('d-none');
        $(".modal-footer").addClass('d-none');
        $(".card-verification").removeClass('d-none');
        setInterval(start_timer, 1000);
    });

    $(document).on('click','.box-timer',function (){
        $(".box-timer").removeClass(['iso-bg-blur-dark','text-light'])
            .addClass(['alert-primary','iso-text-dark']);

        setInterval(start_timer, 1000);
    });

    $(document).on('click','.login-with-password',function (){
        $(".card-login-password").removeClass('d-none');
        $(".card-verification").addClass('d-none');
    });

    $(document).on('click','.edit-mobile',function (){
        $(".card-login-password").addClass('d-none');
        $(".card-verification").addClass('d-none');
        $(".card-login").removeClass('d-none');
        $(".modal-footer").removeClass('d-none');
    });

    $(document).on('click','.show-password',function (){
        if ($(".input-login-password").prop('type') === "password") {
            $(".input-login-password").attr('type','text');
            $(".card-login-password i").addClass('fa-eye-slash').removeClass('fa-eye');
        } else {
            $(".input-login-password").attr('type', 'password');
            $(".card-login-password i").removeClass('fa-eye-slash').addClass('fa-eye');
        }
    });

    $(document).on('click','.accepted-info-user',function (){
        $(".menu-user").removeClass('d-none').addClass('d-flex');
        $(".btn-login,.btn-show-modal-login").addClass('d-none').removeClass('d-flex');
        $('.modal').modal('hide');
    });
    /* section login */

    /* section menu user */
    $(document).on('click','.btn-user , .btn-user-collapse',function (){
        let val_aria_expanded = $(this).attr("aria-expanded");
        if(val_aria_expanded == 'true'){
            $(this).find('i').addClass('rotate-180deg').removeClass('rotate-0deg');
            $(this).addClass('border-radius-top').removeClass('border-radius');
        }else{
            $(this).find('i').addClass('rotate-0deg').removeClass('rotate-180deg');
            $(this).removeClass('border-radius-top').addClass('border-radius');
        }
    })

    $(".btn-user").focusout(function () {
        $(this).find('i').addClass('rotate-0deg').removeClass('rotate-180deg');
        $(this).removeClass('border-radius-top').addClass('border-radius');
    });


    /* section search-input-sm modal*/
    if(check_size_media(false,576)) {
        $(".search-input-lg").attr('data-bs-toggle',"modal");
        $(document).on('keyup','.search-input-sm',function (){
            let character_length = $(this).val().length;
            if(character_length >= 2){
                $(".icon-search").hide();
                $(".icon-search").addClass('d-none').removeClass('d-flex')
                $(".search-box-sm .btn-close-modal").addClass('d-flex').removeClass('d-none');
                $(".result-search .list-group").append("" +
                    "    <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n" +
                    "      <span class=\"iso-font-sm\">سحر خوش قامت</span>\n" +
                    "      <div class=\"badge iso-bg-blur-dark p-2 border-radius iso-font-xxs\">پزشک</div>\n" +
                    "   </li>" +
                    "    <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n" +
                    "       <span class=\"iso-font-sm\">کنترل فشار خون</span>\n" +
                    "       <div class=\"badge iso-bg-blur-dark p-2 border-radius iso-font-xxs\">سرویس</div>\n" +
                    "    </li>" +
                    "    <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n" +
                    "       <span class=\"iso-font-sm\">چطور به کودک خود دستور بدهم ؟</span>\n" +
                    "       <div class=\"badge iso-bg-blur-dark p-2 border-radius iso-font-xxs\">مقاله</div>\n" +
                    "   </li>"+
                    "  <li class=\"list-group-item d-flex justify-content-between align-items-center\">" +
                    "       <span class=\"iso-font-sm\">روغن بنفشه محصول خوب</span>\n" +
                    "       <div class=\"badge iso-bg-blur-dark p-2 border-radius iso-font-xxs\">دارو</div>\n"+
                    "   </li>");
            }else{
                $(".icon-search").addClass('d-flex').removeClass('d-none')
                $(".search-box-sm .btn-close-modal").addClass('d-none').removeClass('d-flex');
            }
        })
    }

    $(document).on('click','.clear-input',function () {
        $(".search-input-sm").val('');
        $(this).addClass('d-none');
        $(".fa-magnifying-glass").addClass('d-flex').removeClass('d-none');
        $(".result-search .list-group").html('');
    });

    initCertificatesSwiper();

    /* js section comment users start */
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
        let val_aria_expanded = $(this).attr('aria-expanded');
        if(val_aria_expanded == 'true'){
            $(".section-comments-users .parent-comment-more").html('');
            $(this).attr('aria-expanded','false');
            $(this).find("span").text('نظرات بیشتر');
            $(this).find("i").removeClass('fa-chevron-up').addClass('fa-chevron-down');
        }else {
            $(".section-comments-users .parent-comment-more").append('<div class="col-12 p-0">\n' +
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
            $(this).attr('aria-expanded','true');
            $(this).find("span").text('بستن');
            $(this).find("i").removeClass('fa-chevron-down').addClass('fa-chevron-up');

        }
    });
    /* js section comment users end */
});
