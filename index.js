const main = document.querySelector(".main");
const openMenu = document.querySelector(".open-menu");
const navbar = document.querySelector(".nav-links");

openMenu.addEventListener("click", () => {
    if(navbar.style.display === "flex") {
        navbar.style.display = "none";
        openMenu.src = "./images/icon-hamburger.svg"
    } else {
        navbar.style.display = "flex";
        openMenu.src = "./images/icon-close.svg"
    }
});

main.addEventListener("click", () => {
    if(navbar.style.display === "flex") {
        navbar.style.display = "none";
        openMenu.src = "./images/icon-hamburger.svg";
    }
})