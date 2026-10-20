
// ===== TYPING ANIMATION =====

const roles = [
    "Computer Science Student",
    "Java Programmer",
    "Python Developer",
    "AI & ML Enthusiast",
    "Web Development Learner"
];

const typing = document.getElementById("typing");

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
    if (!typing) return;

    const currentRole = roles[roleIndex];

    typing.textContent = currentRole.substring(0, charIndex);

    if (!deleting) {
        charIndex++;

        if (charIndex > currentRole.length) {
            deleting = true;
            setTimeout(typeEffect, 1300);
            return;
        }
    } else {
        charIndex--;

        if (charIndex < 0) {
            charIndex = 0;
            deleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }
    }

    setTimeout(typeEffect, deleting ? 45 : 85);
}

typeEffect();


// ===== MOBILE NAVIGATION =====

const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
    const isOpen = navbar.classList.toggle("show");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.textContent = isOpen ? "✕" : "☰";
});

document.querySelectorAll("#navbar a").forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("show");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    });
});


// ===== ACTIVE NAVIGATION =====

const navLinks = document.querySelectorAll("#navbar a");
const sections = document.querySelectorAll("main section[id]");

function updateNavigation() {
    let currentSection = "home";

    sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 160) {
            currentSection = section.id;
        }
    });

    navLinks.forEach(link => {
        link.classList.toggle(
            "active",
            link.getAttribute("href") === "#" + currentSection
        );
    });
}

window.addEventListener("scroll", updateNavigation);
updateNavigation();


// ===== PROJECT DETAILS =====

document.querySelectorAll(".details-btn").forEach(button => {
    button.addEventListener("click", () => {
        const card = button.closest(".project-box");
        const isOpen = card.classList.toggle("open");

        button.setAttribute("aria-expanded", isOpen);
        button.innerHTML = isOpen
            ? 'Show Less <span>−</span>'
            : 'View Details <span>＋</span>';
    });
});


// ===== BACK TO TOP =====

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
    topBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// ===== CONTACT FORM VALIDATION =====

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !message) {
        alert("Please fill in all the fields.");
        return;
    }

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    alert("Thank you, " + name + "! Your message has been validated.");

    contactForm.reset();
});


// ===== AUTOMATIC COPYRIGHT YEAR =====

document.getElementById("year").textContent =
    new Date().getFullYear();


// ===== CONSOLE MESSAGE =====

console.log("Welcome to Sathanapriya's Portfolio!");
