// ==============================
// Typing Animation
// ==============================

const text = [
    "Full Stack Developer",
    "MERN Stack Developer",
    "AI & DS Graduate"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {

    if (count === text.length) {
        count = 0;
    }

    currentText = text[count];
    letter = currentText.slice(0, ++index);

    document.getElementById("typing").textContent = letter;

    if (letter.length === currentText.length) {

        setTimeout(() => {

            erase();

        }, 1500);

        return;
    }

    setTimeout(type, 100);

})();

function erase() {

    letter = currentText.slice(0, --index);

    document.getElementById("typing").textContent = letter;

    if (letter.length === 0) {

        count++;

        setTimeout(type, 300);

        return;
    }

    setTimeout(erase, 50);

}

// ==============================
// Reveal Animation on Scroll
// ==============================

const cards = document.querySelectorAll(".card");

function revealCards() {

    const trigger = window.innerHeight * 0.85;

    cards.forEach(card => {

        const top = card.getBoundingClientRect().top;

        if (top < trigger) {

            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        }

    });

}

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "0.7s ease";

});

window.addEventListener("scroll", revealCards);

revealCards();

// ==============================
// Active Navbar Link
// ==============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ==============================
// Navbar Background on Scroll
// ==============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "#0f172a";
        header.style.boxShadow = "0 10px 25px rgba(0,0,0,.4)";

    }

    else {

        header.style.background = "#111827";
        header.style.boxShadow = "none";

    }

});

// ==============================
// Smooth Scroll
// ==============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior: "smooth"

        });

    });

});