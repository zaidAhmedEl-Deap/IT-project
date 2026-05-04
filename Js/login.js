 // =======================
// SELECT ELEMENTS
// =======================
const form = document.querySelector(".login__form");
const emailInput = document.querySelector(".login__input--email");
const passwordInput = document.querySelector(".login__input--password");
const toggleBtn = document.querySelector(".login__toggle");

// navbar
const loggedOutView = document.getElementById("logged-out-view");
const loggedInView = document.getElementById("logged-in-view");
const userNameDisplay = document.getElementById("user-name-display");
const logoutBtn = document.getElementById("nav-logout-btn");

// =======================
// SHOW / HIDE PASSWORD
// =======================
toggleBtn.addEventListener("click", () => {
if (passwordInput.type === "password") {
passwordInput.type = "text";
toggleBtn.textContent = "Hide";
} else {
passwordInput.type = "password";
toggleBtn.textContent = "Show";
}
});

// =======================
// LOGIN FUNCTION
// =======================
form.addEventListener("submit", (e) => {
e.preventDefault();

const email = emailInput.value.trim();  
const password = passwordInput.value.trim();  

// Validation  
if (email === "" || password === "") {  
    alert("Please fill all fields");  
    return;  
}  

if (password.length < 6) {  
    alert("Password must be at least 6 characters");  
    return;  
}  

// FAKE LOGIN (save user)  
const user = {  
    email: email,  
    name: email.split("@")[0]  
};  

localStorage.setItem("user", JSON.stringify(user));  

alert("Login successful ✅");  

updateNavbar();  

// تحويل لصفحة الهوم  
window.location.href = "home.html";

});

// =======================
// UPDATE NAVBAR
// =======================
function updateNavbar() {
const user = JSON.parse(localStorage.getItem("user"));

if (user) {  
    loggedOutView.classList.add("u-hidden");  
    loggedInView.classList.remove("u-hidden");  
    userNameDisplay.textContent = user.name;  
} else {  
    loggedOutView.classList.remove("u-hidden");  
    loggedInView.classList.add("u-hidden");  
}

}

// =======================
// LOGOUT
// =======================
logoutBtn.addEventListener("click", () => {
localStorage.removeItem("user");
updateNavbar();
window.location.href = "login.html";
});

// =======================
// ON LOAD
// =======================
updateNavbar();