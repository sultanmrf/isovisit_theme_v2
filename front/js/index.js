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

    var $window = $(window);
    $window.on('scroll', revealOnScroll);

    function revealOnScroll() {
        var scrolled = $window.scrollTop();

        // Animation is showing...
        $(".section-svg").each(function () {
            var $this = $(this);
            var offsetTop = $this.offset().top - 550;

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


    /* section search-input-sm modal*/
    if(window.matchMedia("(max-width: 576px)").matches) {

        $(".search-input-lg").attr('data-bs-toggle',"modal");
        $(document).on('click','.btn-return',function (){
            $('#modalSearch').modal('hide');
        })

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

});
