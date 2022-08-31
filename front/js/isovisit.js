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
});
