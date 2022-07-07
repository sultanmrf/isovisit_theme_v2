$(document).ready(function () {

    $(".fa-bookmark").click(function (){
        let val_aria_expended = $(this).attr('aria_expended');
        if(val_aria_expended == 'true'){
            $(this).attr('aria_expended','false');
            $(this).removeClass('fa-solid').addClass('fa-regular');
        }else{
            $(this).attr('aria_expended','true');
            $(this).addClass('fa-solid').removeClass('fa-regular');
        }
    });
});