//signup 


document.getElementById("signup-form").addEventListener("submit", (event) => {

    event.preventDefault();
    let name = document.getElementById("name").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let userEmail = document.getElementById("userEmail").value;

    if (password !== confirmPassword){
        alert("passwords not match");
        return;
    }
    const user = {
        name: name,
        username: username,
        password: password,
        userEmail: userEmail,
    };
    localStorage.setItem(userEmail, JSON.stringify(user));
    alert("Registration successful! please login.");
    window.location.href = "login.html";
});


