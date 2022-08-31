$(document).ready(function (){
    $(document).on('click','.more-description',function (){
        let val_aria_expanded = $(this).attr('aria-expanded');
        if(val_aria_expanded == "true"){
            $(this).attr("aria-expanded","false");
            $(".text-description-editor").css('height','14.375em');
            $(".section-consulting .section-footer span").text('بیشتر');
            $(".section-consulting .section-footer i").addClass('fa-chevron-down').removeClass('fa-chevron-up');
        }else{
            $(this).attr("aria-expanded","true");
            $(".text-description-editor").css('height','auto');
            $(".section-consulting .section-footer span").text('بستن');
            $(".section-consulting .section-footer i").addClass('fa-chevron-up').removeClass('fa-chevron-down');
        }
    })

    /* svg star doctors start */
    $(".doctor-number-star-rating").starRating({
        readOnly: true,
        emptyColor:'#ffc107',
        starSize: 18,
        totalStars: 1,
    });
    /* svg star doctors end */

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

    /* js section operation comment start */
    $(document).off('click','.btn-accepted');
    $(document).on('click','.btn-accepted',function (){
        let val_aria_expanded = $(this).attr('aria-expanded');
        if(val_aria_expanded == 'true'){
            $(this).attr('aria-expanded','false').removeClass(['btn-outline-success','border-success']).addClass('btn-outline-secondary');
            $(this).find("i").removeClass(['fa-check','text-success']).addClass('fa-ban');
        }else {
            $(this).attr('aria-expanded','true').addClass('border-success').removeClass('btn-outline-secondary');
            $(this).find("i").addClass(['fa-check','text-success']).removeClass('fa-ban');
        }
    });
    /* js section operation comment end */

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
});
