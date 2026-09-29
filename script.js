const connect = document.getElementById("connect");
const status = document.getElementById("status");

const welcome = document.getElementById("welcome");
const apps = document.getElementById("apps");

connect.addEventListener("click", function () {

    connect.innerText = "Connected";
    connect.style.background = "#16a34a";

    status.innerText = "● Mobile connected";
    status.style.color = "#16a34a";

    welcome.classList.add("hidden");
    apps.classList.remove("hidden");

});