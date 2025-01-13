const main = document.querySelector(".main");
const openMenu = document.querySelector(".open-menu");
const navbar = document.querySelector(".nav-links");
const requestBtns = document.querySelectorAll(".btn");
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
requestBtns.forEach(btn => {
    btn.addEventListener("click", function(event) {
        event.preventDefault();
        loadSecondPage();
    });
});

function loadSecondPage() {
    body.innerHTML = `
        <main id="second-main">
            <div class="img-container">
                <img src="./images/logo.svg" alt="logo">
            </div>

            <div class="form-design">
                <form action="contact-form" id="contact-form">
                    <input type="hidden" name="contact_number" value="697483">
                    <div class="input-wrapper">
                        <span class="error-message" id="fname-error"></span>
                        <input type="text" name="user_name" id="fname" placeholder="Enter Your Name" required>
                    </div>

                    <div class="input-wrapper">
                        <span class="error-message" id="email-error"></span>
                        <input type="email" name="user_email" id="email" placeholder="Email" required>
                    </div>

                    <div class="input-wrapper">
                        <input type="number" name="age" placeholder="age" required>
                    </div>

                    <div class="submit-wrapper">
                        <input type="submit" id="submit" value="Submit" onclick="sendMail()">
                    </div>
                </form>
            </div>
        </main>
    `

    // Third page powered by the submitBtn.
    const userName = document.getElementById("fname");
    const emailAddress = document.getElementById("email");
    const submitBtn = document.getElementById("submit");

    submitBtn.addEventListener("click", function(event) {
        event.preventDefault();
    
        let isValid = true;

        // Validating Name.
        if(userName.value.trim() === "") {
            showError("fname-error", "Name cannot be empty!");
            isValid = false;
        } else {
            hideError("fname-error");
        }
    
        // Validating Email.
        if(!validateEmail(emailAddress.value)) {
            showError("email-error", "Looks like this is not an email");
            isValid = false;
        } else {
            hideError("email-error");
        }
    
        // Validating all fields
        if(isValid) {
            loadThirdPage();    
        } else {
            submitBtn.classList.add("disabled");
        }
    });

    function loadThirdPage() {
        body.innerHTML = `
            <div class="successful-page">
                <h1>Welcome to Easybank</h1>
                <p>
                    Thank you for signing up <strong>${userName.value.trim()}</strong><br>
                    An email has been sent to <strong>${emailAddress.value.trim()}</strong>
                </p>
            </div>
        `
    }

    document.getElementById("contact-form").addEventListener("submit", (e) => {
        e.preventDefault();
        sendMail();
    });
}


function showError(id, message) {
    const errorElement = document.getElementById(id);
    errorElement.textContent = message;
    errorElement.style.display = "block";
}

function hideError(id) {
    const errorElement = document.getElementById(id);
    errorElement.style.display = "none";
}

function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// EmailJs functionalities
emailjs.init({
    publickey: "rvnovK00iJVgvpzlJ",
});

/*
function sendMail() {
    let details = {
        user_name : document.getElementById("fname").value,
        user_email : document.getElementById("email").value,
    }
    emailjs.send("service_y7yv16d", "template_97dqfjn", details).then(alert("Email sent!!"));
}

*/

function sendMail() {
    const fnameInput = document.getElementById("fname");
    const emailInput = document.getElementById("email");

    if (!fnameInput || !emailInput) {
        alert("Form elements are not loaded yet!");
        return;
    }

    const details = {
        user_name: fnameInput.value,
        user_email: emailInput.value,
    };

    emailjs
        .send("service_y7yv16d", "template_97dqfjn", details)
        .then(() => {
            alert("Email sent successfully!");
        })
        .catch((error) => {
            console.error("Error sending email:", error);
            if (error && error.text) {
                alert("Failed to send email: " + error.text);
            } else {
                alert("Failed to send email. Please check your setup.");
            }
        });
}
