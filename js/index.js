const listitems = document.querySelectorAll(".list-item");
const media = window.matchMedia("(min-width:800px)");
const navbtn = document.getElementById("navbtn");
const navlist = document.getElementById("navlist");


function togglenav() {
    listitems.forEach(item => item.classList.toggle("hide"));
    if (navlist.style.right == "0%") {
        navlist.style.right = "-100%";
        document.getElementsByTagName("BODY")[0].style.overflow="auto";
    } else {
        navlist.style.right = "0%";
        document.getElementsByTagName("BODY")[0].style.overflow="hidden";
    }
}