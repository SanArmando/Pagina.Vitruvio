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
    });

    
document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.querySelector(".menu-icono");
    const navbar = document.querySelector(".navbar");

    menuIcon.addEventListener("click", function() {
        navbar.classList.toggle("active");
    });

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
    });
    