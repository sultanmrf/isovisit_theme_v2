$(document).ready(function () {
    $(document).off('click','.btn-close-light-modal');
    $(document).on('click','.btn-close-light-modal',function (){
        $(".box-question-of-doctors-about-medicines .card")
            .animate({right:"-445px"},{easing: "linear"});
        $(".img-box-profile").attr('role','button');
    })

    if(check_size_media(false,768)){
        setTimeout(function (){
            $(".box-question-of-doctors-about-medicines .card")
                .animate({right:"-72px"},{easing: "linear"});
            $(".img-box-profile").removeAttr('role');

        },2000);

        $(document).off('click','.img-box-profile');
        $(document).on('click','.img-box-profile',function (){
            $(".box-question-of-doctors-about-medicines .card")
                .animate({right:"-72px"},{easing: "linear"});
            $(this).removeAttr('role');
        })
    }else {
        setTimeout(function () {
            $(".box-question-of-doctors-about-medicines .card")
                .animate({right: "132px"}, {easing: "linear"});
            $(".img-box-profile").removeAttr('role');

        }, 2000);
        $(document).off('click', '.img-box-profile');
        $(document).on('click', '.img-box-profile', function () {
            $(".box-question-of-doctors-about-medicines .card")
                .animate({right: "132px"}, {easing: "linear"}).removeAttr('role');
            $(this).removeAttr('role');
        })
    }

    initMedicineSwiper()
});