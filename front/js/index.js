$(document).ready(function (){

    /* section navbar sidebar*/
    $(document).on('click','.btn-patients , .btn-doctors',function (){
        let val_aria_expanded = $(this).attr("aria-expanded");
        if(val_aria_expanded == 'true'){
            $(this).parent().removeClass('bg-transparent').addClass('active_menu');
            $(this).removeClass('unactive_menu');
            $(this).find('i').addClass('rotate-180deg').removeClass('rotate-0deg');
        }else{
            $(this).parent().removeClass('active_menu').addClass(['iso-color-blur-dark','bg-transparent']);
            $(this).addClass('unactive_menu');
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

    /* section scroll top btn and show svg by scroll */
    $(window).scroll(function(){
        var scrolled_val = $(this).scrollTop();

        if(scrolled_val > 1500){
            $(".scroll-top").addClass('d-flex');
        }else{
            $(".scroll-top").removeClass('d-flex');
        }

        if(scrolled_val > 420){
            $(".svg-doctors").show();
            $(".svg-default-height-section-doctors").remove();
        }

        if(scrolled_val > 1450){
            $(".svg-comment-users").show();
            $(".svg-default-height-section-comment-users").remove();
        }

        if(scrolled_val > 2100){
            $(".svg-articles").show();
            $(".svg-default-height-section-articles").remove();
        }

        if(scrolled_val > 2600){
            $(".svg-medicines").show();
            $(".svg-default-height-section-medicines").remove();
        }
    });

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
        $(".btn-login").addClass('d-none').removeClass('d-flex');
        $('#modal').modal('hide');
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

});
