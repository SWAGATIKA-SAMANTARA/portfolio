const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector("nav");




menuBtn.addEventListener("click", function () {

    nav.classList.toggle("active");

});




const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        nav.classList.remove("active");

    });

});




const revealTargets = document.querySelectorAll(".reveal, .reveal-stagger");

const revealObserver = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("in-view");

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15,
        rootMargin: "0px 0px -60px 0px"
    }
);

revealTargets.forEach(function (target) {

    revealObserver.observe(target);

});




const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {

    if (window.scrollY > 10) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});