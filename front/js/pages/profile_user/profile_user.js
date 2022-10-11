$(document).ready(function (){

    /* when load end in size mobile this code start
    *  location : class .profile-menu
    * */
    if(check_size_media(false,576)){
        window.addEventListener('load', function() {
            let size_move_one = 285,
                size_move_two = 435;
            $(".menu-profile .nav-link").each(function (tab,tag){
                if((tab === 3 || tab === 4) && $(tag).hasClass("active")){
                    $(".swiper-wrapper").css("transform","translate3d("+`${size_move_one}` + 'px' +",0px, 0px)");
                }else if((tab === 5 || tab === 6) && $(tag).hasClass("active")){
                    $(".swiper-wrapper").css("transform","translate3d("+`${size_move_two}` + 'px' +",0px, 0px)");
                }
            })
        })
    }

    $("a[data-bs-toggle='pill']").click(function () {
        $(this).addClass('active');
        let id =$(this).attr('id');
        $("a").not('#' + id +'').removeClass('active');
    })
    /* section copy link in clipboard start */
    new ClipboardJS('.btn-copy-link');

    $(document).on('click','.btn-copy-link',function (){
        $('.tooltip-text').addClass('tooltip-active');
        setTimeout(function (){
            $(".tooltip-text").removeClass('tooltip-active');
        },2500)
    })
    /* section copy link in clipboard end */

    initMenuProfile();

    initValidation("#form_ticket",{
        title_ticket: "required",
        description_ticket: "required",
        file_ticket: "required",
        code_security_ticket: "required"
    }, {
        title_ticket: "موضوع تیکت الزامی است",
        description_ticket: "پیام تیکت الزامی است",
        file_ticket: "تصویر تیکت الزامی است",
        code_security_ticket: "کد امنیتی الزام است"
    });

    initValidation("#form_profile",{
        first_name: "required",
        last_name: "required",
        title_user: "required",
        code_national: {
            required: true,
            maxlength: 10
        },
        gender: "required",
        birth: "required",
        height: "required",
        width: "required",
        province: "required",
        city: "required",
    }, {
        first_name: "نام الزامی است",
        last_name: "نام خانوادگی الزامی است",
        title_user: "عنوان کاربر الزامی است",
        code_national:{
            required: "کد ملی الزامی است",
            maxlength: "کد ملی باید 10 رقم باشد"
        },
        gender: "جنسیت الزامی است",
        birth: "سال تولد الزامی است",
        height: "قد الزامی است",
        width: "وزن الزامی است",
        province: "استان الزامی است",
        city: "شهر الزامی است",
    });

    initValidation("#form_info_transaction",
        {
            account_no: "required",
            shaba_no: {
                required: true,
                minlength: 24
            },
        },{
            account_no: "شماره حساب الزامی است",
            shaba_no: {
                required: "شماره شبا الزامی است",
                minlength: "شماره شبا باید 24 رقم باشد"
            },
        });

    initValidation("#form_Info_complete_doctor",{
        specialty: "required",
        education: "required",
        medical_system_code: "required",
        year_work_doctor: "required",
        biography: "required",
        img_card_national_doctor: "required",
        img_result_doctor: "required",
        img_system_license_doctor: "required",
    },{
        specialty: "تخصص الزامی است",
        education: "تحصیلات الزامی است",
        medical_system_code: "کد نظام پزشکی الزامی است",
        year_work_doctor: "سال شروع به کار پزشکی الزامی است",
        biography: "بیوگرافی الزامی است",
        img_card_national_doctor: "عکس کارت ملی پزشک",
        img_result_doctor: "عکس رزومه پزشک",
        img_system_license_doctor: "عکس مجوز نظام پزشکی الزامی است",
    })

    initValidation("#form_send_message_secretary",
        {
            counseling: "required",
            description_message: "required",
        },
        {
            counseling: "انتخاب مشاوره الزامی است",
            description_message: "پیام الزامی است",
        })

    initValidation("#form_question_answer",
        {
            height: "required",
            weight: "required",
            births: "required",
            category: "required",
            title_question:{
                required: true,
                maxlength: 150
            },
            description_question_answer:{
                required: true,
                maxlength: 650
            },
            code_security_question_answer:"required",
            rules_check:"required",
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
            description_question_answer: {
                required:"توضیحات خود را وارد کنید",
                maxlength: "حداکثر کاراکتر ها باید 650 باشد"
            },
            code_security_question_answer: "کد امنیتی را وارد کنید",
            rules_check: "این فیلد نمی تواند خالی باشد",
        });

    initValidation("#form_upload",
        {
            description_comment: "required",
        },
        {
            description_comment: " نظرات الزامی است",
        });

    /* validation form question answer start */
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
    /* validation form question answer end */

    /* if hover in menu profile_user in code start */
    $(document).on('click','.list-icon-profile span[role="button"]',function (){
        let title_img = $(this).data('title_img');
        $(".img-box-profile img").attr('src',"../../images/profile_user/" + title_img + ".png")
    });

    /* section modal info complete doctor start */
    $(document).on('click','.add-specialty',function (){
       $("#info_complete_doctor_modal form > .row").prepend("<div class=\"col-12\">\n" +
           "                                    <label for=\"specialty\" class=\"form-label iso-font-md-em mb-1 fw-normal\">تخصص</label>\n" +
           "                                    <select class=\"form-select form-select-category iso-font-xs-em fw-normal text-secondary border-radius\" id=\"specialty\" name=\"specialty\">\n" +
           "                                        <option value=\"\">تخصص خود را انتخاب کنید</option>\n" +
           "                                    </select>\n" +
           "                                    <span class=\"error_specialty error mt-1\"></span>\n" +
           "                                </div>\n" +
           "                                <div class=\"col-12\">\n" +
           "                                    <label for=\"education\" class=\"form-label iso-font-md-em mb-1 fw-normal\">تحصیلات</label>\n" +
           "                                    <input type=\"text\" class=\"form-control iso-font-xs-em fw-normal text-secondary border-radius valid border-radius text-start\" id=\"education\" placeholder=\"تحصیلات خود را انتخاب کنید\" value=\"\" name=\"education\">\n" +
           "                                    <span class=\"error_education error mt-1\"></span>\n" +
           "                                </div>")
    });


    $(document).on('click','.add-file',function (){
        $(".files-input .row").append("<div class=\"col-12\">\n" +
            "                                    <label for=\"poster_video_about_doctor\" class=\"form-label iso-font-md-em iso-font-md-em fw-normal\">عنوان فایل<span class=\"text-muted iso-font-sm-em mx-1\">(اختیاری)</span> </label>\n" +
            "                                    <input class=\"form-control iso-font-md-em fw-normal text-secondary\" type=\"file\" id=\"poster_video_about_doctor\" name=\"poster_video_about_doctor\">\n" +
            "                                </div>")
    });
    /* section modal info complete doctor end */

    $(document).on('click','.filter-consultants button',function (){
        let val_aria_select = $(this).attr('aria-selected');
        if(val_aria_select === "true"){
            $(this).attr('aria-selected',false)
        }else{
            $(this).attr('aria-selected',true).removeClass('active');
            $(".tab-pane").find('.active').removeClass(['show','active']);
            $("#pills_all_consultants").addClass(['show','active']);
        }
    });

    /* section list interest start */
    $(document).on('click','.delete-interest',function (){
       $(this).parent().remove();
    });
    /* section list interest end */
});
