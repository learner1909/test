

const listitems = document.querySelectorAll(".list-item");
const media = window.matchMedia("(min-width:1000px)");
const navbtn = document.getElementById("navbtn");


function togglenav() {
    listitems.forEach(item => item.classList.toggle("hide"));
}

function myfunc() {
    if (media.matches) {
        navbtn.classList.add("hide");
        listitems[0].classList.remove("mt-2");
    } else {
        navbtn.classList.remove("hide");
        listitems[0].classList.add("mt-2");
    }
}

media.addListener(myfunc);