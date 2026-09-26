const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});
const themeToggle = document.getElementById("themeToggle");

// Check if a theme was already saved
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    document.body.classList.add("light-mode");
    themeToggle.textContent = "🌙";
}

themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themeToggle.textContent = "🌙";
        localStorage.setItem("theme", "light");
    } else {
        themeToggle.textContent = "☀️";
        localStorage.setItem("theme", "dark");
    }

});
const typingText = document.getElementById("typing-text");

const roles = [
    "Computer Engineering Student",
    "Web Developer",
    "Full-Stack Developer",
    "Problem Solver"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (isDeleting) {
        typingText.textContent = currentRole.substring(0, charIndex);
        charIndex--;
    } else {
        typingText.textContent = currentRole.substring(0, charIndex);
        charIndex++;
    }

    if (!isDeleting && charIndex > currentRole.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1500);
        return;
    }

    if (isDeleting && charIndex < 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        charIndex = 0;
    }

    setTimeout(typeEffect, isDeleting ? 60 : 100);
}

typeEffect();