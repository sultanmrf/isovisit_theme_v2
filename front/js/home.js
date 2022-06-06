$(document).ready(function (){


    /* swiper main page */
    initSwiper(".swiper-medicines","auto",16,false, true,'.swiper-pagination-medicines');

    if (window.matchMedia("(min-width: 992px)").matches) {

        initSwiper(".swiper-doctors","auto",16,true, false);

        initSwiper(".swiper-specialty","auto",16,true, false);

        initSwiper(".swiper-services","auto",16,true, false);

        initSwiper(".swiper-comments-users","auto",16,true, false);

        initSwiper(".swiper-question-answer",4,16,true, false);

        initSwiper(".swiper-articles",3,16,true, false);

        initSwiper(".swiper-medicines","auto",16,true, false);


        $('.svg-doctors').attr('viewBox','-20 0 500 397');
        $('.svg-articles').attr('viewBox','25 0 450 400');
        $('.svg-comment-users').attr('viewBox','-20 15 500 400');
        $('.svg-medicines').attr('viewBox','0 100 500 317');

    }
     if(window.matchMedia("(max-width: 992px)").matches){

        initSwiper(".swiper-comments-users","auto",16,false, false);

        initSwiper(".swiper-doctors","auto",16,false, false);

        initSwiper(".swiper-specialty","auto",16,false, false);

        initSwiper(".swiper-services","auto",16,false, false);

        $('.svg-doctors').attr('viewBox','-20 18 500 397');
        $('.svg-articles').attr('viewBox','-50 134 500 400');
        $('.svg-comment-users').attr('viewBox','-20 15 500 400');
        $('.svg-medicines').attr('viewBox','-40 163 550 317');
    }


    if (window.matchMedia("(max-width: 576px)").matches){
        initSwiper(".swiper-question-answer",1,16,false, true,".swiper-pagination-question-answer");
        initSwiper(".swiper-articles",1,16,false, true,".swiper-pagination-article");
    }

    if (window.matchMedia("(min-width: 576px) and (max-width: 992px)").matches){
        initSwiper(".swiper-question-answer",2,16,false, true,".swiper-pagination-question-answer");
        initSwiper(".swiper-articles",2,16,false, true,".swiper-pagination-article");
    }



});
