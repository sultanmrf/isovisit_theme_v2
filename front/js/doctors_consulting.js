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
});
