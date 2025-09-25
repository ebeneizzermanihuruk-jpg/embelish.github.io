// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    const codeInput = document.getElementById('codeInput');
    const page2Link = document.getElementById('page2Link');
    const correctCode = 'ask TK';

    codeInput.addEventListener('input', () => {
        if (codeInput.value === correctCode) {
            page2Link.style.pointerEvents = 'auto';
            page2Link.style.color = 'blue';
        } else {
            page2Link.style.pointerEvents = 'none';
            page2Link.style.color = 'gray';
        }
    });

    // Create falling leaves
    const leafColors = [
        'linear-gradient(135deg, #FF8C00, #FF4500)', // mainly autumn orange shades
        'linear-gradient(135deg, #FFA500, #FF7F50)', // autumn orange
        'linear-gradient(135deg, #FF6347, #FF4500)', // another autumn orange
    ];

    function createLeaf() {
        const leaf = document.createElement('div');
        leaf.classList.add('falling-leaf');
        leaf.style.left = Math.random() * window.innerWidth + 'px';
        leaf.style.background = leafColors[Math.floor(Math.random() * leafColors.length)];
        leaf.style.animationDuration = (7 + Math.random() * 5) + 's';
        leaf.style.animationDelay = Math.random() * 10 + 's';
        document.body.appendChild(leaf);

        // Remove leaf after animation
        setTimeout(() => {
            leaf.remove();
        }, 15000);
    }

    // Create leaves periodically
    setInterval(createLeaf, 700);
});
