$(document).ready(function () {
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
        $(".step-number-mobile").addClass('d-none');
        $(".card-footer").addClass('d-none');
        $(".step-verification").removeClass('d-none');
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
        $(".step-login-password").removeClass('d-none');
        $(".step-verification").addClass('d-none');
    });

    $(document).on('click','.login-code-accepted',function (){
        $(".step-login-password").addClass('d-none');
        $(".step-verification").removeClass('d-none');
    });

    $(document).on('click','.edit-mobile',function (){
        $(".step-login-password").addClass('d-none');
        $(".step-verification").addClass('d-none');
        $(".step-number-mobile").removeClass('d-none');
        $(".card-footer").removeClass('d-none');
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
    /* section modal login end */

});