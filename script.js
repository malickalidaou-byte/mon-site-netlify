document.getElementById('clickMe').addEventListener('click', function() {
    const result = document.getElementById('result');
    const messages = [
        'Bravo ! 🎉',
        'Tu as cliqué ! 👍',
        'Super action ! ✨',
        'Bien joué ! 🚀',
        'Amazing ! 🔥'
    ];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    result.textContent = randomMessage;
    result.style.animation = 'none';
    setTimeout(() => {
        result.style.animation = 'fadeIn 0.5s ease';
    }, 10);
});

const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }
    #result {
        animation: fadeIn 0.5s ease;
    }
`;
document.head.appendChild(style);