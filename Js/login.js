
//login 

document.getElementById("login-form").addEventListener("submit", (event) => {
    event.preventDefault();
    let userEmail = document.getElementById("user-email").value;
    let password = document.getElementById("password").value;

    let user = localStorage.getItem(userEmail);

    if (user){
          
        let parseduser = JSON.parse(user);
        if(parseduser.password === password) {
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

} );
