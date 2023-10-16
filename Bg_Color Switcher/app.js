const btns = document.querySelectorAll(".button");
const bgcolor = document.querySelector("body");

btns.forEach(function (button) {
    button.addEventListener("click", function (e) {
        if (e.target.id === "grey") {
            bgcolor.style.backgroundColor = e.target.id;
        }
        if (e.target.id === "white") {
            bgcolor.style.backgroundColor = e.target.id;
        }
        if (e.target.id === "blue") {
            bgcolor.style.backgroundColor = e.target.id;
        }
        if (e.target.id === "yellow") {
            bgcolor.style.backgroundColor = e.target.id;
        }
    });
});
