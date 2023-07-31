$(document).ready(function(){

    $("#RForm").validate({
        rules: {
            username: {
                required: true,
            },
            email: {
                required: true,
                email: true
            },
            password: { 
                required: true,
                minlength: 8,
                alphaNumeric: true,
            },
            passwordAuth: {
                required: true,
                minlength: 8,
                alphaNumeric: true,
                equalTo: "#password"
            },
            firstname: {
                required: true,
                lettersOnly: true
            },
            lastname: {
                required: true,
                lettersOnly: true
            },
            birthDate: {
                required: true,
                date: true
            },
        },

        messages: {
            username: {
                required: "Username is missing!",
            },
            email: {
                required: "Email is missing!",
                email: "Email is not valid!"
            },
            password: {
                required: "Password is missing!",
                minlength: "Password must be at least 8 characters!",
                alphaNumeric: "Password must contain only letters and numbers!"
            },
            passwordAuth: {
                required: "Password is missing!",
                minlength: "Password must be at least 8 characters!",
                alphaNumeric: "Password must contain only letters and numbers!",
                equalTo: "Password doesn't match!"
            },
            firstname: {
                required: "First name is missing!",
            },
            lastname: {
                required: "Last name is missing!",
            },
            birthDate: {
                required: "Birth date is missing!",
                date: "The date must be valid!"
            }
        },

        errorPlacement: function (error, element) {
        error.insertAfter(element)
        .wrap('<p><span class="errorContainer"><span class="arrow"></span></span></p>');
        },

        submitHandler: function(event){
            submitRegister();
        }

    });

});




$.validator.addMethod("alphaNumeric",function(value) {
    return /^[A-z0-9\d=!\-@._*]*$/.test(value) && /[A-z]/.test(value) && /\d/.test(value);}, "Must contain only letters and numbers");

$.validator.addMethod("lettersOnly", function(value, element) {
    return this.optional(element) || /^[a-z ]+$/i.test(value);}, "Must contain only letters");



function submitRegister(){
    let $inputs = $('#RForm input');
    let info = {};
    $inputs.each(function() {
        info[this.name] = $(this).val();
    });

    addUser(info["username"], info["email"], info["password"], info["firstname"], info["lastname"], info["birthDate"]);
    loginPage();
    clearRegPage();
}



