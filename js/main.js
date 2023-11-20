document.addEventListener("DOMContentLoaded", function() {
    // Menu
    const btnMenu = document.querySelector(".header__menu"),
        btnClose = document.querySelector(".header__close"),
        navMenu = document.querySelector(".header__nav"),
        navOverlay = document.querySelector(".nav-overlay"),
        body = document.querySelector("body");

    btnMenu.addEventListener("click", () => {
        openMenu(navMenu, "nav_active");
    });
    btnClose.addEventListener("click", () => {
        closeMenu(navMenu, "nav_active");
    });
    navOverlay.addEventListener("click", () => {
        closeMenu(navMenu, "nav_active");
    });

    function openMenu(menu, active) {
        menu.classList.add(active);
        body.style.overflowY = "hidden";
    }

    function closeMenu(menu, active) {
        menu.classList.remove(active);
        body.style.overflowY = "";
    }

    // Smooth scroll
    let navLinks = document.querySelectorAll(".header__nav a"),
        footerLinks = document.querySelectorAll(".footer__about a");

    navLinks.forEach(item => {
        item.addEventListener("click", () => {
            closeMenu(navMenu, "nav_active");
        });
    });

    for (const link of navLinks) {
        link.addEventListener("click", clickHandler);
    }

    for (const link of footerLinks) {
        link.addEventListener("click", clickHandler);
    }

    function clickHandler(e) {
        e.preventDefault();
        const href = this.getAttribute("href");
        const offsetTop = document.querySelector(href).offsetTop;

        scroll({
            top: offsetTop,
            behavior: "smooth"
        });
    }

    // Sticky header
    window.onscroll = function() {
        myFunction()
    };

    let header = document.getElementById("header");
    let sticky = header.offsetTop;

    function myFunction() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }
});