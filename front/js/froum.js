$(document).ready(function () {

    let width_div_animate_motion_text = $(".motion-move-text").width();
    if(width_div_animate_motion_text > 1005){
        $(".motion-move-text").addClass('start-motion-move-text');
    }

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

    // $(".submit-btn").click(function (){
    // });

    $("#form").validate({
        focusCleanup: true,
        onfocusout: false,
        rules:{
            height:{
                required: true
            },
            weight:{
                required: true
            },
            births:{
                required: true
            },
            category:{
                required: true
            },
            title_question:{
                required: true,
                maxlength: 150
            },
            description:{
                required: true,
                maxlength: 650
            },
            code_security:{
                required: true
            },
            rules_check:{
                required: true
            }
        },
        messages: {
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
            rules_check: "این فیلد نمی تواند خالی باشد",
        },
        errorElement : 'div',
        showErrors: function(errorMap, errorList) {
            if(errorList.length > 0){
                for(let x in errorList){
                    $(".error-" + errorList[x].element.name).html(errorList[x] ? errorList[x].message : '');
                    $(errorList[x].element).addClass('is-invalid').removeClass('is-valid');
                }
            }else{
                  $(this.lastActive).addClass('is-valid').removeClass('is-invalid');
                  $(".error-" + this.lastActive.name).html('');
            }
            // this.defaultShowErrors();
            $("#gender-error").remove();
            $("#gender1,#gender2").removeClass('error');
        },

    });


});
