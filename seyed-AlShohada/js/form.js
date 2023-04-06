// Get the login and register buttons
const loginBtn = document.getElementById("login-btn");
const registerBtn = document.getElementById("register-btn");

// Get the login and register forms
const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");

// Hide the register form initially
registerForm.style.display = "none";

// Add event listeners to the login and register buttons
loginBtn.addEventListener("click", () => {
  // Hide the register form
  registerForm.style.display = "none";
  loginBtn.style.borderBottom = "5px solid #BEAE27";
  registerBtn.style.borderBottom = "none";
  // Show the login form
  loginForm.style.display = "block";
});

registerBtn.addEventListener("click", () => {
  // Hide the login form
  loginForm.style.display = "none";
  loginBtn.style.borderBottom = "none";
  registerBtn.style.borderBottom = "5px solid #BEAE27";
  // Show the register form
  registerForm.style.display = "block";
});
