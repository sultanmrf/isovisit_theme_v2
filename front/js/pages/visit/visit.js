$(document).ready(function (){
    $(document).on('keyup','#chat_message',function (){
        let length_chat_message = $(this).val().length;
        if(length_chat_message > 0){
            $(".icon-send").addClass("d-block").removeClass("d-none");
            $(".icon-paper").addClass("d-none");
            $(".icon-microphone").addClass("d-none");
        }else{
            $(".icon-send").removeClass("d-block").addClass("d-none");
            $(".icon-paper").removeClass("d-none");
            $(".icon-microphone").removeClass("d-none");
        }
    })

    /* package emojiArea */
    $("#chat_message").emojioneArea({
        pickerPosition: "top",
        tonesStyle: "textarea",
        placeholder: "پیام"
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
