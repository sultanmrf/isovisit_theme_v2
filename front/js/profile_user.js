$(document).ready(function (){

    $("a[data-bs-toggle='pill']").click(function (event) {
        event.target // newly activated tab
        $(this).addClass('active');
        let id =$(this).attr('id');
        $("a").not('#' + id +'').removeClass('active');
    })

    initMenuProfile();

    const show_error =  function(errorMap, errorList) {
        if(errorList.length > 0){
            for(let x in errorList){
                $(".error_" + errorList[x].element.name).html(errorList[x] ? errorList[x].message : '');
                $(errorList[x].element).addClass('is-invalid').removeClass('is-valid');
            }
        }else{
            $(this.lastActive).addClass('is-valid').removeClass('is-invalid');
            $(".error_" + this.lastActive.name).html('');
        }
    };

    $("#form_ticket").validate({
        focusCleanup: true,
        onfocusout: false,
        rules:{
            title_ticket: "required",
            description: "required",
            file_ticket: "required",
            code_security: "required"
        },
        messages: {
            title_ticket: "موضوع تیکت الزامی است",
            description: "پیام تیکت الزامی است",
            file_ticket: "تصویر تیکت الزامی است",
            code_security: "کد امنیتی الزام است"
        },
        errorElement : 'div',
        showErrors:show_error
    });


    $("#form_profile").validate({
        focusCleanup: true,
        onfocusout: false,
        rules:{
            first_name: {
                required:true,
            },
            last_name: "required",
            title_user: "required",
            code_national: {
                required:true,
                maxLength:10
            },
            gender: "required",
            birth: "required",
            height: "required",
            width: "required",
            province: "required",
            city: "required",
        },
        messages: {
            first_name: "نام الزامی است",
            last_name: "نام خانوادگی الزامی است",
            title_user: "عنوان کاربر الزامی است",
            code_national:  {
                required: "کد ملی الزامی است",
                maxLength: "کد ملی باید 10 رقم باشد"
            },
            gender: "جنسیت الزامی است",
            birth: "سال تولد الزامی است",
            height: "قد الزامی است",
            width: "وزن الزامی است",
            province: "استان الزامی است",
            city: "شهر الزامی است",
        },
        errorElement : 'div',
        showErrors: show_error
    });

    $("#form_info_transaction").validate({
        focusCleanup: true,
        onfocusout: false,
        rules: {
            account_no: "required",
            shaba_no: "required",
        },
        messages: {
            account_no: "شماره حساب الزامی است",
            shaba_no: "شماره شبا الزامی است",
        },
        errorElement : 'div',
        showErrors: show_error
    });

    $("#form_Info_complete_doctor").validate({
        focusCleanup: true,
        onfocusout: false,
        rules: {
            specialty: "required",
            education: "required",
            medical_system_code: "required",
            year_work_doctor: "required",
            biography: "required",
            img_card_national_doctor: "required",
            img_result_doctor: "required",
            img_system_license_doctor: "required",
        },
        messages: {
            specialty: "تخصص الزامی است",
            education: "تحصیلات الزامی است",
            medical_system_code: "کد نظام پزشکی الزامی است",
            year_work_doctor: "سال شروع به کار پزشکی الزامی است",
            biography: "بیوگرافی الزامی است",
            img_card_national_doctor: "عکس کارت ملی پزشک",
            img_result_doctor: "عکس رزومه پزشک",
            img_system_license_doctor: "عکس مجوز نظام پزشکی الزامی است",
        },
        errorElement : 'div',
        showErrors: show_error
    });


    $(document).on('click','.list-icon-profile div[role="button"]',function (){
        let title_img = $(this).data('title_img');
        $(".img-box-profile img").attr('src',"./images/profile_user/" + title_img + ".png")
    });

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
});
