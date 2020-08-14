const navBar = document.querySelector(".navbar");
const navCenter = document.querySelector(".nav-center");

window.addEventListener("scroll", function() {
    var top = this.pageYOffset;
    if (top > 30) {
        navBar.classList.add("fixed");
        navCenter.classList.add("fixed");
    } else {
        navBar.classList.remove("fixed");
        navCenter.classList.remove("fixed");
    }
});