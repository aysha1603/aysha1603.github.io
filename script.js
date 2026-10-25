
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
