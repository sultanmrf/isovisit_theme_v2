$(document).ready(function (){

    if(check_size_media(false,576)) {
        $('.svg-stories-personal-files').attr('viewBox','50 0 500 500');
        $('.svg-stories-mobile-development').attr('viewBox','-50 0 500 500');
        $('.svg-stories-business-deal').attr('viewBox','40 126 400 300');
    }

    initCommentDoctorsSwiper();

    $("#form").validate({
        focusCleanup: true,
        onfocusout: false,
        rules:{
            first_and_last_name:"required",
            mobile_number:{
                required: true,
                maxlength:11
            },
            medical_system_number:"required",
            national_code:{
                required: true,
                maxlength: 10
            },
            title_specialty:"required",
            code_security:"required"
        },
        messages: {
            first_and_last_name: " نام و نام خانوادگی الزامی است",
            mobile_number: {
                required: "شماره موبایل الزامی است",
                maxlength: "شماره موبایل باید 11 رقم باشد"
            },
            medical_system_number: "شماره نظام پزشکی الزامی است ",
            national_code:{
                required: "کد ملی  الزامی است",
                maxlength: "کد ملی باید 10 رقم باشد"
            } ,
            title_specialty: "عنوان تخصص الزامی است",
            code_security: "کد امنیتی الزامی است",

        },
        errorElement : 'div',
        showErrors: function(errorMap, errorList) {
            if(errorList.length > 0){
                for(let x in errorList){
                    $(".error_" + errorList[x].element.name).html(errorList[x] ? errorList[x].message : '');
                    $(errorList[x].element).addClass('is-invalid').removeClass('is-valid');
                }
            }else{
                $(this.lastActive).addClass('is-valid').removeClass('is-invalid');
                $(".error_" + this.lastActive.name).html('');
            }
        },

    });
});
