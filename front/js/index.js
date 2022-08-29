$(document).ready(function (){

    /* work: delete text > size custom start */
    $(".text-indications,.title-medicines,.title-question,.text-comment,.text-question,.title-service,.topic-counseling,.text-question-answer,.title-doctor").each(function (){
        let text = $(this).text().trim();
        switch ($(this).data('title_class')){
            case "title-question":
                if(text.length > 82) {
                    $(this).html(text.substr(0, 82) + ' ...');
                }
                break;

            case "text-indications":
                if(text.length > 56){
                    $(this).html(text.substr(0, 56) + ' ...');
                }
                break;

            case "text-comment":
                if(text.length > 63){
                    $(this).html(text.substr(0, 63) + ' ...');
                }
                break;

            case "text-question-answer":
                if(text.length > 34){
                    $(this).html(text.substr(0, 34) + ' ...');
                }
                break;

            case "text-question":
                if(text.length > 173){
                    $(this).html(text.substr(0, 173) + ' ...');
                }
                break;

            case "title-service":
                if(text.length > 15){
                    $(this).html(text.substr(0, 15) + ' ...');
                }
                break;

            case "topic-counseling":
                if(text.length > 30){
                    $(this).html(text.substr(0, 30) + ' ...');
                }
                break;

            case "title-doctor":
                if(text.length > 19){
                    $(this).html(text.substr(0, 19) + ' ...');
                }
                break;
        }
    })
    /* work: delete text > size custom end */

    /* section navbar sidebar start */
    $(document).on('click','.btn-patients,.btn-doctors',function (){
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
    /* section navbar sidebar end */

    /* section navbar top start */
    $(document).on('click','.link-patients,.link-doctors',function (){
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
    $(".link-patients,.link-doctors").focusout(function () {
        $(this).parent().removeClass('active_menu');
        $(this).removeClass('text-light').addClass('iso-color-dark');
        $(this).find('i').addClass('rotate-0deg').removeClass('rotate-180deg');
    })
    /* section navbar top end */

    /* section communication-iso start */
    $(".btn-communication-iso").click(function (){
        let val_aria_expanded = $(this).attr('aria-expanded');
        if(val_aria_expanded == 'true'){
            $(".dropdown-menu-communication li").fadeOut('slow');
            $(this).attr('aria-expanded','false');
            $(this).find("span").addClass('icon-support-light')
                .addClass('rotate-0deg')
                .removeClass(['rotate-180deg','icon-close']);

        }else{
            $(".dropdown-menu-communication li").fadeIn('slow');
            $(this).attr('aria-expanded','true');
            $(this).find("span").addClass('icon-close')
                .addClass('rotate-180deg')
                .removeClass(['rotate-0deg','icon-support-light']);
        }
    })
    /* section communication-iso end */

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

        if(check_size_media(1400,false)){
            if(scrolled > 20){
                $(".header-menu").addClass(['position-fixed','z-index-last']).css('width','82.5em');
            }else{
                $(".header-menu").removeClass(['position-fixed','z-index-last']);
            }
        }
        if(scrolled > 20){
            $(".header-menu").addClass(['position-fixed','z-index-last']);
        }else{
            $(".header-menu").removeClass(['position-fixed','z-index-last']);
        }
    }

    $(document).on('click','.scroll-top',function (){
        $('html').animate({scrollTop : 0},200);
    });

    /* section modal login start */
    $(".box-verification-code input").keyup(function () {
        if ($(this).val() != "") {
            $(this).next('input').focus();
        }
    });

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
    /* js section question end */

    /* function timer */
    let second = 60,
        minutes = 1,
        timer ;

    function start_timer() {
        if(second === 0 && minutes === 0){
            $(".box-timer span").text("ارسال مجدد کد");
            $(".box-timer").addClass(['iso-bg-blue-dark','text-light']);
            clearInterval(timer);
            $(".box-timer").attr('disabled',false);
        }else{
            if(second === 0){
                minutes -= 1;
                second = 60;
            }
            second -= 1;
            let val_timer = ((second < 10 ? "0" + second : second) + " : " + ("0" + minutes));
            $(".box-timer span").text(val_timer);
            $(".box-timer").attr('disabled',true);
        }
    }

    $(document).on('click','.send',function (){
        $(".card-login").addClass('d-none');
        $(".modal-footer").addClass('d-none');
        $(".card-verification").removeClass('d-none');
        clearInterval(timer);
        timer = setInterval(start_timer, 1000);
    });

    $(document).on('click','.box-timer',function (){
        second = 60;
        minutes = 1;
        $(".box-timer").removeClass(['iso-bg-blue-dark','text-light'])
            .addClass(['alert-primary','iso-color-dark']);
        timer = setInterval(start_timer, 1000);
    });

    $(document).on('click','.login-with-password',function (){
        $(".card-login-password").removeClass('d-none');
        $(".card-verification").addClass('d-none');
    });

    $(document).on('click','.login-code-accepted',function (){
        $(".card-login-password").addClass('d-none');
        $(".card-verification").removeClass('d-none');
    });

    $(document).on('click','.edit-mobile',function (){
        $(".card-login-password").addClass('d-none');
        $(".card-verification").addClass('d-none');
        $(".card-login").removeClass('d-none');
        $(".modal-footer").removeClass('d-none');
    });

    $(document).on('click','.show-password',function (){
        if ($(".input-login-password").prop('type') === "password") {
            $(".input-login-password").prop('type','text');
            $(this).find("i").addClass('fa-eye-slash').removeClass('fa-eye');
        } else {
            $(".input-login-password").prop('type', 'password');
            $(this).find("i").removeClass('fa-eye-slash').addClass('fa-eye');
        }
    });

    $(document).on('click','.accepted-info-user',function (){
        $(".menu-user").removeClass('d-none').addClass('d-flex');
        $(".btn-login,.btn-show-modal-login").addClass('d-none').removeClass('d-flex');
        $('.modal').modal('hide');
    });
    /* section modal login end */

    /* section menu user start */
    $(document).off('click','.btn-user , .btn-user-collapse');
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
    /* section menu user end */

    /* section search-input-lg in desktop start */
    $(document).on('keyup','.search-input-lg',function (){
        let character_length = $(this).val().length;
        if(character_length >= 1){
            $(".search-box-lg .btn-close-danger-modal").removeClass('d-none');
            $(".search-box-lg .fa-magnifying-glass").addClass('d-none');
        }else{
            $(".search-box-lg .btn-close-danger-modal").addClass('d-none');
            $(".search-box-lg .fa-magnifying-glass").removeClass('d-none');
        }
    });
    /* section search-input-lg in desktop end */

    /* section search-input-sm modal in mobile start */
    if(check_size_media(false,576)) {
        $(".search-input-lg").attr('data-bs-toggle',"modal");
        $(document).on('keyup','.search-input-sm',function (){
            let character_length = $(this).val().length;
            if(character_length >= 1){
                $(".icon-search").hide();
                $(".icon-search").addClass('d-none').removeClass('d-flex')
                $(".search-box-sm .btn-close-danger-modal").addClass('d-flex').removeClass('d-none');
                $(".result-search .list-group").append("" +
                    "    <li class=\"list-group-item d-flex justify-content-between align-items-center iso-font-md-em\">\n" +
                    "      <span class=\"iso-font-sm-em-em\">سحر خوش قامت</span>\n" +
                    "      <div class=\"badge iso-bg-blue-dark p-2 border-radius iso-font-xs-em\">پزشک</div>\n" +
                    "   </li>" +
                    "    <li class=\"list-group-item d-flex justify-content-between align-items-center iso-font-md-em\">\n" +
                    "       <span class=\"iso-font-sm-em\">کنترل فشار خون</span>\n" +
                    "       <div class=\"badge iso-bg-blue-dark p-2 border-radius iso-font-xs-em\">سرویس</div>\n" +
                    "    </li>" +
                    "    <li class=\"list-group-item d-flex justify-content-between align-items-center iso-font-md-em\">\n" +
                    "       <span class=\"iso-font-sm-em\">چطور به کودک خود دستور بدهم ؟</span>\n" +
                    "       <div class=\"badge iso-bg-blue-dark p-2 border-radius iso-font-xs-em\">مقاله</div>\n" +
                    "   </li>"+
                    "  <li class=\"list-group-item d-flex justify-content-between align-items-center iso-font-md-em\">" +
                    "       <span class=\"iso-font-sm-em\">روغن بنفشه محصول خوب</span>\n" +
                    "       <div class=\"badge iso-bg-blue-dark p-2 border-radius iso-font-xs-em\">دارو</div>\n"+
                    "   </li>");
            }else{
                $(".icon-search").addClass('d-flex').removeClass('d-none')
                $(".search-box-sm .btn-close-danger-modal").addClass('d-none').removeClass('d-flex');
            }
        })
    }
    /* section search-input-sm modal in mobile end */

    $(document).on('click','.clear-input',function () {
        $(".search-input-sm,.search-input-lg").val('');
        $(this).addClass('d-none');
        $(".fa-magnifying-glass").addClass('d-flex').removeClass('d-none');
        $(".result-search .list-group").html('');
    });

    initCertificatesSwiper();
    initMedicineSwiper();
    initDoctorsSwiper();

    /* js section comment users start */
    $(document).off('click','.love');
    $(document).on('click','.love',function (){
        let val_aria_expanded = $(this).attr('aria-expanded');
        let counter_live = $(this).find('~ span').text();
        if(val_aria_expanded == 'true'){
            $(this).attr('src','../../images/icons/love.png').addClass('love-disabled').removeClass('love-active');
            $(this).attr('aria-expanded','false');
            $(this).find('~ span').text(--counter_live);
        }else {
            $(this).attr('src','../../images/icons/love-active.png').addClass('love-active').removeClass('love-disabled');
            $(this).attr('aria-expanded','true');
            $(this).find('~ span').text(++counter_live);
        }
    });

    $(document).off('click','.more-comment');
    $(document).on('click','.more-comment',function (){
        $(".section-comments-users .parent-comment-more").append('<div class="col-12 p-0 mt-2">\n' +
            '                    <div class="card p-2 bg-light border-radius">\n' +
            '                        <div class="card-header border-0 p-0 bg-transparent fw-normal text-center">\n' +
            '                            <figure class="figure d-flex align-items-center">\n' +
            '                                <img src="../../images/doc3.jpg" class="figure-img m-0 rounded-circle img-md" alt="...">\n' +
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
            '                                    <img src="../../images/icons/love.png" class="love pointer-event" role="button" aria-expanded="false" alt="پسندیدم">\n' +
            '                                    <span class="mx-2">3</span>\n' +
            '                                </div>\n' +
            '                                <div class="col-6">\n' +
            '                                    <button class="btn w-100 border-radius text-light iso-font-md-em iso-bg-blue-dark active-btn">پاسخ</button>\n' +
            '                                </div>\n' +
            '                            </div>\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                </div>');
    });
    /* js section comment users end */

    /* copy link section share start */
    new ClipboardJS('.btn-copy-link');

    $(document).on('click','.btn-copy-link',function (){
        $('.tooltip-text').addClass('tooltip-active');
        setTimeout(function (){
            $(".tooltip-text").removeClass('tooltip-active');
        },2500)
    })
    /* copy link section share end */

    /* js start one svg doctors start */
    $(".doctor-number-star-rating").starRating({
        readOnly: true,
        emptyColor:'#ffc107',
        starSize: 18,
        totalStars: 1,
        starShape: 'rounded',
        hoverColor: 'salmon',
        activeColor: 'crimson',
        useGradient: false
    });
    /* js start one svg doctors end */

    /* validation comments start */
    initValidation("#form_comments",{
            first_and_last_name: "required",
            phone: "required",
            description: "required",
            code_security: "required",
        },
        {
            first_and_last_name: "نام و نام خانوادگی الزامی است",
            phone: "شماره موبایل الزامی است",
            description: "توضیحات نظر الزامی است",
            code_security: "کد امنیتی الزامی است",
        });
    /* validation comments end */

    /* validation form send message start */
    initValidation("#form_tag",{
            doctor_title: "required",
        },
        {
            doctor_title: "نام پزشک الزامی است",
        });
    /* validation form send message end */

    /* validation form answer comment start */
    initValidation("#form_answer_comment",{
            first_and_last_name_comment: "required",
            text_comment: "required",
        },
        {
            first_and_last_name_comment: "نام و نام خانوادگی الزامی است",
            text_comment: "متن نظر الزامی است",
        });

    initValidation("#form_answer_comment_two",{
            first_and_last_name_comment_two: "required",
            text_comment_two: "required",
        },
        {
            first_and_last_name_comment_two: "نام و نام خانوادگی الزامی است",
            text_comment_two: "متن نظر الزامی است",
        });
    /* validation form answer comment end */

    /* validation form question answer start */
    initValidation("#form",
        {
            height: "required",
            weight: "required",
            births: "required",
            category: "required",
            title_question:{
                required: true,
                maxlength: 150
            },
            description:{
                required: true,
                maxlength: 650
            },
            code_security:"required",
            rules_check:"required",
            file:{
                required: true,
                extension: "xls|csv",
            },
        },
        {
            height: "قد را مشخص کنید",
            weight: "وزن را مشخص کنید",
            births: "سال تولد را مشخص کنید",
            category: "دسته بندی را مشخص کنید",
            title_question: {
                required:"عنوان سوال را مشخص کنید",
                maxlength: "حداکثر کاراکتر ها باید 150 باشد"
            },
            description: {
                required:"توضیحات خود را وارد کنید",
                maxlength: "حداکثر کاراکتر ها باید 650 باشد"
            },
            code_security: "کد امنیتی را وارد کنید",
            rules_check: "تایید قوانین الزامی باشد",
            file:{
                required: "tyrr5edyr",
                extension: "aewfaeeerer",
            },
        });
    /* validation form question answer end */

    $(document).on('click','.filter-consultants button',function (){
        let val_aria_select = $(this).attr('aria-selected');
        if(val_aria_select === "true"){
            $(this).attr('aria-selected',false)
        }else{
            $(this).attr('aria-selected',true).removeClass('active');
            $(".tab-pane").find('.active').removeClass(['show','active']);
            $("#pills_all_consultants").addClass(['show','active']);
        }
    });

    /* js section operation comment start */
    $(document).off('click','.btn-accepted');
    $(document).on('click','.btn-accepted',function (){
        let val_aria_expanded = $(this).attr('aria-expanded');
        if(val_aria_expanded == 'true'){
            $(this).attr('aria-expanded','false').removeClass(['btn-outline-success','border-success']).addClass('btn-outline-secondary');
            $(this).find("i").removeClass(['fa-check','text-success']).addClass('fa-ban');
        }else {
            $(this).attr('aria-expanded','true').addClass('border-success').removeClass('btn-outline-secondary');
            $(this).find("i").addClass(['fa-check','text-success']).removeClass('fa-ban');
        }
    });
    /* js section operation comment end */
});
