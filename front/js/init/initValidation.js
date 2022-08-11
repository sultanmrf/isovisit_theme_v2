/* show error custom by function show_error */
const show_error = function (errorMap, errorList) {
    if (errorList.length > 0) {
        for (let x in errorList) {
            $(".error_" + errorList[x].element.name).html(errorList[x] ? errorList[x].message : '');
            $(errorList[x].element).addClass('is-invalid').removeClass('is-valid');
        }
    } else {
        $(this.lastActive).addClass('is-valid').removeClass('is-invalid');
        $(".error_" + this.lastActive.name).html('');
    }
};

function initValidation(target,rules,messages){
    $(target).validate({
        focusCleanup: true,
        onfocusout: false,
        rules: rules,
        messages: messages,
        errorElement : 'div',
        showErrors: show_error
    });
}

