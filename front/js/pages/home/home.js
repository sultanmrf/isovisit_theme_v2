$(document).ready(function (){
    if (check_size_media(false,992)) {
        $('.svg-doctors').attr('viewBox','-20 18 500 397');
        $('.svg-articles').attr('viewBox','-80 134 500 400');
        $('.svg-comment-users').attr('viewBox','40 15 500 400');
        $('.svg-medicines').attr('viewBox','-80 163 550 317');
    }

    initCommentsUsersSwiper();
    initSpecialtySwiper();
    initServicesSwiper();
    initQuestionAnswerSwiper();
    initArticleSwiper();
    initDoctorsSwiper();
    initMedicineSwiper();
});
