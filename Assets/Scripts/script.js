$(document).ready(function(){
    $(".sign-btn").click(function(){
        $(".sign-btn").removeClass("active");
        $(this).addClass("active");

        var formShow = $(this).text().trim() === "Log In" ? ".log-in-form" : ".sign-up-form";
        $(formShow).removeClass("active");
        $(formShow).addClass("active");

        var formHide = formShow === ".log-in-form" ? ".sign-up-form" : ".log-in-form";
        $(formHide).removeClass("active");
    });

    $(".log-in-form form").submit(function(event){
        event.preventDefault();

        var formData = $(this).serialize();

        window.location.href = "user.html" + "?" + formData;
    });

    $(".sign-up-form form").submit(function(event){
        var password = $(".sign-up-form form input[name='password']").val();
        var confirmPassword = $(".sign-up-form form input[name='confirm_password']").val();

        if (password !== confirmPassword) {
            event.preventDefault();
            alert("Password and Confirm Password must be the same.");
        }

        else if(password === confirmPassword) {
            event.preventDefault();
            var formData = $(this).serialize();
    
            window.location.href = "user.html" + "?" + formData;
        }

    });
    
    var urlParams = new URLSearchParams(window.location.search);
    var user = urlParams.get('username');
    var password = urlParams.get('password');
    var email = urlParams.get('email');
    var conpass = urlParams.get('confirm_password');

    $("#username-data").text(user);
    $("#password-data").text(password);
    $("#email-data").text(email);
    $("#conpass-data").text(conpass);

    if (!urlParams.has('email')) {
        $("#email-data").parent().hide();
    }
    if (!urlParams.has('confirm_password')) {
        $("#conpass-data").parent().hide();
    }

});
