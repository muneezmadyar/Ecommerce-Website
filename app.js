
    document.addEventListener("DOMContentLoaded", function () {
        const loginButton = document.getElementById("loginButton");

        if (localStorage.getItem("userLoggedIn") === "true") {
            loginButton.innerText = "Logout"; // ✅ Button text change hoga
            loginButton.addEventListener("click", function () {
                localStorage.setItem("userLoggedIn", "false"); // ✅ Logout hone pe data change
                alert("Logged out successfully!");
                window.location.href = "index.html"; // ✅ Wapis homepage pe bhej do
            });
        } else {
            loginButton.addEventListener("click", function () {
                window.location.href = "login.html"; // ✅ Login page pe redirect
            });
        }
    });
