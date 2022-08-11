$(document).ready(function () {
    $(".btn-bookmark").click(function (){
        let val_aria_expended = $(this).attr('aria_expended');
        if(val_aria_expended == 'true'){
            $(this).attr('aria_expended','false');
            $(this).find("i").removeClass('fa-solid').addClass('fa-regular');
        }else{
            $(this).attr('aria_expended','true');
            $(this).find("i").addClass('fa-solid').removeClass('fa-regular');
        }
    });
});