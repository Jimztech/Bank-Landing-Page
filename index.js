const main = document.querySelector(".main");
const openMenu = document.querySelector(".open-menu");
const navbar = document.querySelector(".nav-links");
const requestBtn = document.querySelector(".btn");
const body = document.body;

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
});

// New Page powered by requestBtn.
requestBtn.addEventListener("click", function(event) {
    event.preventDefault();

    body.innerHTML = `
        <main id="second-main">
            <div class="img-container">
                <img src="./images/logo.svg" alt="logo">
            </div>

            <div class="form-design">
                <form action="sign-up">
                    <div class="input-wrapper">
                        <span class="error-message" id="fname-error"></span>
                        <input type="text" id="fname" placeholder="Enter Your Name" required>
                    </div>

                    <div class="input-wrapper">
                        <span class="error-message" id="email-error"></span>
                        <input type="email" name="email-address" id="email" placeholder="Email" required>
                    </div>

                    <div class="input-wrapper">
                        <input type="number" name="age" placeholder="age" required>
                    </div>

                    <div class="submit-wrapper">
                        <input type="submit" id="submit" value="Submit">
                    </div>
                </form>
            </div>
        </main>
    `
})