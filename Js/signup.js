//signup 
$(function () {
    $("#signup-form").validate({
        rules: {
            fullname: {
                required: true,
            },
            username: {
                required: true,

            },
            password: {
                required: true,
                minlength: 7
            },

            confirmPassword: {
                required: true,
                minlength: 7,
                equalTo: "#password"
            },
            userEmail: {
                required: true,
                email: true
            }
        },
        messages: {


            username: {
                required: "please enter your username",

            },
            password: {
                required: "please enter your password",
                minlength: "your password must be at least 7 characters long"
            },

            confirmPassword: {
                required: "please enter your password again",
                minlength: "your password must be at least 7 characters long",
                equalTo: "Both password and confirm password must be equal"
            },
            userEmail: {
                required: "please enter a valid email address",

            }
        },
        submitHandler: function (form, event) {
            event.preventDefault();
            let name = document.getElementById("name").value;
            let username = document.getElementById("username").value;
            let password = document.getElementById("password").value;
            let confirmPassword = document.getElementById("confirmPassword").value;
            let userEmail = document.getElementById("userEmail").value;




            const user = {
                name: name,
                username: username,
                password: password,
                userEmail: userEmail,
            };
            localStorage.setItem(userEmail, JSON.stringify(user));
            alert("Registration successful! please login.");
            window.location.href = "login.html";
            return false;
        }
    });

});






