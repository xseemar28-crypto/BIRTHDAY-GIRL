/* =====================================================
   PAGE LOAD
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const activePage =
            document.querySelector(
                ".page.active-page"
            );


        if (activePage) {

            activePage.classList.add(
                "page-ready"
            );

        }

    }
);


/* =====================================================
   AUDIO
===================================================== */

const birthdaySong =
    document.getElementById("birthdaySong");


if (birthdaySong) {

    birthdaySong.addEventListener(
        "play",
        () => {

            birthdaySong.classList.add(
                "playing"
            );

        }
    );


    birthdaySong.addEventListener(
        "pause",
        () => {

            birthdaySong.classList.remove(
                "playing"
            );

        }
    );

}
