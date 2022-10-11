$(document).ready(function (){
    /* section get advice start */
    $(".text-link").each(function (){
        if($(this).text().length > 28 ){
            $(this).find("~ span").addClass(['w-100','text-end','mt-1']);
            $(".section-get-advice .btn-group").append($(this).parents(".col-xxl-6"));
        }
    });
    /* section get advice start */

    lightbox.option({
        'positionFromTop': 250
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

    $(".doctor-star-rating").starRating({
        readOnly: true,
        emptyColor:'#ffc107',
        starSize: 25
    });

    $(".star_rate_doctor").starRating({
        readOnly: true,
        emptyColor:'#ffc107',
        starSize: 25
    });

    /* swiper slider doctors section video introduction doctor start*/
    initGalleryDoctorSwiper();
    /* swiper slider doctors section video introduction doctor end*/

    /*نمایش ادرس دکتر در نقشه گوگل*/
    show_map('contact_map',36.312416, 59.553421)

    /* edit location div section get advice in size mobile start */
    if(check_size_media(false,768)){
        let section_get_advice =  $(".section-get-advice");
        section_get_advice.removeClass(['position-sticky', 'top-0']);
        $(".section-data-profile-doctor").after(section_get_advice);
    }
    /* edit location div section get advice in size mobile end */

    /* js section about doctors start */
    $(document).off('click','.more-info-doctors');
    $(document).on('click','.more-info-doctors',function (){
        let val_aria_expanded = $(this).attr('aria-expanded');
        if(val_aria_expanded == 'true'){
            $(this).attr('aria-expanded','false');
            $(".section-about-doctor .card-body").css('height','12.5em');
            $(this).find("span").text('نظرات بیشتر');
            $(this).find("i").removeClass('fa-chevron-up').addClass('fa-chevron-down');
        }else {
            $(this).attr('aria-expanded','true');
            $(".section-about-doctor .card-body").css('height','auto');
            $(this).find("span").text('بستن');
            $(this).find("i").removeClass('fa-chevron-down').addClass('fa-chevron-up');

        }
    });
    /* js section about doctors end */

    /* animation active and disable love start */
    $(document).on('click','.love',function (){
        let val_aria_expanded = $(this).attr('aria-expanded');
        let counter_live = $(this).find('~ span').text();
        if(val_aria_expanded == 'true'){
            $(this).attr('src','../../images/icons/love.png').addClass('love-disabled').removeClass('love-active');
            $(this).attr('aria-expanded','false');
            $(this).find('~ span').text(--counter_live);
        }else {
            $(this).attr('src','../../images/icons/love-active.png').addClass('love-active').removeClass('love-disabled');
            $(this).attr('aria-expanded','true');
            $(this).find('~ span').text(++counter_live);
        }
    });
    /* animation active and disable love end */

    $(document).on('click','.more-comment',function (){
        $(".section-comments-users .parent-comment-more").append('<div class="col-12 p-0 mt-2">\n' +
            '                    <div class="card p-2 bg-light border-radius">\n' +
            '                        <div class="card-header border-0 p-0 bg-transparent fw-normal text-center">\n' +
            '                            <figure class="figure d-flex align-items-center">\n' +
            '                                <img src="../../images/doc3.jpg" class="figure-img m-0 rounded-circle img-md" alt="...">\n' +
            '                                <figcaption class="figure-caption fw-normal d-flex flex-column iso-font-md-em iso-color-dark mx-2">\n' +
            '                                    <span class="iso-font-sm-em text-start">محمد رضا فنودی</span>\n' +
            '                                    <div class="row gx-2 iso-font-xs-em mt-1 fw-normal">\n' +
            '                                        <span class="col text-nowrap border-radius alert-secondary">کاربر مهمان</span>\n' +
            '                                        <span class="col">1400/11/15</span>\n' +
            '                                    </div>\n' +
            '                                </figcaption>\n' +
            '                            </figure>\n' +
            '                            <div class="line-muted-dashed"></div>\n' +
            '                        </div>\n' +
            '                        <div class="card-body pt-0 mt-2 px-1">\n' +
            '                            <div class="card-text iso-font-md-em fw-normal">\n' +
            '                                <p>من برای حملات پنیک که بعد از کرونا دچار شدم مشاوره میخواستم کدوم یکی رو باید انتخاب کنم برای مشاوره ؟ کرونام خوب شده وای حملات پنیک بهم دست میده  </p>\n' +
            '                            </div>\n' +
            '                        </div>\n' +
            '                        <div class="card-footer bg-transparent border-0 p-0">\n' +
            '                            <div class="row d-flex justify-content-between">\n' +
            '                                <div class="col-6 d-flex align-items-center">\n' +
            '                                    <img src="../../images/icons/love.png" class="love pointer-event" role="button" aria-expanded="false" alt="پسندیدم">\n' +
            '                                    <span class="mx-2">3</span>\n' +
            '                                </div>\n' +
            '                                <div class="col-6">\n' +
            '                                    <button class="btn w-100 border-radius text-light iso-font-md-em iso-bg-blue-dark active-btn">پاسخ</button>\n' +
            '                                </div>\n' +
            '                            </div>\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                </div>');
    });

    /* validation comments start */
    initValidation("#form_comments",{
            first_and_last_name: "required",
            phone: "required",
            description: "required",
            code_security: "required",
        },
        {
            first_and_last_name: "نام و نام خانوادگی الزامی است",
            phone: "شماره موبایل الزامی است",
            description: "توضیحات نظر الزامی است",
            code_security: "کد امنیتی الزامی است",
        });
    /* validation comments end */

    /* validation form send message start */
    initValidation("#form_tag",{
            doctor_title: "required",
        },
        {
            doctor_title: "نام پزشک الزامی است",
        });
    /* validation form send message end */

    /* validation form answer comment start */
    initValidation("#form_answer_comment",{
            first_and_last_name_comment: "required",
            text_comment: "required",
        },
        {
            first_and_last_name_comment: "نام و نام خانوادگی الزامی است",
            text_comment: "متن نظر الزامی است",
        });

    initValidation("#form_answer_comment_two",{
            first_and_last_name_comment_two: "required",
            text_comment_two: "required",
        },
        {
            first_and_last_name_comment_two: "نام و نام خانوادگی الزامی است",
            text_comment_two: "متن نظر الزامی است",
        });
    /* validation form answer comment end */


    /* validation comment user for doctor start */
    initValidation("#form_comment",{
            comment: "required",
        },
        {
            comment: "متن نظر الزامی است و باید حداقل 5 کاراکتر باشد",
        });
    /* validation comment user for doctor start */
});
