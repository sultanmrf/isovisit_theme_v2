$(document).ready(function (){

    $("a[data-bs-toggle='pill']").click(function (event) {
        event.target // newly activated tab
        $(this).addClass('active');
        let id =$(this).attr('id');
        $("a").not('#' + id +'').removeClass('active');
    })

    initMenuProfile();

});
