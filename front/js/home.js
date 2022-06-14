$(document).ready(function (){

    $('.svg-doctors').attr('viewBox','-20 18 500 397');
    $('.svg-articles').attr('viewBox','-50 134 500 400');
    $('.svg-comment-users').attr('viewBox','-20 15 500 400');
    $('.svg-medicines').attr('viewBox','-40 163 550 317');


    if (check_size_media(992,false)) {
        $('.svg-doctors').attr('viewBox','-20 0 500 397');
        $('.svg-articles').attr('viewBox','25 0 450 400');
        $('.svg-comment-users').attr('viewBox','-20 15 500 400');
        $('.svg-medicines').attr('viewBox','0 100 500 317');
    }

    initMedicineSwiper();
    initCommentsUsersSwiper();
    initDoctorsSwiper();
    initSpecialtySwiper();
    initServicesSwiper();
    initQuestionAnswerSwiper();
    initArticleSwiper();


});
