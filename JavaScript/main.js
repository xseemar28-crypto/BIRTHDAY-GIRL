/* =====================================================
   PAGE MANAGEMENT
===================================================== */

const pages = {

    passwordPage:
        document.getElementById("passwordPage"),

    envelopePage:
        document.getElementById("envelopePage"),

    openedEnvelopePage:
        document.getElementById("openedEnvelopePage"),

    letterPage:
        document.getElementById("letterPage"),

    messagePage:
        document.getElementById("messagePage"),

    flowerPage:
        document.getElementById("flowerPage"),

    songPage:
        document.getElementById("songPage"),

    finalPage:
        document.getElementById("finalPage")

};


/* =====================================================
   SHOW PAGE
===================================================== */

function showPage(pageId) {

    Object.values(pages).forEach(page => {

        if (page) {

            page.classList.remove("active-page");

        }

    });


    const targetPage =
        document.getElementById(pageId);


    if (targetPage) {

        targetPage.classList.add("active-page");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }

}


/* =====================================================
   PASSWORD
===================================================== */

const correctPassword = "143";

let enteredPassword = "";


/* =====================================================
   ADD PASSWORD NUMBER
===================================================== */

function addPasswordNumber(number) {

    if (enteredPassword.length >= 3) {
        return;
    }


    enteredPassword += number;

    updatePasswordDisplay();


    if (enteredPassword.length === 3) {

        setTimeout(() => {

            checkPassword();

        }, 180);

    }

}


/* =====================================================
   CHECK PASSWORD
===================================================== */

function checkPassword() {

    if (enteredPassword === correctPassword) {

        clearPassword();

        showPage("envelopePage");

    } else {

        showErrorPopup();

    }

}


/* =====================================================
   PASSWORD DISPLAY
===================================================== */

function updatePasswordDisplay() {

    const dots =
        document.querySelectorAll(
            "#passwordDisplay span"
        );


    dots.forEach((dot, index) => {

        if (index < enteredPassword.length) {

            dot.classList.add("filled");

        } else {

            dot.classList.remove("filled");

        }

    });

}


/* =====================================================
   CLEAR PASSWORD
===================================================== */

function clearPassword() {

    enteredPassword = "";

    updatePasswordDisplay();

}


/* =====================================================
   ERROR POPUP
===================================================== */

const errorOverlay =
    document.getElementById("errorOverlay");

const tryAgainButton =
    document.getElementById("tryAgainButton");


function showErrorPopup() {

    if (errorOverlay) {

        errorOverlay.style.display = "flex";

    }

}


function closeErrorPopup() {

    if (errorOverlay) {

        errorOverlay.style.display = "none";

    }

    clearPassword();

}


if (tryAgainButton) {

    tryAgainButton.addEventListener(
        "click",
        closeErrorPopup
    );

}


/* =====================================================
   ENVELOPE
===================================================== */

function openEnvelope() {

    showPage("openedEnvelopePage");

}


/* =====================================================
   LETTER
===================================================== */

function openLetterPage() {

    showPage("letterPage");

}


/* =====================================================
   MESSAGE
===================================================== */

function openMessagePage() {

    showPage("messagePage");

}


/* =====================================================
   FLOWER
===================================================== */

function openFlowerPage() {

    showPage("flowerPage");

}


/* =====================================================
   SONG
===================================================== */

function openSongPage() {

    showPage("songPage");

}


/* =====================================================
   FINAL
===================================================== */

function openFinalPage() {

    showPage("finalPage");

}


/* =====================================================
   GO BACK
===================================================== */

function goBack(pageId) {

    if (pageId) {

        showPage(pageId);

    }

}
