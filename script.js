document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.querySelector(".menu-icono");
    const navbar = document.querySelector(".navbar");

    menuIcon.addEventListener("click", function() {
        navbar.classList.toggle("active");
    });
});
