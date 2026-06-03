// By Id (for single password field)
// const passwordInput = document.getElementById("password");
// const togglePassword = document.getElementById("togglePassword");

// togglePassword.addEventListener("click", () => {
//     const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
//     passwordInput.setAttribute("type", type);

//     // Toggle icon style (optional)
//     togglePassword.classList.toggle("fa-eye");
//     togglePassword.classList.toggle("fa-eye-slash");
// });

// By Class (for multiple password fields)
const passwordInputs = document.querySelectorAll(".password");
const toggleButtons = document.querySelectorAll(".password-toggle");

toggleButtons.forEach((toggleBtn, index) => {
toggleBtn.addEventListener("click", () => {
    const input = passwordInputs[index];
    const type = input.getAttribute("type") === "password" ? "text" : "password";
    input.setAttribute("type", type);

    // Toggle icon style
    toggleBtn.classList.toggle("fa-eye");
    toggleBtn.classList.toggle("fa-eye-slash");
});
});