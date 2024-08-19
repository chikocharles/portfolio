function runTypingEffect() {
    const texts = ["It's me, Chiko."]; // Add more text if needed
    const typingElement = document.getElementById('typing-text');
    const typingDelay = 170; // Adjust the delay between iterations

    let index = 0;

    function typeNextText() {
        const text = texts[index];
        let charIndex = 0;

        function typeCharacter() {
            if (charIndex < text.length) {
                typingElement.textContent += text.charAt(charIndex);
                charIndex++;
                setTimeout(typeCharacter, typingDelay);
            } else {
                setTimeout(eraseText, typingDelay * 2); // Wait before erasing text
            }
        }

        typeCharacter();
    }

    function eraseText() {
        const text = typingElement.textContent;
        if (text.length > 0) {
            typingElement.textContent = text.slice(0, -1);
            setTimeout(eraseText, typingDelay / 2);
        } else {
            index = (index + 1) % texts.length; // Move to the next text
            setTimeout(typeNextText, typingDelay / 2);
        }
    }

    typeNextText();
}

document.addEventListener('DOMContentLoaded', runTypingEffect);
