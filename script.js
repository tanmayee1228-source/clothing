/* =========================================================
   BF DAY WEBSITE — MAIN JAVASCRIPT
   ========================================================= */


/* =========================================================
   HELPER FUNCTION
   ========================================================= */

function hideAllPages() {

    const pages = document.querySelectorAll(".page");

    pages.forEach(function(page) {
        page.style.display = "none";
    });

}


/* =========================================================
   PAGE 1 → PAGE 2
   CLOTHING AD → SURPRISE
   ========================================================= */

function showReveal() {

    hideAllPages();

    const revealPage = document.getElementById("reveal-page");

    revealPage.style.display = "flex";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================================
   PAGE 2 → PAGE 3
   SURPRISE → INTRO
   ========================================================= */

function showIntro() {

    hideAllPages();

    const introPage = document.getElementById("intro-page");

    introPage.style.display = "flex";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================================
   PAGE 3 → PAGE 4
   INTRO → REASONS
   ========================================================= */

function showReasons() {

    hideAllPages();

    const reasonsPage = document.getElementById("reasons-page");

    reasonsPage.style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================================
   PAGE 4 → PAGE 5
   REASONS → HIS PHOTOS
   ========================================================= */

function showHisPhotos() {

    hideAllPages();

    const photosPage = document.getElementById("his-photos-page");

    photosPage.style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================================
   PAGE 5 → PAGE 6
   HIS PHOTOS → OUR MEMORIES
   ========================================================= */

function showMemories() {

    hideAllPages();

    const memoriesPage = document.getElementById("memories-page");

    memoriesPage.style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================================
   PAGE 6 → PAGE 7
   MEMORIES → REASSURANCE
   ========================================================= */

function showReassurance() {

    hideAllPages();

    const reassurancePage =
        document.getElementById("reassurance-page");

    reassurancePage.style.display = "flex";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================================
   PAGE 7 → PAGE 8
   REASSURANCE → FINAL
   ========================================================= */

function showFinal() {

    hideAllPages();

    const finalPage =
        document.getElementById("final-page");

    finalPage.style.display = "flex";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================================
   INITIAL PAGE
   ========================================================= */

window.addEventListener("load", function() {

    hideAllPages();

    const clothingPage =
        document.getElementById("clothing-page");

    clothingPage.style.display = "flex";

});


/* =========================================================
   PREVENT BUTTONS FROM ACCIDENTALLY SUBMITTING FORMS
   ========================================================= */

document.addEventListener("DOMContentLoaded", function() {

    const buttons =
        document.querySelectorAll("button");

    buttons.forEach(function(button) {

        button.addEventListener("click", function(event) {

            event.preventDefault();

        });

    });

});
/* =========================================================
   PASSWORD PAGE
   ========================================================= */

const correctPassword = "lavasa";

const passwordPage = document.getElementById("password-page");
const passwordInput = document.getElementById("passwordInput");
const unlockButton = document.getElementById("unlockButton");
const passwordError = document.getElementById("passwordError");

function unlockWebsite() {

    const enteredPassword = passwordInput.value.trim().toLowerCase();

    if (enteredPassword === correctPassword) {

        passwordPage.classList.add("hidden");

        setTimeout(() => {
            passwordPage.style.display = "none";
        }, 600);

    } else {

        passwordError.textContent = "Hmm... that's not it 🤭";

        passwordInput.value = "";

        passwordInput.focus();
    }
}

unlockButton.addEventListener("click", unlockWebsite);

passwordInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        unlockWebsite();
    }

});
