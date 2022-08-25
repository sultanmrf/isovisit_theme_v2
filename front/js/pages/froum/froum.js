$(document).ready(function () {

    let width_div_animate_motion_text = $(".motion-move-text").width();
    if(width_div_animate_motion_text > 1005){
        $(".motion-move-text").addClass('start-motion-move-text');
    }

    $('.move-form-question-doctor').click(function() {
        $('html').animate({
            scrollTop: $("#collapse_froum").offset().top
        }, 100);
    });

    $(document).off('click','.btn-questions');
    $(document).on('click','.btn-questions',function (){
        let val_aria_expanded = $(this).attr('aria-expanded');
        if(val_aria_expanded == 'true'){
            $(this).attr('aria-expanded','false');
            $(this).find("i").removeClass('fa-chevron-up').addClass('fa-chevron-down');
        }else {
            $(this).attr('aria-expanded','true');
            $(this).find("i").removeClass('fa-chevron-down').addClass('fa-chevron-up');
        }
    });
});
