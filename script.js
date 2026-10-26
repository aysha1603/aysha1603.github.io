
const typingElement = document.getElementById("typing-text");

if (typingElement) {
    const words = [
        "Aspiring Software Engineer",
        "Software Testing Enthusiast",
        "Data Analytics Enthusiast",
        "AI Enthusiast"
    ];

    let wordIndex = 0;
    let characterIndex = 0;
    let deleting = false;

    function typeEffect() {
        const currentWord = words[wordIndex];

        if (deleting) {
            characterIndex--;
        } else {
            characterIndex++;
        }

        typingElement.textContent =
            currentWord.substring(0, characterIndex);

        let delay = deleting ? 45 : 90;

        if (!deleting && characterIndex === currentWord.length) {
            deleting = true;
            delay = 1200;
        } else if (deleting && characterIndex === 0) {
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            delay = 350;
        }

        setTimeout(typeEffect, delay);
    }

    typeEffect();
}

/* ===== Scroll Reveal Animation ===== */

document.addEventListener("DOMContentLoaded", function () {
    const revealElements = document.querySelectorAll(
        "section, .project-card, .skill-card"
    );

    // Add the reveal class to the selected elements
    revealElements.forEach(function (element) {
        element.classList.add("reveal");
    });

    // Reveal elements when they enter the screen
    const observer = new IntersectionObserver(
        function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.15
        }
    );

    revealElements.forEach(function (element) {
        observer.observe(element);
    });
});
