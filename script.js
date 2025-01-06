
const hamburger = document.getElementById("hamburger");
const list = document.getElementById("list");
const overlay = document.getElementById("overlay");
const icon = document.getElementById("icon");

hamburger.addEventListener("click", (e) => {
    e.preventDefault();
    list.classList.toggle("nav-list-active");
    overlay.classList.toggle("overlay-active");
    icon.classList.toggle("fa-xmark");
});

overlay.addEventListener("click", () => {
    list.classList.remove("nav-list-active");
    overlay.classList.remove("overlay-active");
});

// Contact page
function scrollToContact() {
    document.querySelector('.contact-section').scrollIntoView({ behavior: 'smooth' });
}
