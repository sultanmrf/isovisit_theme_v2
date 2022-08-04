$(document).ready(function (){

    if(check_size_media(false,576)) {
        $('.svg-stories-personal-files').attr('viewBox','50 0 500 500');
        $('.svg-stories-mobile-development').attr('viewBox','-50 0 500 500');
        $('.svg-stories-business-deal').attr('viewBox','40 126 400 300');
    }

    initCommentDoctorsSwiper();

    initValidation("#form",
        {first_and_last_name:"required",
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
            code_security:"required"}
        ,{
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

        });

});
