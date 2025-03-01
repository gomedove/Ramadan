// Create and animate moving emojis (crescent moons and hearts)
function createEmoji(type) {
    const emoji = document.createElement('div');
    emoji.className = `emoji ${type}`;
    emoji.innerHTML = type === 'crescent-moon' ? '🌙' : '🤍';
    emoji.style.left = Math.random() * 100 + 'vw';
    emoji.style.top = Math.random() * 100 + 'vh';
    emoji.style.animationDelay = Math.random() * 2 + 's';
    document.body.appendChild(emoji);

    // Remove emoji after animation
    emoji.addEventListener('animationend', () => emoji.remove());
}

// Generate random emojis every 2 seconds
setInterval(() => {
    const types = ['crescent-moon', 'heart'];
    const randomType = types[Math.floor(Math.random() * types.length)];
    createEmoji(randomType);
}, 2000);
