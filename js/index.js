const listitems = document.querySelectorAll(".list-item");
const media = window.matchMedia("(min-width:800px)");
const navbtn = document.getElementById("navbtn");
const navlist = document.getElementById("navlist");
  
function scrollToSection(that){
    id = $(that).attr("id");
    $(that).closest("ul").find('.active').removeClass('active');
    $(that).closest("li").addClass("active");
    $('html,body').animate({
        scrollTop: $("." + id).offset().top},'fast');
}


function togglenav() {
    listitems.forEach(item => item.classList.toggle("hide"));
    if (navlist.style.right == "0%") {
        navlist.style.right = "-120%";
    }
    else if(navlist.style.right == "50%")
        navlist.style.right = "-120%";
    else {
        navlist.style.right = "0%";
    }
    
}
