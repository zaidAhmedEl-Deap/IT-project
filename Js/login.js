
//login page js part 

//show password start
$(function () {

    let PasswordStatus = false;

    document.getElementById("show-btn").addEventListener("click", () => {


        let passInput = document.getElementById("password");

        if (PasswordStatus === false) {
            passInput.setAttribute("type", "text");
            PasswordStatus = true;

        }
        else if (PasswordStatus === true) {
            passInput.setAttribute("type", "password");
            PasswordStatus = false;
        }
    });
});



//show password end

//validate user inputs start 

$(function () {
    $("#login-form").validate({
        rules: {

            password: {
                required: true,
                minlength: 7
            },


            userEmail: {
                required: true,
                email: true
            }
        },
        messages: {

            password: {
                required: "please enter your password",
                minlength: "your password must be at least 7 characters long"
            },

            userEmail: {
                required: "please enter a valid email address",

            }
        },
        errorClass: "form__error",
        errorElement: "span",



        submitHandler: function (form, event) {

            event.preventDefault();
            let userEmail = document.getElementById("userEmail").value;
            let password = document.getElementById("password").value;

            let user = localStorage.getItem(userEmail);

            if (user) {

                let parseduser = JSON.parse(user);
                if (parseduser.password === password) {
                    localStorage.setItem("user", JSON.stringify(parseduser));
                    window.location.href = "home.html";

                }
                else {
                    alert("Incorrect password!");
                }

            }
            else {
                alert("user not found");
            }
        }

    });
});

