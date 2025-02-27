document.addEventListener("DOMContentLoaded", function() {
    let lastScrollTop = 0;
    const menu = document.querySelector(".menu");

    window.addEventListener("scroll", function() {
        let scrollTop = window.scrollY;

        if (scrollTop > lastScrollTop) {
            menu.style.top = "-80px"; // Oculta el menú
        } else {
            menu.style.top = "0"; // Muestra el menú
        }
        lastScrollTop = scrollTop;
    });

    const menuIcon = document.querySelector(".menu-icono");
    const navbar = document.querySelector(".navbar");

    menuIcon.addEventListener("click", function() {
        navbar.classList.toggle("active");
    });

    // MENÚ QUE SE OCULTA AL HACER SCROLL
    window.addEventListener("scroll", function() {
        let scrollTop = window.scrollY;
        menu.style.top = (scrollTop > lastScrollTop) ? "-80px" : "0";
        lastScrollTop = scrollTop;
    });

    // ANIMACIONES AL HACER SCROLL
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll(".txt, .testi-slide").forEach(element => {
        observer.observe(element);
    });

    // MODO OSCURO
    document.getElementById("dark-mode-toggle").addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
    });
});