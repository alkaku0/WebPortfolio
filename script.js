document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "jakubpietrula789") {
        window.location.href = "index.html";
    } else {
        alert("Wrong login infor!");
    }
});
