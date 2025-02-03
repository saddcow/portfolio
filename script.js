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
        speed = 1000;
        isDeleting = true;
    } else if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % words.length;
        speed = 500;
    }

    setTimeout(typingEffect, speed);
}

document.addEventListener("DOMContentLoaded", typingEffect);

// Smooth Scrolling
window.addEventListener('load', function () {
    // Initialize AOS (Animate on Scroll) after the page is fully loaded
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: false,
        offset: 200,
    });

    // Add smooth scroll functionality to anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            // Add a small delay before scrolling
            setTimeout(() => {
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            }, 200); // Adjust the delay in milliseconds as needed
        });
    });
});

// Get the current year and display it
const currentYear = new Date().getFullYear();
document.getElementById('current-year').textContent = currentYear;
