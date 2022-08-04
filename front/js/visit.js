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
});
