$(document).ready(function() {
    $("#btnSubmit").click(function() {

        var email = $("#email").val();
        var username = $("#username").val();
        var password = $("#txtPassword").val();
        var cpassword = $("#txtretypePassword").val();
        
        if (email == '' || password == '' || password == '' || cpassword == '' ) {
            alert("Please fill in all field");
        }

        if ( (password.length) < 4) {
            alert("Passwords should be at least 4 characters.");
        }

        if (username == '' || password == '' || password == '' || cpassword == '' ) {
            alert("Please fill in all field");
        }

           if (password == '' || password == '' || password == '' || cpassword == '' ) {
            alert("Please fill in all field");
        }

           if (cpassword == '' || password == '' || password == '' || cpassword == '' ) {
            alert("Please fill in all field");
        }

    });
});