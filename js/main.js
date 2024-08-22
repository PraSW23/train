document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.getElementById("registerForm");
    const loginForm = document.getElementById("loginForm");

    if (registerForm) {
        registerForm.addEventListener("submit", handleRegister);
    }

    if (loginForm) {
        loginForm.addEventListener("submit", handleLogin);
    }

    function handleRegister(event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const mobile = document.getElementById("mobile").value;
        const aadhar = document.getElementById("aadhar").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        const user = {
            username,
            email,
            mobile,
            aadhar,
            password,
        };

        localStorage.setItem("user", JSON.stringify(user));
        alert("Registration successful!");
        window.location.href = "login.html";
    }

    function handleLogin(event) {
        event.preventDefault();

        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("loginPassword").value;

        const storedUser = JSON.parse(localStorage.getItem("user"));

        if (storedUser && storedUser.email === email && storedUser.password === password) {
            alert("Login successful!");
            window.location.href = "home.html";
        } else {
            alert("Invalid email or password!");
        }
    }

    // Logic to handle home page data and other functionalities
    
});

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('bookTicketForm');
    const dialog = document.getElementById('confirmationDialog');
    const confirmButton = document.getElementById('confirmButton');
    const cancelButton = document.getElementById('cancelButton');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        dialog.classList.remove('hidden');
    });

    confirmButton.addEventListener('click', function () {
        
        dialog.classList.add('hidden');
        alert('Ticket booked successfully!'); 
    });

    cancelButton.addEventListener('click', function () {
        dialog.classList.add('hidden');
    });
});

