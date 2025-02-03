// Typing Effect
const words = ["Developer", "Designer"];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function typingEffect() {
    const element = document.querySelector(".typing-text");

    if (!isDeleting && j < words[i].length) {
        currentWord += words[i][j];
        j++;
    } else if (isDeleting && j > 0) {
        currentWord = currentWord.slice(0, -1);
        j--;
    }

    element.innerHTML = currentWord;

    let speed = isDeleting ? 100 : 200;

    if (!isDeleting && j === words[i].length) {
        speed = 1000; // pause before deleting
        isDeleting = true;
    } else if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % words.length; // switch to the next word
        speed = 500;
    }

    setTimeout(typingEffect, speed);
}

document.addEventListener("DOMContentLoaded", typingEffect);

// Smooth Scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();  // Prevent the default anchor behavior
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.addEventListener('load', function () {
    // Initialize AOS with optimal settings
    AOS.init({
        duration: 1000,  // Smooth animations
        easing: 'ease-in-out',
        once: false,  // Play animation only once
        offset: 200,  // Trigger when 200px from viewport
    });

    // Remove unnecessary AOS.refresh() calls on scroll
});

// Get the current year
const currentYear = new Date().getFullYear();

// Set the current year in the span with the ID 'current-year'
document.getElementById('current-year').textContent = currentYear;