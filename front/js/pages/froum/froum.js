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
});
